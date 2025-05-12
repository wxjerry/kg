"use client"

import Image from "next/image"
import { BookOpen, GraduationCap, MapPin, Users } from "lucide-react"

import { StatsCard } from "@/components/stats-card"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function AboutPage() {
  const { t, language } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/about-bg.png"
          alt={t("aboutUsTitle")}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("aboutUsTitle")}</h1>
          <p className="mb-6 max-w-2xl text-lg">{t("aboutUsDesc")}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title={t("foundingYear")}
              value="2015"
              description={t("foundingYearDesc")}
              icon={<GraduationCap className="h-4 w-4" />}
            />
            <StatsCard
              title={t("studentCount")}
              value="3,500+"
              description={t("studentCountDesc")}
              icon={<Users className="h-4 w-4" />}
            />
            <StatsCard
              title={t("facultyCount")}
              value="180+"
              description={t("facultyCountDesc")}
              icon={<BookOpen className="h-4 w-4" />}
            />
            <StatsCard
              title={t("campusArea")}
              value="15"
              description={t("campusAreaDesc")}
              icon={<MapPin className="h-4 w-4" />}
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold">{t("ourHistory")}</h2>
            <div className="space-y-6 text-lg">
              <p>{t("historyPara1")}</p>
              <p>{t("historyPara2")}</p>
              <p>{t("historyPara3")}</p>
              <p>{t("historyPara4")}</p>
              <p>{t("historyPara5")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold">{t("missionVision")}</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{t("ourMission")}</h3>
                <p className="text-muted-foreground">{t("ourMissionDesc")}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{t("ourVision")}</h3>
                <p className="text-muted-foreground">{t("ourVisionDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">{t("ourFaculty")}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-1.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">
                {language === "zh" ? "张明教授" : language === "en" ? "Professor Zhang Ming" : "Чжан Мин профессор"}
              </h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "计算机科学系主任"
                  : language === "en"
                    ? "Head of Computer Science Department"
                    : "Компьютердик илим кафедрасынын башчысы"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "张明教授拥有麻省理工学院计算机科学博士学位，专注于分布式系统和云计算研究。在加入我校前，他曾在谷歌工作多年，参与了多个重要项目的开发。"
                  : language === "en"
                    ? "Professor Zhang Ming holds a Ph.D. in Computer Science from MIT, focusing on distributed systems and cloud computing research. Before joining our university, he worked at Google for many years, participating in the development of several important projects."
                    : "Чжан Мин профессор МИТтен компьютердик илим боюнча Ph.D. даражасына ээ, бөлүштүрүлгөн системалар жана булуттук эсептөө изилдөөлөрүнө басым жасайт. Биздин университетке кошулуудан мурун, ал Google'да көп жылдар бою иштеп, бир нече маанилүү долбоорлорду иштеп чыгууга катышкан."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-2.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">
                {language === "zh" ? "李华博士" : language === "en" ? "Dr. Li Hua" : "Ли Хуа доктор"}
              </h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "人工智能研究中心主任"
                  : language === "en"
                    ? "Director of AI Research Center"
                    : "AI изилдөө борборунун директору"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "李华博士毕业于斯坦福大学，是人工智能和机器学习领域的知名专家。她曾领导多个国际研究项目，发表了多篇高影响力论文，并获得了多项国际奖项。"
                  : language === "en"
                    ? "Dr. Li Hua graduated from Stanford University and is a renowned expert in artificial intelligence and machine learning. She has led multiple international research projects, published numerous high-impact papers, and received multiple international awards."
                    : "Ли Хуа доктор Стэнфорд университетинен бүтүрүп, жасалма интеллект жана машина үйрөнүү тармагында таанымал эксперт. Ал бир нече эл аралык изилдөө долбоорлоруна жетекчилик кылып, көптөгөн жогорку таасирдүү макалаларды жарыялап, бир нече эл аралык сыйлыктарды алган."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-3.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">
                {language === "zh" ? "王强教授" : language === "en" ? "Professor Wang Qiang" : "Ван Цян профессор"}
              </h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "软件工程系主任"
                  : language === "en"
                    ? "Head of Software Engineering Department"
                    : "Программалык камсыздоо инженериясы кафедрасынын башчысы"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "王强教授拥有卡内基梅隆大学软件工程博士学位，在软件架构和开发方法学方面有深入研究。他曾在微软担任高级工程师，参与了多个大型软件项目的开发。"
                  : language === "en"
                    ? "Professor Wang Qiang holds a Ph.D. in Software Engineering from Carnegie Mellon University, with in-depth research in software architecture and development methodologies. He previously worked as a senior engineer at Microsoft, participating in the development of several large-scale software projects."
                    : "Ван Цян профессор Карнеги Меллон университетинен программалык камсыздоо инженериясы боюнча Ph.D. даражасына ээ, программалык камсыздоо архитектурасы жана иштеп чыгуу методологиялары боюнча терең изилдөөлөрү бар. Мурда ал Microsoft'то жогорку инженер болуп иштеп, бир нече чоң масштабдагы программалык долбоорлорду иштеп чыгууга катышкан."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-4.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Maria Johnson</h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "数据科学系副教授"
                  : language === "en"
                    ? "Associate Professor of Data Science"
                    : "Маалымат илими боюнча доцент"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "Maria Johnson博士毕业于剑桥大学，专注于大数据分析和数据可视化研究。她曾在多家科技公司担任数据科学家，拥有丰富的行业经验。"
                  : language === "en"
                    ? "Dr. Maria Johnson graduated from Cambridge University, focusing on big data analysis and data visualization research. She has worked as a data scientist at several technology companies and has rich industry experience."
                    : "Мария Джонсон доктор Кембридж университетинен бүтүрүп, чоң маалыматтарды талдоо жана маалыматтарды визуалдаштыруу изилдөөлөрүнө басым жасайт. Ал бир нече технологиялык компанияларда маалымат илимпозу болуп иштеп, бай тармактык тажрыйбага ээ."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-5.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Alexey Petrov</h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "网络安全系主任"
                  : language === "en"
                    ? "Head of Network Security Department"
                    : "Тармактык коопсуздук кафедрасынын башчысы"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "Alexey Petrov教授拥有莫斯科国立大学网络安全博士学位，是网络安全和密码学领域的专家。他曾参与多个国家级网络安全项目，拥有丰富的实践经验。"
                  : language === "en"
                    ? "Professor Alexey Petrov holds a Ph.D. in Network Security from Moscow State University and is an expert in network security and cryptography. He has participated in multiple national-level network security projects and has rich practical experience."
                    : "Алексей Петров профессор Москва мамлекеттик университетинен тармактык коопсуздук боюнча Ph.D. даражасына ээ жана тармактык коопсуздук жана криптография боюнча эксперт. Ал бир нече улуттук деңгээлдеги тармактык коопсуздук долбоорлоруна катышып, бай практикалык тажрыйбага ээ."}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/professor-6.png"
                  alt={language === "zh" ? "教授照片" : language === "en" ? "Professor Photo" : "Профессор сүрөтү"}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">
                {language === "zh" ? "林小红博士" : language === "en" ? "Dr. Lin Xiaohong" : "Лин Сяохун доктор"}
              </h3>
              <p className="mb-2 text-sm text-primary">
                {language === "zh"
                  ? "移动应用开发副教授"
                  : language === "en"
                    ? "Associate Professor of Mobile Application Development"
                    : "Мобилдик тиркемелерди иштеп чыгуу боюнча доцент"}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "zh"
                  ? "林小红博士毕业于东京大学，专注于移动应用开发和用户体验设计研究。她曾在苹果公司工作多年，参与了多个iOS应用的开发，拥有丰富的行业经验。"
                  : language === "en"
                    ? "Dr. Lin Xiaohong graduated from the University of Tokyo, focusing on mobile application development and user experience design research. She worked at Apple for many years, participating in the development of multiple iOS applications, and has rich industry experience."
                    : "Лин Сяохун доктор Токио университетинен бүтүрүп, мобилдик тиркемелерди иштеп чыгуу жана колдонуучу тажрыйбасын дизайндоо изилдөөлөрүнө басым жасайт. Ал Apple'да көп жылдар бою иштеп, бир нече iOS тиркемелерин иштеп чыгууга катышып, бай тармактык тажрыйбага ээ."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">{t("ourCampus")}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/campus-main.png"
                  alt={t("modernTeachingBuilding")}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t("modernTeachingBuilding")}</h3>
              <p className="text-muted-foreground">{t("modernTeachingBuildingDesc")}</p>
            </div>
            <div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/tech-lab.png"
                  alt={t("techInnovationCenter")}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t("techInnovationCenter")}</h3>
              <p className="text-muted-foreground">{t("techInnovationCenterDesc")}</p>
            </div>
            <div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/library.png"
                  alt={t("digitalLibrary")}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t("digitalLibrary")}</h3>
              <p className="text-muted-foreground">{t("digitalLibraryDesc")}</p>
            </div>
            <div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/student-dorm.png"
                  alt={t("studentDormitory")}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t("studentDormitory")}</h3>
              <p className="text-muted-foreground">{t("studentDormitoryDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">{t("ourPartners")}</h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-1.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-2.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-3.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-4.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-5.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-6.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-7.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/partner-8.png"
                  alt={language === "zh" ? "合作伙伴标志" : language === "en" ? "Partner Logo" : "Өнөктөш логотиби"}
                  width={200}
                  height={100}
                  className="h-auto max-w-full grayscale transition-all hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
