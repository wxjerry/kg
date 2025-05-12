"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsCard } from "@/components/news-card"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function HomePage() {
  const { t, language } = useTranslation()

  const featuredNews = [
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
          ? "吉尔吉斯斯坦软件与科技大学现已开始接受2025年秋季学期的入学申请。我们提供计算机科学、软件工程、人工智能等多个专业。"
          : language === "en"
            ? "Kyrgyzstan University of Software and Technology is now accepting applications for the Fall 2025 semester. We offer programs in Computer Science, Software Engineering, Artificial Intelligence, and more."
            : "Қырғыз бағдарламалық және технология университети 2025-жылдын күз семестрине кабыл алууну баштады. Биз Компьютердик илим, Программалык камсыздоо инженериясы, Жасалма интеллект жана башка программаларды сунуштайбыз.",
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
          ? "吉尔吉斯斯坦软件与科技大学与微软公司签署了战略合作协议，将共同推进人工智能和云计算领域的教育与研究。"
          : language === "en"
            ? "Kyrgyzstan University of Software and Technology has signed a strategic partnership agreement with Microsoft to jointly advance education and research in artificial intelligence and cloud computing."
            : "Қырғыз бағдарламалық және технология университети Microsoft менен жасалма интеллект жана булуттук эсептөө тармагында билим берүү жана изилдөөлөрдү биргелешип өнүктүрүү үчүн стратегиялык өнөктөштүк келишимине кол койду.",
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
          ? "我校学生团队在2025年国际大学生编程竞赛中获得了亚洲区第二名的优异成绩，展现了我校学生的卓越编程能力。"
          : language === "en"
            ? "Our student team achieved an excellent result by winning second place in the Asian region at the 2025 International Collegiate Programming Contest, demonstrating the outstanding programming abilities of our students."
            : "Биздин студенттик команда 2025-жылдагы Эл аралык коллегиалдык программалоо мелдешинде Азия аймагында экинчи орунду алуу менен мыкты натыйжага жетишти, бул биздин студенттердин программалоо жөндөмдүүлүктөрүн көрсөттү.",
      date: language === "zh" ? "2025年4月15日" : language === "en" ? "April 15, 2025" : "2025-жылдын 15-апрели",
      image: "/images/news-3.png",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/images/hero-bg.png"
          alt={
            language === "zh"
              ? "吉尔吉斯斯坦软件与科技大学校园"
              : language === "en"
                ? "Kyrgyzstan University of Software and Technology Campus"
                : "Қырғыз бағдарламалық және технология университетинин кампусу"
          }
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {language === "zh"
              ? "吉尔吉斯斯坦软件与科技大学"
              : language === "en"
                ? "Kyrgyzstan University of Software and Technology"
                : "Қырғыз бағдарламалық және технология университеті"}
          </h1>
          <p className="mb-2 text-xl md:text-2xl">Kyrgyzstan University of Software and Technology</p>
          <p className="mb-8 text-lg md:text-xl">Қырғыз бағдарламалық және технология университеті</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/admissions">{t("applyNow")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/about">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">{t("welcomeTitle")}</h2>
            <p className="mb-8 text-lg text-muted-foreground">{t("welcomeDescription")}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("qualityEducation")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{t("qualityEducationDesc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("innovativeResearch")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{t("innovativeResearchDesc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("globalNetwork")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{t("globalNetworkDesc")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">{t("latestNews")}</h2>
            <Button asChild variant="ghost">
              <Link href="/news" className="flex items-center gap-1">
                {t("viewAll")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("joinUs")}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">{t("joinUsDesc")}</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/admissions">{t("applyNow")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
