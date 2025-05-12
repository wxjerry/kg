"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">吉尔吉斯斯坦软件与科技大学</h3>
            <p className="mb-2 text-slate-300">Kyrgyzstan University of Software and Technology</p>
            <p className="text-slate-300">Қырғыз бағдарламалық және технология университеті</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">{t("contactAdmissions")}</h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bishkek, Kyrgyzstan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+996 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@kust.edu.kg</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} {t("copyright")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
