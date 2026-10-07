export type Locale = "en" | "th";

export const locales: Locale[] = ["en", "th"];
export const defaultLocale: Locale = "en";

export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type SponsorshipItem = {
  name: string;
};

export type SponsorshipCategory = {
  letter: string;
  title: string;
  subtitle: string;
  note?: string;
  items: SponsorshipItem[];
};

/** Locale-invariant values: URLs, addresses in machine form, contact handles. */
export const site = {
  canonicalName: "Hebron Asia Foundation",
  thaiName: "มูลนิธิเฮบรอน เอเชีย",
  phone: "+66 53 774 779",
  phoneHref: "tel:+6653774779",
  email: "hebronasia.u@gmail.com",
  emailHref: "mailto:hebronasia.u@gmail.com",
  haitUrl: "https://haitedu.com/",
  haitLabel: "www.haitedu.com",
  donateUrl: "https://haitedu.com/give/donate/",
  youtubeUrl: "https://www.youtube.com/@HEBRONASIAFOUNDATION",
  facultyUrl: "https://haitedu.com/web/content/page/contact/faculty-faq",
  financialAidUrl:
    "https://haitedu.com/web/content/section/admissions/financial-aid",
};

const en = {
  locale: "en" as Locale,
  site: {
    name: "Hebron Asia Foundation",
    description:
      "Hebron Asia Foundation cultivates global citizens through education, research, and community service from Chiang Rai, Thailand.",
    location: "478 Moo 9, Mueang Chiang Rai, Chiang Rai 57000, Thailand",
    hours: "Monday to Friday, 9am to 5pm",
    donateLabel: "Give at HAIT",
    youtubeLabel: "YouTube",
    values: ["Education", "Innovation"],
    tagline: "Education Transforms Lives",
  },
  ui: {
    skipToContent: "Skip to content",
    menu: "Menu",
    wordmarkName: "Hebron Asia",
    wordmarkRole: "Foundation",
    newTab: " (opens in a new tab)",
    footerInstitute: "HAIT institute",
    languageLabel: "Language",
    languageNames: { en: "English", th: "ไทย" },
    themeLabel: "Appearance",
    lightLabel: "Light",
    darkLabel: "Dark",
    themeSwitchLabel: "Dark mode",
  },
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Our work" },
    { href: "/partner", label: "Partner" },
  ] satisfies SiteLink[],
  home: {
    eyebrow: "A place of alliance · Chiang Rai",
    headline: "Build a Future. Leave a Legacy.",
    lede: "We cultivate global citizens through advanced education—graduates who are globally competent and rooted in their local communities.",
    support:
      "The foundation is the founder and primary funder of Hebron Asia International Institute of Technology (HAIT) in Chiang Rai. Partnership and sponsorship help complete the campus that makes that work possible.",
    primaryCta: {
      label: "Partner with us",
      href: "/partner",
      external: false,
    },
    secondaryCta: {
      label: "About the foundation",
      href: "/about",
      external: false,
    },
    areasHeading: "What we steward",
    areas: [
      {
        index: "01",
        title: "Education",
        body: "Through HAIT we offer Bachelor of Engineering pathways in AI—intelligent systems, cybersecurity, robotics, and business—built for local and international students.",
        link: { label: "Visit HAIT", href: site.haitUrl, external: true },
      },
      {
        index: "02",
        title: "Research",
        body: "We develop AI research and innovation with university partners in Korea and across the region, using Chiang Rai as a practical setting for applied work.",
        link: { label: "See our work", href: "/work", external: false },
      },
      {
        index: "03",
        title: "Community",
        body: "We provide academic and social services, promote multicultural exchange, and support scholarships with partners in Korea, Singapore, Hong Kong, and the United States.",
        link: { label: "Read about us", href: "/about", external: false },
      },
    ],
    motto: {
      quote: "AI is the Future, Learning is Power",
      attribution:
        "Motto of Hebron Asia International Institute of Technology (HAIT)",
      sponsorshipLink: "Explore sponsorship",
    },
  },
  about: {
    title: "About",
    eyebrow: "Who we are",
    lede: "The founder and primary funder of HAIT—a unifying space where local and international students learn together in Chiang Rai.",
    nameHeading: "Why the name",
    nameParagraphs: [
      "Hebron comes from Hebrew and Amorite roots meaning unite, a place of joining, or alliance. We use the name because this work depends on people from different places learning in one community.",
      "The foundation established Hebron Asia International Institute of Technology (HAIT) as that place of alliance—where local and international students meet, study, and put learning to public use.",
    ],
    commitmentHeading: "Founding commitment",
    commitmentParagraphs: [
      "The foundation is led by Chairman Ho Sun Kim, who has pledged his life, talents, network, and resources to founding and growing the institute so the next generation can lead in the twenty-first century.",
      "Hebron Asia Foundation is the primary funding source for HAIT, backed by an initial startup fund of approximately 355 million Thai Baht. A preparatory advisory committee of experts guides academic programs, faculty, labs, and management.",
    ],
    philosophyHeading: "Mission and philosophy",
    philosophyParagraphs: [
      "Our goal is to cultivate global citizens through advanced academic and professional education—people who are globally competent and rooted in their local communities.",
      "The institute motto is “AI is the Future, Learning is Power.”",
    ],
    aimsHeading: "Four-fold mission",
    aimsIntro: "Four aims guide the foundation and the institute.",
    aims: [
      "Cultivate globally competent graduates.",
      "Develop research and innovation in artificial intelligence and related technologies.",
      "Provide academic and social services for the benefit of local and global society.",
      "Promote multicultural understanding and cultural exchange.",
    ],
    partnersHeading: "Partnerships",
    partnersIntro:
      "University and professional agreements help build faculty, research, and student opportunity.",
    partners: [
      {
        when: "November 2023",
        what: "MOU with the Korea Scientists and Engineers Association in Singapore.",
      },
      {
        when: "March 17, 2025",
        what: "Agreement with Dong-Eui University, Korea.",
      },
      {
        when: "March 20, 2025",
        what: "Agreement with Handong Global University, Korea.",
      },
      {
        when: "March 26, 2025",
        what: "Agreements with Korea University and Kwangwoon University, Korea.",
      },
    ],
    partnersNote:
      "Scholarships are supported through a sponsorship association with backing from Korea, Singapore, Hong Kong, and the United States.",
    whereHeading: "Why Chiang Rai",
    whereParagraphs: [
      "The campus is at 478 Moo 9, Mueang Chiang Rai, Thailand, on 35 rai, 3 ngan, and 13.2 square wah, planned for up to 1,200 students.",
      "Chiang Rai was chosen because it is safe and affordable; serves as a practical lab for smart-city research; is emerging as an AI research hub; offers innovative governance; and is a strategic base for regional collaboration across Southeast Asia.",
    ],
    campusHeading: "Campus development",
    campusParagraphs: [
      "The dedication ceremony for HAIT’s first building—the administrative building—took place on March 1, 2025. Construction of the first dormitory and further campus development are underway.",
      "Planned facilities include a generative AI lab, robotics lab, smart classrooms, a data center, and cloud resources. Admissions and day-to-day institute life are published on the institute site.",
    ],
    campusLinkLabel: "Visit the institute",
    facts: [
      { label: "Campus address", value: "478 Moo 9, Mueang Chiang Rai" },
      { label: "Land area", value: "35 rai, 3 ngan, 13.2 sq wah" },
      { label: "Student capacity", value: "Up to 1,200" },
      { label: "Startup fund", value: "Approx. 355 million THB" },
      { label: "First building dedicated", value: "March 1, 2025" },
      { label: "Chairman", value: "Ho Sun Kim" },
    ],
  },
  work: {
    title: "Our work",
    eyebrow: "Education, research, service",
    lede: "Through HAIT, the foundation advances AI education, research partnerships, community service, and affordable access for students.",
    sections: [
      {
        eyebrow: "Education",
        title: "Programs at HAIT",
        paragraphs: [
          "HAIT offers Bachelor of Engineering pathways in artificial intelligence, including AI for intelligent systems, cybersecurity, robotics, and business.",
          "The four-year structure builds foundations in years one and two, specialization in year three, and a capstone or internship in year four.",
          "Programs, admissions, and campus news are published on the institute site.",
        ],
        link: {
          label: "Visit the institute",
          href: site.haitUrl,
          external: true,
        },
        list: [
          "AI for Intelligent Systems",
          "Artificial Intelligence for Cybersecurity",
          "Artificial Intelligence for Robotics",
          "Artificial Intelligence for Business",
        ] as string[] | undefined,
      },
      {
        eyebrow: "Research",
        title: "Labs and partnerships",
        paragraphs: [
          "We develop AI research and innovation with university partners in the region. Planned facilities include a generative AI lab, robotics lab, smart classrooms, a data center, and cloud resources.",
          "Chiang Rai also serves as a practical setting for applied work such as smart-city development. A project proposal can be sent to the foundation directly.",
        ],
        link: { label: "Partner with us", href: "/partner", external: false },
        list: undefined,
      },
      {
        eyebrow: "Access",
        title: "Affordability and scholarships",
        paragraphs: [
          "Thai government support is available to students. Tuition can be paid in installments, and scholarships are offered annually.",
          "Scholarship support is organized through a sponsorship association with backing from Korea, Singapore, Hong Kong, and the United States.",
        ],
        link: {
          label: "Financial aid at HAIT",
          href: site.financialAidUrl,
          external: true,
        },
        list: undefined,
      },
      {
        eyebrow: "Community",
        title: "Service and exchange",
        paragraphs: [
          "We provide academic and social services for local and global society, and promote multicultural understanding and cultural exchange among students and educators from many countries.",
        ],
        link: {
          label: "About the foundation",
          href: "/about",
          external: false,
        },
        list: undefined,
      },
    ],
  },
  partner: {
    title: "Partner",
    eyebrow: "Partnership and sponsorship",
    headline: "Build a Future. Leave a Legacy.",
    lede: "Choose an opportunity to build the future together—sponsor a facility, a room, or the equipment that makes learning possible.",
    introHeading: "Partner with the foundation",
    intro:
      "These giving levels help complete the HAIT campus. Select a facility, room, or item to sponsor, then tell us how you would like your gift recognized. You can also give online through the institute.",
    donateCta: {
      label: "Give at HAIT",
      href: site.donateUrl,
      external: true,
    },
    impact:
      "Your gift is more than a building, a room, or a piece of equipment. It is an investment in the education and future of the next generation.",
    pillars: [
      {
        title: "HAIT Sponsorship Opportunities",
        body: "Choose an opportunity to build the future together.",
      },
      {
        title: "Equip Today. Empower Tomorrow.",
        body: "Every item makes a difference.",
      },
      {
        title: "A Place to Learn, Grow and Belong",
        body: "Support the spaces that nurture the next generation.",
      },
    ],
    opportunitiesHeading: "Sponsorship opportunities",
    opportunitiesSupport:
      "Categories A–H. Amounts are confirmed with the foundation when you inquire.",
    otherWaysHeading: "Other ways to take part",
    categories: [
      {
        letter: "A",
        title: "Facility Naming Sponsorship",
        subtitle: "Name a Landmark. Shape a Legacy.",
        note: "Facility naming opportunities include recognition for the sponsor.",
        items: [
          { name: "300-Seat Assembly Hall" },
          { name: "Logos Library" },
          { name: "Computer Lab" },
          { name: "Robotics Lab" },
          { name: "Embedded Systems Lab" },
          { name: "Café" },
          { name: "Cafeteria" },
        ],
      },
      {
        letter: "B",
        title: "Room Sponsorship",
        subtitle: "Create Spaces Where Students Thrive",
        note: "Room sponsorships may include naming recognition on site.",
        items: [
          { name: "One Classroom (60 Students)" },
          { name: "One Student Dormitory Room (3 Students)" },
          { name: "One Faculty Guest Room" },
          { name: "One Professor’s Office" },
          { name: "One Meeting Room" },
        ],
      },
      {
        letter: "C",
        title: "Classroom Sponsorship",
        subtitle: "Equip Minds. Inspire Discovery.",
        items: [
          { name: "Student Desk & Chair" },
          { name: "Teacher Desk & Chair" },
          { name: "Whiteboard" },
          { name: "Projector" },
          { name: "Air Conditioner" },
          { name: "Complete Classroom Package" },
        ],
      },
      {
        letter: "D",
        title: "Computer & AI Lab Sponsorship",
        subtitle: "Power Innovation Through Technology",
        items: [
          { name: "Desktop Computer" },
          { name: "High-Performance AI Computer" },
          { name: "Computer Monitor" },
          { name: "Networking Equipment" },
          { name: "Robotics Equipment" },
          { name: "Complete Computer Lab" },
        ],
      },
      {
        letter: "E",
        title: "Student Dormitory Sponsorship",
        subtitle: "A Home Away From Home",
        items: [
          { name: "Complete Student Dormitory Room" },
          { name: "Bed" },
          { name: "Mattress" },
          { name: "Wardrobe" },
          { name: "Student Desk & Chair" },
        ],
      },
      {
        letter: "F",
        title: "Faculty Guest Room Sponsorship",
        subtitle: "Hospitality Builds Connections",
        items: [
          { name: "Complete Faculty Guest Room" },
          { name: "Bed" },
          { name: "Wardrobe" },
          { name: "Refrigerator" },
          { name: "Television" },
          { name: "Air Conditioner" },
        ],
      },
      {
        letter: "G",
        title: "Library Sponsorship",
        subtitle: "Help Build the Logos Library",
        items: [
          { name: "Bookshelf" },
          { name: "Reading Table & Chairs" },
          { name: "Computer" },
          { name: "Library Books" },
          { name: "Digital Library Equipment" },
          { name: "Complete Library" },
        ],
      },
      {
        letter: "H",
        title: "Café & Cafeteria Sponsorship",
        subtitle: "Nourish Our Students and Community",
        items: [
          { name: "Dining Table & Chairs" },
          { name: "Refrigerator" },
          { name: "Food Service Equipment" },
          { name: "Kitchen Equipment" },
          { name: "Café Equipment" },
          { name: "Complete Café" },
          { name: "Complete Cafeteria" },
        ],
      },
    ] satisfies SponsorshipCategory[],
    form: {
      heading: "My sponsorship selection",
      prompt: "I / We would like to sponsor:",
      options: [
        "An Entire Facility",
        "One Complete Room",
        "Furniture",
        "Computer / IT Equipment",
        "Educational Equipment",
        "Student Dormitory Equipment",
        "Library Equipment / Books",
        "Café / Cafeteria Equipment",
        "Other",
      ],
      fields: [
        { name: "item", label: "Selected item", type: "text" as const },
        { name: "quantity", label: "Quantity", type: "text" as const },
        {
          name: "amount",
          label: "Sponsorship amount (THB)",
          type: "text" as const,
        },
        {
          name: "donor",
          label: "Donor / organization name",
          type: "text" as const,
        },
        {
          name: "recognition",
          label: "Name to be recognized",
          type: "text" as const,
        },
        { name: "email", label: "Email", type: "email" as const },
        { name: "notes", label: "Notes", type: "textarea" as const },
      ],
      submitLabel: "Send sponsorship inquiry",
      mail: {
        subject: "Sponsorship inquiry",
        interests: "Interests",
        notSpecified: "Not specified",
        notes: "Notes",
      },
    },
    paths: [
      {
        index: "01",
        title: "Teach or collaborate",
        body: "The institute welcomes faculty, including visiting and adjunct teachers. Read the faculty pages, then write to us if you want to talk about teaching or another collaboration.",
        links: [
          {
            label: "Faculty information",
            href: site.facultyUrl,
            external: true,
          },
          { label: site.email, href: site.emailHref },
        ],
      },
      {
        index: "02",
        title: "Research",
        body: "Research collaboration runs through the institute and with university partners, including Human-Inspired AI Research at Korea University. If you have a project to propose, write to the foundation.",
        links: [
          { label: "The institute", href: site.haitUrl, external: true },
          { label: site.email, href: site.emailHref },
        ],
      },
      {
        index: "03",
        title: "Support students",
        body: "Student support is arranged through the institute. Tuition can be paid in installments, Thai government support is available, and scholarships are offered annually—with sponsorship backing from Korea, Singapore, Hong Kong, and the United States. Read the financial aid page, or email the foundation to talk about scholarships or other help.",
        links: [
          {
            label: "Financial aid at HAIT",
            href: site.financialAidUrl,
            external: true,
          },
          { label: "Give at HAIT", href: site.donateUrl, external: true },
          { label: site.email, href: site.emailHref },
        ],
      },
    ],
    contactHeading: "Contact us",
    contactBody:
      "Write or call Hebron Asia Foundation in Chiang Rai. For institute admissions and campus life, visit HAIT.",
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  locale: "th",
  site: {
    name: "มูลนิธิเฮบรอน เอเชีย",
    description:
      "มูลนิธิเฮบรอน เอเชีย บ่มเพาะพลเมืองโลกด้วยการศึกษา การวิจัย และการบริการชุมชน จากจังหวัดเชียงราย ประเทศไทย",
    location: "478 หมู่ 9 อำเภอเมืองเชียงราย จังหวัดเชียงราย 57000 ประเทศไทย",
    hours: "วันจันทร์ถึงวันศุกร์ เวลา 9.00–17.00 น.",
    donateLabel: "บริจาคผ่าน HAIT",
    youtubeLabel: "YouTube",
    values: ["การศึกษา", "นวัตกรรม"],
    tagline: "การศึกษาเปลี่ยนชีวิต",
  },
  ui: {
    skipToContent: "ข้ามไปยังเนื้อหา",
    menu: "เมนู",
    wordmarkName: "เฮบรอน เอเชีย",
    wordmarkRole: "มูลนิธิ",
    newTab: " (เปิดในแท็บใหม่)",
    footerInstitute: "สถาบัน HAIT",
    languageLabel: "ภาษา",
    languageNames: { en: "English", th: "ไทย" },
    themeLabel: "ธีม",
    lightLabel: "สว่าง",
    darkLabel: "มืด",
    themeSwitchLabel: "โหมดมืด",
  },
  nav: [
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/work", label: "งานของเรา" },
    { href: "/partner", label: "ร่วมเป็นพันธมิตร" },
  ],
  home: {
    eyebrow: "สถานที่แห่งการรวมเป็นหนึ่ง · เชียงราย",
    headline: "สร้างอนาคต สร้างมรดกให้คนรุ่นหลัง",
    lede: "เราบ่มเพาะพลเมืองโลกด้วยการศึกษาขั้นสูง เพื่อสร้างบัณฑิตที่มีสมรรถนะระดับสากลและหยั่งรากอยู่ในชุมชนของตน",
    support:
      "มูลนิธิเป็นผู้ก่อตั้งและแหล่งทุนหลักของสถาบันเทคโนโลยีนานาชาติเฮบรอน เอเชีย (HAIT) จังหวัดเชียงราย การร่วมเป็นพันธมิตรและการสนับสนุนจะช่วยให้วิทยาเขตซึ่งเป็นรากฐานของงานนี้สร้างได้จนสำเร็จ",
    primaryCta: {
      label: "ร่วมเป็นพันธมิตรกับเรา",
      href: "/partner",
      external: false,
    },
    secondaryCta: {
      label: "เกี่ยวกับมูลนิธิ",
      href: "/about",
      external: false,
    },
    areasHeading: "สิ่งที่เราดูแล",
    areas: [
      {
        index: "01",
        title: "การศึกษา",
        body: "ที่ HAIT เราเปิดสอนหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาปัญญาประดิษฐ์ ครอบคลุมระบบอัจฉริยะ ความมั่นคงปลอดภัยไซเบอร์ หุ่นยนต์ และธุรกิจ ออกแบบมาเพื่อนักศึกษาไทยและนักศึกษานานาชาติ",
        link: { label: "เยี่ยมชม HAIT", href: site.haitUrl, external: true },
      },
      {
        index: "02",
        title: "การวิจัย",
        body: "เราพัฒนางานวิจัยและนวัตกรรมด้านปัญญาประดิษฐ์ร่วมกับมหาวิทยาลัยพันธมิตรในเกาหลีใต้และทั่วภูมิภาค โดยมีเชียงรายเป็นพื้นที่ทดลองจริงสำหรับงานวิจัยประยุกต์",
        link: { label: "ดูงานของเรา", href: "/work", external: false },
      },
      {
        index: "03",
        title: "ชุมชน",
        body: "เราให้บริการทางวิชาการและสังคม ส่งเสริมการแลกเปลี่ยนพหุวัฒนธรรม และสนับสนุนทุนการศึกษาร่วมกับพันธมิตรในเกาหลีใต้ สิงคโปร์ ฮ่องกง และสหรัฐอเมริกา",
        link: { label: "อ่านเกี่ยวกับเรา", href: "/about", external: false },
      },
    ],
    motto: {
      quote: "AI คืออนาคต การเรียนรู้คือพลัง",
      attribution: "คำขวัญของสถาบันเทคโนโลยีนานาชาติเฮบรอน เอเชีย (HAIT)",
      sponsorshipLink: "ดูโอกาสการสนับสนุน",
    },
  },
  about: {
    title: "เกี่ยวกับเรา",
    eyebrow: "เราคือใคร",
    lede: "มูลนิธิคือผู้ก่อตั้งและแหล่งทุนหลักของ HAIT พื้นที่ซึ่งรวมนักศึกษาไทยและนักศึกษานานาชาติให้เรียนรู้ร่วมกันที่จังหวัดเชียงราย",
    nameHeading: "ที่มาของชื่อ",
    nameParagraphs: [
      "ชื่อเฮบรอน (Hebron) มีรากศัพท์จากภาษาฮีบรูและภาษาอาโมไรต์ หมายถึงการรวมเป็นหนึ่ง สถานที่แห่งการเชื่อมโยง หรือการเป็นพันธมิตร เราเลือกใช้ชื่อนี้เพราะงานของเราต้องอาศัยผู้คนจากต่างถิ่นต่างที่มาเรียนรู้ร่วมกันในชุมชนเดียวกัน",
      "มูลนิธิจึงก่อตั้งสถาบันเทคโนโลยีนานาชาติเฮบรอน เอเชีย (HAIT) ขึ้นเป็นสถานที่แห่งการรวมเป็นหนึ่งนั้น เป็นที่ซึ่งนักศึกษาไทยและนักศึกษานานาชาติได้พบกัน ศึกษาเล่าเรียน และนำความรู้ไปใช้เพื่อประโยชน์ส่วนรวม",
    ],
    commitmentHeading: "ปณิธานของผู้ก่อตั้ง",
    commitmentParagraphs: [
      "มูลนิธิบริหารงานโดยนายโฮ ซุน คิม ประธานกรรมการ ผู้อุทิศชีวิต ความสามารถ เครือข่าย และทรัพยากรของตน เพื่อก่อตั้งและพัฒนาสถาบันแห่งนี้ ให้คนรุ่นต่อไปก้าวขึ้นเป็นผู้นำในศตวรรษที่ 21",
      "มูลนิธิเฮบรอน เอเชีย เป็นแหล่งทุนหลักของ HAIT ด้วยทุนตั้งต้นประมาณ 355 ล้านบาท โดยมีคณะกรรมการที่ปรึกษาเตรียมการซึ่งประกอบด้วยผู้เชี่ยวชาญ ทำหน้าที่ให้คำแนะนำด้านหลักสูตร คณาจารย์ ห้องปฏิบัติการ และการบริหารจัดการ",
    ],
    philosophyHeading: "พันธกิจและปรัชญา",
    philosophyParagraphs: [
      "เป้าหมายของเราคือการบ่มเพาะพลเมืองโลกด้วยการศึกษาขั้นสูงทั้งทางวิชาการและวิชาชีพ ให้เป็นผู้ที่มีสมรรถนะระดับสากลและหยั่งรากอยู่ในชุมชนของตน",
      "คำขวัญของสถาบันคือ “AI คืออนาคต การเรียนรู้คือพลัง”",
    ],
    aimsHeading: "พันธกิจสี่ประการ",
    aimsIntro: "เป้าหมายสี่ประการที่ชี้นำการทำงานของมูลนิธิและสถาบัน",
    aims: [
      "ผลิตบัณฑิตที่มีสมรรถนะระดับสากล",
      "พัฒนางานวิจัยและนวัตกรรมด้านปัญญาประดิษฐ์และเทคโนโลยีที่เกี่ยวข้อง",
      "ให้บริการทางวิชาการและสังคมเพื่อประโยชน์ของสังคมท้องถิ่นและสังคมโลก",
      "ส่งเสริมความเข้าใจพหุวัฒนธรรมและการแลกเปลี่ยนทางวัฒนธรรม",
    ],
    partnersHeading: "ความร่วมมือ",
    partnersIntro:
      "ข้อตกลงกับมหาวิทยาลัยและองค์กรวิชาชีพช่วยเสริมสร้างคณาจารย์ งานวิจัย และโอกาสของนักศึกษา",
    partners: [
      {
        when: "พฤศจิกายน 2566",
        what: "บันทึกความเข้าใจกับสมาคมนักวิทยาศาสตร์และวิศวกรเกาหลีในสิงคโปร์",
      },
      {
        when: "17 มีนาคม 2568",
        what: "ข้อตกลงกับมหาวิทยาลัยทงอึย (Dong-Eui University) เกาหลีใต้",
      },
      {
        when: "20 มีนาคม 2568",
        what: "ข้อตกลงกับมหาวิทยาลัยฮันดงโกลบอล (Handong Global University) เกาหลีใต้",
      },
      {
        when: "26 มีนาคม 2568",
        what: "ข้อตกลงกับมหาวิทยาลัยเกาหลี (Korea University) และมหาวิทยาลัยควังอุน (Kwangwoon University) เกาหลีใต้",
      },
    ],
    partnersNote:
      "ทุนการศึกษาได้รับการสนับสนุนผ่านสมาคมผู้สนับสนุน โดยมีผู้ร่วมสนับสนุนจากเกาหลีใต้ สิงคโปร์ ฮ่องกง และสหรัฐอเมริกา",
    whereHeading: "ทำไมต้องเชียงราย",
    whereParagraphs: [
      "วิทยาเขตตั้งอยู่ที่ 478 หมู่ 9 อำเภอเมืองเชียงราย ประเทศไทย บนเนื้อที่ 35 ไร่ 3 งาน 13.2 ตารางวา วางแผนรองรับนักศึกษาได้ถึง 1,200 คน",
      "เราเลือกเชียงรายเพราะเป็นเมืองที่ปลอดภัยและมีค่าครองชีพที่เหมาะสม เป็นห้องปฏิบัติการจริงสำหรับงานวิจัยเมืองอัจฉริยะ กำลังก้าวขึ้นเป็นศูนย์กลางงานวิจัยด้านปัญญาประดิษฐ์ มีการบริหารจัดการเมืองที่สร้างสรรค์ และเป็นฐานยุทธศาสตร์สำหรับความร่วมมือในภูมิภาคเอเชียตะวันออกเฉียงใต้",
    ],
    campusHeading: "การพัฒนาวิทยาเขต",
    campusParagraphs: [
      "พิธีเปิดอาคารหลังแรกของ HAIT ซึ่งเป็นอาคารอำนวยการ จัดขึ้นเมื่อวันที่ 1 มีนาคม 2568 ขณะนี้การก่อสร้างหอพักหลังแรกและการพัฒนาวิทยาเขตในระยะต่อไปกำลังดำเนินอยู่",
      "สิ่งอำนวยความสะดวกที่วางแผนไว้ ได้แก่ ห้องปฏิบัติการ Generative AI ห้องปฏิบัติการหุ่นยนต์ ห้องเรียนอัจฉริยะ ศูนย์ข้อมูล และทรัพยากรคลาวด์ ข้อมูลการรับสมัครและชีวิตในสถาบันเผยแพร่อยู่บนเว็บไซต์ของสถาบัน",
    ],
    campusLinkLabel: "เยี่ยมชมเว็บไซต์สถาบัน",
    facts: [
      { label: "ที่ตั้งวิทยาเขต", value: "478 หมู่ 9 อำเภอเมืองเชียงราย" },
      { label: "เนื้อที่", value: "35 ไร่ 3 งาน 13.2 ตารางวา" },
      { label: "รองรับนักศึกษา", value: "สูงสุด 1,200 คน" },
      { label: "ทุนตั้งต้น", value: "ประมาณ 355 ล้านบาท" },
      { label: "เปิดอาคารหลังแรก", value: "1 มีนาคม 2568" },
      { label: "ประธานกรรมการ", value: "นายโฮ ซุน คิม" },
    ],
  },
  work: {
    title: "งานของเรา",
    eyebrow: "การศึกษา การวิจัย การบริการ",
    lede: "มูลนิธิขับเคลื่อนการศึกษาด้านปัญญาประดิษฐ์ ความร่วมมือด้านการวิจัย การบริการชุมชน และโอกาสทางการศึกษาที่นักศึกษาเข้าถึงได้ ผ่านการดำเนินงานของ HAIT",
    sections: [
      {
        eyebrow: "การศึกษา",
        title: "หลักสูตรที่ HAIT",
        paragraphs: [
          "HAIT เปิดสอนหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาปัญญาประดิษฐ์ ครอบคลุมปัญญาประดิษฐ์สำหรับระบบอัจฉริยะ ความมั่นคงปลอดภัยไซเบอร์ หุ่นยนต์ และธุรกิจ",
          "หลักสูตรสี่ปีวางพื้นฐานในชั้นปีที่ 1 และ 2 เรียนวิชาเฉพาะทางในชั้นปีที่ 3 และทำโครงงานจบการศึกษาหรือฝึกงานในชั้นปีที่ 4",
          "รายละเอียดหลักสูตร การรับสมัคร และข่าวสารวิทยาเขต เผยแพร่อยู่บนเว็บไซต์ของสถาบัน",
        ],
        link: {
          label: "เยี่ยมชมเว็บไซต์สถาบัน",
          href: site.haitUrl,
          external: true,
        },
        list: [
          "ปัญญาประดิษฐ์สำหรับระบบอัจฉริยะ",
          "ปัญญาประดิษฐ์สำหรับความมั่นคงปลอดภัยไซเบอร์",
          "ปัญญาประดิษฐ์สำหรับหุ่นยนต์",
          "ปัญญาประดิษฐ์สำหรับธุรกิจ",
        ],
      },
      {
        eyebrow: "การวิจัย",
        title: "ห้องปฏิบัติการและความร่วมมือ",
        paragraphs: [
          "เราพัฒนางานวิจัยและนวัตกรรมด้านปัญญาประดิษฐ์ร่วมกับมหาวิทยาลัยพันธมิตรในภูมิภาค สิ่งอำนวยความสะดวกที่วางแผนไว้ ได้แก่ ห้องปฏิบัติการ Generative AI ห้องปฏิบัติการหุ่นยนต์ ห้องเรียนอัจฉริยะ ศูนย์ข้อมูล และทรัพยากรคลาวด์",
          "เชียงรายยังเป็นพื้นที่ทดลองจริงสำหรับงานวิจัยประยุกต์ เช่น การพัฒนาเมืองอัจฉริยะ ท่านสามารถส่งข้อเสนอโครงการมายังมูลนิธิได้โดยตรง",
        ],
        link: {
          label: "ร่วมเป็นพันธมิตรกับเรา",
          href: "/partner",
          external: false,
        },
        list: undefined,
      },
      {
        eyebrow: "การเข้าถึง",
        title: "ค่าเล่าเรียนที่เข้าถึงได้และทุนการศึกษา",
        paragraphs: [
          "นักศึกษาสามารถรับการสนับสนุนจากรัฐบาลไทย ผ่อนชำระค่าเล่าเรียนเป็นงวดได้ และมีทุนการศึกษามอบให้ทุกปี",
          "ทุนการศึกษาจัดสรรผ่านสมาคมผู้สนับสนุน โดยมีผู้ร่วมสนับสนุนจากเกาหลีใต้ สิงคโปร์ ฮ่องกง และสหรัฐอเมริกา",
        ],
        link: {
          label: "ทุนช่วยเหลือการศึกษาที่ HAIT",
          href: site.financialAidUrl,
          external: true,
        },
        list: undefined,
      },
      {
        eyebrow: "ชุมชน",
        title: "การบริการและการแลกเปลี่ยน",
        paragraphs: [
          "เราให้บริการทางวิชาการและสังคมเพื่อประโยชน์ของสังคมท้องถิ่นและสังคมโลก พร้อมส่งเสริมความเข้าใจพหุวัฒนธรรมและการแลกเปลี่ยนทางวัฒนธรรมระหว่างนักศึกษาและนักการศึกษาจากหลายประเทศ",
        ],
        link: {
          label: "เกี่ยวกับมูลนิธิ",
          href: "/about",
          external: false,
        },
        list: undefined,
      },
    ],
  },
  partner: {
    title: "ร่วมเป็นพันธมิตร",
    eyebrow: "ความร่วมมือและการสนับสนุน",
    headline: "สร้างอนาคต สร้างมรดกให้คนรุ่นหลัง",
    lede: "เลือกโอกาสในการสร้างอนาคตร่วมกัน ไม่ว่าจะเป็นการสนับสนุนอาคาร ห้อง หรืออุปกรณ์ที่ทำให้การเรียนรู้เกิดขึ้นได้",
    introHeading: "ร่วมเป็นพันธมิตรกับมูลนิธิ",
    intro:
      "ระดับการสนับสนุนเหล่านี้ช่วยให้วิทยาเขต HAIT สร้างได้จนสำเร็จ เลือกอาคาร ห้อง หรือรายการที่ท่านประสงค์จะสนับสนุน แล้วแจ้งให้เราทราบว่าท่านต้องการให้ประกาศเกียรติคุณในนามใด ทั้งนี้ท่านสามารถบริจาคออนไลน์ผ่านสถาบันได้เช่นกัน",
    donateCta: {
      label: "บริจาคผ่าน HAIT",
      href: site.donateUrl,
      external: true,
    },
    impact:
      "การสนับสนุนของท่านมีความหมายมากกว่าอาคาร ห้อง หรืออุปกรณ์หนึ่งชิ้น เพราะคือการลงทุนในการศึกษาและอนาคตของคนรุ่นต่อไป",
    pillars: [
      {
        title: "โอกาสการสนับสนุน HAIT",
        body: "เลือกโอกาสในการสร้างอนาคตร่วมกัน",
      },
      {
        title: "สนับสนุนวันนี้ เสริมพลังวันพรุ่งนี้",
        body: "ทุกรายการล้วนสร้างความเปลี่ยนแปลง",
      },
      {
        title: "พื้นที่แห่งการเรียนรู้ เติบโต และเป็นส่วนหนึ่ง",
        body: "สนับสนุนพื้นที่ที่บ่มเพาะคนรุ่นต่อไป",
      },
    ],
    opportunitiesHeading: "โอกาสการสนับสนุน",
    opportunitiesSupport:
      "หมวด A–H จำนวนเงินสนับสนุนจะยืนยันร่วมกับมูลนิธิเมื่อท่านติดต่อสอบถาม",
    otherWaysHeading: "ช่องทางอื่นในการมีส่วนร่วม",
    categories: [
      {
        letter: "A",
        title: "การสนับสนุนการตั้งชื่ออาคาร",
        subtitle: "ตั้งชื่ออาคารสำคัญ สร้างมรดกที่ยั่งยืน",
        note: "การตั้งชื่ออาคารรวมถึงการประกาศเกียรติคุณผู้สนับสนุน",
        items: [
          { name: "หอประชุม 300 ที่นั่ง" },
          { name: "ห้องสมุดโลโกส" },
          { name: "ห้องปฏิบัติการคอมพิวเตอร์" },
          { name: "ห้องปฏิบัติการหุ่นยนต์" },
          { name: "ห้องปฏิบัติการระบบฝังตัว" },
          { name: "คาเฟ่" },
          { name: "โรงอาหาร" },
        ],
      },
      {
        letter: "B",
        title: "การสนับสนุนห้อง",
        subtitle: "สร้างพื้นที่ให้นักศึกษาเติบโต",
        note: "การสนับสนุนห้องอาจรวมถึงการติดป้ายชื่อผู้สนับสนุนในสถานที่",
        items: [
          { name: "ห้องเรียน 1 ห้อง (60 คน)" },
          { name: "ห้องพักนักศึกษา 1 ห้อง (3 คน)" },
          { name: "ห้องพักรับรองคณาจารย์ 1 ห้อง" },
          { name: "ห้องทำงานอาจารย์ 1 ห้อง" },
          { name: "ห้องประชุม 1 ห้อง" },
        ],
      },
      {
        letter: "C",
        title: "การสนับสนุนห้องเรียน",
        subtitle: "เติมเต็มความรู้ จุดประกายการค้นพบ",
        items: [
          { name: "โต๊ะและเก้าอี้นักศึกษา" },
          { name: "โต๊ะและเก้าอี้อาจารย์" },
          { name: "ไวท์บอร์ด" },
          { name: "โปรเจกเตอร์" },
          { name: "เครื่องปรับอากาศ" },
          { name: "ห้องเรียนครบชุด" },
        ],
      },
      {
        letter: "D",
        title: "การสนับสนุนห้องปฏิบัติการคอมพิวเตอร์และปัญญาประดิษฐ์",
        subtitle: "ขับเคลื่อนนวัตกรรมด้วยเทคโนโลยี",
        items: [
          { name: "คอมพิวเตอร์ตั้งโต๊ะ" },
          { name: "คอมพิวเตอร์สมรรถนะสูงสำหรับงาน AI" },
          { name: "จอคอมพิวเตอร์" },
          { name: "อุปกรณ์เครือข่าย" },
          { name: "อุปกรณ์หุ่นยนต์" },
          { name: "ห้องปฏิบัติการคอมพิวเตอร์ครบชุด" },
        ],
      },
      {
        letter: "E",
        title: "การสนับสนุนหอพักนักศึกษา",
        subtitle: "บ้านหลังที่สองของนักศึกษา",
        items: [
          { name: "ห้องพักนักศึกษาครบชุด" },
          { name: "เตียง" },
          { name: "ที่นอน" },
          { name: "ตู้เสื้อผ้า" },
          { name: "โต๊ะและเก้าอี้นักศึกษา" },
        ],
      },
      {
        letter: "F",
        title: "การสนับสนุนห้องพักรับรองคณาจารย์",
        subtitle: "การต้อนรับที่ดีสร้างความสัมพันธ์",
        items: [
          { name: "ห้องพักรับรองคณาจารย์ครบชุด" },
          { name: "เตียง" },
          { name: "ตู้เสื้อผ้า" },
          { name: "ตู้เย็น" },
          { name: "โทรทัศน์" },
          { name: "เครื่องปรับอากาศ" },
        ],
      },
      {
        letter: "G",
        title: "การสนับสนุนห้องสมุด",
        subtitle: "ร่วมสร้างห้องสมุดโลโกส",
        items: [
          { name: "ชั้นหนังสือ" },
          { name: "โต๊ะอ่านหนังสือและเก้าอี้" },
          { name: "คอมพิวเตอร์" },
          { name: "หนังสือสำหรับห้องสมุด" },
          { name: "อุปกรณ์ห้องสมุดดิจิทัล" },
          { name: "ห้องสมุดครบชุด" },
        ],
      },
      {
        letter: "H",
        title: "การสนับสนุนคาเฟ่และโรงอาหาร",
        subtitle: "ดูแลนักศึกษาและชุมชนของเรา",
        items: [
          { name: "โต๊ะและเก้าอี้รับประทานอาหาร" },
          { name: "ตู้เย็น" },
          { name: "อุปกรณ์บริการอาหาร" },
          { name: "อุปกรณ์ครัว" },
          { name: "อุปกรณ์คาเฟ่" },
          { name: "คาเฟ่ครบชุด" },
          { name: "โรงอาหารครบชุด" },
        ],
      },
    ],
    form: {
      heading: "รายการที่ข้าพเจ้าประสงค์จะสนับสนุน",
      prompt: "ข้าพเจ้า / เรา ประสงค์จะสนับสนุน:",
      options: [
        "อาคารทั้งหลัง",
        "ห้องครบชุด 1 ห้อง",
        "เฟอร์นิเจอร์",
        "คอมพิวเตอร์ / อุปกรณ์ไอที",
        "อุปกรณ์การศึกษา",
        "อุปกรณ์หอพักนักศึกษา",
        "อุปกรณ์ / หนังสือห้องสมุด",
        "อุปกรณ์คาเฟ่ / โรงอาหาร",
        "อื่น ๆ",
      ],
      fields: [
        { name: "item", label: "รายการที่เลือก", type: "text" },
        { name: "quantity", label: "จำนวน", type: "text" },
        { name: "amount", label: "จำนวนเงินสนับสนุน (บาท)", type: "text" },
        { name: "donor", label: "ชื่อผู้สนับสนุน / องค์กร", type: "text" },
        {
          name: "recognition",
          label: "ชื่อที่ต้องการให้ปรากฏในการประกาศเกียรติคุณ",
          type: "text",
        },
        { name: "email", label: "อีเมล", type: "email" },
        { name: "notes", label: "หมายเหตุ", type: "textarea" },
      ],
      submitLabel: "ส่งคำสอบถามการสนับสนุน",
      mail: {
        subject: "คำสอบถามการสนับสนุน",
        interests: "ความสนใจ",
        notSpecified: "ไม่ระบุ",
        notes: "หมายเหตุ",
      },
    },
    paths: [
      {
        index: "01",
        title: "ร่วมสอนหรือร่วมงานกับเรา",
        body: "สถาบันยินดีต้อนรับคณาจารย์ รวมถึงอาจารย์รับเชิญและอาจารย์พิเศษ โปรดอ่านข้อมูลสำหรับคณาจารย์ แล้วติดต่อเราหากท่านสนใจร่วมสอนหรือร่วมงานในรูปแบบอื่น",
        links: [
          {
            label: "ข้อมูลสำหรับคณาจารย์",
            href: site.facultyUrl,
            external: true,
          },
          { label: site.email, href: site.emailHref },
        ],
      },
      {
        index: "02",
        title: "ร่วมวิจัย",
        body: "ความร่วมมือด้านการวิจัยดำเนินการผ่านสถาบันและมหาวิทยาลัยพันธมิตร รวมถึงงานวิจัย Human-Inspired AI ที่มหาวิทยาลัยเกาหลี (Korea University) หากท่านมีโครงการที่ต้องการเสนอ โปรดติดต่อมายังมูลนิธิ",
        links: [
          { label: "เว็บไซต์สถาบัน", href: site.haitUrl, external: true },
          { label: site.email, href: site.emailHref },
        ],
      },
      {
        index: "03",
        title: "สนับสนุนนักศึกษา",
        body: "การสนับสนุนนักศึกษาดำเนินการผ่านสถาบัน ค่าเล่าเรียนผ่อนชำระเป็นงวดได้ มีการสนับสนุนจากรัฐบาลไทย และมีทุนการศึกษามอบให้ทุกปี โดยมีผู้ร่วมสนับสนุนจากเกาหลีใต้ สิงคโปร์ ฮ่องกง และสหรัฐอเมริกา โปรดอ่านหน้าทุนช่วยเหลือการศึกษา หรือติดต่อมูลนิธิทางอีเมลเพื่อพูดคุยเรื่องทุนการศึกษาหรือความช่วยเหลือในรูปแบบอื่น",
        links: [
          {
            label: "ทุนช่วยเหลือการศึกษาที่ HAIT",
            href: site.financialAidUrl,
            external: true,
          },
          { label: "บริจาคผ่าน HAIT", href: site.donateUrl, external: true },
          { label: site.email, href: site.emailHref },
        ],
      },
    ],
    contactHeading: "ติดต่อเรา",
    contactBody:
      "ติดต่อมูลนิธิเฮบรอน เอเชีย ที่จังหวัดเชียงราย ทางจดหมายหรือโทรศัพท์ สำหรับข้อมูลการรับสมัครและชีวิตในวิทยาเขต โปรดเยี่ยมชมเว็บไซต์ของ HAIT",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, th };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
