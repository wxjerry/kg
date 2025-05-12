export type Language = "zh" | "en" | "kg"

export type TranslationKey =
  | "home"
  | "news"
  | "admissions"
  | "about"
  | "readMore"
  | "applyNow"
  | "learnMore"
  | "welcomeTitle"
  | "welcomeDescription"
  | "qualityEducation"
  | "qualityEducationDesc"
  | "innovativeResearch"
  | "innovativeResearchDesc"
  | "globalNetwork"
  | "globalNetworkDesc"
  | "latestNews"
  | "viewAll"
  | "joinUs"
  | "joinUsDesc"
  | "newsPageTitle"
  | "newsPageDesc"
  | "admissionsTitle"
  | "admissionsDesc"
  | "ourPrograms"
  | "undergraduate"
  | "graduate"
  | "duration"
  | "computerScience"
  | "computerScienceDesc"
  | "softwareEngineering"
  | "softwareEngineeringDesc"
  | "artificialIntelligence"
  | "artificialIntelligenceDesc"
  | "networkSecurity"
  | "networkSecurityDesc"
  | "applicationRequirements"
  | "undergraduateRequirements"
  | "graduateRequirements"
  | "applicationProcess"
  | "onlineApplication"
  | "applicationReview"
  | "interview"
  | "admissionNotice"
  | "confirmEnrollment"
  | "estimatedTime"
  | "readyToApply"
  | "readyToApplyDesc"
  | "startApplication"
  | "contactAdmissions"
  | "aboutUsTitle"
  | "aboutUsDesc"
  | "foundingYear"
  | "foundingYearDesc"
  | "studentCount"
  | "studentCountDesc"
  | "facultyCount"
  | "facultyCountDesc"
  | "campusArea"
  | "campusAreaDesc"
  | "ourHistory"
  | "historyPara1"
  | "historyPara2"
  | "historyPara3"
  | "historyPara4"
  | "historyPara5"
  | "missionVision"
  | "ourMission"
  | "ourMissionDesc"
  | "ourVision"
  | "ourVisionDesc"
  | "ourFaculty"
  | "ourCampus"
  | "modernTeachingBuilding"
  | "modernTeachingBuildingDesc"
  | "techInnovationCenter"
  | "techInnovationCenterDesc"
  | "digitalLibrary"
  | "digitalLibraryDesc"
  | "studentDormitory"
  | "studentDormitoryDesc"
  | "ourPartners"
  | "copyright"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  zh: {
    home: "主页",
    news: "新闻",
    admissions: "招生",
    about: "关于",
    readMore: "阅读更多",
    applyNow: "申请入学",
    learnMore: "了解更多",
    welcomeTitle: "欢迎来到吉尔吉斯斯坦软件与科技大学",
    welcomeDescription:
      "吉尔吉斯斯坦软件与科技大学是中亚地区领先的技术教育机构，致力于培养软件开发、人工智能、数据科学和网络安全领域的未来领导者。我们提供创新的课程、先进的实验室和国际化的学习环境，帮助学生在全球数字经济中取得成功。",
    qualityEducation: "优质教育",
    qualityEducationDesc: "由行业专家和学术领袖组成的教师团队，提供最前沿的技术教育",
    innovativeResearch: "创新研究",
    innovativeResearchDesc: "先进的研究实验室和项目，让学生参与解决现实世界的技术挑战",
    globalNetwork: "全球网络",
    globalNetworkDesc: "与全球科技公司和大学的合作伙伴关系，为学生提供国际交流和就业机会",
    latestNews: "最新动态",
    viewAll: "查看全部",
    joinUs: "加入我们，塑造未来",
    joinUsDesc: "在吉尔吉斯斯坦软件与科技大学，我们正在培养下一代技术创新者和领导者。立即申请，开启您的技术教育之旅。",
    newsPageTitle: "新闻动态",
    newsPageDesc: "了解吉尔吉斯斯坦软件与科技大学的最新新闻、活动和公告",
    admissionsTitle: "招生信息",
    admissionsDesc: "加入吉尔吉斯斯坦软件与科技大学，开启您的技术教育之旅",
    ourPrograms: "我们的专业",
    undergraduate: "本科专业",
    graduate: "研究生专业",
    duration: "学制",
    computerScience: "计算机科学",
    computerScienceDesc:
      "该专业涵盖计算机科学的基础理论和实践应用，包括算法设计、数据结构、操作系统、数据库系统等核心课程。",
    softwareEngineering: "软件工程",
    softwareEngineeringDesc: "该专业注重软件开发过程和方法，培养学生在大型软件系统设计、开发、测试和维护方面的能力。",
    artificialIntelligence: "人工智能与机器学习",
    artificialIntelligenceDesc:
      "该专业专注于人工智能和机器学习领域，培养学生在深度学习、自然语言处理、计算机视觉等方面的专业知识和实践能力。",
    networkSecurity: "网络安全",
    networkSecurityDesc: "该专业关注网络和信息系统的安全问题，培养学生在网络防御、密码学、安全审计等方面的专业技能。",
    applicationRequirements: "申请要求",
    undergraduateRequirements: "本科申请要求",
    graduateRequirements: "研究生申请要求",
    applicationProcess: "申请流程",
    onlineApplication: "在线申请",
    applicationReview: "申请审核",
    interview: "面试",
    admissionNotice: "录取通知",
    confirmEnrollment: "确认入学",
    estimatedTime: "预计时间",
    readyToApply: "准备好申请了吗？",
    readyToApplyDesc:
      "我们期待您加入吉尔吉斯斯坦软件与科技大学的大家庭。如果您有任何问题，请随时联系我们的招生办公室。",
    startApplication: "开始申请",
    contactAdmissions: "联系招生办",
    aboutUsTitle: "关于我们",
    aboutUsDesc: "了解吉尔吉斯斯坦软件与科技大学的历史、使命和价值观",
    foundingYear: "成立年份",
    foundingYearDesc: "年轻而充满活力的技术大学",
    studentCount: "学生人数",
    studentCountDesc: "来自25个国家的学生",
    facultyCount: "教师人数",
    facultyCountDesc: "行业专家和学术领袖",
    campusArea: "校园面积",
    campusAreaDesc: "公顷现代化校园",
    ourHistory: "我们的历史",
    historyPara1:
      "吉尔吉斯斯坦软件与科技大学成立于2015年，是中亚地区第一所专注于软件开发和信息技术教育的高等院校。大学由一群来自吉尔吉斯斯坦和国际技术专家共同创立，旨在培养能够在全球数字经济中竞争的技术人才。",
    historyPara2:
      "在短短几年内，我校已经发展成为该地区领先的技术教育机构，与多家国际知名科技公司建立了合作伙伴关系，为学生提供了丰富的学习和实践机会。",
    historyPara3:
      "2018年，我校获得了国家高等教育质量认证，并开始扩大招生规模和专业设置。2020年，我校新建的技术创新中心投入使用，为学生提供了更好的实践和研究环境。",
    historyPara4: "2022年，我校与多家国际知名大学建立了学术交流合作，开始招收国际学生，进一步提升了学校的国际化水平。",
    historyPara5:
      "今天，吉尔吉斯斯坦软件与科技大学继续致力于提供高质量的技术教育，培养具有全球视野和创新能力的技术人才，为中亚地区的数字化转型和经济发展做出贡献。",
    missionVision: "使命与愿景",
    ourMission: "我们的使命",
    ourMissionDesc:
      "通过提供高质量的技术教育和创新研究环境，培养具有全球竞争力的软件开发和信息技术人才，为中亚地区的数字化转型和经济发展做出贡献。",
    ourVision: "我们的愿景",
    ourVisionDesc:
      "成为中亚地区领先的技术教育和研究机构，在全球技术教育领域具有影响力，培养能够引领未来技术创新和数字化转型的领导者。",
    ourFaculty: "我们的师资力量",
    ourCampus: "我们的校园",
    modernTeachingBuilding: "现代化教学楼",
    modernTeachingBuildingDesc:
      "我校拥有现代化的教学楼，配备了先进的教学设备和技术。每个教室都配有高速互联网和多媒体教学系统，为学生提供了良好的学习环境。",
    techInnovationCenter: "技术创新中心",
    techInnovationCenterDesc:
      "2020年建成的技术创新中心是我校的标志性建筑，配备了最先进的实验室和设备，包括人工智能实验室、虚拟现实实验室、网络安全实验室等，为学生提供了丰富的实践机会。",
    digitalLibrary: "数字图书馆",
    digitalLibraryDesc:
      "我校的数字图书馆收藏了丰富的电子资源和纸质书籍，学生可以访问全球领先的学术数据库和期刊。图书馆还设有舒适的学习空间和讨论区，为学生提供了良好的学习环境。",
    studentDormitory: "学生宿舍",
    studentDormitoryDesc:
      "我校为学生提供了现代化的宿舍，每个宿舍都配备了高速互联网和基本生活设施。宿舍区还设有公共活动区域、健身房和自习室，为学生提供了舒适的生活环境。",
    ourPartners: "我们的合作伙伴",
    copyright: "版权所有",
  },
  en: {
    home: "Home",
    news: "News",
    admissions: "Admissions",
    about: "About",
    readMore: "Read More",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    welcomeTitle: "Welcome to Kyrgyzstan University of Software and Technology",
    welcomeDescription:
      "Kyrgyzstan University of Software and Technology is a leading technical education institution in Central Asia, dedicated to cultivating future leaders in software development, artificial intelligence, data science, and cybersecurity. We offer innovative courses, advanced laboratories, and an international learning environment to help students succeed in the global digital economy.",
    qualityEducation: "Quality Education",
    qualityEducationDesc:
      "A faculty team of industry experts and academic leaders providing cutting-edge technical education",
    innovativeResearch: "Innovative Research",
    innovativeResearchDesc:
      "Advanced research laboratories and projects that engage students in solving real-world technical challenges",
    globalNetwork: "Global Network",
    globalNetworkDesc:
      "Partnerships with global tech companies and universities, providing students with international exchange and employment opportunities",
    latestNews: "Latest News",
    viewAll: "View All",
    joinUs: "Join Us, Shape the Future",
    joinUsDesc:
      "At Kyrgyzstan University of Software and Technology, we are cultivating the next generation of technology innovators and leaders. Apply now to begin your technical education journey.",
    newsPageTitle: "News",
    newsPageDesc:
      "Learn about the latest news, events, and announcements from Kyrgyzstan University of Software and Technology",
    admissionsTitle: "Admissions Information",
    admissionsDesc: "Join Kyrgyzstan University of Software and Technology and begin your technical education journey",
    ourPrograms: "Our Programs",
    undergraduate: "Undergraduate Programs",
    graduate: "Graduate Programs",
    duration: "Duration",
    computerScience: "Computer Science",
    computerScienceDesc:
      "This program covers the fundamental theories and practical applications of computer science, including algorithm design, data structures, operating systems, database systems, and other core courses.",
    softwareEngineering: "Software Engineering",
    softwareEngineeringDesc:
      "This program focuses on software development processes and methodologies, cultivating students' abilities in designing, developing, testing, and maintaining large-scale software systems.",
    artificialIntelligence: "Artificial Intelligence and Machine Learning",
    artificialIntelligenceDesc:
      "This program focuses on the field of artificial intelligence and machine learning, cultivating students' professional knowledge and practical abilities in deep learning, natural language processing, computer vision, and other areas.",
    networkSecurity: "Network Security",
    networkSecurityDesc:
      "This program focuses on network and information system security issues, cultivating students' professional skills in network defense, cryptography, security auditing, and other areas.",
    applicationRequirements: "Application Requirements",
    undergraduateRequirements: "Undergraduate Application Requirements",
    graduateRequirements: "Graduate Application Requirements",
    applicationProcess: "Application Process",
    onlineApplication: "Online Application",
    applicationReview: "Application Review",
    interview: "Interview",
    admissionNotice: "Admission Notice",
    confirmEnrollment: "Confirm Enrollment",
    estimatedTime: "Estimated Time",
    readyToApply: "Ready to Apply?",
    readyToApplyDesc:
      "We look forward to welcoming you to the Kyrgyzstan University of Software and Technology family. If you have any questions, please feel free to contact our admissions office.",
    startApplication: "Start Application",
    contactAdmissions: "Contact Admissions",
    aboutUsTitle: "About Us",
    aboutUsDesc: "Learn about the history, mission, and values of Kyrgyzstan University of Software and Technology",
    foundingYear: "Founding Year",
    foundingYearDesc: "A young and vibrant technical university",
    studentCount: "Student Count",
    studentCountDesc: "Students from 25 countries",
    facultyCount: "Faculty Count",
    facultyCountDesc: "Industry experts and academic leaders",
    campusArea: "Campus Area",
    campusAreaDesc: "Hectares of modern campus",
    ourHistory: "Our History",
    historyPara1:
      "Kyrgyzstan University of Software and Technology was founded in 2015 as the first higher education institution in Central Asia focused on software development and information technology education. The university was established by a group of technical experts from Kyrgyzstan and international backgrounds, aiming to cultivate technical talents capable of competing in the global digital economy.",
    historyPara2:
      "In just a few years, our university has developed into a leading technical education institution in the region, establishing partnerships with many internationally renowned technology companies to provide students with rich learning and practical opportunities.",
    historyPara3:
      "In 2018, our university received national higher education quality certification and began to expand its enrollment scale and program offerings. In 2020, our newly built Technology Innovation Center was put into use, providing students with a better environment for practice and research.",
    historyPara4:
      "In 2022, our university established academic exchange cooperation with many internationally renowned universities and began to recruit international students, further enhancing the university's international level.",
    historyPara5:
      "Today, Kyrgyzstan University of Software and Technology continues to be committed to providing high-quality technical education, cultivating technical talents with global vision and innovation capabilities, and contributing to the digital transformation and economic development of the Central Asian region.",
    missionVision: "Mission and Vision",
    ourMission: "Our Mission",
    ourMissionDesc:
      "To cultivate globally competitive software development and information technology talents through providing high-quality technical education and innovative research environment, contributing to the digital transformation and economic development of the Central Asian region.",
    ourVision: "Our Vision",
    ourVisionDesc:
      "To become a leading technical education and research institution in the Central Asian region, with influence in the global technical education field, cultivating leaders who can lead future technological innovation and digital transformation.",
    ourFaculty: "Our Faculty",
    ourCampus: "Our Campus",
    modernTeachingBuilding: "Modern Teaching Building",
    modernTeachingBuildingDesc:
      "Our university has modern teaching buildings equipped with advanced teaching equipment and technology. Each classroom is equipped with high-speed internet and multimedia teaching systems, providing students with a good learning environment.",
    techInnovationCenter: "Technology Innovation Center",
    techInnovationCenterDesc:
      "The Technology Innovation Center, built in 2020, is our university's landmark building, equipped with state-of-the-art laboratories and equipment, including artificial intelligence laboratories, virtual reality laboratories, network security laboratories, etc., providing students with rich practical opportunities.",
    digitalLibrary: "Digital Library",
    digitalLibraryDesc:
      "Our university's digital library houses a rich collection of electronic resources and physical books, and students can access the world's leading academic databases and journals. The library also has comfortable study spaces and discussion areas, providing students with a good learning environment.",
    studentDormitory: "Student Dormitory",
    studentDormitoryDesc:
      "Our university provides modern dormitories for students, each equipped with high-speed internet and basic living facilities. The dormitory area also has public activity areas, gyms, and study rooms, providing students with a comfortable living environment.",
    ourPartners: "Our Partners",
    copyright: "Copyright",
  },
  kg: {
    home: "Башкы бет",
    news: "Жаңылыктар",
    admissions: "Кабыл алуу",
    about: "Биз жөнүндө",
    readMore: "Көбүрөөк окуу",
    applyNow: "Азыр арыз бериңиз",
    learnMore: "Көбүрөөк билүү",
    welcomeTitle: "Қырғыз бағдарламалық және технология университетине кош келиңиз",
    welcomeDescription:
      "Қырғыз бағдарламалық және технология университеті Борбордук Азиядагы алдыңкы техникалык билим берүү мекемеси болуп, программалык өнүктүрүү, жасалма интеллект, маалымат илими жана киберкоопсуздук тармактарында келечектеги лидерлерди тарбиялоого арналган. Биз студенттерге глобалдык санариптик экономикада ийгиликке жетүүгө жардам берүү үчүн инновациялык курстарды, алдыңкы лабораторияларды жана эл аралык окуу чөйрөсүн сунуштайбыз.",
    qualityEducation: "Сапаттуу билим",
    qualityEducationDesc:
      "Тармактык эксперттер жана академиялык лидерлерден турган факультет тобу алдыңкы техникалык билим берет",
    innovativeResearch: "Инновациялык изилдөө",
    innovativeResearchDesc:
      "Студенттерди реалдуу дүйнөдөгү техникалык көйгөйлөрдү чечүүгө тартуучу алдыңкы изилдөө лабораториялары жана долбоорлор",
    globalNetwork: "Глобалдык тармак",
    globalNetworkDesc:
      "Глобалдык технологиялык компаниялар жана университеттер менен өнөктөштүк, студенттерге эл аралык алмашуу жана иш менен камсыз кылуу мүмкүнчүлүктөрүн берет",
    latestNews: "Акыркы жаңылыктар",
    viewAll: "Баарын көрүү",
    joinUs: "Бизге кошулуңуз, келечекти түзүңүз",
    joinUsDesc:
      "Қырғыз бағдарламалық және технология университетинде биз технологиялык инноваторлордун жана лидерлердин кийинки муунун тарбиялап жатабыз. Техникалык билим алуу жолуңузду баштоо үчүн азыр арыз бериңиз.",
    newsPageTitle: "Жаңылыктар",
    newsPageDesc:
      "Қырғыз бағдарламалық және технология университетинин акыркы жаңылыктары, иш-чаралары жана жарыялары жөнүндө билип алыңыз",
    admissionsTitle: "Кабыл алуу маалыматы",
    admissionsDesc:
      "Қырғыз бағдарламалық және технология университетине кошулуп, техникалык билим алуу жолуңузду баштаңыз",
    ourPrograms: "Биздин программалар",
    undergraduate: "Бакалавр программалары",
    graduate: "Магистратура программалары",
    duration: "Мөөнөтү",
    computerScience: "Компьютердик илим",
    computerScienceDesc:
      "Бул программа компьютердик илимдин негизги теорияларын жана практикалык колдонмолорун камтыйт, анын ичинде алгоритмдерди иштеп чыгуу, маалымат түзүмдөрү, операциялык системалар, маалымат базасынын системалары жана башка негизги курстар.",
    softwareEngineering: "Программалык камсыздоо инженериясы",
    softwareEngineeringDesc:
      "Бул программа программалык камсыздоону иштеп чыгуу процесстерине жана методологияларына багытталган, студенттердин чоң масштабдагы программалык системаларды долбоорлоо, иштеп чыгуу, тестирлөө жана тейлөө жөндөмдүүлүктөрүн өстүрөт.",
    artificialIntelligence: "Жасалма интеллект жана машина үйрөнүү",
    artificialIntelligenceDesc:
      "Бул программа жасалма интеллект жана машина үйрөнүү тармагына багытталган, студенттердин терең үйрөнүү, табигый тилди иштетүү, компьютердик көрүү жана башка тармактардагы кесиптик билимин жана практикалык жөндөмдүүлүктөрүн өстүрөт.",
    networkSecurity: "Тармактык коопсуздук",
    networkSecurityDesc:
      "Бул программа тармактык жана маалымат системаларынын коопсуздук маселелерине багытталган, студенттердин тармакты коргоо, криптография, коопсуздук аудити жана башка тармактардагы кесиптик көндүмдөрүн өстүрөт.",
    applicationRequirements: "Арыз берүү талаптары",
    undergraduateRequirements: "Бакалавр программаларына арыз берүү талаптары",
    graduateRequirements: "Магистратура программаларына арыз берүү талаптары",
    applicationProcess: "Арыз берүү процесси",
    onlineApplication: "Онлайн арыз",
    applicationReview: "Арызды карап чыгуу",
    interview: "Маектешүү",
    admissionNotice: "Кабыл алуу билдирүүсү",
    confirmEnrollment: "Катталууну ырастоо",
    estimatedTime: "Болжолдуу убакыт",
    readyToApply: "Арыз берүүгө даярсызбы?",
    readyToApplyDesc:
      "Сизди Қырғыз бағдарламалық және технология университетинин үй-бүлөсүнө кош келиңиз деп айтууну чыдамсыздык менен күтөбүз. Эгер сизде суроолор болсо, биздин кабыл алуу кеңсесине кайрылыңыз.",
    startApplication: "Арыз берүүнү баштоо",
    contactAdmissions: "Кабыл алуу кеңсесине байланышуу",
    aboutUsTitle: "Биз жөнүндө",
    aboutUsDesc:
      "Қырғыз бағдарламалық және технология университетинин тарыхы, миссиясы жана баалуулуктары жөнүндө билип алыңыз",
    foundingYear: "Негиздөө жылы",
    foundingYearDesc: "Жаш жана жандуу техникалык университет",
    studentCount: "Студенттердин саны",
    studentCountDesc: "25 өлкөдөн келген студенттер",
    facultyCount: "Факультеттин саны",
    facultyCountDesc: "Тармактык эксперттер жана академиялык лидерлер",
    campusArea: "Кампустун аянты",
    campusAreaDesc: "Заманбап кампустун гектары",
    ourHistory: "Биздин тарых",
    historyPara1:
      "Қырғыз бағдарламалық және технология университети 2015-жылы Борбордук Азиядагы программалык өнүктүрүү жана маалымат технологиялары боюнча билим берүүгө багытталган биринчи жогорку окуу жайы катары негизделген. Университет Кыргызстандан жана эл аралык чөйрөдөн келген техникалык эксперттер тобу тарабынан түзүлгөн, глобалдык санариптик экономикада атаандаша ала турган техникалык таланттарды тарбиялоону максат кылган.",
    historyPara2:
      "Бир нече жылдын ичинде биздин университет аймактагы алдыңкы техникалык билим берүү мекемесине айланып, эл аралык таанылган көптөгөн технологиялык компаниялар менен өнөктөштүк түзүп, студенттерге бай окуу жана практикалык мүмкүнчүлүктөрдү берди.",
    historyPara3:
      "2018-жылы биздин университет улуттук жогорку билим берүү сапатын тастыктоо сертификатын алып, кабыл алуу масштабын жана программалык сунуштарын кеңейте баштады. 2020-жылы биздин жаңы курулган Технологиялык инновациялык борбор ишке киргизилип, студенттерге практика жана изилдөө үчүн жакшыраак чөйрө түзүлдү.",
    historyPara4:
      "2022-жылы биздин университет эл аралык таанылган көптөгөн университеттер менен академиялык алмашуу кызматташтыгын түзүп, эл аралык студенттерди кабыл алып, университеттин эл аралык деңгээлин андан ары жогорулатты.",
    historyPara5:
      "Бүгүнкү күндө Қырғыз бағдарламалық және технология университети жогорку сапаттагы техникалык билим берүүгө, глобалдык көз караш жана инновациялык жөндөмдүүлүктөргө ээ техникалык таланттарды тарбиялоого жана Борбордук Азия аймагынын санариптик трансформациясына жана экономикалык өнүгүүсүнө салым кошууга умтулууда.",
    missionVision: "Миссия жана көз караш",
    ourMission: "Биздин миссия",
    ourMissionDesc:
      "Жогорку сапаттагы техникалык билим берүү жана инновациялык изилдөө чөйрөсүн камсыз кылуу аркылуу глобалдык атаандаштыкка жөндөмдүү программалык камсыздоону иштеп чыгуу жана маалымат технологиялары боюнча таланттарды тарбиялоо, Борбордук Азия аймагынын санариптик трансформациясына жана экономикалык өнүгүүсүнө салым кошуу.",
    ourVision: "Биздин көз караш",
    ourVisionDesc:
      "Борбордук Азия аймагындагы алдыңкы техникалык билим берүү жана изилдөө мекемеси болуу, глобалдык техникалык билим берүү тармагында таасирге ээ болуу, келечектеги технологиялык инновацияларга жана санариптик трансформацияга жетекчилик кыла ала турган лидерлерди тарбиялоо.",
    ourFaculty: "Биздин факультет",
    ourCampus: "Биздин кампус",
    modernTeachingBuilding: "Заманбап окуу имараты",
    modernTeachingBuildingDesc:
      "Биздин университетте заманбап окуу имараттары бар, алар алдыңкы окуу жабдуулары жана технологиялары менен жабдылган. Ар бир класс жогорку ылдамдыктагы интернет жана мультимедиялык окутуу системалары менен жабдылган, студенттерге жакшы окуу чөйрөсүн камсыз кылат.",
    techInnovationCenter: "Технологиялык инновациялык борбор",
    techInnovationCenterDesc:
      "2020-жылы курулган Технологиялык инновациялык борбор биздин университеттин символдук имараты болуп, эң заманбап лабораториялар жана жабдуулар менен жабдылган, анын ичинде жасалма интеллект лабораториялары, виртуалдык реалдуулук лабораториялары, тармактык коопсуздук лабораториялары ж.б., студенттерге бай практикалык мүмкүнчүлүктөрдү берет.",
    digitalLibrary: "Санариптик китепкана",
    digitalLibraryDesc:
      "Биздин университеттин санариптик китепканасында электрондук ресурстардын жана физикалык китептердин бай коллекциясы бар, студенттер дүйнөдөгү алдыңкы академиялык маалымат базаларына жана журналдарга кире алышат. Китепканада ошондой эле ыңгайлуу окуу жайлары жана талкуу аянтчалары бар, студенттерге жакшы окуу чөйрөсүн камсыз кылат.",
    studentDormitory: "Студенттик жатакана",
    studentDormitoryDesc:
      "Биздин университет студенттер үчүн заманбап жатаканаларды камсыз кылат, ар бири жогорку ылдамдыктагы интернет жана негизги жашоо шарттары менен жабдылган. Жатакана аймагында ошондой эле коомдук иш-чара аянтчалары, спорт залдары жана окуу бөлмөлөрү бар, студенттерге ыңгайлуу жашоо чөйрөсүн камсыз кылат.",
    ourPartners: "Биздин өнөктөштөр",
    copyright: "Автордук укук",
  },
}
