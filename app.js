// app.js
// Depends on the globals defined in data.js (TIME_STARTS, TIME_ENDS, DAYS,
// COURSES, DEPT_COLORS, CATEGORIES). Load data.js before this file.

// ---- State -----------------------------------------------------------
let selected = new Set(JSON.parse(localStorage.getItem('scheduleSelection') || '[]'));
let openDepts = new Set();
let openCategories = new Set();

function saveSelection() {
  localStorage.setItem('scheduleSelection', JSON.stringify([...selected]));
}

// ---- Helpers -----------------------------------------------------------
function groupByDept() {
  const g = {};
  COURSES.forEach(c => { if (!g[c.dept]) g[c.dept] = []; g[c.dept].push(c); });
  return g;
}

function assignLanes(dayCourses) {
  // Packs non-overlapping courses into as few side-by-side lanes as possible.
  const sorted = [...dayCourses].sort((a, b) => (a.start - b.start) || ((b.end - b.start) - (a.end - a.start)));
  const lanes = [];
  const assignment = new Map();
  for (const c of sorted) {
    let placed = false;
    for (let l = 0; l < lanes.length; l++) {
      if (lanes[l] <= c.start) {
        assignment.set(c.id, l);
        lanes[l] = c.end;
        placed = true;
        break;
      }
    }
    if (!placed) {
      assignment.set(c.id, lanes.length);
      lanes.push(c.end);
    }
  }
  return { assignment, numLanes: lanes.length };
}

// ---- Rendering: schedule grid -----------------------------------------
function makeCardHTML(course) {
  const col = DEPT_COLORS[course.dept] || { accent: '#aaa', bg: 'rgba(170,170,170,.08)', border: 'rgba(170,170,170,.3)' };
  const isLecture = course.type === 'P';
  const cardClass = isLecture ? 'card-lecture' : 'card-seminar';
  const tagClass = isLecture ? 'tag-lecture' : 'tag-seminar';
  const tagLabel = isLecture ? '▪ prednaska' : '◦ cviko';
  const cardStyle = `background:${col.bg};border-color:${col.border};border-left-color:${col.accent};`;
  const stripe = isLecture ? `<div class="top-stripe" style="background:${col.accent}"></div>` : '';

  return `<div class="event-card ${cardClass}" style="${cardStyle}" onclick="removeCourse('${course.id}')" title="Click to remove">
    ${stripe}
    <span class="card-top-tag ${tagClass}">${tagLabel}</span>
    <div class="event-code" style="color:${col.accent}">${course.code}</div>
    <div class="event-room">${course.room} · ${course.teacher}</div>
  </div>`;
}

function renderGrid() {
  const grid = document.getElementById('scheduleGrid');
  const sel = COURSES.filter(c => selected.has(c.id));

  if (!sel.length) {
    grid.innerHTML = `<div class="empty-schedule"><div class="empty-icon">📅</div><div class="empty-text">select courses from the sidebar</div></div>`;
    return;
  }

  const N = TIME_STARTS.length;
  const colTemplate = `52px repeat(${N}, minmax(60px,1fr))`;
  let html = `<div class="schedule-grid" style="grid-template-columns:${colTemplate}">`;
  html += `<div class="grid-header"></div>`;
  TIME_STARTS.forEach(t => { html += `<div class="grid-header">${t}</div>`; });

  DAYS.forEach(day => {
    const dayCourses = sel.filter(c => c.day === day);
    if (!dayCourses.length) {
      html += `<div class="day-label">${day}</div>`;
      for (let i = 0; i < N; i++) html += `<div class="time-cell"></div>`;
      return;
    }

    const { assignment, numLanes } = assignLanes(dayCourses);
    html += `<div class="day-label" style="grid-row:span ${numLanes}">${day}</div>`;

    for (let lane = 0; lane < numLanes; lane++) {
      const laneCourses = dayCourses.filter(c => assignment.get(c.id) === lane)
        .sort((a, b) => a.start - b.start);
      let si = 0;
      while (si < N) {
        const course = laneCourses.find(c => c.start === si);
        if (course) {
          const span = course.end - course.start;
          html += `<div class="time-cell" style="grid-column:span ${span}">${makeCardHTML(course)}</div>`;
          si += span;
        } else {
          const next = laneCourses.find(c => c.start > si);
          const nextStart = next ? next.start : N;
          for (let k = 0; k < nextStart - si; k++) html += `<div class="time-cell"></div>`;
          si = nextStart;
        }
      }
    }
  });

  html += `</div>`;
  grid.innerHTML = html;
}

// ---- Selection actions ---------------------------------------------------
function removeCourse(id) { selected.delete(id); saveSelection(); render(); }
function clearAll() { selected.clear(); saveSelection(); render(); }

function renderStats() {
  document.getElementById('selectedCount').textContent = selected.size + ' selected';
}

// ---- Rendering: sidebar ---------------------------------------------------
function renderDeptAccordion(dept, courses, filter, container) {
  const filtered = courses.filter(c =>
    !filter ||
    c.code.toLowerCase().includes(filter) ||
    c.teacher.toLowerCase().includes(filter) ||
    dept.toLowerCase().includes(filter)
  );
  if (!filtered.length) return;

  const col = DEPT_COLORS[dept] || { accent: '#aaa' };
  const selCount = filtered.filter(c => selected.has(c.id)).length;
  const isOpen = openDepts.has(dept) || !!filter;

  const wrap = document.createElement('div');
  wrap.className = 'dept-accordion';

  const subjectName = filtered[0].name || '';

  const trigger = document.createElement('button');
  trigger.className = 'dept-trigger' + (isOpen ? ' open' : '');
  trigger.innerHTML = `<div class="dept-dot" style="background:${col.accent}"></div><div class="dept-name-wrap"><span class="dept-name">${dept}</span>${isOpen && subjectName ? `<span class="dept-fullname">${subjectName}</span>` : ''}</div><span class="dept-badge ${selCount ? 'has-selected' : ''}">${selCount}/${filtered.length}</span><span class="chevron">▼</span>`;
  trigger.onclick = () => {
    if (openDepts.has(dept)) openDepts.delete(dept); else openDepts.add(dept);
    renderSidebar(document.getElementById('searchInput').value.toLowerCase().trim());
  };
  wrap.appendChild(trigger);

  const body = document.createElement('div');
  body.className = 'dept-body' + (isOpen ? ' open' : '');

  const addSection = (items, label, dotClass) => {
    if (!items.length) return;
    const sec = document.createElement('div');
    sec.className = 'type-section-label';
    sec.style.color = label === 'přednáška' ? 'var(--accent3)' : 'var(--accent)';
    sec.innerHTML = `<div class="${dotClass}"></div>${label}`;
    body.appendChild(sec);

    items.forEach(c => {
      const item = document.createElement('div');
      item.className = 'course-item' + (selected.has(c.id) ? ' selected' : '');
      item.style.borderLeftColor = selected.has(c.id) ? col.accent : 'transparent';

      const endFormatted = TIME_ENDS[c.end - 1] || '~';
      item.innerHTML = `<div class="course-code" style="color:${col.accent}">${c.code}</div><div class="course-meta"><span>${c.day} · ${TIME_STARTS[c.start]}–${endFormatted}</span><span>· ${c.room} · ${c.teacher}</span></div>`;
      item.onclick = () => {
        if (selected.has(c.id)) selected.delete(c.id); else selected.add(c.id);
        saveSelection();
        render();
      };
      body.appendChild(item);
    });
  };

  addSection(filtered.filter(c => c.type === 'P'), 'přednáška', 'type-dot-lec');
  addSection(filtered.filter(c => c.type === 'C'), 'cviko', 'type-dot-sem');

  wrap.appendChild(body);
  container.appendChild(wrap);
}

function renderSidebar(filter = '') {
  const groups = groupByDept();
  const list = document.getElementById('courseList');
  list.innerHTML = '';

  Object.entries(CATEGORIES).forEach(([catName, depts]) => {
    let catTotal = 0, catSelected = 0;
    depts.forEach(dept => {
      const courses = groups[dept] || [];
      const filtered = courses.filter(c =>
        !filter ||
        c.code.toLowerCase().includes(filter) ||
        c.teacher.toLowerCase().includes(filter) ||
        dept.toLowerCase().includes(filter)
      );
      catTotal += filtered.length;
      catSelected += filtered.filter(c => selected.has(c.id)).length;
    });
    if (!catTotal) return;

    const isOpen = openCategories.has(catName) || !!filter;
    const catWrap = document.createElement('div');
    catWrap.className = 'category-accordion';

    const catTrigger = document.createElement('button');
    catTrigger.className = 'category-trigger' + (isOpen ? ' open' : '');
    catTrigger.innerHTML = `<span class="category-name">${catName}</span><span class="dept-badge ${catSelected ? 'has-selected' : ''}">${catSelected}/${catTotal}</span><span class="chevron">▼</span>`;
    catTrigger.onclick = () => {
      if (openCategories.has(catName)) openCategories.delete(catName); else openCategories.add(catName);
      renderSidebar(document.getElementById('searchInput').value.toLowerCase().trim());
    };
    catWrap.appendChild(catTrigger);

    const catBody = document.createElement('div');
    catBody.className = 'category-body' + (isOpen ? ' open' : '');
    depts.forEach(dept => renderDeptAccordion(dept, groups[dept] || [], filter, catBody));
    catWrap.appendChild(catBody);

    list.appendChild(catWrap);
  });
}

// ---- Top-level render + init ---------------------------------------------
function render(filter) {
  if (filter === undefined) filter = document.getElementById('searchInput').value.toLowerCase().trim();
  renderSidebar(filter);
  renderGrid();
  renderStats();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', e => render(e.target.value.toLowerCase().trim()));
  render('');
});
