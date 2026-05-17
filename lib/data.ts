export type Transaction = {
  id: number;
  date: string;
  descAr: string;
  descEn: string;
  categoryAr: string;
  categoryEn: string;
  method: string;
  in: number;
  out: number;
  party: string;
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

export const MONTHLY_REVENUE = [
  { month: "يناير / Jan", income: 185000, expense: 92000 },
  { month: "فبراير / Feb", income: 210000, expense: 105000 },
  { month: "مارس / Mar", income: 198000, expense: 88000 },
  { month: "أبريل / Apr", income: 245000, expense: 118000 },
  { month: "مايو / May", income: 230000, expense: 102000 },
  { month: "يونيو / Jun", income: 268000, expense: 125000 },
  { month: "يوليو / Jul", income: 290000, expense: 140000 },
  { month: "أغسطس / Aug", income: 275000, expense: 132000 },
  { month: "سبتمبر / Sep", income: 310000, expense: 148000 },
  { month: "أكتوبر / Oct", income: 325000, expense: 155000 },
  { month: "نوفمبر / Nov", income: 298000, expense: 138000 },
  { month: "ديسمبر / Dec", income: 340000, expense: 162000 },
];

export const INCOME_SOURCES = [
  { nameAr: "إجراءات الأوعية", nameEn: "Vascular Procedures", value: 45 },
  { nameAr: "الاستشارات", nameEn: "Consultations", value: 25 },
  { nameAr: "التأمين", nameEn: "Insurance", value: 20 },
  { nameAr: "أخرى", nameEn: "Other", value: 10 },
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    date: "2026-05-15",
    descAr: "إيراد إجراءات وعائية",
    descEn: "Vascular procedure revenue",
    categoryAr: "إيراد طبي",
    categoryEn: "Medical Revenue",
    method: "تحويل",
    in: 18500,
    out: 0,
    party: "مريض / Patient",
  },
  {
    id: 2,
    date: "2026-05-14",
    descAr: "رواتب الموظفين",
    descEn: "Staff salaries",
    categoryAr: "رواتب",
    categoryEn: "Salaries",
    method: "تحويل بنكي",
    in: 0,
    out: 52000,
    party: "الموظفون / Staff",
  },
  {
    id: 3,
    date: "2026-05-13",
    descAr: "مستلزمات طبية",
    descEn: "Medical supplies",
    categoryAr: "مستلزمات",
    categoryEn: "Supplies",
    method: "شيك",
    in: 0,
    out: 8400,
    party: "مورد / Supplier",
  },
  {
    id: 4,
    date: "2026-05-12",
    descAr: "تسوية تأمين - أبوظبي",
    descEn: "Insurance settlement - Abu Dhabi",
    categoryAr: "تأمين",
    categoryEn: "Insurance",
    method: "تحويل",
    in: 32000,
    out: 0,
    party: "تأمين أبوظبي / AD Insurance",
  },
  {
    id: 5,
    date: "2026-05-11",
    descAr: "إيجار المبنى",
    descEn: "Building rent",
    categoryAr: "إيجار",
    categoryEn: "Rent",
    method: "شيك",
    in: 0,
    out: 25000,
    party: "مالك العقار / Landlord",
  },
  {
    id: 6,
    date: "2026-05-10",
    descAr: "استشارات متخصصة",
    descEn: "Specialist consultations",
    categoryAr: "إيراد طبي",
    categoryEn: "Medical Revenue",
    method: "نقد",
    in: 9600,
    out: 0,
    party: "مريض / Patient",
  },
  {
    id: 7,
    date: "2026-05-09",
    descAr: "صيانة الأجهزة",
    descEn: "Equipment maintenance",
    categoryAr: "صيانة",
    categoryEn: "Maintenance",
    method: "تحويل",
    in: 0,
    out: 4200,
    party: "شركة الصيانة / Maint. Co.",
  },
  {
    id: 8,
    date: "2026-05-08",
    descAr: "تسوية تأمين - دبي",
    descEn: "Insurance settlement - Dubai",
    categoryAr: "تأمين",
    categoryEn: "Insurance",
    method: "تحويل",
    in: 28500,
    out: 0,
    party: "تأمين دبي / Dubai Insurance",
  },
];

export const REPORTS: Report[] = [
  {
    id: 1,
    titleAr: "التقرير المالي السنوي 2025",
    titleEn: "Annual Financial Report 2025",
    type: "annual",
    date: "2026-01-15",
    size: "2.4 MB",
    url: "#",
  },
  {
    id: 2,
    titleAr: "تقرير الربع الأول 2026",
    titleEn: "Q1 2026 Financial Report",
    type: "quarterly",
    date: "2026-04-10",
    size: "1.1 MB",
    url: "#",
  },
  {
    id: 3,
    titleAr: "بيان صحفي - نتائج 2025",
    titleEn: "Press Release - 2025 Results",
    type: "press",
    date: "2026-01-20",
    size: "480 KB",
    url: "#",
  },
  {
    id: 4,
    titleAr: "تقرير الربع الرابع 2025",
    titleEn: "Q4 2025 Financial Report",
    type: "quarterly",
    date: "2026-01-08",
    size: "1.3 MB",
    url: "#",
  },
  {
    id: 5,
    titleAr: "إفصاح: توسع الخدمات",
    titleEn: "Disclosure: Service Expansion",
    type: "filing",
    date: "2025-11-05",
    size: "320 KB",
    url: "#",
  },
  {
    id: 6,
    titleAr: "التقرير المالي السنوي 2024",
    titleEn: "Annual Financial Report 2024",
    type: "annual",
    date: "2025-01-20",
    size: "2.1 MB",
    url: "#",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    nameAr: "د. محمد الخالدي",
    nameEn: "Dr. Mohammed Al-Khalidi",
    titleAr: "المدير المالي",
    titleEn: "Chief Financial Officer",
    email: "cfo@vascularart.ae",
    phone: "+971 2 555 0101",
    avatar: "MK",
  },
  {
    id: 2,
    nameAr: "سارة العامري",
    nameEn: "Sara Al-Ameri",
    titleAr: "مدير علاقات المستثمرين",
    titleEn: "Investor Relations Manager",
    email: "ir@vascularart.ae",
    phone: "+971 2 555 0102",
    avatar: "SA",
  },
  {
    id: 3,
    nameAr: "أحمد الرميثي",
    nameEn: "Ahmed Al-Rumaithi",
    titleAr: "محلل مالي أول",
    titleEn: "Senior Financial Analyst",
    email: "finance@vascularart.ae",
    phone: "+971 2 555 0103",
    avatar: "AR",
  },
  {
    id: 4,
    nameAr: "نورة الشامسي",
    nameEn: "Noura Al-Shamsi",
    titleAr: "مسؤول الامتثال",
    titleEn: "Compliance Officer",
    email: "compliance@vascularart.ae",
    phone: "+971 2 555 0104",
    avatar: "NS",
  },
];

export const STATS = {
  totalIncome: 3174000,
  totalExpense: 1405000,
  netBalance: 1769000,
  pendingInsurance: 284000,
};
