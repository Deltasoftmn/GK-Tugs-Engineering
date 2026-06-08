"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Dotted Grid Hero Section */}
        <section
          className="relative bg-slate-800 text-white overflow-hidden py-16 sm:py-24"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40 z-0" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase leading-tight mb-6 drop-shadow-sm">
                  {language === "en" ? (
                    <>
                      Contact Us &amp;
                      <br />
                      Inquiries
                    </>
                  ) : (
                    <>
                      Холбоо барих &amp;
                      <br />
                      Санал хүсэлт
                    </>
                  )}
                </h1>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 mb-8 max-w-lg">
                  {t(
                    "contact.hero_desc",
                    "We are here to support your engineering, construction, and renewable energy projects. Get in touch with us for optimal solutions.",
                    "Бид таны инженерийн шугам сүлжээ, барилга угсралт, сэргээгдэх эрчим хүчний төслийг дэмжин ажиллахад бэлэн байна. Оновчтой шийдлийн талаар холбогдон мэдээлэл аваарай."
                  )}
                </p>
              </div>

              {/* Right: Rotated Masked Image */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative background shape offset */}
                <div className="absolute inset-0 max-w-[420px] aspect-[4/3] rounded-[48px] bg-slate-700/40 rotate-[12deg] scale-95 translate-x-4 translate-y-4 pointer-events-none" />
                
                {/* Main masked image container */}
                <div className="relative overflow-hidden rounded-[48px] rotate-[12deg] aspect-[4/3] w-full max-w-[420px] border-4 border-slate-700/50 shadow-2xl bg-slate-800">
                  <div className="-rotate-[12deg] scale-125 w-full h-full relative">
                    <Image
                      src="/contact_hero.png"
                      alt="GK Tugs Engineering Contact"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Section: Form, Map & Details */}
        <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              
              {/* Left Column: Office Location, Details, Map */}
              <div className="space-y-8">
                <div>
                  <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                    {t("contact.location_label", "OUR LOCATION", "БИДНИЙ БАЙРШИЛ")}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase mb-4">
                    {t("contact.location_title", "Our Office Map & Details", "Манай хаяг, байршил")}
                  </h2>
                </div>

                {/* Google Map Box */}
                <div className="overflow-hidden rounded-none border border-slate-200 bg-white p-2 shadow-sm">
                  <div className="h-[280px] w-full sm:h-[340px]">
                    <iframe
                      title="GK Tugs Engineering location"
                      className="block h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps?q=Daco%20Business%20Center%20Ulaanbaatar&output=embed"
                    />
                  </div>
                </div>

                {/* Contact Information Details */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {/* Phone */}
                  <a
                    href="tel:+97670001211"
                    className="bg-white p-5 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-slate-200 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-none bg-sky-50 text-brand-sky border border-sky-100 mb-3">
                      <IconPhone className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold text-[#a88143] tracking-widest uppercase mb-1">
                      {t("contact.info.phone", "PHONE", "УТАС")}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 block" dir="ltr">
                      +976 7000 1211
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:gk.tugsengineering@gmail.com"
                    className="bg-white p-5 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-slate-200 transition-all duration-300 flex flex-col items-center text-center break-all"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-none bg-sky-50 text-fuchsia-600 border border-sky-100 mb-3">
                      <IconMail className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold text-[#a88143] tracking-widest uppercase mb-1">
                      {t("contact.info.email", "EMAIL", "И-МЭЙЛ")}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 block">
                      GK.TUGSENGINEERING@GMAIL.COM
                    </span>
                  </a>

                  {/* Address */}
                  <div
                    className="bg-white p-5 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col items-center text-center"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-none bg-sky-50 text-rose-500 border border-sky-100 mb-3">
                      <IconMapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold text-[#a88143] tracking-widest uppercase mb-1">
                      {t("contact.info.address", "ADDRESS", "ХАЯГ")}
                    </span>
                    <span className="text-[9px] font-semibold leading-relaxed text-slate-500 block uppercase">
                      Daco Business Center, 13th Khoroo, Bayangol District, UB
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Contact Inquiry Form */}
              <div className="bg-white p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="mb-6">
                  <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-2">
                    {t("contact.form_label", "INQUIRY", "ХОЛБООС")}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-brand-navy-deep uppercase">
                    {t("contact.form_title", "Send Us an Inquiry", "Санал хүсэлт илгээх")}
                  </h3>
                </div>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
