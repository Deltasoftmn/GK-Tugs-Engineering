"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function IconDownload() {
  return (
    <svg
      className="mr-2 h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function PrincipleCard({ index, text }: { index: number; text: string }) {
  return (
    <div className="relative overflow-hidden bg-white/90 p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-brand-sky"
        aria-hidden
      />
      <div className="flex gap-4 items-start">
        <span className="flex-shrink-0 grid place-items-center h-7 w-7 text-xs font-bold text-brand-sky bg-sky-50 border border-sky-100 rounded-none">
          0{index}
        </span>
        <p className="text-xs font-semibold leading-relaxed text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t, language } = useLanguage();

  const principles = [
    {
      mn: "Харилцагч, түншлэгч, захиалагчтайгаа харилцахдаа үнэнч шударга зарчмыг баримтална.",
      en: "We maintain integrity and honesty in all dealings with clients, partners, and employers.",
    },
    {
      mn: "Бид шинийг сэдэж, аливааг сайжруулах боломжийг цаг ямагт эрэлхийлнэ.",
      en: "We continuously look for opportunities to innovate and improve.",
    },
    {
      mn: "Бид хөдөлмөрийн аюулгүй байдал, эрүүл ахуйг нэн тэргүүнд хангаж ажиллана.",
      en: "We prioritize occupational health and safety above all.",
    },
    {
      mn: "Бид ажилдаа сэтгэлтэй хандаж, компанийн нэр хүнд, өмч хөрөнгөө хайрлан хамгаална.",
      en: "We work with passion and protect our company's reputation and assets.",
    },
    {
      mn: "Бид ажилтан бүрт хөгжиж дэвших боломж, ижил тэгш бололцоо олгож, ажилтны өсөлт хөгжлийг дэмжинэ.",
      en: "We support the growth of our employees by providing equal opportunities to develop.",
    },
  ];

  const timelineEvents = [
    {
      year: "2021",
      titleMn: "Үүсгэн байгуулалт",
      titleEn: "Establishment",
      descriptionMn: "Жи Кэй Төгс инженеринг ХХК нь үүсгэн байгуулагдаж, эрчим хүч болон инженерийн шугам сүлжээний чиглэлээр анхны төслүүдээ амжилттай эхлүүлэв.",
      descriptionEn: "GK Tugs Engineering LLC was founded and successfully launched its first projects in power and pipeline networks.",
    },
    {
      year: "2022",
      titleMn: "Үйл ажиллагааны өргөжилт",
      titleEn: "Operations Expansion",
      descriptionMn: "Инженер техникийн багийг чадавхжуулж, салбартаа шинэ дэвшилтэт техник, технологийг нэвтрүүлж эхэлсэн ба сэргээгдэх эрчим хүчний төслүүд рүү үйл ажиллагаагаа өргөжүүлэв.",
      descriptionEn: "Strengthened engineering team, introduced advanced techniques and technologies, and expanded operations into renewable energy projects.",
    },
    {
      year: "2023",
      titleMn: "Томоохон төслүүдийн түншлэл",
      titleEn: "Major Project Partnership",
      descriptionMn: "Улсын чанартай томоохон дэд бүтцийн төслүүдийн угсралт, тоног төхөөрөмж болон бараа нийлүүлэлтийг амжилттай гүйцэтгэж, итгэмжлэгдсэн найдвартай түнш болохоо харууллаа.",
      descriptionEn: "Successfully completed pipeline installation, equipment, and goods supply for major national infrastructure projects, proving to be a reliable partner.",
    },
    {
      year: "2024",
      titleMn: "Стандартчилал ба Хөгжил",
      titleEn: "Standardization & Development",
      descriptionMn: "Олон улсын чанар, аюулгүй байдлын стандартуудыг үйл ажиллагаандаа нэвтрүүлж, төслийн менежментийн чанарыг шинэ түвшинд гаргалаа.",
      descriptionEn: "Adopted international quality and safety standards, raising project management quality to a new level.",
    },
    {
      year: "2025",
      titleMn: "Тогтвортой хөгжлийн зорилтууд",
      titleEn: "Sustainability Goals",
      descriptionMn: "Байгаль орчин, нийгэм, засаглалын (БОНЗ) бодлогыг үйл ажиллагаандаа бүрэн нэвтрүүлж, тогтвортой хөгжлийн урт хугацааны стратегийг хэрэгжүүлж эхэллээ.",
      descriptionEn: "Fully integrated environmental, social, and governance (ESG) policies into operations and began implementing long-term sustainability strategies.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        {/* MCS-Style Dotted Grid Hero Section */}
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
                      About Us &amp;
                      <br />
                      Sustainable development
                    </>
                  ) : (
                    <>
                      Бидний тухай &amp;
                      <br />
                      Тогтвортой хөгжил
                    </>
                  )}
                </h1>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 mb-8 max-w-lg">
                  {t(
                    "about.hero_desc",
                    "Learn about the results and successes of our work as we incorporate ESG and sustainable development trends into our operations to achieve our long-term goals.",
                    "БОНЗ-ын болон тогтвортой хөгжлийн чиг хандлагыг үйл ажиллагаандаа нэвтрүүлж, урт хугацааны зорилтууддаа хүрэхээр хэрэгжүүлж буй бидний ажлын үр дүн, хүрсэн амжилтуудтай танилцаарай."
                  )}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-[#0c2b5c] px-6 py-3 text-xs font-bold tracking-wider text-white shadow-lg border border-slate-700/50 hover:bg-brand-sky hover:border-brand-sky transition-all duration-300 rounded-none uppercase"
                  >
                    <IconDownload />
                    {t("about.download_profile", "DOWNLOAD PROFILE", "ТАНИЛЦУУЛГА ТАТАХ")}
                  </a>
                </div>
              </div>

              {/* Right: Rotated Masked Image */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative background shape offset */}
                <div className="absolute inset-0 max-w-[420px] aspect-[4/3] rounded-[48px] bg-slate-700/40 rotate-[12deg] scale-95 translate-x-4 translate-y-4 pointer-events-none" />
                
                {/* Main masked image container */}
                <div className="relative overflow-hidden rounded-[48px] rotate-[12deg] aspect-[4/3] w-full max-w-[420px] border-4 border-slate-700/50 shadow-2xl bg-slate-800">
                  <div className="-rotate-[12deg] scale-125 w-full h-full relative">
                    <Image
                      src="/about_hero.png"
                      alt="GK Tugs Engineering баг"
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

        {/* Company Profile Editorial Section */}
        <section id="intro" className="bg-white py-16 sm:py-20 border-b border-slate-100 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-left">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("about.profile_label", "PROFILE", "ТАНИЛЦУУЛГА")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase mb-6">
                {t("about.profile_title", "GK Tugs Engineering & Sustainable Development", "Жи Кэй Төгс Инженеринг ба Тогтвортой хөгжил")}
              </h2>
              <div className="space-y-6 text-xs sm:text-sm font-semibold leading-relaxed text-slate-500">
                <p>
                  {t(
                    "about.profile_p1",
                    "GK Tugs Engineering LLC was established in 2021 and operates in the fields of energy, pipeline installation, and construction. Our team adheres to the core principles of quality, occupational safety, and project management.",
                    "Жи Кэй Төгс инженеринг ХХК нь 2021 байгуулагдсан бөгөөд эрчим хүч, инженерийн шугам сүлжээ, барилга угсралтын чиглэлээр мэргэшлийн үйл ажиллагаа явуулж байна. Манай хамт олон чанар, хөдөлмөрийн аюулгүй байдал, төслийн менежментийн үйл ажиллагааны үндсэн зарчмуудыг баримтлан ажилладаг."
                  )}
                </p>
                <p>
                  {t(
                    "about.profile_p2",
                    "We incorporate sustainable development goals in every business area we operate. Within this scope, we provide information on measures taken to eliminate potential negative impacts from our activities, as well as our environmentally friendly, socially responsible, and ethical business operations.",
                    "Бид үйл ажиллагаа эрхэлж буй бизнесийн салбар бүртээ тогтвортой хөгжлийн зорилгуудыг тусган уртал болгон хэрэгжүүлдэг. Энэ хүрээнд өөрсдийн үйл ажиллагаанаас үүсэж болзошгүй сөрөг нөлөөллийг арилгахад чиглэсэн арга хэмжээ болон байгаль орчиндоо ээлтэй, нийгмийн хариуцлагатай, ёс зүйтэй бизнесийн үйл ажиллагааны талаарх мэдээллийг хүргэж байна."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values Grid */}
        <section className="bg-[#fcfdfe] py-16 sm:py-20 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Vision */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("about.vision_title", "VISION", "АЛСЫН ХАРАА")}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-slate-600">
                  {t(
                    "about.vision_desc",
                    "To contribute to national development, introduce world-class technology, and be a leading organization implementing advanced engineering solutions in the energy and construction sectors.",
                    "Улс орны хөгжилд дэвшилд хувь нэмэр оруулан, дэлхийн жишигт нийцсэн техник технологийг нэвтрүүлж, эрчим хүч, барилгын салбарт дэвшил бүхий инженерийн шийдлийг хэрэгжүүлэгч байгууллага байна."
                  )}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("about.mission_title", "MISSION", "ЭРХЭМ ЗОРИЛГО")}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-slate-600 italic">
                  &ldquo;{t("about.mission_desc", "Lighting development through engineering.", "Инженерингээр хөгжлийг асаана.")}&rdquo;
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("about.values_title", "VALUES", "ҮНЭТ ЗҮЙЛ")}
                </span>
                <ul className="space-y-2 text-xs font-bold text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-brand-sky" />
                    {t("about.values.v1", "Integrity & Honesty", "Үнэнч шударга зарчим")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-brand-sky" />
                    {t("about.values.v2", "Team Spirit", "Багийн сэтгэлгээ")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-brand-sky" />
                    {t("about.values.v3", "Creative Thinking", "Бүтээлч сэтгэхүй")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-brand-sky" />
                    {t("about.values.v4", "Continuous Learning", "Үргэлж суралцах хүсэл тэмүүлэл")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="history" className="bg-white py-16 sm:py-20 border-b border-slate-100 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("about.history_label", "HISTORY", "ТҮҮХЭН ЗАМНАЛ")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("about.history_title", "Our Development History", "Бидний хөгжлийн түүх")}
              </h2>
            </div>

            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 items-center group">
                  {/* Left Side: Large Year & Line */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-black text-slate-200 tracking-wider group-hover:text-brand-sky transition-colors duration-300">
                      {event.year}
                    </span>
                    <div className="hidden md:block h-px flex-1 bg-slate-200 group-hover:bg-brand-sky/30 transition-colors duration-300" />
                  </div>
                  
                  {/* Right Side: Card Content */}
                  <div className="bg-white p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] group-hover:border-slate-200/80 transition-all duration-300 relative overflow-hidden">
                    {/* Top border decoration */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-slate-100 group-hover:bg-[#a88143] transition-colors duration-300" />
                    
                    <h3 className="text-xs font-bold tracking-[0.15em] text-[#a88143] uppercase mb-3">
                      {language === "en" ? event.titleEn : event.titleMn}
                    </h3>
                    <p className="text-xs font-semibold leading-relaxed text-slate-500">
                      {language === "en" ? event.descriptionEn : event.descriptionMn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section id="principles" className="bg-[#f0f4f8] py-16 sm:py-20 scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("about.principles_label", "CORE PRINCIPLES", "БАТЛАХ ЗАРЧИМ")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("about.principles_title", "Our Core Principles", "Манай баримтлах зарчим")}
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p, idx) => (
                <PrincipleCard
                  key={idx}
                  index={idx + 1}
                  text={language === "en" ? p.en : p.mn}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
