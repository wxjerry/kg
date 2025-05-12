"use client"

import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/use-translation"

interface NewsCardProps {
  id: string
  title: string
  description: string
  date: string
  image: string
}

export function NewsCard({ id, title, description, date, image }: NewsCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/news/${id}`} className="text-sm font-medium text-primary hover:underline">
          {t("readMore")}
        </Link>
      </CardFooter>
    </Card>
  )
}
