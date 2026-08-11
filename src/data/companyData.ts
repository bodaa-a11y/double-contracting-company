import { ServiceItem, ProjectItem, TestimonialItem, PartnerItem, StatItem, ValueItem } from '../types';

export const COMPANY_INFO = {
  name: 'شركة رؤية الريادة للمقاولات والتطوير العقاري',
  tagline: 'نبني المستقبل بجودة، احترافية، وثقة',
  shortDesc: 'صرح رائد في مجالات المقاولات والتطوير العقاري، يمتلك عقوداً من الخبرة في تنفيذ المشاريع الضخمة والبنى التحتية الشاملة بأعلى معايير الجودة العالمية.',
  phone: '+966 55 509 4382',
  phoneAlt: '7048788603',
  email: 'roaiatalriada@gmail.com',
  address: 'الخرج - طريق الملك فهد بن عبد العزيز - حي النهضة',
  whatsapp: '966555094382',
  social: {
    linkedin: 'https://www.linkedin.com/in/شركة-رؤية-الريادة-للمقاولات-781408380?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    twitter: 'https://x.com/RAlriada',
    facebook: 'https://www.facebook.com/Roaiat%20Alriada',
    tiktok: 'https://www.tiktok.com/@roaiatalriada',
  },
  stats: {
    projectsCount: 250,
    clientsCount: 500,
    yearsExperience: 20,
    employeesCount: 1000,
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-contracting',
    title: 'المقاولات العامة',
    subtitle: 'حلول إنشائية شاملة متكاملة للقطاعين الحكومي والخاص',
    iconName: 'Building2',
    description: 'تنفيذ أعمال البناء والإنشاء لكافة المجمعات والمنشآت الضخمة بأعلى معايير السلامة والجودة وبإشراف نخبة من الكوادر الهندسية المتخصصة.',
    detailedScope: [
      'التخطيط والدراسات الهندسية المعمارية والإنشائية',
      'إدارة تنفيذ المشاريع الكبرى من الصفر وحتى التسليم المفتاح',
      'توريد وتركيب الهياكل الخرسانية والمعدنية المعقدة',
      'تطبيق أعلى متطلبات الأمان واختبارات ضبط الجودة الدولية'
    ],
    features: ['إشراف هندسي صارم', 'التزام كامل بالجداول الزمنية', 'تقنيات بناء حديثة'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=1200&q=80',
    badge: 'الأكثر طلباً'
  },
  {
    id: 'villas-construction',
    title: 'بناء الفلل والقصور',
    subtitle: 'تصاميم معمارية فاخرة تُجسد الفخامة والرفاهية',
    iconName: 'Home',
    description: 'تصميم وتنفيذ الفلل السكنية الفاخرة والقصور بطابع عصري ومخصص يُلبي تطلعات عملائنا النخبويين مع العناية بأدق التفاصيل المعمارية.',
    detailedScope: [
      'تصميم معماري وتصاميم ثلاثية الأبعاد مخصصة لكل عميل',
      'تنفيذ أعمال العظم والخرسانة المسلحة عالية المقاومة',
      'تنسيق الحدائق والمساحات الخارجية والمسابح الذكية',
      'دمج أنظمة المنازل الذكية والتحكم الإلكتروني الكامل'
    ],
    features: ['تصاميم حصرية', 'مواد بناء فاخرة', 'ضمان هيكلي المدى الطويل'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    badge: 'تصميم فاخر'
  },
  {
    id: 'towers-construction',
    title: 'بناء الأبراج والناطحات',
    subtitle: 'هندسة متطورة لتشييد الأبراج المرتفعة والمجمعات الإدارية',
    iconName: 'Building',
    description: 'خبرة عريقة في تشييد الأبراج المرتفعة والمجمعات السكنية والتجارية الاستثمارية وفق تقنيات الهندسة الإنشائية المتقدمة للارتفاعات الشاهقة.',
    detailedScope: [
      'دراسات التربة والأساسات العميقة (الخوازيق واللبشة المسلحة)',
      'الواجهات الزجاجية الحديثة والألومنيوم العازل للحرارة والصوت',
      'تركيب أنظمة المصاعد الذكية وأنظمة مكافحة الحريق المتطورة',
      'تنفيذ المجمعات ذات الاستخدامات المتعددة (مكاتب، سكن، تجاري)'
    ],
    features: ['تقنيات هيدروليكية مجهزة', 'واجهات زجاجية عصرية', 'إدارة السلامة المرتفعة'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'real-estate-dev',
    title: 'التطوير العقاري',
    subtitle: 'ابتكار الفرص الاستثمارية وبناء المجمعات المتكاملة',
    iconName: 'TrendingUp',
    description: 'تحويل الأراضي والمساحات الواعدة إلى مشاريع استثمارية ومجمعات سكنية وتجارية تحقق أعلى العوائد وتلبي متطلبات التنمية العمرانية.',
    detailedScope: [
      'دراسات الجدوى الاقتصادية وتحليل السوق العقاري',
      'تطوير المخططات السكنية المكتملة الخدمات',
      'التسويق العقاري وإدارة الأصول والممتلكات الاستثمارية',
      'الشراكات الاستراتيجية مع كبار المستثمرين والمطورين'
    ],
    features: ['عوائد استثمارية مجزية', 'دراسات جدوى متخصصة', 'مواقع استراتيجية'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'finishing-decoration',
    title: 'التشطيبات والديكور',
    subtitle: 'لمسات فنية رفيعة المستوى للواجهات والديكورات الداخلية',
    iconName: 'Paintbrush',
    description: 'تنفيذ أعمال التشطيبات الفاخرة للداخل والخارج بأجود أنواع الرخام، الخشب، والواجهات الحديثة لتخرج التحفة المعمارية بأعلى صورة جمالية.',
    detailedScope: [
      'التصميم الداخلي والأنظمة الضوئية الذكية',
      'تركيب الأرضيات الرخامية والبورسلين ذو القياسات الكبيرة',
      'الأعمال الخشبية وتجليدات الحوائط والأسقف المستعارة',
      'العزل المائي والحراري المتقدم مع الضمان الشامل'
    ],
    features: ['خامات عالمية', 'دقة تنفيدية عالية', 'إضاءة معمارية ساحرة'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-management',
    title: 'إدارة المشاريع',
    subtitle: 'التخطيط الاحترافي، ضبط الجودة، والمراقبة الزمنية والمالية',
    iconName: 'Briefcase',
    description: 'تقديم خدمات الإشراف والقيادة الاحترافية للمشاريع من خلال تطبيق أحدث نظم البرمجيات العالمية للمراقبة وضبط الميزانيات والمخاطر.',
    detailedScope: [
      'إدارة النطاق والتكاليف والمخاطر (PMI Standards)',
      'الرقابة على الموردين والمقاولين الفرعيين',
      'إصدار التقارير الدوريات المتقدمة للتحليل والتقييم',
      'ضمان جودة المواد المطابقة للمواصفات القياسية'
    ],
    features: ['شفافية كاملة', 'تقارير دورية رقمية', 'ترشيد التكاليف بدون مساس بالجودة'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'infrastructure',
    title: 'البنية التحتية',
    subtitle: 'تأسيس شبكات المجمعات، الطرق، والمرافق العامة',
    iconName: 'HardHat',
    description: 'تشييد شبكات المياه، الصرف الصحي، الكهرباء، الطرق والأعمال الترابية للمخططات السكنية والمناطق الصناعية باستخدام أحدث الآليات.',
    detailedScope: [
      'أعمال الحفر وتجهيز الموقع والدك والردم الهندسي',
      'مباشرة تمديد الشبكات الرئيسية والفرعية للمرفقيات',
      'إنشاء الطرق وتعبيد الأسفلت ورصف الأرصفة',
      'تركيب أنظمة التصريف ومحطات التجميع والتغذية'
    ],
    features: ['معدات ثقيلة متطورة', 'معايير أمان حكومية', 'متانة تشغيلية مستدامة'],
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'commercial-trading',
    title: 'الأعمال التجارية والتوريد',
    subtitle: 'استيراد وتوريد أجود مواد البناء والمعدات الهندسية',
    iconName: 'Truck',
    description: 'ذراع تجاري متكامل لتوريد حديد التسليح، الإسمنت، المعدات الثقيلة، وأنظمة السلامة المعتمدة دولياً لضمان استمرارية توريد المشاريع.',
    detailedScope: [
      'توريد الخرسانة الجاهزة والمواد الإنشائية الأساسية',
      'توفير الآليات الهندسية الثقيلة والرافعات البرجية',
      'استيراد التجهيزات الكهربائية والمكانيكية المعيارية',
      'تقديم عقود الصيانة والتأمين للمعدات والآلات'
    ],
    features: ['سلسلة إمداد موثوقة', 'أسعار تنافسية مباشرة', 'جودة معتمدة حاصلة على ISO'],
    image: '/supply_materials.jpg'
  }
];

export const TEXT_SCROLL_ITEMS = [
  {
    id: 'villas',
    title: 'فلل فاخرة',
    sub: 'تصاميم ملكية خاصة',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    desc: 'فلل سكنية فاخرة تجمع بين الأصالة المعمارية والتكنولوجيا الذكية.'
  },
  {
    id: 'towers',
    title: 'أبراج حديثة',
    sub: 'ناطحات سحاب استثمارية',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    desc: 'أبراج شاهقة بارتفاعات قياسية تتوسط أرقَى مناطق الأعمال.'
  },
  {
    id: 'malls',
    title: 'مولات تجارية',
    sub: 'وجهات تسوق عالمية',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
    desc: 'مراكز تسوق وترفيه مصممة لجذب الملايين بأسلوب معماري مبهر.'
  },
  {
    id: 'residential',
    title: 'مجمعات سكنية',
    sub: 'مجتمعات عمرانية مغلقة',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    desc: 'بيئة سكنية آمنة توفر كافة سبل الرفاهية والحدائق الغنّاء.'
  },

  {
    id: 'admin-buildings',
    title: 'مبانٍ إدارية',
    sub: 'مقرات للشركات الكبرى',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'مساحات عمل مكتبية ذكية تحقق أعلى معايير الإنتاجية والاستدامة.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'برج رؤية رويال تاور',
    category: 'towers',
    categoryLabel: 'أبراج حديثة',
    location: 'الرياض - حي العقيق',
    area: '45,000 م²',
    completionYear: '2025',
    client: 'شركة الاستثمارات العقارية الكبرى',
    value: '180,000,000 ريال',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'برج تجاري وإداري مكون من 38 طابقاً مزود بأحدث الواجهات الزجاجية المزدوجة العازلة ونظام الطاقة الشمسية المستدامة.',
    keyFeatures: ['أنظمة تشغيل ذكية', '3 طوابق مواقف مواقف تحت الأرض', 'مهبط طائرات عامودي']
  },
  {
    id: 'proj-2',
    title: 'مجمع الواحة الفاخر للفلل',
    category: 'villas',
    categoryLabel: 'فلل فاخرة',
    location: 'جدة - شاطئ أبحر',
    area: '32,000 م²',
    completionYear: '2024',
    client: 'مجموعة الأفق الاستثمارية',
    value: '95,000,000 ريال',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'مشروع مجمع سكني متكامل يضم 24 فيلا ملكية مطلة مباشرة على البحر مع حدائق خاصة ومسابح انفينيتي.',
    keyFeatures: ['إطلالة بحرية مباشرة', 'أنظمة تحكم ذكية كاملة', 'تشطيبات إيطالية فاخرة']
  },
  {
    id: 'proj-3',
    title: 'مركز رؤية بلازا التجاري',
    category: 'malls',
    categoryLabel: 'مولات تجارية',
    location: 'بغداد - المنصور',
    area: '60,000 م²',
    completionYear: '2025',
    client: 'شركة النماء التجارية',
    value: '65,000,000 دولار',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'مول تجاري حديث يحتوي على 200 صالة عرض، مجمع سينمائي، ومناطق ترفيهية مغلقة للعائلات وفق طراز معماري زجاجي خلاب.',
    keyFeatures: ['أنظمة تكييف حزامية', 'شاشات عرض عملاقة متطورة', 'منطقة مطاعم معلقة']
  },
  {
    id: 'proj-4',
    title: 'مجمع الياسمين السكني',
    category: 'residential',
    categoryLabel: 'مجمعات سكنية',
    location: 'الرياض - حي الياسمين',
    area: '85,000 م²',
    completionYear: '2023',
    client: 'صندوق التنمية العقارية',
    value: '220,000,000 ريال',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'حي سكني مغلق يضم 120 وحدة سكنية مع مساحات خضراء، مركز صحي، ونادي رياضي متكامل للساكنين.',
    keyFeatures: ['حراسة أمنية على مدار الساعة', 'طاقة شمسية للمرافق العامة', 'مساحات مشاة خضراء']
  },
  {
    id: 'proj-5',
    title: 'مشروع الجسر الرئيسي وشبكة الطرق',
    category: 'infrastructure',
    categoryLabel: 'البنية التحتية',
    location: 'الدمام - المنطقة الشرقية',
    area: '12 كيلومتر',
    completionYear: '2024',
    client: 'وزارة النقل والمواصلات',
    value: '140,000,000 ريال',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'تنفيذ أعمال الطرق السريعة وتقاطعات الجسور الخرسانية مع ربط الشبكة الرئيسية بالخدمات والمرافق ذات الصلة.',
    keyFeatures: ['أنظمة إنارة LED ذكية', 'جسور خرسانية سابقة الإجهاد', 'شبكات تصريف مياه الأمطار']
  },
  {
    id: 'proj-6',
    title: 'المقر الرئيسي لشركة التجارة الوطنية',
    category: 'towers',
    categoryLabel: 'مبانٍ إدارية',
    location: 'الرياض - طريق الملك فهد',
    area: '28,000 م²',
    completionYear: '2023',
    client: 'شركة التجارة الوطنية',
    value: '110,000,000 ريال',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'مبنى إداري ذكي بتصميم مستقبلي نال جائزة أفضل تصميم ذكي للشركات لعام 2023.',
    keyFeatures: ['شهادة LEED الفضية', 'واجهات تمنع حرارة الشمس', 'قاعات مؤتمرات هجينة']
  }
];

export const STATS: StatItem[] = [
  {
    id: 'completed-projects',
    number: 250,
    suffix: '+',
    label: 'مشروع منجز',
    description: 'تنفيذ كامل وفق أعلى المقاييس العالمية',
    icon: 'CheckCircle2'
  },
  {
    id: 'satisfied-clients',
    number: 500,
    suffix: '+',
    label: 'عميل وشريك',
    description: 'ثقة نعتز بها في جميع أنحاء المنطقة',
    icon: 'Users'
  },
  {
    id: 'years-experience',
    number: 20,
    suffix: '+',
    label: 'سنة خبرة',
    description: 'مسيرة حافلة بالإنجازات والعطاء المتواصل',
    icon: 'Award'
  },
  {
    id: 'total-employees',
    number: 1000,
    suffix: '+',
    label: 'مهندس وموظف',
    description: 'طاقم عمل متكامل يقود النجاح بكل شغف',
    icon: 'HardHat'
  }
];

export const VALUES: ValueItem[] = [
  {
    id: 'credibility',
    title: 'المصداقية',
    description: 'نضع الشفافية والصدق في تعاملاتنا الأساس الأول لبناء علاقات استراتيجية مستدامة مع عملائنا وشركائنا.',
    icon: 'ShieldCheck',
    stepNumber: '01'
  },
  {
    id: 'quality',
    title: 'الجودة',
    description: 'نعتمد أعلى المعايير الهندسية في اختيار المواد والتنفيذ الفعلي لضمان صلابة واستدامة أصول المشاريع.',
    icon: 'Sparkles',
    stepNumber: '02'
  },
  {
    id: 'professionalism',
    title: 'الاحترافية',
    description: 'كوادر قيادية وفنية متخصصة تدير أدق جوانب العمل من الدراسات الأولية وحتى التسليم الميداني.',
    icon: 'UserCheck',
    stepNumber: '03'
  },
  {
    id: 'commitment',
    title: 'الالتزام',
    description: 'نلتزم التزاماً صارماً بالمواصفات الفنية، شروط العقود، والمعايير البيئية وأمان بيئة العمل.',
    icon: 'CheckSquare',
    stepNumber: '04'
  },
  {
    id: 'precision',
    title: 'الدقة',
    description: 'دقة لا تتنازل في الحسابات الإنشائية والتفاصيل المعمارية التي تضفي طابع التفوق على كل منشأة.',
    icon: 'Target',
    stepNumber: '05'
  },
  {
    id: 'punctuality',
    title: 'التسليم في الوقت',
    description: 'الجدول الزمني خط أحمر لدينا، نضمن إنجاز وتسليم المشاريع في مواعيدها المحددة بدقة متناهية.',
    icon: 'Clock',
    stepNumber: '06'
  }
];

export const PARTNERS: PartnerItem[] = [
  { id: 'p1', name: 'وزارة الشؤون البلدية والقروية', logo: '🏛️', category: 'جهة حكومية معتمدة' },
  { id: 'p2', name: 'الهيئة السعودية للمهندسين', logo: '👷‍♂️', category: 'اعتماد مهني' },
  { id: 'p3', name: 'بنك الراجحي للاستثمار', logo: '🏦', category: 'تمويل وشراكة' },
  { id: 'p4', name: 'شركة سابك للصناعات', logo: '🏗️', category: 'مورد استراتيجي' },
  { id: 'p5', name: 'مجموعة خطيب وعلمي الهندسية', logo: '📐', category: 'استشارات هندسية' },
  { id: 'p6', name: 'شركة حديد سابك', logo: '⚙️', category: 'توريد المواد الأساسية' },
  { id: 'p7', name: 'شركة شنايدر إلكتريك', logo: '⚡', category: 'أنظمة الطاقة والذكاء' },
  { id: 'p8', name: 'مؤسسة التمويل الدولية', logo: '🌐', category: 'شراكة استثمارية' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'المهندس عبد العزيز السلمان',
    role: 'رئيس مجلس الإدارة',
    company: 'مجموعة الأفق الاستثمارية',
    comment: 'تعتبر شركة رؤية الريادة للمقاولات النموذج الأمثل في تنفيذ المشاريع المعقدة. تم تسليم مشروع برجنا السكني قبل موعده المحدد بـ 3 أشهر مع مراعاة كافة أدق التفاصيل الهندسية.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'الدكتور طارق الهاشمي',
    role: 'الرئيس التنفيذي',
    company: 'شركة النماء العقارية',
    comment: 'الاحترافية العالية والدقة الشديدة في التشطيبات هي أهم ما يميز طاقم شركة رؤية الريادة. تعاملنا معهم في عدة مشاريع تجارية وسنستمر دائماً كشركاء نجاح.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'الشيخ منصور الرشيد',
    role: 'مالك مشروع قصور الخزامى',
    company: 'مؤسسة الرشيد للتنمية',
    comment: 'قاموا بتصميم وبناء قصر العائلة بأسلوب أبهر الجميع. جودة البناء العظم واللمسات الأخيرة تجسد معنى الفخامة الحقيقية.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  }
];
