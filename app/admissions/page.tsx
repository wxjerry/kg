"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function AdmissionsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/admissions-bg.png"
          alt={t("admissionsTitle")}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("admissionsTitle")}</h1>
          <p className="mb-6 max-w-2xl text-lg">{t("admissionsDesc")}</p>
          <Button asChild size="lg">
            <Link href="#apply">{t("applyNow")}</Link>
          </Button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">{t("ourPrograms")}</h2>
          <Tabs defaultValue="undergraduate" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="undergraduate">{t("undergraduate")}</TabsTrigger>
              <TabsTrigger value="graduate">{t("graduate")}</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("computerScience")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 4 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("computerScienceDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("softwareDevelopment")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("networkSecurity")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("dataScience")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("softwareEngineering")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 4 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("softwareEngineeringDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("enterpriseSoftware")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("mobileDevelopment")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("gameDevelopment")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("artificialIntelligence")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 4 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("artificialIntelligenceDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("deepLearning")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("nlp")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("computerVision")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("networkSecurity")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 4 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("networkSecurityDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("networkDefense")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("securityAudit")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("cryptography")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="graduate" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("computerScienceMaster")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 2 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("computerScienceMasterDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("advancedAlgorithms")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("distributedSystems")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("highPerformanceComputing")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("aiMaster")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 2 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("aiMasterDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("advancedDeepLearning")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("reinforcementLearning")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("advancedNLP")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("dataScienceMaster")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 2 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("dataScienceMasterDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("advancedDataMining")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("bigDataProcessing")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("businessIntelligence")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("networkSecurityMaster")}</CardTitle>
                    <CardDescription>
                      {t("duration")}: 2 {t("years")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{t("networkSecurityMasterDesc")}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("advancedCryptography")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("securityArchitecture")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{t("networkAttackDefense")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-slate-50 py-16" id="apply">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">{t("applicationRequirements")}</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">{t("undergraduateRequirements")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("highSchoolDiploma")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("highSchoolTranscript")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("englishProficiency")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("personalStatement")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("recommendationLetters")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("programmingExperience")}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">{t("graduateRequirements")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("bachelorDegree")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("undergraduateGPA")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("graduateEnglishProficiency")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("researchProposal")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("graduateRecommendationLetters")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{t("greScore")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">{t("applicationProcess")}</h2>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 md:left-1/2"></div>
              <div className="space-y-12">
                <div className="relative md:flex md:items-center">
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold">{t("onlineApplication")}</h3>
                    <p className="text-muted-foreground">{t("onlineApplicationDesc")}</p>
                  </div>
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-ml-4">
                    <span>1</span>
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t("estimatedTime")}: 30 {t("minutes")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative md:flex md:items-center">
                  <div className="mb-4 pl-12 md:mb-0 md:w-1/2 md:pl-0 md:pr-8 md:text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t("estimatedTime")}: 2-3 {t("weeks")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-ml-4">
                    <span>2</span>
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold">{t("applicationReview")}</h3>
                    <p className="text-muted-foreground">{t("applicationReviewDesc")}</p>
                  </div>
                </div>
                <div className="relative md:flex md:items-center">
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold">{t("interview")}</h3>
                    <p className="text-muted-foreground">{t("interviewDesc")}</p>
                  </div>
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-ml-4">
                    <span>3</span>
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t("estimatedTime")}: 30-60 {t("minutes")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative md:flex md:items-center">
                  <div className="mb-4 pl-12 md:mb-0 md:w-1/2 md:pl-0 md:pr-8 md:text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t("estimatedTime")}: 1-2 {t("weeks")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-ml-4">
                    <span>4</span>
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold">{t("admissionNotice")}</h3>
                    <p className="text-muted-foreground">{t("admissionNoticeDesc")}</p>
                  </div>
                </div>
                <div className="relative md:flex md:items-center">
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold">{t("confirmEnrollment")}</h3>
                    <p className="text-muted-foreground">{t("confirmEnrollmentDesc")}</p>
                  </div>
                  <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:left-1/2 md:-ml-4">
                    <span>5</span>
                  </div>
                  <div className="pl-12 md:w-1/2 md:pl-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>
                        {t("deadline")}: {t("twoWeeksAfterAdmission")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("readyToApply")}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">{t("readyToApplyDesc")}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="#">{t("startApplication")}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#">{t("contactAdmissions")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
