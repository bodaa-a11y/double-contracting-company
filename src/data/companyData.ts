import { ServiceItem, ProjectItem, TestimonialItem, PartnerItem, StatItem, ValueItem } from '../types';

export const COMPANY_INFO = {
  name: 'شركة رؤية الريادة للمقاولات والتطوير العقاري',
  tagline: 'نبني المستقبل بجودة، احترافية، وثقة',
  shortDesc: 'صرح رائد في مجالات المقاولات والتطوير العقاري، يمتلك سنوات من الخبرة والتميز الإنشائي في تنفيذ المشاريع الضخمة والبنى التحتية الشاملة بأعلى معايير الجودة العالمية.',
  phone: '+966555094382',
  phoneDisplay: '055 509 4382',
  phoneAlt: '+966538788603',
  phoneAltDisplay: '053 878 8603',
  email: 'roaiatalriada@gmail.com',
  address: 'الخرج - طريق الملك فهد بن عبد العزيز - حي النهضة',
  mapUrl: 'https://maps.app.goo.gl/V5SMPb4QnMiQXcoc8',
  whatsapp: '966555094382',
  social: {
    linkedin: 'https://www.linkedin.com/in/شركة-رؤية-الريادة-للمقاولات-781408380?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    twitter: 'https://x.com/RAlriada',
    facebook: 'https://www.facebook.com/profile.php?id=61579940692741&locale=ar_AR',
    tiktok: 'https://www.tiktok.com/@roaiatalriada',
  },
  workingHours: {
    weekdays: 'السبت إلى الأربعاء: فترتان (9:00 ص - 12:00 ظهراً) & (4:00 عصراً - 9:00 مساءً)',
    thursday: 'الخميس: نصف يوم (9:00 صباحاً - 1:00 ظهراً)',
    friday: 'الجمعة: العطلة الأسبوعية (مغلق)',
    details: [
      { day: 'السبت', hours: 'فترتان: (9:00 ص - 12:00 ظ) | (4:00 ع - 9:00 م)', status: 'open' },
      { day: 'الأحد', hours: 'فترتان: (9:00 ص - 12:00 ظ) | (4:00 ع - 9:00 م)', status: 'open' },
      { day: 'الاثنين', hours: 'فترتان: (9:00 ص - 12:00 ظ) | (4:00 ع - 9:00 م)', status: 'open' },
      { day: 'الثلاثاء', hours: 'فترتان: (9:00 ص - 12:00 ظ) | (4:00 ع - 9:00 م)', status: 'open' },
      { day: 'الأربعاء', hours: 'فترتان: (9:00 ص - 12:00 ظ) | (4:00 ع - 9:00 م)', status: 'open' },
      { day: 'الخميس', hours: 'فترة واحدة (نصف يوم): (9:00 ص - 1:00 ظ)', status: 'half' },
      { day: 'الجمعة', hours: 'العطلة الأسبوعية (مغلق)', status: 'closed' }
    ]
  },
  stats: {
    projectsCount: 25,
    clientsCount: 150,
    yearsExperience: 2,
    employeesCount: 5,
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
    image: '/general_contracting.jpg',
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
    image: '/finishing_1.jpg'
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
    image: '/infrastructure_work.jpg'
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
    title: 'أبراج ومجمعات حديثة',
    sub: 'مشاريع استثمارية كبرى',
    image: '/general_contracting.jpg',
    desc: 'أبراج ومجمعات شاهقة بارتفاعات قياسية تتوسط أرقَى مناطق الأعمال.'
  },
  {
    id: 'najdi',
    title: 'طراز نجدي فاخر',
    sub: 'أصالة التراث وعراقة البناء',
    image: '/about_construction.jpg',
    desc: 'تصاميم معمارية نجدية تحافظ على الهوية والتراث السعودي بأدق التفاصيل.'
  },
  {
    id: 'residential',
    title: 'مجمعات سكنية',
    sub: 'مجتمعات عمرانية متكاملة',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    desc: 'بيئة سكنية آمنة توفر كافة سبل الرفاهية والحدائق الغنّاء.'
  },
  {
    id: 'finishing',
    title: 'تشطيبات وديكور',
    sub: 'لمسات فنية راقية',
    image: '/finishing_1.jpg',
    desc: 'تشطيبات وديكورات داخلية وخارجية بأعلى مستويات الجودة والجمال.'
  },
  {
    id: 'infrastructure',
    title: 'بنية تحتية',
    sub: 'تأسيس شبكات وطرق',
    image: '/infrastructure_work.jpg',
    desc: 'تأسيس شبكات المياه، الصرف، الطرق، والكهرباء بأعلى كفاءة هندسية.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-villas',
    title: 'مشاريع الفلل والمجمعات السكنية',
    category: 'villas',
    categoryLabel: 'الفلل والمجمعات السكنية',
    location: '',
    area: '25,000 م²',
    completionYear: '2025',
    client: 'مجموعة النخبة العقارية',
    value: '85,000,000 ريال',
    image: '/projects/hanan_1.jpg',
    gallery: [
      '/projects/hanan_1.jpg',
      '/projects/hanan_2.jpg',
      '/projects/hanan_3.jpg',
      '/projects/noura_1.jpg',
      '/projects/noura_2.jpg',
      '/projects/noura_3.jpg',
      '/projects/nudra_extracted_1.jpeg',
      '/projects/nudra_extracted_2.jpeg',
      '/projects/nudra_extracted_3.jpeg',
      '/projects/nudra_extracted_4.jpeg',
      '/projects/nudra_extracted_5.jpeg',
      '/projects/nudra_extracted_6.jpeg',
      '/projects/nudra_extracted_7.jpeg',
      '/projects/nudra_extracted_8.jpeg',
      '/projects/nudra_extracted_9.jpeg',
      '/projects/nudra_extracted_10.jpeg',
      '/projects/nudra_hd_1.jpg',
      '/projects/nudra_hd_2.jpg',
      '/projects/nudra_hd_3.jpg',
      '/projects/nudra_hd_4.jpg',
      '/projects/nudra_hd_5.jpg',
      '/projects/nudra_hd_6.jpg',
      '/projects/nudra_hd_7.jpg',
      '/projects/nudra_hd_8.jpg',
      '/projects/nudra_hd_9.jpg',
      '/projects/nudra_hd_10.jpg'
    ],
    description: 'مشاريع الفلل والمجمعات السكنية تجسد أعلى درجات الفخامة والرفاهية والواجهات المعمارية المودرن مع المساحات الخضراء والإنارة الليلية.',
    keyFeatures: ['تصميم معماري ملكي مخصص', 'تشطيبات فاخرة عالية الجودة', 'حدائق خاصة ومساحات خضراء', 'معرض شامل لصور الفلل']
  },
  {
    id: 'proj-finishing',
    title: 'مشروع التشطيبات والديكورات الداخلية الفاخرة',
    category: 'finishing',
    categoryLabel: 'تشطيبات وديكور',
    location: '',
    area: '8,500 م²',
    completionYear: '2025',
    client: 'مجموعة المشاريع الخاصة',
    value: '18,000,000 ريال',
    image: '/projects/finishing_real_1.jpg',
    gallery: [
      '/projects/finishing_real_1.jpg',
      '/projects/finishing_real_2.jpg',
      '/projects/finishing_real_3.jpg',
      '/projects/finishing_real_4.jpg',
      '/projects/finishing_real_5.jpg',
      '/projects/finishing_real_6.jpg',
      '/projects/finishing_real_7.jpg',
      '/projects/finishing_real_8.jpg',
      '/projects/finishing_real_9.jpg',
      '/projects/finishing_real_10.jpg'
    ],
    description: 'تنفيذ أعمال التشطيبات والديكورات والإنارة المعمارية المخفية وتصميمات الحوائط والأرضيات الرخامية الخشبية للمشاريع الفاخرة.',
    keyFeatures: ['إنارة معمارية مخفية', 'أعمال خشبية ورخامية مودرن', 'دهانات عازلة وجودة تنفيذ رفيعة']
  },
  {
    id: 'proj-najdi-community',
    title: 'مشروع المجمع السكني والتجاري بالطراز النجدي الأصيل',
    category: 'residential',
    categoryLabel: 'مجمعات نجدية سكنية',
    location: '',
    area: '18,000 م²',
    completionYear: '2024',
    client: 'شركة التطوير العمراني',
    value: '45,000,000 ريال',
    image: '/projects/munira_1.jpg',
    gallery: [
      '/projects/munira_1.jpg',
      '/projects/munira_2.jpg',
      '/projects/munira_3.jpg',
      '/projects/villa_real_26.jpg',
      '/projects/villa_real_27.jpg',
      '/projects/villa_real_28.jpg',
      '/projects/villa_real_29.jpg',
      '/projects/villa_real_30.jpg',
      '/projects/villa_real_31.jpg',
      '/projects/villa_real_32.jpg',
      '/projects/villa_real_33.jpg',
      '/projects/villa_real_34.jpg',
      '/projects/villa_real_35.jpg',
      '/projects/villa_real_36.jpg',
      '/projects/villa_real_37.jpg',
      '/projects/villa_real_38.jpg'
    ],
    description: 'مجمع سكني وتجاري بتصميم نجدي أصيل يمزج بين التراث السعودي العريق والتقنيات الإنشائية الحديثة والتشطيبات الملكية.',
    keyFeatures: ['طراز نجدي أصيل', 'تشطيبات دقيقة عالية الجودة', 'عزل حراري ومائي متطور']
  },
  {
    id: 'proj-modern-commercial',
    title: 'مشروع المجمع السكني والتجاري الحديث',
    category: 'towers',
    categoryLabel: 'مجمعات سكنية وتجارية',
    location: '',
    area: '35,000 م²',
    completionYear: '2025',
    client: 'مجموعة الاستثمارات العقارية',
    value: '150,000,000 ريال',
    image: '/projects/althunayan_1.jpg',
    gallery: [
      '/projects/althunayan_1.jpg',
      '/projects/althunayan_2.jpg',
      '/projects/althunayan_3.jpg',
      '/projects/villa_real_9.jpg',
      '/projects/villa_real_10.jpg',
      '/projects/villa_real_11.jpg',
      '/projects/villa_real_12.jpg',
      '/projects/villa_real_13.jpg',
      '/projects/villa_real_19.jpg',
      '/projects/villa_real_20.jpg',
      '/projects/villa_real_21.jpg',
      '/projects/villa_real_22.jpg',
      '/projects/villa_real_23.jpg',
      '/projects/villa_real_24.jpg',
      '/projects/villa_real_25.jpg'
    ],
    description: 'مجمع تجاري وسكني حديث يدمج الإضاءة الليلية الفاخرة والواجهات الزجاجية المتطورة وفق أعلى المعايير المعمارية العالمية.',
    keyFeatures: ['تصميم ليلي ونهاري فاخر', 'واجهات زجاجية حديثة', 'مواقف سيارات متعددة الطوابق']
  },
  {
    id: 'proj-residential-buildings',
    title: 'مشروع المباني والعمارات السكنية والاستثمارية',
    category: 'residential',
    categoryLabel: 'عمارات سكنية',
    location: '',
    area: '12,000 م²',
    completionYear: '2025',
    client: 'شركة التطوير العقاري',
    value: '32,000,000 ريال',
    image: '/projects/khaled_1.jpg',
    gallery: [
      '/projects/khaled_1.jpg',
      '/projects/khaled_2.jpg',
      '/projects/khaled_3.jpg',
      '/projects/villa_real_74.jpg',
      '/projects/villa_real_75.jpg',
      '/projects/villa_real_1.jpg',
      '/projects/villa_real_2.jpg',
      '/projects/villa_real_3.jpg',
      '/projects/villa_real_4.jpg',
      '/projects/villa_real_5.jpg',
      '/projects/villa_real_6.jpg',
      '/projects/villa_real_7.jpg',
      '/projects/villa_real_8.jpg'
    ],
    description: 'مباني وعمارات سكنية وتجارية متكاملة تم تطويرها وفق أحدث معايير البناء المستدام والكود السعودي لضمان أعلى عوائد استثمارية.',
    keyFeatures: ['موقع استراتيجي حيوي', 'مطابق للكود السعودي', 'واجهات عصرية متينة']
  },
  {
    id: 'proj-infrastructure',
    title: 'مشروع البنية التحتية وتمديد الشبكات',
    category: 'infrastructure',
    categoryLabel: 'البنية التحتية',
    location: '',
    area: '15 كيلومتر',
    completionYear: '2024',
    client: 'الجهات الحكومية والمخططات العقارية',
    value: '50,000,000 ريال',
    image: '/projects/infra_real_3.jpg',
    gallery: [
      '/projects/infra_real_3.jpg',
      '/projects/infra_real_1.jpg',
      '/projects/infra_real_2.jpg',
      '/projects/infra_real_4.jpg'
    ],
    description: 'تنفيذ أعمال الحفريات والتسوية وتمديد شبكات المياه والصرف ورصف الطرق للمخططات الحديثة.',
    keyFeatures: ['تنفيذ طبق المواصفات القياسية', 'معدات وإنشاءات ثقيلة', 'إنجاز قياسي وفق الجدول الزمني']
  }
];

export const STATS: StatItem[] = [
  {
    id: 'completed-projects',
    number: 25,
    suffix: '+',
    label: 'مشروع منجز',
    description: 'تنفيذ 25+ مشروعاً بنجاح وفق أعلى المقاييس العالمية',
    icon: 'CheckCircle2'
  },
  {
    id: 'satisfied-clients',
    number: 150,
    suffix: '+',
    label: 'عميل وشريك',
    description: 'ثقة نعتز بها في جميع أنحاء المنطقة',
    icon: 'Users'
  },
  {
    id: 'years-experience',
    number: 2,
    suffix: '+',
    label: 'خبرة عريقة',
    description: 'سنوات حافلة بالإنجازات والعطاء المتواصل',
    icon: 'Award'
  },
  {
    id: 'total-employees',
    number: 5,
    suffix: '+',
    label: 'مهندسين مختصين',
    description: 'نخبة من المهندسين يقودون التنفيذ بكل احترافية',
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
    icon: 'Award',
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
    name: 'Abdulrahman Mohammed',
    role: 'تقييم موثق ★★★★★',
    company: 'مراجعات جوجل Google Reviews',
    comment: 'شركة محترفة وموثوقة، نفذت أعمال العظم بجودة عالية واحترافية، مع التزام بالمواعيد وجودة في التنفيذ. أنصح بالتعامل معها.',
    ownerReply: 'شهادة نعتز بيها م عبدالرحمن وسعدنا بالعمل مع سعادتكم',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Abdulrahman+Mohammed&background=4F46E5&color=fff&bold=true'
  },
  {
    id: 't2',
    name: 'SA',
    role: 'تقييم موثق ★★★★★',
    company: 'مراجعات جوجل Google Reviews',
    comment: 'من تجربتي مع هذه الشركة الرائعة، كانت تجربة ممتازة وشغل نظيف ومتابعة مستمرة وعمل متقن وخاصة م. طارق ، يستحقون الشكر وتكرار العمل معهم.',
    ownerReply: 'شرف لنا العمل مع سعادتكم 🌹',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=SA&background=7C3AED&color=fff&bold=true'
  },
  {
    id: 't3',
    name: 'Mohamed Omr',
    role: 'تقييم موثق ★★★★★',
    company: 'مراجعات جوجل Google Reviews',
    comment: 'من افضل الشركات في الخرج يكفي احترام المهندسين المتواجدين وخاصة المهندس طارق قمة الاحترام والذوق في التعامل.',
    ownerReply: '🌹',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Mohamed+Omr&background=EA580C&color=fff&bold=true'
  },
  {
    id: 't4',
    name: 'Sam Alqahtani',
    role: 'تقييم موثق ★★★★★',
    company: 'مراجعات جوجل Google Reviews',
    comment: 'شركة رائده في مجال الانشاءات بخبرات هندسية كل الشكر للمهندس طارق على الادارة والتعاون.',
    ownerReply: 'اشكرك علي ثقتك الغالية',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sam+Alqahtani&background=059669&color=fff&bold=true'
  }
];
