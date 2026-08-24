const TIME_STARTS = ['7:25','8:15','9:05','9:55','10:45','11:35','12:25','13:15','14:05','14:55','15:45','16:35','17:25','18:15','19:05','19:55'];
const TIME_ENDS = ['8:10','9:00','9:50','10:40','11:30','12:20','13:10','14:00','14:50','15:40','16:30','17:20','18:10','19:00','19:50','20:40'];
const DAYS = ['Mon','Tue','Wed','Thu'];

const COURSES = [
  // KIKM/DBS
  {id:'KIKM_DBS_C13',dept:'KIKM/DBS',code:'KIKM/DBS-C/13',name:'Databázové systémy I',type:'C',teacher:'Vondra',day:'Tue',start:1,end:3,room:'J23'},
  {id:'KIKM_DBS_C11',dept:'KIKM/DBS',code:'KIKM/DBS-C/11',name:'Databázové systémy I',type:'C',teacher:'VAP',day:'Tue',start:1,end:3,room:'J22'},

  {id:'KIKM_DBS_C12',dept:'KIKM/DBS',code:'KIKM/DBS-C/12',name:'Databázové systémy I',type:'C',teacher:'Vondra',day:'Wed',start:13,end:15,room:'J22'},
  {id:'KIKM_DBS_C06',dept:'KIKM/DBS',code:'KIKM/DBS-C/06',name:'Databázové systémy I',type:'C',teacher:'LNM',day:'Wed',start:13,end:15,room:'J23'},
  {id:'KIKM_DBS_C05',dept:'KIKM/DBS',code:'KIKM/DBS-C/05',name:'Databázové systémy I',type:'C',teacher:'LNM',day:'Wed',start:4,end:6,room:'J10'},
  {id:'KIKM_DBS_C02',dept:'KIKM/DBS',code:'KIKM/DBS-C/02',name:'Databázové systémy I',type:'C',teacher:'LNM',day:'Wed',start:6,end:8,room:'J10'},
  {id:'KIKM_DBS_C04',dept:'KIKM/DBS',code:'KIKM/DBS-C/04',name:'Databázové systémy I',type:'C',teacher:'LNM',day:'Wed',start:9,end:11,room:'J23'},
  {id:'KIKM_DBS_C03',dept:'KIKM/DBS',code:'KIKM/DBS-C/03',name:'Databázové systémy I',type:'C',teacher:'LNM',day:'Wed',start:11,end:13,room:'J23'},
  {id:'KIKM_DBS_C01',dept:'KIKM/DBS',code:'KIKM/DBS-C/01',name:'Databázové systémy I',type:'C',teacher:'Borkovcová',day:'Wed',start:13,end:15,room:'J21'},

  {id:'KIKM_DBS_C14',dept:'KIKM/DBS',code:'KIKM/DBS-C/14',name:'Databázové systémy I',type:'C',teacher:'Poulová',day:'Thu',start:3,end:5,room:'J20'},
  {id:'KIKM_DBS_C10',dept:'KIKM/DBS',code:'KIKM/DBS-C/10',name:'Databázové systémy I',type:'C',teacher:'VEL',day:'Thu',start:7,end:9,room:'J22'},
  {id:'KIKM_DBS_C09',dept:'KIKM/DBS',code:'KIKM/DBS-C/09',name:'Databázové systémy I',type:'C',teacher:'VEL',day:'Thu',start:9,end:11,room:'J8'},
  {id:'KIKM_DBS_C08',dept:'KIKM/DBS',code:'KIKM/DBS-C/08',name:'Databázové systémy I',type:'C',teacher:'VEL',day:'Thu',start:12,end:14,room:'J23'},
  {id:'KIKM_DBS_P01',dept:'KIKM/DBS',code:'KIKM/DBS-P/01',name:'Databázové systémy I',type:'P',teacher:'Poulová',day:'Thu',start:5,end:7,room:'J1'},
  {id:'KIKM_DBS_C07',dept:'KIKM/DBS',code:'KIKM/DBS-C/07',name:'Databázové systémy I',type:'C',teacher:'TEB',day:'Thu',start:12,end:14,room:'J22'},

  // KIT/DSFA
  {id:'KIT_DSFA_C03',dept:'KIT/DSFA',code:'KIT/DSFA-C/03',name:'Dohledové systémy a forenzní analýza',type:'C',teacher:'Almer',day:'Tue',start:12,end:14,room:'J7'},
  {id:'KIT_DSFA_C04',dept:'KIT/DSFA',code:'KIT/DSFA-C/04',name:'Dohledové systémy a forenzní analýza',type:'C',teacher:'Almer',day:'Tue',start:14,end:16,room:'J7'},

  {id:'KIT_DSFA_P01',dept:'KIT/DSFA',code:'KIT/DSFA-P/01',name:'Dohledové systémy a forenzní analýza',type:'P',teacher:'Almer',day:'Wed',start:10,end:12,room:'J7'},
  {id:'KIT_DSFA_C01',dept:'KIT/DSFA',code:'KIT/DSFA-C/01',name:'Dohledové systémy a forenzní analýza',type:'C',teacher:'Almer',day:'Wed',start:12,end:14,room:'J7'},
  {id:'KIT_DSFA_C02',dept:'KIT/DSFA',code:'KIT/DSFA-C/02',name:'Dohledové systémy a forenzní analýza',type:'C',teacher:'Almer',day:'Wed',start:14,end:16,room:'J7'},

  // KAL/OA1
  {id:'KAL_OA1_C12',dept:'KAL/OA1',code:'KAL/OA1-C/12',name:'Odborný anglický jazyk I',type:'C',teacher:'Zumrová',day:'Mon',start:1,end:3,room:'J27'},
  {id:'KAL_OA1_C10',dept:'KAL/OA1',code:'KAL/OA1-C/10',name:'Odborný anglický jazyk I',type:'C',teacher:'Zumrová',day:'Mon',start:3,end:5,room:'J27'},
  {id:'KAL_OA1_C09',dept:'KAL/OA1',code:'KAL/OA1-C/09',name:'Odborný anglický jazyk I',type:'C',teacher:'Zumrová',day:'Mon',start:5,end:7,room:'J27'},
  {id:'KAL_OA1_C11',dept:'KAL/OA1',code:'KAL/OA1-C/11',name:'Odborný anglický jazyk I',type:'C',teacher:'Zumrová',day:'Mon',start:7,end:9,room:'A203'},
  {id:'KAL_OA1_C13',dept:'KAL/OA1',code:'KAL/OA1-C/13',name:'Odborný anglický jazyk I',type:'C',teacher:'Zumrová',day:'Mon',start:9,end:11,room:'A203'},
  {id:'KAL_OA1_C08',dept:'KAL/OA1',code:'KAL/OA1-C/08',name:'Odborný anglický jazyk I',type:'C',teacher:'White',day:'Mon',start:6,end:8,room:'J28'},
  {id:'KAL_OA1_C01',dept:'KAL/OA1',code:'KAL/OA1-C/01',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Mon',start:2,end:4,room:'A203'},
  {id:'KAL_OA1_C06',dept:'KAL/OA1',code:'KAL/OA1-C/06',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Mon',start:4,end:6,room:'J3'},
  {id:'KAL_OA1_C03',dept:'KAL/OA1',code:'KAL/OA1-C/03',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Mon',start:6,end:8,room:'J3'},

  {id:'KAL_OA1_C05',dept:'KAL/OA1',code:'KAL/OA1-C/05',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Tue',start:4,end:6,room:'J6'},
  {id:'KAL_OA1_C07',dept:'KAL/OA1',code:'KAL/OA1-C/07',name:'Odborný anglický jazyk I',type:'C',teacher:'White',day:'Tue',start:9,end:11,room:'J6'},

  {id:'KAL_OA1_C04',dept:'KAL/OA1',code:'KAL/OA1-C/04',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Wed',start:6,end:8,room:'A203'},
  {id:'KAL_OA1_C02',dept:'KAL/OA1',code:'KAL/OA1-C/02',name:'Odborný anglický jazyk I',type:'C',teacher:'Zálišová',day:'Wed',start:8,end:10,room:'A203'},

  // KIT/PSIT1
  {id:'KIT_PSIT1_C12',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/12',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Mon',start:5,end:7,room:'J22'},
  {id:'KIT_PSIT1_C05',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/05',name:'Počítačové sítě I',type:'C',teacher:'MLS',day:'Mon',start:2,end:4,room:'J21'},
  {id:'KIT_PSIT1_C06',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/06',name:'Počítačové sítě I',type:'C',teacher:'MLS',day:'Mon',start:4,end:6,room:'J21'},
  {id:'KIT_PSIT1_C11',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/11',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Mon',start:11,end:13,room:'J20'},
  {id:'KIT_PSIT1_C09',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/09',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Mon',start:13,end:15,room:'J22'},

  {id:'KIT_PSIT1_C02',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/02',name:'Počítačové sítě I',type:'C',teacher:'Milanov',day:'Tue',start:6,end:8,room:'J20'},
  {id:'KIT_PSIT1_C03',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/03',name:'Počítačové sítě I',type:'C',teacher:'Milanov',day:'Tue',start:8,end:10,room:'J20'},
  {id:'KIT_PSIT1_C04',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/04',name:'Počítačové sítě I',type:'C',teacher:'Milanov',day:'Tue',start:10,end:12,room:'J20'},
  {id:'KIT_PSIT1_C10',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/10',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Tue',start:12,end:14,room:'J21'},
  {id:'KIT_PSIT1_C01',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/01',name:'Počítačové sítě I',type:'C',teacher:'MIP',day:'Tue',start:7,end:9,room:'J9'},

  {id:'KIT_PSIT1_C14',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/14',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Wed',start:5,end:7,room:'J9'},
  {id:'KIT_PSIT1_P01',dept:'KIT/PSIT1',code:'KIT/PSIT1-P/01',name:'Počítačové sítě I',type:'P',teacher:'NEZ',day:'Wed',start:2,end:4,room:'J1'},
  {id:'KIT_PSIT1_C08',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/08',name:'Počítačové sítě I',type:'C',teacher:'NEZ',day:'Wed',start:4,end:6,room:'J22'},
  {id:'KIT_PSIT1_C07',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/07',name:'Počítačové sítě I',type:'C',teacher:'NEZ',day:'Wed',start:6,end:8,room:'J22'},
  {id:'KIT_PSIT1_C13',dept:'KIT/PSIT1',code:'KIT/PSIT1-C/13',name:'Počítačové sítě I',type:'C',teacher:'Urbaník',day:'Wed',start:11,end:13,room:'J9'},

  // KIT/RBI
  {id:'KIT_RBI_P01',dept:'KIT/RBI',code:'KIT/RBI-P/01',name:'Řízení bezpečnosti informací',type:'P',teacher:'Horálek',day:'Tue',start:3,end:5,room:'J12'},
  {id:'KIT_RBI_C01',dept:'KIT/RBI',code:'KIT/RBI-C/01',name:'Řízení bezpečnosti informací',type:'C',teacher:'Horálek',day:'Tue',start:5,end:6,room:'J10'},
  {id:'KIT_RBI_C03',dept:'KIT/RBI',code:'KIT/RBI-C/03',name:'Řízení bezpečnosti informací',type:'C',teacher:'Horálek',day:'Tue',start:6,end:7,room:'J10'},
  {id:'KIT_RBI_C02',dept:'KIT/RBI',code:'KIT/RBI-C/02',name:'Řízení bezpečnosti informací',type:'C',teacher:'Horálek',day:'Tue',start:7,end:8,room:'J10'},

  // KIKM/ZKZBS
  {id:'KIKM_ZKZBS_P01',dept:'KIKM/ZKZBS',code:'KIKM/ZKZBS-P/01',name:'Základy kryptografie a zabezpečení systémů',type:'P',teacher:'Medková',day:'Mon',start:4,end:6,room:'J13'},
  {id:'KIKM_ZKZBS_C01',dept:'KIKM/ZKZBS',code:'KIKM/ZKZBS-C/01',name:'Základy kryptografie a zabezpečení systémů',type:'C',teacher:'Medková',day:'Mon',start:6,end:8,room:'J21'},
  {id:'KIKM_ZKZBS_C02',dept:'KIKM/ZKZBS',code:'KIKM/ZKZBS-C/02',name:'Základy kryptografie a zabezpečení systémů',type:'C',teacher:'Medková',day:'Mon',start:8,end:10,room:'J21'},

  {id:'KIKM_ZKZBS_C03',dept:'KIKM/ZKZBS',code:'KIKM/ZKZBS-C/03',name:'Základy kryptografie a zabezpečení systémů',type:'C',teacher:'Medková',day:'Thu',start:1,end:3,room:'J21'},

  // KIKM/ZMI1
  {id:'KIKM_ZMI1_P01',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-P/01',name:'Základy matematiky pro informatiky',type:'P',teacher:'Bauer',day:'Mon',start:5,end:7,room:'J1'},
  {id:'KIKM_ZMI1_C09',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/09',name:'Základy matematiky pro informatiky',type:'C',teacher:'Bauer',day:'Mon',start:7,end:9,room:'J30'},
  {id:'KIKM_ZMI1_C07',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/07',name:'Základy matematiky pro informatiky',type:'C',teacher:'Bauer',day:'Mon',start:9,end:11,room:'J30'},

  {id:'KIKM_ZMI1_C01',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/01',name:'Základy matematiky pro informatiky',type:'C',teacher:'Medková',day:'Tue',start:3,end:5,room:'J31'},
  {id:'KIKM_ZMI1_C04',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/04',name:'Základy matematiky pro informatiky',type:'C',teacher:'Toman',day:'Tue',start:5,end:7,room:'A204'},

  {id:'KIKM_ZMI1_C02',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/02',name:'Základy matematiky pro informatiky',type:'C',teacher:'Medková',day:'Wed',start:2,end:4,room:'J3'},
  {id:'KIKM_ZMI1_C03',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/03',name:'Základy matematiky pro informatiky',type:'C',teacher:'Medková',day:'Wed',start:4,end:6,room:'J3'},
  {id:'KIKM_ZMI1_C08',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/08',name:'Základy matematiky pro informatiky',type:'C',teacher:'Bauer',day:'Wed',start:11,end:13,room:'J31'},

  {id:'KIKM_ZMI1_C06',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/06',name:'Základy matematiky pro informatiky',type:'C',teacher:'Toman',day:'Thu',start:8,end:10,room:'J30'},
  {id:'KIKM_ZMI1_C05',dept:'KIKM/ZMI1',code:'KIKM/ZMI1-C/05',name:'Základy matematiky pro informatiky',type:'C',teacher:'Toman',day:'Thu',start:10,end:12,room:'J30'},

  // KE/MIEK1
  {id:'KE_MIEK1_C04',dept:'KE/MIEK1',code:'KE/MIEK1-C/04',name:'Mikroekonomie 1',type:'C',teacher:'KRA',day:'Mon',start:8,end:10,room:'J28'},
  {id:'KE_MIEK1_C13',dept:'KE/MIEK1',code:'KE/MIEK1-C/13',name:'Mikroekonomie 1',type:'C',teacher:'HOR',day:'Mon',start:10,end:12,room:'J27'},
  {id:'KE_MIEK1_C06',dept:'KE/MIEK1',code:'KE/MIEK1-C/06',name:'Mikroekonomie 1',type:'C',teacher:'KRA',day:'Mon',start:10,end:12,room:'J28'},

  {id:'KE_MIEK1_P02',dept:'KE/MIEK1',code:'KE/MIEK1-P/02',name:'Mikroekonomie 1',type:'P',teacher:'HED',day:'Tue',start:5,end:7,room:'J1'},
  {id:'KE_MIEK1_C03',dept:'KE/MIEK1',code:'KE/MIEK1-C/03',name:'Mikroekonomie 1',type:'C',teacher:'HED',day:'Tue',start:7,end:9,room:'J27'},

  {id:'KE_MIEK1_C08',dept:'KE/MIEK1',code:'KE/MIEK1-C/08',name:'Mikroekonomie 1',type:'C',teacher:'VYCH',day:'Wed',start:7,end:9,room:'J28'},
  {id:'KE_MIEK1_C10',dept:'KE/MIEK1',code:'KE/MIEK1-C/10',name:'Mikroekonomie 1',type:'C',teacher:'VYCH',day:'Wed',start:12,end:14,room:'J28'},

  {id:'KE_MIEK1_P01',dept:'KE/MIEK1',code:'KE/MIEK1-P/01',name:'Mikroekonomie 1',type:'P',teacher:'REZ',day:'Thu',start:1,end:3,room:'J1'},
  {id:'KE_MIEK1_C07',dept:'KE/MIEK1',code:'KE/MIEK1-C/07',name:'Mikroekonomie 1',type:'C',teacher:'KRA',day:'Thu',start:3,end:5,room:'J26'},
  {id:'KE_MIEK1_C01',dept:'KE/MIEK1',code:'KE/MIEK1-C/01',name:'Mikroekonomie 1',type:'C',teacher:'HED',day:'Thu',start:3,end:5,room:'J27'},
  {id:'KE_MIEK1_C05',dept:'KE/MIEK1',code:'KE/MIEK1-C/05',name:'Mikroekonomie 1',type:'C',teacher:'KRA',day:'Thu',start:5,end:7,room:'J26'},
  {id:'KE_MIEK1_C02',dept:'KE/MIEK1',code:'KE/MIEK1-C/02',name:'Mikroekonomie 1',type:'C',teacher:'HED',day:'Thu',start:5,end:7,room:'J27'},
  {id:'KE_MIEK1_C09',dept:'KE/MIEK1',code:'KE/MIEK1-C/09',name:'Mikroekonomie 1',type:'C',teacher:'VYCH',day:'Thu',start:7,end:9,room:'J26'},
  {id:'KE_MIEK1_C11',dept:'KE/MIEK1',code:'KE/MIEK1-C/11',name:'Mikroekonomie 1',type:'C',teacher:'VYCH',day:'Thu',start:9,end:11,room:'J26'},
  {id:'KE_MIEK1_C12',dept:'KE/MIEK1',code:'KE/MIEK1-C/12',name:'Mikroekonomie 1',type:'C',teacher:'VYCH',day:'Thu',start:11,end:13,room:'J26'},

  // KM/MRKTG
  {id:'KM_MRKTG_P01',dept:'KM/MRKTG',code:'KM/MRKTG-P/01',name:'Marketing',type:'P',teacher:'HAL, XPE',day:'Tue',start:3,end:5,room:'J1'},
  {id:'KM_MRKTG_C01',dept:'KM/MRKTG',code:'KM/MRKTG-C/01',name:'Marketing',type:'C',teacher:'HAL',day:'Tue',start:5,end:6,room:'J2'},
  {id:'KM_MRKTG_C04',dept:'KM/MRKTG',code:'KM/MRKTG-C/04',name:'Marketing',type:'C',teacher:'HAL',day:'Tue',start:7,end:8,room:'J2'},
  {id:'KM_MRKTG_C02',dept:'KM/MRKTG',code:'KM/MRKTG-C/02',name:'Marketing',type:'C',teacher:'HAL',day:'Tue',start:8,end:9,room:'J2'},
  {id:'KM_MRKTG_C03',dept:'KM/MRKTG',code:'KM/MRKTG-C/03',name:'Marketing',type:'C',teacher:'HAL',day:'Tue',start:9,end:10,room:'J2'},

  {id:'KM_MRKTG_C07',dept:'KM/MRKTG',code:'KM/MRKTG-C/07',name:'Marketing',type:'C',teacher:'XPE',day:'Wed',start:4,end:5,room:'J31'},
  {id:'KM_MRKTG_C08',dept:'KM/MRKTG',code:'KM/MRKTG-C/08',name:'Marketing',type:'C',teacher:'XPE',day:'Wed',start:5,end:6,room:'J31'},
  {id:'KM_MRKTG_C05',dept:'KM/MRKTG',code:'KM/MRKTG-C/05',name:'Marketing',type:'C',teacher:'XPE',day:'Wed',start:6,end:7,room:'J31'},

  {id:'KM_MRKTG_C06',dept:'KM/MRKTG',code:'KM/MRKTG-C/06',name:'Marketing',type:'C',teacher:'XPE',day:'Thu',start:1,end:2,room:'J15'},

  // KIT/TESY2
  {id:'KIT_TESY2_P01',dept:'KIT/TESY2',code:'KIT/TESY2-P/01',name:'Teorie systémů 2',type:'P',teacher:'BUR',day:'Mon',start:1,end:2,room:'J13'},
  {id:'KIT_TESY2_C01',dept:'KIT/TESY2',code:'KIT/TESY2-C/01',name:'Teorie systémů 2',type:'C',teacher:'BUR',day:'Mon',start:2,end:4,room:'J20'},
  {id:'KIT_TESY2_C02',dept:'KIT/TESY2',code:'KIT/TESY2-C/02',name:'Teorie systémů 2',type:'C',teacher:'Zanker',day:'Mon',start:11,end:13,room:'J23'},
  {id:'KIT_TESY2_C03',dept:'KIT/TESY2',code:'KIT/TESY2-C/03',name:'Teorie systémů 2',type:'C',teacher:'Zanker',day:'Mon',start:13,end:15,room:'J23'},

  {id:'KIT_TESY2_C04',dept:'KIT/TESY2',code:'KIT/TESY2-C/04',name:'Teorie systémů 2',type:'C',teacher:'Zanker',day:'Thu',start:13,end:15,room:'J10'},

  // KIKM/ZMAT1
  {id:'KIKM_ZMAT1_P01',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-P/01',name:'Základy matematiky 1',type:'P',teacher:'HAG',day:'Mon',start:1,end:3,room:'J1'},
  {id:'KIKM_ZMAT1_C01',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/01',name:'Základy matematiky 1',type:'C',teacher:'HAG',day:'Mon',start:3,end:5,room:'J30'},
  {id:'KIKM_ZMAT1_C03',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/03',name:'Základy matematiky 1',type:'C',teacher:'HAG',day:'Mon',start:5,end:7,room:'J30'},

  {id:'KIKM_ZMAT1_C02',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/02',name:'Základy matematiky 1',type:'C',teacher:'HAG',day:'Tue',start:5,end:7,room:'J30'},

  {id:'KIKM_ZMAT1_C06',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/06',name:'Základy matematiky 1',type:'C',teacher:'ZEL',day:'Wed',start:1,end:3,room:'A204'},
  {id:'KIKM_ZMAT1_C04',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/04',name:'Základy matematiky 1',type:'C',teacher:'HAG',day:'Wed',start:1,end:3,room:'J30'},
  {id:'KIKM_ZMAT1_C07',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/07',name:'Základy matematiky 1',type:'C',teacher:'ZEL',day:'Wed',start:3,end:5,room:'A204'},
  {id:'KIKM_ZMAT1_C08',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/08',name:'Základy matematiky 1',type:'C',teacher:'ZEL',day:'Wed',start:5,end:7,room:'A204'},

  {id:'KIKM_ZMAT1_C05',dept:'KIKM/ZMAT1',code:'KIKM/ZMAT1-C/05',name:'Základy matematiky 1',type:'C',teacher:'SEV',day:'Thu',start:5,end:7,room:'J6'},

  // KIT/SYSP
  {id:'KIT_SYSP_C05',dept:'KIT/SYSP',code:'KIT/SYSP-C/05',name:'Systémové přistupy',type:'C',teacher:'Zanker',day:'Tue',start:13,end:15,room:'J20'},

  {id:'KIT_SYSP_P01',dept:'KIT/SYSP',code:'KIT/SYSP-P/01',name:'Systémové přistupy',type:'P',teacher:'Zanker',day:'Wed',start:6,end:7,room:'J1'},
  {id:'KIT_SYSP_C01',dept:'KIT/SYSP',code:'KIT/SYSP-C/01',name:'Systémové přistupy',type:'C',teacher:'NAT',day:'Wed',start:9,end:11,room:'J21'},
  {id:'KIT_SYSP_C04',dept:'KIT/SYSP',code:'KIT/SYSP-C/04',name:'Systémové přistupy',type:'C',teacher:'Zanker',day:'Wed',start:10,end:12,room:'J10'},
  {id:'KIT_SYSP_C07',dept:'KIT/SYSP',code:'KIT/SYSP-C/07',name:'Systémové přistupy',type:'C',teacher:'Zanker',day:'Wed',start:12,end:14,room:'J10'},
  {id:'KIT_SYSP_C06',dept:'KIT/SYSP',code:'KIT/SYSP-C/06',name:'Systémové přistupy',type:'C',teacher:'Zanker',day:'Wed',start:14,end:16,room:'J10'},

  {id:'KIT_SYSP_C09',dept:'KIT/SYSP',code:'KIT/SYSP-C/09',name:'Systémové přistupy',type:'C',teacher:'XDA',day:'Thu',start:5,end:7,room:'J20'},
  {id:'KIT_SYSP_C08',dept:'KIT/SYSP',code:'KIT/SYSP-C/08',name:'Systémové přistupy',type:'C',teacher:'XDA',day:'Thu',start:7,end:9,room:'J20'},
  {id:'KIT_SYSP_C03',dept:'KIT/SYSP',code:'KIT/SYSP-C/03',name:'Systémové přistupy',type:'C',teacher:'Zanker',day:'Thu',start:11,end:13,room:'J10'},
  {id:'KIT_SYSP_C02',dept:'KIT/SYSP',code:'KIT/SYSP-C/02',name:'Systémové přistupy',type:'C',teacher:'NAT',day:'Thu',start:11,end:13,room:'J9'},

  // KIKM/UPROM
  {id:'KIKM_UPROM_C02',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/02',name:'Úvod do programování',type:'C',teacher:'KOZ',day:'Mon',start:3,end:5,room:'J23'},
  {id:'KIKM_UPROM_C06',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/06',name:'Úvod do programování',type:'C',teacher:'XPD',day:'Mon',start:7,end:9,room:'J23'},
  {id:'KIKM_UPROM_C04',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/04',name:'Úvod do programování',type:'C',teacher:'VOV',day:'Mon',start:7,end:9,room:'J10'},
  {id:'KIKM_UPROM_C05',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/05',name:'Úvod do programování',type:'C',teacher:'VOV',day:'Mon',start:11,end:13,room:'J8'},

  {id:'KIKM_UPROM_C09',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/09',name:'Úvod do programování',type:'C',teacher:'XVO',day:'Tue',start:3,end:5,room:'J23'},
  {id:'KIKM_UPROM_C03',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/03',name:'Úvod do programování',type:'C',teacher:'KOZ',day:'Tue',start:2,end:4,room:'J9'},
  {id:'KIKM_UPROM_C01',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/01',name:'Úvod do programování',type:'C',teacher:'KOZ',day:'Tue',start:4,end:6,room:'J9'},
  {id:'KIKM_UPROM_C08',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/08',name:'Úvod do programování',type:'C',teacher:'XVO',day:'Tue',start:7,end:9,room:'J23'},

  {id:'KIKM_UPROM_C07',dept:'KIKM/UPROM',code:'KIKM/UPROM-C/07',name:'Úvod do programování',type:'C',teacher:'XVO',day:'Thu',start:1,end:3,room:'J23'},

  // KIT/TPW1A
  {id:'KIT_TPW1A_C02',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/02',name:'Technologie pro publikování na Webu I',type:'C',teacher:'PON',day:'Mon',start:1,end:3,room:'J8'},
  {id:'KIT_TPW1A_C03',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/03',name:'Technologie pro publikování na Webu I',type:'C',teacher:'PON',day:'Mon',start:3,end:5,room:'J8'},

  {id:'KIT_TPW1A_P01',dept:'KIT/TPW1A',code:'KIT/TPW1A-P/01',name:'Technologie pro publikování na Webu I',type:'P',teacher:'PON',day:'Wed',start:1,end:2,room:'J1'},
  {id:'KIT_TPW1A_C04',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/04',name:'Technologie pro publikování na Webu I',type:'C',teacher:'XVO',day:'Wed',start:11,end:13,room:'J8'},

  {id:'KIT_TPW1A_C01',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/01',name:'Technologie pro publikování na Webu I',type:'C',teacher:'PON',day:'Thu',start:1,end:3,room:'J8'},
  {id:'KIT_TPW1A_C05',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/05',name:'Technologie pro publikování na Webu I',type:'C',teacher:'XVO',day:'Thu',start:5,end:7,room:'J8'},
  {id:'KIT_TPW1A_C06',dept:'KIT/TPW1A',code:'KIT/TPW1A-C/06',name:'Technologie pro publikování na Webu I',type:'C',teacher:'XVO',day:'Thu',start:7,end:9,room:'J8'},

  // KIT/UOMO
  {id:'KIT_UOMO_C06',dept:'KIT/UOMO',code:'KIT/UOMO-C/06',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Mon',start:9,end:10,room:'J9'},
  {id:'KIT_UOMO_C07',dept:'KIT/UOMO',code:'KIT/UOMO-C/07',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Mon',start:10,end:11,room:'J9'},
  {id:'KIT_UOMO_C04',dept:'KIT/UOMO',code:'KIT/UOMO-C/04',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Mon',start:11,end:12,room:'J9'},
  {id:'KIT_UOMO_C03',dept:'KIT/UOMO',code:'KIT/UOMO-C/03',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Mon',start:12,end:13,room:'J9'},
  {id:'KIT_UOMO_C05',dept:'KIT/UOMO',code:'KIT/UOMO-C/05',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Mon',start:13,end:14,room:'J9'},

  {id:'KIT_UOMO_C10',dept:'KIT/UOMO',code:'KIT/UOMO-C/10',name:'Úvod do objektového modelování',type:'C',teacher:'XSS',day:'Tue',start:5,end:6,room:'J8'},
  {id:'KIT_UOMO_C12',dept:'KIT/UOMO',code:'KIT/UOMO-C/12',name:'Úvod do objektového modelování',type:'C',teacher:'XSS',day:'Tue',start:6,end:7,room:'J8'},
  {id:'KIT_UOMO_C11',dept:'KIT/UOMO',code:'KIT/UOMO-C/11',name:'Úvod do objektového modelování',type:'C',teacher:'XSS',day:'Tue',start:7,end:8,room:'J8'},
  {id:'KIT_UOMO_C09',dept:'KIT/UOMO',code:'KIT/UOMO-C/09',name:'Úvod do objektového modelování',type:'C',teacher:'XSS',day:'Tue',start:8,end:9,room:'J8'},
  {id:'KIT_UOMO_C08',dept:'KIT/UOMO',code:'KIT/UOMO-C/08',name:'Úvod do objektového modelování',type:'C',teacher:'TUC',day:'Tue',start:12,end:13,room:'J21'},
  {id:'KIT_UOMO_P01',dept:'KIT/UOMO',code:'KIT/UOMO-P/01',name:'Úvod do objektového modelování',type:'P',teacher:'NAT',day:'Tue',start:10,end:11,room:'AULA'},
  {id:'KIT_UOMO_C02',dept:'KIT/UOMO',code:'KIT/UOMO-C/02',name:'Úvod do objektového modelování',type:'C',teacher:'NAT',day:'Tue',start:11,end:12,room:'J9'},
  {id:'KIT_UOMO_C01',dept:'KIT/UOMO',code:'KIT/UOMO-C/01',name:'Úvod do objektového modelování',type:'C',teacher:'NAT',day:'Tue',start:12,end:13,room:'J9'},

  {id:'KIT_UOMO_C13',dept:'KIT/UOMO',code:'KIT/UOMO-C/13',name:'Úvod do objektového modelování',type:'C',teacher:'VED',day:'Thu',start:11,end:12,room:'J8'},
  {id:'KIT_UOMO_C14',dept:'KIT/UOMO',code:'KIT/UOMO-C/14',name:'Úvod do objektového modelování',type:'C',teacher:'VED',day:'Thu',start:12,end:13,room:'J8'},
  {id:'KIT_UOMO_C15',dept:'KIT/UOMO',code:'KIT/UOMO-C/15',name:'Úvod do objektového modelování',type:'C',teacher:'VED',day:'Thu',start:13,end:14,room:'J8'},
  {id:'KIT_UOMO_C16',dept:'KIT/UOMO',code:'KIT/UOMO-C/16',name:'Úvod do objektového modelování',type:'C',teacher:'VED',day:'Thu',start:14,end:15,room:'J8'},

// KM/PRINF
  {id:'KM_PRINF_P01',dept:'KM/PRINF',code:'KM/PRINF-P/01',name:'Právo informačních technologií',type:'P',teacher:'MOR',day:'Mon',start:1,end:3,room:'J6'},
  {id:'KM_PRINF_C01',dept:'KM/PRINF',code:'KM/PRINF-C/01',name:'Právo informačních technologií',type:'C',teacher:'MOR',day:'Mon',start:3,end:4,room:'J6'},
  {id:'KM_PRINF_C02',dept:'KM/PRINF',code:'KM/PRINF-C/02',name:'Právo informačních technologií',type:'C',teacher:'MOR',day:'Mon',start:4,end:5,room:'J6'},
  {id:'KM_PRINF_C03',dept:'KM/PRINF',code:'KM/PRINF-C/03',name:'Právo informačních technologií',type:'C',teacher:'MOR',day:'Mon',start:7,end:8,room:'J31'},
  {id:'KM_PRINF_C04',dept:'KM/PRINF',code:'KM/PRINF-C/04',name:'Právo informačních technologií',type:'C',teacher:'MOR',day:'Mon',start:8,end:9,room:'J31'},
];

const DEPT_CREDITS = {
'KIKM/DBS':6,
'KIT/DSFA':5,
'KAL/OA1':2,
'KIT/PSIT1':5,
'KIT/RBI':5,
'KIKM/ZKZBS':5,
'KIKM/ZMI1':7,
'KE/MIEK1':6,
'KM/MRKTG':4,
'KIT/TESY2':5,
'KIT/SYSP':4,
'KIKM/UPROM':3,
'KIT/TPW1A':5,
'KIT/UOMO':5,
'KM/PRINF':4,
}

const DEPT_COLORS = {
  'KIKM/DBS':   {accent:'#f7c94f', bg:'rgba(247,201,79,.10)', border:'rgba(247,201,79,.4)'},
  'KIT/DSFA':   {accent:'#4ff7a0', bg:'rgba(79,247,160,.08)', border:'rgba(79,247,160,.35)'},
  'KAL/OA1':    {accent:'#a04ff7', bg:'rgba(160,79,247,.09)', border:'rgba(160,79,247,.35)'},
  'KIT/PSIT1':  {accent:'#f74f4f', bg:'rgba(247,79,79,.09)',  border:'rgba(247,79,79,.35)'},
  'KIT/RBI':    {accent:'#4fc3f7', bg:'rgba(79,195,247,.09)', border:'rgba(79,195,247,.35)'},
  'KIKM/ZKZBS': {accent:'#f74fb8', bg:'rgba(247,79,184,.09)', border:'rgba(247,79,184,.35)'},
  'KIKM/ZMI1':  {accent:'#4f8ef7', bg:'rgba(79,142,247,.09)', border:'rgba(79,142,247,.35)'},
  'KE/MIEK1':   {accent:'#f78e4f', bg:'rgba(247,142,79,.09)', border:'rgba(247,142,79,.35)'},
  'KM/MRKTG':   {accent:'#f7eb4f', bg:'rgba(247,235,79,.09)', border:'rgba(247,235,79,.35)'},
  'KIT/TESY2':  {accent:'#4ff7d9', bg:'rgba(79,247,217,.09)', border:'rgba(79,247,217,.35)'},
  'KIT/SYSP':   {accent:'#f7a04f', bg:'rgba(247,160,79,.09)', border:'rgba(247,160,79,.35)'},
  'KIKM/UPROM': {accent:'#4ff7d0',bg:'rgba(79,247,208,.09)',border:'rgba(79,247,208,.35)'},
  'KIT/TPW1A': {accent:'#f74f77',bg:'rgba(247,79,119,.09)',border:'rgba(247,79,119,.35)'},
  'KIT/UOMO': {accent:'#4f6ef7',bg:'rgba(79,110,247,.09)',border:'rgba(79,110,247,.35)'},
  'KM/PRINF': {accent:'#c54ff7',bg:'rgba(197,79,247,.09)',border:'rgba(197,79,247,.35)'}
};

const CATEGORIES = {
  'ISB - 1': ['KIT/SYSP','KIKM/UPROM','KIT/TPW1A','KIT/UOMO','KM/PRINF','KIKM/ZMI1'],
  'ISB - 2': ['KIKM/DBS','KIT/DSFA','KAL/OA1','KIT/PSIT1','KIT/RBI','KIKM/ZKZBS','KIKM/ZMI1'],
  'IM':  ['KIKM/DBS','KIT/PSIT1','KAL/OA1','KE/MIEK1','KM/MRKTG','KIT/TESY2','KIKM/ZMAT1'],
};
