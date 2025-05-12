"use client"

import { NewsCard } from "@/components/news-card"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function NewsPage() {
  const { t, language } = useTranslation()

  const newsItems = [
    {
      id: "1",
      title:
        language === "zh"
          ? "2025年秋季学期招生开始"
          : language === "en"
            ? "Fall 2025 Admissions Now Open"
            : "2025-жылдын күз семестрине кабыл алуу башталды",
      description:
        language === "zh"
          ? "吉尔吉斯斯坦软件与科技大学现已开始接受2025年秋季学期的入学申请。我们提供计算机科学、软件工程、人工智能等多个专业。欢迎有志于在技术领域发展的学生申请。"
          : language === "en"
            ? "Kyrgyzstan University of Software and Technology is now accepting applications for the Fall 2025 semester. We offer programs in Computer Science, Software Engineering, Artificial Intelligence, and more. Students aspiring to develop in the technology field are welcome to apply."
            : "Қырғыз бағдарламалық және технология университети 2025-жылдын күз семестрине кабыл алууну баштады. Биз Компьютердик илим, Программалык камсыздоо инженериясы, Жасалма интеллект жана башка программаларды сунуштайбыз. Технология тармагында өнүгүүнү каалаган студенттер арыз берсе болот.",
      date: language === "zh" ? "2025年5月10日" : language === "en" ? "May 10, 2025" : "2025-жылдын 10-майы",
      image: "/images/news-1.png",
    },
    {
      id: "2",
      title:
        language === "zh"
          ? "我校与微软建立战略合作伙伴关系"
          : language === "en"
            ? "Strategic Partnership with Microsoft"
            : "Microsoft менен стратегиялык өнөктөштүк",
      description:
        language === "zh"
          ? "吉尔吉斯斯坦软件与科技大学与微软公司签署了战略合作协议，将共同推进人工智能和云计算领域的教育与研究。该合作将为我校学生提供更多实习和就业机会。"
          : language === "en"
            ? "Kyrgyzstan University of Software and Technology has signed a strategic partnership agreement with Microsoft to jointly advance education and research in artificial intelligence and cloud computing. This collaboration will provide more internship and employment opportunities for our students."
            : "Қырғыз бағдарламалық және технология университети Microsoft менен жасалма интеллект жана булуттук эсептөө тармагында билим берүү жана изилдөөлөрдү биргелешип өнүктүрүү үчүн стратегиялык өнөктөштүк келишимине кол койду. Бул кызматташтык биздин студенттерге көбүрөөк стажировка жана иш мүмкүнчүлүктөрүн берет.",
      date: language === "zh" ? "2025年4月28日" : language === "en" ? "April 28, 2025" : "2025-жылдын 28-апрели",
      image: "/images/news-2.png",
    },
    {
      id: "3",
      title:
        language === "zh"
          ? "学生团队在国际编程大赛中获奖"
          : language === "en"
            ? "Student Team Wins International Programming Competition"
            : "Студенттик команда эл аралык программалоо мелдешинде жеңишке жетти",
      description:
        language === "zh"
          ? "我校学生团队在2025年国际大学生编程竞赛中获得了亚洲区第二名的优异成绩，展现了我校学生的卓越编程能力。这是我校连续第三年在该比赛中获得前三名。"
          : language === "en"
            ? "Our student team achieved an excellent result by winning second place in the Asian region at the 2025 International Collegiate Programming Contest, demonstrating the outstanding programming abilities of our students. This is the third consecutive year that our university has placed in the top three in this competition."
            : "Биздин студенттик команда 2025-жылдагы Эл аралык коллегиалдык программалоо мелдешинде Азия аймагында экинчи орунду алуу менен мыкты натыйжага жетишти, бул биздин студенттердин программалоо жөндөмдүүлүктөрүн көрсөттү. Бул биздин университет бул мелдеште катары менен үчүнчү жыл топ үчкө кирген жылы.",
      date: language === "zh" ? "2025年4月15日" : language === "en" ? "April 15, 2025" : "2025-жылдын 15-апрели",
      image: "/images/news-3.png",
    },
    {
      id: "4",
      title:
        language === "zh"
          ? "新增人工智能与机器学习专业"
          : language === "en"
            ? "New Artificial Intelligence and Machine Learning Program"
            : "Жаңы жасалма интеллект жана машина үйрөнүү программасы",
      description:
        language === "zh"
          ? "为满足日益增长的人工智能人才需求，我校将于2025年秋季学期新增人工智能与机器学习专业。该专业将由行业专家和学术领袖共同授课，培养学生在AI领域的实践能力。"
          : language === "en"
            ? "To meet the growing demand for artificial intelligence talents, our university will add a new Artificial Intelligence and Machine Learning program in the Fall 2025 semester. The program will be taught by industry experts and academic leaders to cultivate students' practical abilities in the AI field."
            : "Жасалма интеллект таланттарына өсүп жаткан суроо-талапты канааттандыруу үчүн, биздин университет 2025-жылдын күз семестринде жаңы Жасалма интеллект жана машина үйрөнүү программасын кошот. Программа тармактык эксперттер жана академиялык лидерлер тарабынан окутулуп, студенттердин AI тармагындагы практикалык жөндөмдүүлүктөрүн өстүрөт.",
      date: language === "zh" ? "2025年4月5日" : language === "en" ? "April 5, 2025" : "2025-жылдын 5-апрели",
      image: "/images/news-4.png",
    },
    {
      id: "5",
      title:
        language === "zh"
          ? "校园技术创新中心正式启用"
          : language === "en"
            ? "Campus Technology Innovation Center Officially Launched"
            : "Кампустун технологиялык инновациялык борбору расмий ишке киргизилди",
      description:
        language === "zh"
          ? "我校新建的技术创新中心今日正式启用。该中心配备了最先进的设备和软件，为学生提供了一个进行创新项目开发和研究的理想场所。"
          : language === "en"
            ? "Our university's newly built Technology Innovation Center was officially launched today. The center is equipped with the most advanced equipment and software, providing students with an ideal place for innovative project development and research."
            : "Биздин университеттин жаңы курулган Технологиялык инновациялык борбору бүгүн расмий түрдө ишке киргизилди. Борбор эң заманбап жабдуулар жана программалык камсыздоо менен жабдылган, студенттерге инновациялык долбоорлорду иштеп чыгуу жана изилдөө үчүн идеалдуу жай берет.",
      date: language === "zh" ? "2025年3月20日" : language === "en" ? "March 20, 2025" : "2025-жылдын 20-марты",
      image: "/images/news-5.png",
    },
    {
      id: "6",
      title:
        language === "zh"
          ? "与谷歌合作举办技术讲座系列"
          : language === "en"
            ? "Technical Lecture Series in Collaboration with Google"
            : "Google менен кызматташтыкта техникалык лекциялар сериясы",
      description:
        language === "zh"
          ? "我校将与谷歌合作举办为期一个月的技术讲座系列，内容涵盖云计算、机器学习、网络安全等热门技术领域。谷歌的工程师将亲自授课并与学生互动。"
          : language === "en"
            ? "Our university will collaborate with Google to host a month-long series of technical lectures covering popular technical fields such as cloud computing, machine learning, and network security. Google engineers will personally teach and interact with students."
            : "Биздин университет Google менен кызматташып, булуттук эсептөө, машина үйрөнүү жана тармактык коопсуздук сыяктуу популярдуу техникалык тармактарды камтыган бир айлык техникалык лекциялар сериясын өткөрөт. Google инженерлери жеке өздөрү окутуп, студенттер менен баарлашат.",
      date: language === "zh" ? "2025年3月10日" : language === "en" ? "March 10, 2025" : "2025-жылдын 10-марты",
      image: "/images/news-6.png",
    },
    {
      id: "7",
      title:
        language === "zh"
          ? "2025年夏季实习项目启动"
          : language === "en"
            ? "2025 Summer Internship Program Launched"
            : "2025-жылдын жайкы стажировка программасы ишке киргизилди",
      description:
        language === "zh"
          ? "我校2025年夏季实习项目现已启动，与多家知名科技公司合作，为学生提供宝贵的实习机会。有意向的学生请在5月15日前提交申请。"
          : language === "en"
            ? "Our university's 2025 Summer Internship Program has been launched, in collaboration with many well-known technology companies, providing students with valuable internship opportunities. Interested students please submit applications by May 15."
            : "Биздин университеттин 2025-жылдын жайкы стажировка программасы ишке киргизилди, көптөгөн белгилүү технологиялык компаниялар менен кызматташтыкта, студенттерге баалуу стажировка мүмкүнчүлүктөрүн берет. Кызыккан студенттер 15-майга чейин арыз берүүсү керек.",
      date: language === "zh" ? "2025年2月28日" : language === "en" ? "February 28, 2025" : "2025-жылдын 28-февралы",
      image: "/images/news-7.png",
    },
    {
      id: "8",
      title:
        language === "zh"
          ? "教授获国家科学技术奖"
          : language === "en"
            ? "Professor Receives National Science and Technology Award"
            : "Профессор улуттук илим жана технология сыйлыгын алды",
      description:
        language === "zh"
          ? "我校计算机科学系张教授因在分布式系统领域的杰出贡献，获得了2025年国家科学技术进步奖。这是对我校学术研究水平的重要认可。"
          : language === "en"
            ? "Professor Zhang of our Computer Science Department has received the 2025 National Science and Technology Progress Award for his outstanding contributions in the field of distributed systems. This is an important recognition of our university's academic research level."
            : "Биздин Компьютердик илим кафедрасынын Чжан профессору бөлүштүрүлгөн системалар тармагындагы көрүнүктүү салымы үчүн 2025-жылдагы Улуттук илим жана технология прогресси сыйлыгын алды. Бул биздин университеттин академиялык изилдөө деңгээлинин маанилүү таанылышы.",
      date: language === "zh" ? "2025年2月15日" : language === "en" ? "February 15, 2025" : "2025-жылдын 15-февралы",
      image: "/images/news-8.png",
    },
    {
      id: "9",
      title:
        language === "zh"
          ? "国际学术交流周成功举办"
          : language === "en"
            ? "International Academic Exchange Week Successfully Held"
            : "Эл аралык академиялык алмашуу жумалыгы ийгиликтүү өттү",
      description:
        language === "zh"
          ? "我校成功举办了为期一周的国际学术交流活动，来自15个国家的学者和专家参与了此次活动，共同探讨了软件工程和人工智能领域的最新发展。"
          : language === "en"
            ? "Our university successfully held a week-long international academic exchange event, with scholars and experts from 15 countries participating in the event, jointly discussing the latest developments in the fields of software engineering and artificial intelligence."
            : "Биздин университет бир жумалык эл аралык академиялык алмашуу иш-чарасын ийгиликтүү өткөрдү, иш-чарага 15 өлкөдөн окумуштуулар жана эксперттер катышып, программалык камсыздоо инженериясы жана жасалма интеллект тармактарындагы акыркы жетишкендиктерди биргелешип талкуулашты.",
      date: language === "zh" ? "2025年1月25日" : language === "en" ? "January 25, 2025" : "2025-жылдын 25-январы",
      image: "/images/news-9.png",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">{t("newsPageTitle")}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  )
}
