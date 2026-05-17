// ============================================================
// VASCULAR ART — REAL FINANCIAL DATA (Jan–May 2026)
// ============================================================

export type Transaction = {
  id: number;
  date: string;
  descAr: string;
  descEn: string;
  categoryAr: string;
  categoryEn: string;
  method: "Cash" | "Instapay" | "Check";
  in: number;
  out: number;
  party: string;
};

export type InsuranceClaim = {
  id: number;
  patientAr: string;
  patientEn: string;
  procedureAr: string;
  procedureEn: string;
  doctorAr: string;
  company: string;
  procedureDate: string;
  claimDate: string;
  deliveryDate: string;
  receiptDate: string;
  dueDate: string;
  billed: number;
  received: number;
  status: "paid" | "pending" | "overdue";
};

export type Liability = {
  id: number;
  descAr: string;
  descEn: string;
  date: string;
  dueDate: string;
  entity: string;
  categoryAr: string;
  categoryEn: string;
  amount: number;
  status: "paid" | "unpaid" | "overdue";
  notes?: string;
};

export type Doctor = {
  id: number;
  nameAr: string;
  nameEn: string;
  specialty: string;
  janFees: number;
  febFees: number;
  marFees: number;
  aprFees: number;
};

export type Staff = {
  id: number;
  nameAr: string;
  nameEn: string;
  role: string;
  salary: number;
};

export type Report = {
  id: number;
  titleAr: string;
  titleEn: string;
  type: "annual" | "quarterly" | "press" | "filing";
  date: string;
  size: string;
  url: string;
};

export type TeamMember = {
  id: number;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  email: string;
  phone: string;
  avatar: string;
};

// ── MONTHLY REVENUE CHART DATA ─────────────────────────────
export const MONTHLY_REVENUE = [
  { month: "يناير / Jan", income: 285000, expense: 340000 },
  { month: "فبراير / Feb", income: 420000, expense: 390000 },
  { month: "مارس / Mar",  income: 380000, expense: 430000 },
  { month: "أبريل / Apr", income: 450000, expense: 395000 },
  { month: "مايو / May",  income: 210000, expense: 180000 },
];

export const INCOME_SOURCES = [
  { nameAr: "إيراد عيادات كاش",    nameEn: "Clinic Cash Revenue",    value: 55 },
  { nameAr: "تأمين طبي",           nameEn: "Medical Insurance",       value: 25 },
  { nameAr: "إيراد برو سكان",      nameEn: "Pro Scan Revenue",        value: 12 },
  { nameAr: "ديبوست عمليات",       nameEn: "Operation Deposits",      value: 8  },
];

// ── REAL TRANSACTIONS (Jan–May 2026) ──────────────────────
export const TRANSACTIONS: Transaction[] = [
  { id:1,  date:"2026-01-14", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:13350,    out:0,       party:"العيادات" },
  { id:2,  date:"2026-01-14", descAr:"شراء علبة لبن للمركز",                       descEn:"Milk purchase for center",         categoryAr:"ضيافة",            categoryEn:"Hospitality",      method:"Cash",    in:0,        out:51,      party:"ماركت" },
  { id:3,  date:"2026-01-14", descAr:"مستهلكات مكتب اللوتس",                       descEn:"Lotus office supplies",            categoryAr:"مكتب اللوتس",      categoryEn:"Lotus Office",     method:"Cash",    in:0,        out:600,     party:"مكتب اللوتس" },
  { id:4,  date:"2026-01-15", descAr:"وارد من حساب م. مصطفى محمود",                descEn:"Transfer from Eng. Mostafa",       categoryAr:"جاري شركاء",       categoryEn:"Partners A/C",     method:"Instapay",in:100000,   out:0,       party:"م. مصطفى محمود" },
  { id:5,  date:"2026-01-15", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:32050,    out:0,       party:"العيادات" },
  { id:6,  date:"2026-01-15", descAr:"باقة إنترنت إضافية للمركز - We",             descEn:"Extra internet package - We",      categoryAr:"اتصالات وانترنت",  categoryEn:"Communications",   method:"Instapay",in:0,        out:200,     party:"We" },
  { id:7,  date:"2026-01-15", descAr:"قيمة 10 علب دوكافيروكو",                    descEn:"10 boxes Docavarico",              categoryAr:"مستلزمات طبية",    categoryEn:"Medical Supplies", method:"Instapay",in:0,        out:3000,    party:"Docavarico" },
  { id:8,  date:"2026-01-15", descAr:"أتعاب د. محمد حجاج عن ديسمبر 2025",         descEn:"Dr. Hagag fees Dec 2025",          categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:51943,   party:"د. محمد حجاج" },
  { id:9,  date:"2026-01-15", descAr:"أتعاب د. ولاء حسني عن ديسمبر 2025",         descEn:"Dr. Walaa fees Dec 2025",          categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:14067,   party:"د. ولاء حسني" },
  { id:10, date:"2026-01-15", descAr:"أتعاب د. مرام ماهر عن ديسمبر 2025",         descEn:"Dr. Maram fees Dec 2025",          categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:8870,    party:"د. مرام ماهر" },
  { id:11, date:"2026-01-15", descAr:"أتعاب د. هاجر عيد عن ديسمبر 2025",          descEn:"Dr. Hager fees Dec 2025",          categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:4387,    party:"د. هاجر عيد" },
  { id:12, date:"2026-01-15", descAr:"أتعاب د. سارة محمد عن ديسمبر 2025",         descEn:"Dr. Sara fees Dec 2025",           categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:5180,    party:"د. سارة محمد" },
  { id:13, date:"2026-01-17", descAr:"تجديد خط المركز الأساسي - Vodafone",         descEn:"Main line renewal - Vodafone",     categoryAr:"اتصالات وانترنت",  categoryEn:"Communications",   method:"Instapay",in:0,        out:568,     party:"Vodafone Egypt" },
  { id:14, date:"2026-01-17", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:15250,    out:0,       party:"العيادات" },
  { id:15, date:"2026-01-17", descAr:"أتعاب د. عاطف عبد الحميد عن ديسمبر 2025",   descEn:"Dr. Atef fees Dec 2025",           categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Cash",    in:0,        out:25810,   party:"د. عاطف عبد الحميد" },
  { id:16, date:"2026-01-17", descAr:"أتعاب د. محمد النمس عن ديسمبر 2025",        descEn:"Dr. ElNems fees Dec 2025",         categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Cash",    in:0,        out:17000,   party:"د. محمد النمس" },
  { id:17, date:"2026-01-18", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:10700,    out:0,       party:"العيادات" },
  { id:18, date:"2026-01-20", descAr:"فاتورة تصليح ماكينة الطباعة",                descEn:"Printer repair invoice",           categoryAr:"صيانة",            categoryEn:"Maintenance",      method:"Instapay",in:0,        out:1500,    party:"Middle East" },
  { id:19, date:"2026-01-22", descAr:"تجديد فاتورة خط الكول سنتر - Vodafone",     descEn:"Call center line - Vodafone",      categoryAr:"اتصالات وانترنت",  categoryEn:"Communications",   method:"Instapay",in:0,        out:590,     party:"Vodafone Egypt" },
  { id:20, date:"2026-01-22", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:36400,    out:0,       party:"العيادات" },
  { id:21, date:"2026-01-23", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:35000,    out:0,       party:"العيادات" },
  { id:22, date:"2026-01-26", descAr:"قيمة 2 قسطرة ليزر - Penta Med",              descEn:"2 laser catheters - Penta Med",    categoryAr:"مستهلكات طبية",    categoryEn:"Medical Consumables",method:"Cash",  in:0,        out:22000,   party:"Penta Med" },
  { id:23, date:"2026-01-26", descAr:"فاتورة العميل محمد حسين - مستشفى تاون",      descEn:"Client invoice - Town Hospital",   categoryAr:"مستحقات",          categoryEn:"Receivables",      method:"Instapay",in:0,        out:13895,   party:"Town Hospital" },
  { id:24, date:"2026-01-29", descAr:"رواتب الموظفين عن شهر يناير 2026",           descEn:"Staff salaries Jan 2026",          categoryAr:"رواتب موظفين",     categoryEn:"Staff Salaries",   method:"Cash",    in:0,        out:87000,   party:"الموظفون" },
  { id:25, date:"2026-01-31", descAr:"قيمة قسطرة ميكرويف لعملية غدة - Medi Lab",   descEn:"Microwave catheter - Medi Lab",    categoryAr:"مستهلكات طبية",    categoryEn:"Medical Consumables",method:"Instapay",in:0,      out:26500,   party:"Medi Lab" },
  { id:26, date:"2026-02-01", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:11200,    out:0,       party:"العيادات" },
  { id:27, date:"2026-02-02", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:32150,    out:0,       party:"العيادات" },
  { id:28, date:"2026-02-07", descAr:"قيمة النظافة الشهرية للمركز",                descEn:"Monthly cleaning service",         categoryAr:"نظافة",            categoryEn:"Cleaning",         method:"Cash",    in:0,        out:3500,    party:"ميديكال بارك" },
  { id:29, date:"2026-02-09", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:39500,    out:0,       party:"العيادات" },
  { id:30, date:"2026-02-10", descAr:"إيجار مكتب اللوتس",                          descEn:"Lotus office rent",                categoryAr:"مكتب اللوتس",      categoryEn:"Lotus Office",     method:"Cash",    in:0,        out:42400,   party:"م. إبراهيم محمد" },
  { id:31, date:"2026-02-11", descAr:"إيراد برو سكان عن شهر يناير 2026",           descEn:"Pro scan revenue Jan 2026",        categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Instapay",in:10135,    out:0,       party:"برو سكان" },
  { id:32, date:"2026-02-11", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:77500,    out:0,       party:"العيادات" },
  { id:33, date:"2026-02-14", descAr:"أتعاب الأطباء عن شهر يناير 2026",            descEn:"Doctors fees Jan 2026",            categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:112000,  party:"الأطباء" },
  { id:34, date:"2026-02-21", descAr:"فاتورة الكهرباء والتكييف عن يناير 2026",     descEn:"Electricity & AC bill Jan 2026",   categoryAr:"كهرباء وتكييف",    categoryEn:"Electricity & AC", method:"Cash",    in:0,        out:2360,    party:"ميديكال بارك" },
  { id:35, date:"2026-02-24", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:43150,    out:0,       party:"العيادات" },
  { id:36, date:"2026-02-25", descAr:"قيمة قسطرة ليزر لعملية ماريو جميل",          descEn:"Laser catheter - Mario Jamil",     categoryAr:"مستهلكات طبية",    categoryEn:"Medical Consumables",method:"Instapay",in:0,      out:10000,   party:"Penta Med" },
  { id:37, date:"2026-03-01", descAr:"رواتب الموظفين عن شهر فبراير 2026",          descEn:"Staff salaries Feb 2026",          categoryAr:"رواتب موظفين",     categoryEn:"Staff Salaries",   method:"Instapay",in:0,        out:142000,  party:"الموظفون" },
  { id:38, date:"2026-03-05", descAr:"رسوم الهيئة القومية للتأمينات الاجتماعية",   descEn:"Social insurance fees",            categoryAr:"مستحقات",          categoryEn:"Receivables",      method:"Instapay",in:0,        out:8769,    party:"هيئة التأمينات" },
  { id:39, date:"2026-03-06", descAr:"حساب الإعلانات الخاصة بالمركز",              descEn:"Marketing & advertising",          categoryAr:"تسويق",            categoryEn:"Marketing",        method:"Instapay",in:0,        out:20020,   party:"شركة الإعلانات" },
  { id:40, date:"2026-03-12", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:50150,    out:0,       party:"العيادات" },
  { id:41, date:"2026-03-15", descAr:"وارد من حساب الشركة - أتعاب الأطباء",        descEn:"Company transfer - doctor fees",   categoryAr:"واردات",           categoryEn:"Incoming",         method:"Cash",    in:190000,   out:0,       party:"الشركة" },
  { id:42, date:"2026-03-15", descAr:"أتعاب الأطباء عن شهر فبراير 2026",           descEn:"Doctors fees Feb 2026",            categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Cash",    in:0,        out:342000,  party:"الأطباء" },
  { id:43, date:"2026-03-15", descAr:"نسبة المركز من إيجار مكتب اللوتس - فبراير", descEn:"Center share - Lotus rent Feb",    categoryAr:"مكتب اللوتس",      categoryEn:"Lotus Office",     method:"Cash",    in:0,        out:12500,   party:"مكتب اللوتس" },
  { id:44, date:"2026-04-01", descAr:"رواتب الموظفين عن شهر مارس 2026",            descEn:"Staff salaries Mar 2026",          categoryAr:"رواتب موظفين",     categoryEn:"Staff Salaries",   method:"Cash",    in:0,        out:79000,   party:"الموظفون" },
  { id:45, date:"2026-04-06", descAr:"قيمة النظافة الشهرية للمركز - مارس",         descEn:"Monthly cleaning Mar 2026",        categoryAr:"نظافة",            categoryEn:"Cleaning",         method:"Cash",    in:0,        out:3500,    party:"ميديكال بارك" },
  { id:46, date:"2026-04-07", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:28300,    out:0,       party:"العيادات" },
  { id:47, date:"2026-04-09", descAr:"تحويل لشركة Be Group - ويب سايت",             descEn:"Be Group - website payment",       categoryAr:"تسويق",            categoryEn:"Marketing",        method:"Instapay",in:0,        out:13300,   party:"Be Group" },
  { id:48, date:"2026-04-09", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:59950,    out:0,       party:"العيادات" },
  { id:49, date:"2026-04-13", descAr:"استهلاكات الكهرباء والتكييف - مارس 2026",    descEn:"Electricity & AC - Mar 2026",      categoryAr:"كهرباء وتكييف",    categoryEn:"Electricity & AC", method:"Cash",    in:0,        out:2420,    party:"ميديكال بارك" },
  { id:50, date:"2026-04-16", descAr:"أتعاب د. محمد حجاج عن مارس 2026",            descEn:"Dr. Hagag fees Mar 2026",          categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Cash",    in:0,        out:55455,   party:"د. محمد حجاج" },
  { id:51, date:"2026-04-18", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:32450,    out:0,       party:"العيادات" },
  { id:52, date:"2026-04-19", descAr:"2 قسطرة ليزر - دالياودالية ونور ياسين",      descEn:"2 laser catheters - operations",   categoryAr:"مستهلكات طبية",    categoryEn:"Medical Consumables",method:"Cash",  in:0,        out:20000,   party:"Penta Med" },
  { id:53, date:"2026-04-21", descAr:"قيمة تجديد بوابة الضرائب",                   descEn:"Tax portal renewal",               categoryAr:"ضرائب",            categoryEn:"Taxes",            method:"Instapay",in:0,        out:4665,    party:"مصلحة الضرائب" },
  { id:54, date:"2026-04-30", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:75550,    out:0,       party:"العيادات" },
  { id:55, date:"2026-04-30", descAr:"رواتب الموظفين عن شهر أبريل 2026",           descEn:"Staff salaries Apr 2026",          categoryAr:"رواتب موظفين",     categoryEn:"Staff Salaries",   method:"Cash",    in:0,        out:175140,  party:"الموظفون" },
  { id:56, date:"2026-05-04", descAr:"فاتورة مستشفى شفا - سنية ومنى حسن",          descEn:"Shifa Hospital invoice",           categoryAr:"مستحقات",          categoryEn:"Receivables",      method:"Cash",    in:0,        out:37305,   party:"مستشفى شفا" },
  { id:57, date:"2026-05-06", descAr:"قيمة قلم حقن مونجارو تركيز 15 - التغذية",   descEn:"Mounjaro pen - nutrition clinic",  categoryAr:"مستهلكات طبية",    categoryEn:"Medical Consumables",method:"Cash",  in:0,        out:17150,   party:"صيدلية بلاجيو" },
  { id:58, date:"2026-05-07", descAr:"قيمة النظافة الشهرية - أبريل 2026",          descEn:"Monthly cleaning Apr 2026",        categoryAr:"نظافة",            categoryEn:"Cleaning",         method:"Cash",    in:0,        out:3500,    party:"ميديكال بارك" },
  { id:59, date:"2026-05-11", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:57550,    out:0,       party:"العيادات" },
  { id:60, date:"2026-05-13", descAr:"أتعاب الأطباء عن شهر أبريل 2026",            descEn:"Doctors fees Apr 2026",            categoryAr:"أتعاب الأطباء",    categoryEn:"Doctor Fees",      method:"Instapay",in:0,        out:165000,  party:"الأطباء" },
  { id:61, date:"2026-05-14", descAr:"نسبة المركز من إيجار مكتب اللوتس - أبريل",  descEn:"Center share - Lotus rent Apr",    categoryAr:"مكتب اللوتس",      categoryEn:"Lotus Office",     method:"Instapay",in:0,        out:14133,   party:"مكتب اللوتس" },
  { id:62, date:"2026-05-16", descAr:"إيراد العيادات كاش",                         descEn:"Clinic cash revenue",              categoryAr:"إيرادات",          categoryEn:"Revenue",          method:"Cash",    in:25000,    out:0,       party:"العيادات" },
];

// ── INSURANCE CLAIMS (مطالبات 2025-2026) ─────────────────
export const INSURANCE_CLAIMS: InsuranceClaim[] = [
  { id:1,  patientAr:"نادية رجب بيوي",          patientEn:"Nadia Ragab",           procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"محمد حجاج",              company:"المرشق",        procedureDate:"2025-11-20", claimDate:"2025-12-21", deliveryDate:"2025-12-27", receiptDate:"2025-12-28", dueDate:"2026-02-28", billed:31800,  received:27189,  status:"paid" },
  { id:2,  patientAr:"مريم محمد عبدالمقصود",    patientEn:"Mariam Mohammed",       procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"محمد حجاج / عاطف عبدالحميد", company:"أكسون", procedureDate:"2025-12-19", claimDate:"2025-12-21", deliveryDate:"2025-12-27", receiptDate:"2025-12-28", dueDate:"2026-02-28", billed:49000,  received:45080,  status:"paid" },
  { id:3,  patientAr:"كريلس أشرف موسلي",        patientEn:"Krelis Ashraf",         procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"محمد حجاج",              company:"ليمتليس كري",   procedureDate:"2026-01-01", claimDate:"2026-01-05", deliveryDate:"2026-01-25", receiptDate:"2026-01-26", dueDate:"2026-03-27", billed:44000,  received:40495,  status:"paid" },
  { id:4,  patientAr:"محمد حسين حسن",           patientEn:"Mohammed Hussein",      procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"مصطفى سليمان",           company:"أكسون",         procedureDate:"2026-01-07", claimDate:"2026-01-07", deliveryDate:"2026-01-25", receiptDate:"2026-01-26", dueDate:"2026-03-27", billed:35000,  received:32200,  status:"paid" },
  { id:5,  patientAr:"أسماء عصام",              patientEn:"Asmaa Essam",           procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"محمد إسماعيل",           company:"أكسون",         procedureDate:"2026-02-02", claimDate:"2026-02-15", deliveryDate:"2026-02-16", receiptDate:"2026-02-18", dueDate:"2026-04-17", billed:50000,  received:46000,  status:"paid" },
  { id:6,  patientAr:"دالیا محمد حمدي",         patientEn:"Dalia Mohammed",        procedureAr:"عملية كي حراري للدوالي", procedureEn:"Thermal ablation",     doctorAr:"محمد حجاج",              company:"أكسون",         procedureDate:"2026-03-27", claimDate:"2026-04-02", deliveryDate:"2026-04-06", receiptDate:"2026-04-07", dueDate:"2026-06-09", billed:45000,  received:0,      status:"pending" },
  { id:7,  patientAr:"حنان الميهي",             patientEn:"Hanan El-Mihi",         procedureAr:"كشف + جلسة حقن",        procedureEn:"Check + injection",    doctorAr:"هادية رفاء",             company:"أكسون",         procedureDate:"2025-09-24", claimDate:"2026-04-06", deliveryDate:"2026-04-06", receiptDate:"2026-04-07", dueDate:"2026-06-09", billed:5150,   received:0,      status:"overdue" },
  { id:8,  patientAr:"عبد الوهاب غانم أحمد",   patientEn:"Abdel Wahab Ghanem",    procedureAr:"كشف + غيار",            procedureEn:"Check + dressing",     doctorAr:"محمود صالح",             company:"بيروجاس",       procedureDate:"2025-08-25", claimDate:"2026-04-06", deliveryDate:"2026-04-06", receiptDate:"2026-04-07", dueDate:"2026-06-09", billed:560,    received:0,      status:"overdue" },
  { id:9,  patientAr:"علاء محمود محمد",         patientEn:"Alaa Mahmoud",          procedureAr:"كشف",                   procedureEn:"Consultation",         doctorAr:"مصطفى سليمان",           company:"بيروجاس",       procedureDate:"2025-11-05", claimDate:"2026-04-06", deliveryDate:"2026-04-06", receiptDate:"2026-04-07", dueDate:"2026-06-09", billed:200,    received:0,      status:"overdue" },
  { id:10, patientAr:"دالیا محمد حمدي",         patientEn:"Dalia Mohammed",        procedureAr:"دوبلر أوردة الرحم",     procedureEn:"Uterine vein Doppler", doctorAr:"سارة محمد",              company:"أكسون",         procedureDate:"2026-04-02", claimDate:"2026-04-06", deliveryDate:"2026-04-06", receiptDate:"2026-04-07", dueDate:"2026-06-09", billed:1050,   received:0,      status:"pending" },
];

// ── LIABILITIES (مستحقات ومدفوعات) ────────────────────────
export const LIABILITIES: Liability[] = [
  { id:1,  descAr:"فاتورة عملية العميل ناصر حريز - مستشفى شفا",  descEn:"Naser Hariz operation - Shifa Hospital",    date:"2025-11-22", dueDate:"2025-12-22", entity:"مستشفى شفا",         categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:35608,  status:"paid" },
  { id:2,  descAr:"فاتورة عملية العميلة أم عادل - مستشفى شفا",   descEn:"Om Adel operation - Shifa Hospital",       date:"2025-11-22", dueDate:"2025-12-22", entity:"مستشفى شفا",         categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:39169,  status:"paid" },
  { id:3,  descAr:"قسطرة ليزر - شركة بنتا ميد",                   descEn:"Laser catheter - Penta Med",               date:"2025-12-19", dueDate:"2025-12-19", entity:"شركة بنتا ميد",      categoryAr:"مستهلكات طبية",  categoryEn:"Medical Consumables", amount:11000, status:"paid" },
  { id:4,  descAr:"فاتورة محسن رجب - مستشفى نسائم",               descEn:"Mohsen Ragab invoice - Nasaem Hospital",   date:"2025-09-13", dueDate:"2025-10-13", entity:"مستشفى نسائم",       categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:16503,  status:"overdue", notes:"تجاوز الفترة الزمنية" },
  { id:5,  descAr:"فاتورة مثنى سعيد قاسم - مستشفى نسائم",        descEn:"Mothna Saeed invoice - Nasaem Hospital",   date:"2025-12-06", dueDate:"2026-01-06", entity:"مستشفى نسائم",       categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:98297,  status:"overdue", notes:"تجاوز الفترة الزمنية" },
  { id:6,  descAr:"فاتورة مستلزمات طبية - شركة إكسيل",            descEn:"Medical supplies - Excel Company",         date:"2025-11-30", dueDate:"2025-12-07", entity:"شركة إكسيل",         categoryAr:"مستهلكات طبية",  categoryEn:"Medical Consumables", amount:2110, status:"paid" },
  { id:7,  descAr:"قيمة النظافة الشهرية للمركز",                   descEn:"Monthly cleaning - Medical Park",          date:"2026-01-01", dueDate:"2026-01-10", entity:"ميديكال بارك بريمي", categoryAr:"نظافة",          categoryEn:"Cleaning",         amount:3500,   status:"paid" },
  { id:8,  descAr:"فاتورة الكهرباء شهر ديسمبر",                   descEn:"Electricity bill Dec",                     date:"2026-01-01", dueDate:"2026-01-10", entity:"ميديكال بارك بريمي", categoryAr:"كهرباء وتكييف",  categoryEn:"Electricity & AC", amount:1480,   status:"paid" },
  { id:9,  descAr:"فاتورة التكييف شهر ديسمبر",                    descEn:"AC bill Dec",                              date:"2026-01-01", dueDate:"2026-01-10", entity:"ميديكال بارك بريمي", categoryAr:"كهرباء وتكييف",  categoryEn:"Electricity & AC", amount:1949,   status:"paid" },
  { id:10, descAr:"إيجار مكتب اللوتس يناير 2026",                  descEn:"Lotus office rent Jan 2026",               date:"2026-02-09", dueDate:"2026-02-10", entity:"م. إبراهيم محمد",     categoryAr:"إيجارات",        categoryEn:"Rent",             amount:42400,  status:"paid" },
  { id:11, descAr:"راتب د. عاطف عبد الحميد - يناير 2026",         descEn:"Dr. Atef salary Jan 2026",                 date:"2026-02-09", dueDate:"2026-02-10", entity:"د. عاطف عبد الحميد", categoryAr:"رواتب موظفين",   categoryEn:"Staff Salaries",   amount:20000,  status:"paid" },
  { id:12, descAr:"راتب د. سامح فرج - يناير 2026",                descEn:"Dr. Sameh salary Jan 2026",                date:"2026-02-09", dueDate:"2026-02-10", entity:"د. سامح فرج",        categoryAr:"رواتب موظفين",   categoryEn:"Staff Salaries",   amount:10000,  status:"paid" },
  { id:13, descAr:"فاتورة فيزيتا - يناير 2026",                    descEn:"Vizita invoice Jan 2026",                  date:"2026-02-01", dueDate:"2026-02-07", entity:"فيزيتا",             categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:3190,   status:"paid" },
  { id:14, descAr:"عملية العميلة مني حسن - مستشفى شفا",           descEn:"Mona Hassan operation - Shifa Hospital",   date:"2026-01-23", dueDate:"2026-02-23", entity:"مستشفى شفا",         categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:22334,  status:"paid", notes:"تم الدفع 11/5/2026" },
  { id:15, descAr:"عملية العميل سامح عبد الواحد - مستشفى شفا",    descEn:"Sameh Abdel Wahed - Shifa Hospital",       date:"2026-02-15", dueDate:"2026-03-15", entity:"مستشفى شفا",         categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:17165,  status:"unpaid" },
  { id:16, descAr:"عملية العميل محمد حمدي - مستشفى شفا",          descEn:"Mohammed Hamdi - Shifa Hospital",          date:"2026-02-13", dueDate:"2026-03-13", entity:"مستشفى شفا",         categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:41389,  status:"unpaid" },
  { id:17, descAr:"فاتورة عملية العميل يمهداد - مستشفى نسائم",    descEn:"Hamdi operation - Nasaem Hospital",        date:"2025-11-30", dueDate:"2025-12-30", entity:"مستشفى نسائم",       categoryAr:"مستحقات",        categoryEn:"Receivables",      amount:28647,  status:"overdue", notes:"تجاوز الفترة الزمنية" },
  { id:18, descAr:"قسطرة ليزر - شركة بنتا ميد",                   descEn:"Laser catheter - Penta Med",               date:"2026-05-13", dueDate:"2026-05-13", entity:"شركة بنتا ميد",      categoryAr:"مستهلكات طبية",  categoryEn:"Medical Consumables", amount:10000, status:"unpaid" },
  { id:19, descAr:"فاتورة مستلزمات طبية - شركة إكسيل",            descEn:"Medical supplies - Excel Company",         date:"2026-05-03", dueDate:"2026-06-03", entity:"شركة إكسيل",         categoryAr:"مستهلكات طبية",  categoryEn:"Medical Consumables", amount:5160, status:"unpaid" },
  { id:20, descAr:"مطالبة كهرباء شهر يناير 2026",                  descEn:"Electricity Jan 2026",                     date:"2026-02-09", dueDate:"2026-02-10", entity:"ميديكال بارك بريمي", categoryAr:"كهرباء وتكييف",  categoryEn:"Electricity & AC", amount:1410,   status:"paid" },
];

// ── DOCTORS (real list from financial data) ───────────────
export const DOCTORS: Doctor[] = [
  { id:1,  nameAr:"د. محمد حجاج",          nameEn:"Dr. Mohamed Hagag",        specialty:"جراحة الأوعية الدموية", janFees:51943, febFees:30361, marFees:42756, aprFees:55455 },
  { id:2,  nameAr:"د. عاطف عبد الحميد",    nameEn:"Dr. Atef Abdelhamid",      specialty:"جراحة الأوعية الدموية", janFees:25810, febFees:25810, marFees:8623,  aprFees:18139 },
  { id:3,  nameAr:"د. ولاء حسني",          nameEn:"Dr. Walaa Hosny",          specialty:"طب الأوعية الدموية",    janFees:14067, febFees:8497,  marFees:5591,  aprFees:36966 },
  { id:4,  nameAr:"د. محمد النمس",         nameEn:"Dr. Mohamed ElNems",       specialty:"جراحة الأوعية الدموية", janFees:17000, febFees:21745, marFees:20025, aprFees:22837 },
  { id:5,  nameAr:"د. نورا حماسة",         nameEn:"Dr. Noura Hamasa",         specialty:"الجلدية والتجميل",       janFees:0,     febFees:0,     marFees:17280, aprFees:21700 },
  { id:6,  nameAr:"د. سارة محمد",          nameEn:"Dr. Sara Mohamed",         specialty:"طب الأوعية الدموية",    janFees:5180,  febFees:6210,  marFees:5757,  aprFees:21065 },
  { id:7,  nameAr:"د. مصطفى سليمان",       nameEn:"Dr. Mostafa Soliman",      specialty:"جراحة الأوعية الدموية", janFees:1687,  febFees:5835,  marFees:12810, aprFees:10163 },
  { id:8,  nameAr:"د. مرام ماهر",          nameEn:"Dr. Maram Maher",          specialty:"الجلدية والتجميل",       janFees:8870,  febFees:11985, marFees:8509,  aprFees:9163 },
  { id:9,  nameAr:"د. هادية رفاء",         nameEn:"Dr. Hadia Rafaa",          specialty:"الجلدية والتجميل",       janFees:2069,  febFees:4820,  marFees:4569,  aprFees:4954 },
  { id:10, nameAr:"د. ريم الملاح",         nameEn:"Dr. Reem ElMallah",        specialty:"الجلدية والتجميل",       janFees:4114,  febFees:7811,  marFees:7348,  aprFees:8417 },
  { id:11, nameAr:"د. محمد إسماعيل",       nameEn:"Dr. Mohamed Ismail",       specialty:"الأشعة التداخلية",       janFees:234,   febFees:3887,  marFees:6550,  aprFees:22509 },
  { id:12, nameAr:"د. أحمد المحمودي",      nameEn:"Dr. Ahmed ElMahmoudi",     specialty:"طب الأوعية الدموية",    janFees:3213,  febFees:1965,  marFees:1845,  aprFees:4701 },
  { id:13, nameAr:"د. محمد مسعد",          nameEn:"Dr. Mohamed Mossad",       specialty:"جراحة الأوعية الدموية", janFees:6568,  febFees:8322,  marFees:2321,  aprFees:4277 },
  { id:14, nameAr:"د. محمد أبو الوفا",     nameEn:"Dr. Mohamed Aboelwafa",    specialty:"جراحة الأوعية الدموية", janFees:4560,  febFees:22335, marFees:0,     aprFees:9170 },
  { id:15, nameAr:"د. عمرو نبيل",          nameEn:"Dr. Amro Nabil",           specialty:"طب الأوعية الدموية",    janFees:0,     febFees:2384,  marFees:16768, aprFees:655 },
];

// ── STAFF ─────────────────────────────────────────────────
export const STAFF: Staff[] = [
  { id:1,  nameAr:"فاروق محمد",        nameEn:"Farouk Mohamed",       role:"مدير",               salary:25000 },
  { id:2,  nameAr:"د. محمد حسن",       nameEn:"Dr. Mohamed Hassan",   role:"طبيب / موظف",        salary:25000 },
  { id:3,  nameAr:"خالد عبده",         nameEn:"Khaled Abdo",          role:"مدير عمليات",        salary:20000 },
  { id:4,  nameAr:"د. عاطف عبد الحميد",nameEn:"Dr. Atef Abdelhamid",  role:"طبيب متفرغ",         salary:20000 },
  { id:5,  nameAr:"د. سامح فرج",       nameEn:"Dr. Sameh Farag",      role:"طبيب متفرغ",         salary:10000 },
  { id:6,  nameAr:"مصطفى مجدي عطا",   nameEn:"Mostafa Magdy",        role:"محاسب",              salary:13000 },
  { id:7,  nameAr:"منار عاطف",         nameEn:"Manar Atef",           role:"تنسيق طبي",          salary:9000 },
  { id:8,  nameAr:"يوسف عثمان",        nameEn:"Youssef Othman",       role:"مسؤول تحصيل",        salary:12000 },
  { id:9,  nameAr:"محمد مظهر",         nameEn:"Mohamed Mazhar",       role:"موظف إداري",         salary:9600 },
  { id:10, nameAr:"أسماء سامي",        nameEn:"Asmaa Sami",           role:"سكرتارية",           salary:8000 },
  { id:11, nameAr:"شيماء علي",         nameEn:"Shimaa Ali",           role:"تمريض",              salary:7200 },
  { id:12, nameAr:"جيهان دومة",        nameEn:"Gihan Doma",           role:"استقبال",            salary:7500 },
  { id:13, nameAr:"هبه عادل",          nameEn:"Heba Adel",            role:"تمريض",              salary:7000 },
  { id:14, nameAr:"شذا محمد",          nameEn:"Shada Mohamed",        role:"سكرتارية",           salary:4500 },
  { id:15, nameAr:"أشرف أمين الدهشوري",nameEn:"Ashraf Amin",          role:"موظف عام",           salary:4000 },
  { id:16, nameAr:"جيكوب نيماه",       nameEn:"Jacob Nimah",          role:"موظف",               salary:5200 },
];

// ── REPORTS ──────────────────────────────────────────────
export const REPORTS: Report[] = [
  { id:1, titleAr:"تقرير الربع الأول 2026 (يناير–مارس)",    titleEn:"Q1 2026 Financial Report (Jan–Mar)",  type:"quarterly", date:"2026-04-10", size:"1.4 MB", url:"#" },
  { id:2, titleAr:"كشف حساب الخزنة - مايو 2026",           titleEn:"Treasury Statement May 2026",          type:"quarterly", date:"2026-05-17", size:"980 KB", url:"#" },
  { id:3, titleAr:"مطالبات التأمين 2025-2026",              titleEn:"Insurance Claims Report 2025-2026",    type:"filing",    date:"2026-05-01", size:"750 KB", url:"#" },
  { id:4, titleAr:"كشف المستحقات والمدفوعات",               titleEn:"Liabilities & Payables Report",        type:"filing",    date:"2026-03-10", size:"620 KB", url:"#" },
  { id:5, titleAr:"التقرير المالي السنوي 2025",             titleEn:"Annual Financial Report 2025",         type:"annual",    date:"2026-01-20", size:"2.2 MB", url:"#" },
  { id:6, titleAr:"بيان أتعاب الأطباء - الربع الأول 2026", titleEn:"Doctors Fees Statement Q1 2026",       type:"press",     date:"2026-04-01", size:"480 KB", url:"#" },
];

// ── IR TEAM ───────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  { id:1, nameAr:"م. مصطفى محمود",     nameEn:"Eng. Mostafa Mahmoud",     titleAr:"شريك / مدير عام",         titleEn:"Partner / General Manager",  email:"ceo@vascularart.ae",        phone:"+20 10 0000 0001", avatar:"MM" },
  { id:2, nameAr:"فاروق محمد",          nameEn:"Farouk Mohamed",           titleAr:"مدير تنفيذي",              titleEn:"Executive Director",          email:"director@vascularart.ae",   phone:"+20 10 0000 0002", avatar:"FM" },
  { id:3, nameAr:"مصطفى مجدي عطا",     nameEn:"Mostafa Magdy",            titleAr:"محاسب المركز",             titleEn:"Center Accountant",           email:"finance@vascularart.ae",    phone:"+20 10 0000 0003", avatar:"MG" },
  { id:4, nameAr:"يوسف عثمان",          nameEn:"Youssef Othman",           titleAr:"مسؤول التحصيل والتأمين",  titleEn:"Collections & Insurance Mgr", email:"collections@vascularart.ae",phone:"+20 10 0000 0004", avatar:"YO" },
];

// ── FINANCIAL SUMMARY STATS ───────────────────────────────
export const STATS = {
  totalIncome:          1445000,   // يناير–مايو 2026
  totalExpense:         1235000,
  netBalance:           210000,
  cashInHand:           9318.67,   // الرصيد الفعلي 17/5/2026
  insuranceBilled:      267020,    // إجمالي المطالبات
  insuranceReceived:    190964,    // تم تحصيله
  insurancePending:     103245,    // لم يتم التحصيل
  liabilitiesTotal:     254161,
  liabilitiesPaid:      217161,
  liabilitiesUnpaid:    37000,
};
