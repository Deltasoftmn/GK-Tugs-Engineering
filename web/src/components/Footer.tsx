"use client";

import Link from "next/link";
import Image from "next/image";
import { IconMail, IconMapPin, IconPhone } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

function IconShare() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="scroll-mt-24 mt-auto bg-brand-navy-deep text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-700/40 pb-12">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="relative block h-16 w-[200px]">
                <Image
                  src="/logo.png"
                  alt="GK TUGS ENGINEERING LLC"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="200px" 
                />
              </span>
            </Link>
            <p className="text-xs font-semibold text-slate-400">
              {t("footer.desc", "Professional and reliable contractor", "Мэргэшсэн бөгөөд найдвартай гүйцэтгэгч")}
            </p>
            {/* Social Circular Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:bg-brand-sky hover:text-white hover:border-brand-sky transition-all duration-300"
                aria-label="Share"
              >
                <IconShare />
              </a>
              <a
                href="mailto:gk.tugsengineering@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:bg-brand-sky hover:text-white hover:border-brand-sky transition-all duration-300"
                aria-label="Email"
              >
                <IconMail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: About Us Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#a88143] uppercase">
              {t("footer.about", "ABOUT US", "БИДНИЙ ТУХАЙ")}
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-400">
              <li>
                <Link href="/about#intro" className="hover:text-white transition-colors duration-300">
                  {t("footer.about.intro", "Company Profile", "Компанийн танилцуулга")}
                </Link>
              </li>
              <li>
                <Link href="/about#history" className="hover:text-white transition-colors duration-300">
                  {t("footer.about.history", "Our History", "Түүх замнал")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors duration-300">
                  {t("footer.about.careers", "Careers", "Ажлын байр")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#a88143] uppercase">
              {t("footer.services", "SERVICES", "ҮЙЛЧИЛГЭЭ")}
            </h3>
            <ul className="space-y-3 text-xs font-bold text-slate-400">
              <li>
                <Link href="/uilchilge#core-1" className="hover:text-white transition-colors duration-300">
                  {t("footer.services.eng", "Engineering Installation", "Инженерийн угсралт")}
                </Link>
              </li>
              <li>
                <Link href="/uilchilge#core-2" className="hover:text-white transition-colors duration-300">
                  {t("footer.services.renewable", "Renewable Energy", "Сэргээгдэх эрчим хүч")}
                </Link>
              </li>
              <li>
                <Link href="/uilchilge#core-3" className="hover:text-white transition-colors duration-300">
                  {t("footer.services.supply", "Equipment Supply", "Бараа нийлүүлэлт")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#a88143] uppercase">
              {t("footer.contact", "CONTACT US", "ХОЛБОО БАРИХ")}
            </h3>
            <ul className="space-y-3.5 text-xs font-bold text-slate-400">
              <li className="flex items-start gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a88143]" />
                <span className="leading-relaxed">
                  Onyx Business Center 12th
                  <br />
                  Khoroo, Bayangol District,
                  <br />
                  Ulaanbaatar, Mongolia
                </span>
              </li>
              <li>
                <a
                  href="tel:+97670001211"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                  dir="ltr"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-[#a88143]" />
                  +976 7000 1211
                </a>
              </li>
              <li>
                <a
                  href="mailto:gk.tugsengineering@gmail.com"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 break-all"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-[#a88143]" />
                  gk.tugsengineering@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-bold text-slate-500 tracking-wider">
          <div>
            © {new Date().getFullYear()} GK TUGS ENGINEERING LLC. {t("footer.rights", "ALL RIGHTS RESERVED.", "БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДАСАН.")}
          </div>
          {/* <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300 uppercase">
              {t("footer.privacy", "PRIVACY POLICY", "НУУЦЛАЛЫН БОДЛОГО")}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300 uppercase">
              {t("footer.terms", "TERMS OF SERVICE", "ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ")}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
