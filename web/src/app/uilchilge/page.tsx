"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IconHardHatPipes, IconRenewable, IconSupply } from "@/components/icons";
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

function NewBusinessCard({ index, title, description }: { index: number; title: string; description: string }) {
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
        <div>
          <h4 className="text-xs font-bold text-brand-navy-deep uppercase tracking-wider mb-1">
            {title}
          </h4>
          <p className="text-[11px] font-semibold leading-relaxed text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function UilchilgePage() {
  const { t, language } = useLanguage();

  const newBusinessAreas = [
    {
      titleMn: "Дулааны болон хүйтний тооцоо, мониторинг",
      titleEn: "Thermal and Cold Calculation, Monitoring",
      descriptionMn: "Операторын хяналт, мэдрэгч, өгөгдөл цуглуулах, тайлангийн шийдэл.",
      descriptionEn: "Operator control, sensors, data collection, and reporting solutions.",
    },
    {
      titleMn: "Төслийн ба үйлдвэрийн барилга байгууламжийн угсралт",
      titleEn: "Project & Industrial Building Construction",
      descriptionMn: "Инженерийн уялдаа холбоотой, шат дараалсан барилга угсралтын ажил.",
      descriptionEn: "Coordinated, sequenced building construction and engineering work.",
    },
    {
      titleMn: "Сэргээгдэх эрчим хүчний барилга байгууламжийн зөвлөх үйлчилгээ",
      titleEn: "Renewable Energy Facility Consulting",
      descriptionMn: "ТЭЗҮ, зураг төсөл, техникийн шаардлага, хяналт, зөвлөх.",
      descriptionEn: "Feasibility study, design drawing, technical requirements, supervision, and consulting.",
    },
    {
      titleMn: "Дулаан хангамжийн систем болон сэргээгдэх эрчим хүчний төсөл, судалгаа",
      titleEn: "Heating & Renewable Energy Feasibility Studies",
      descriptionMn: "Судалгаа, эдийн засгийн үнэлгээ, хэрэгжилтийн төлөвлөлт.",
      descriptionEn: "Research, economic evaluation, and implementation planning.",
    },
  ];

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
                      Services &amp;
                      <br />
                      Engineering Solutions
                    </>
                  ) : (
                    <>
                      Үйлчилгээ &amp;
                      <br />
                      Инженерийн шийдэл
                    </>
                  )}
                </h1>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 mb-8 max-w-lg">
                  {t(
                    "services.hero_desc",
                    "We deliver comprehensive, international-standard solutions in pipeline networks, renewable energy, and equipment supply.",
                    "Бид инженерийн шугам сүлжээ, сэргээгдэх эрчим хүч, худалдаа нийлүүлэлтийн чиглэлээр олон улсын стандартад нийцсэн шийдлүүдийг иж бүрэн гүйцэтгэдэг."
                  )}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-[#0c2b5c] px-6 py-3 text-xs font-bold tracking-wider text-white shadow-lg border border-slate-700/50 hover:bg-brand-sky hover:border-brand-sky transition-all duration-300 rounded-none uppercase"
                  >
                    <IconDownload />
                    {t("services.download_profile", "DOWNLOAD SERVICES PROFILE", "ҮЙЛЧИЛГЭЭНИЙ ТАНИЛЦУУЛГА ТАТАХ")}
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
                      src="/services_hero.png"
                      alt="GK Tugs Engineering Services"
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

        {/* Introduction Section */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-left">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("services.intro_label", "OPERATIONS", "ҮЙЛ АЖИЛЛАГАА")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase mb-6">
                {t("services.intro_title", "GK Tugs Engineering & Business Sectors", "Жи Кэй Төгс Инженеринг ба Үйл ажиллагааны чиглэл")}
              </h2>
              <div className="space-y-6 text-xs sm:text-sm font-semibold leading-relaxed text-slate-500">
                <p>
                  {t(
                    "services.intro_desc",
                    "Our company fully performs infrastructure and pipeline network assembly, testing and commissioning, consulting services, energy facilities, renewable energy equipment installation, and engineering-solution building constructions in the energy and construction sectors.",
                    "Манай компани нь эрчим хүч, барилга угсралтын салбарт дэд бүтэц, инженерийн шугам сүлжээний угсралт, туршилт тохируулга, зөвлөх үйлчилгээ, мөн эрчим хүчний барилга байгууламж, сэргээгдэх эрчим хүчний тоног төхөөрөмжийн угсралт, инженерийн шийдэлтэй барилга байгууламжийн угсралтын ажлуудыг иж бүрэн гүйцэтгэж байна."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Business Areas Section */}
        <section className="bg-[#fcfdfe] py-16 sm:py-20 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Core 1 */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col min-h-[260px]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-sky-50 rounded-none border border-sky-100 text-brand-navy">
                  <IconHardHatPipes className="h-6 w-6" />
                </div>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("services.core1.title", "ENGINEERING & CONSTRUCTION", "ИНЖЕНЕРИЙН & УГСРАЛТ")}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-slate-600">
                  {t(
                    "services.core1.desc",
                    "Heating, water supply, sewage, and telecommunications assembly, testing and commissioning.",
                    "Дулаан, ус хангамж, ариутгах татуурга, холбоо дохиоллын угсралт, туршилт тохируулга."
                  )}
                </p>
              </div>

              {/* Core 2 */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col min-h-[260px]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-sky-50 rounded-none border border-sky-100 text-brand-navy">
                  <IconRenewable className="h-6 w-6" />
                </div>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("services.core2.title", "RENEWABLE ENERGY", "СЭРГЭЭГДЭХ ЭРЧИМ ХҮЧ")}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-slate-600">
                  {t(
                    "services.core2.desc",
                    "Solar and wind energy resource assessment, drawings, assembly, and commissioning.",
                    "Нар, салхины эх үүсвэрийн судалгаа, зураг төсөл, угсралт, ашиглалтад оруулах."
                  )}
                </p>
              </div>

              {/* Core 3 */}
              <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col min-h-[260px]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center bg-sky-50 rounded-none border border-sky-100 text-brand-navy">
                  <IconSupply className="h-6 w-6" />
                </div>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
                  {t("services.core3.title", "TRADE & SUPPLY", "ХУДАЛДАА НИЙЛҮҮЛЭЛТ")}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-slate-600">
                  {t(
                    "services.core3.desc",
                    "Equipment, spare parts, material supply, and logistics management.",
                    "Тоног төхөөрөмж, сэлбэг хэрэгсэл, материал нийлүүлэлт болон логистикийн зохион байгуулалт."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Business Areas Section */}
        <section className="bg-[#f0f4f8] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("services.new_label", "NEW SECTORS", "ШИНЭ ЧИГЛЭЛ")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("services.new_title", "Our New Business Sectors", "Манай шинэ бизнесийн чиглэлүүд")}
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {newBusinessAreas.map((area, idx) => (
                <NewBusinessCard
                  key={idx}
                  index={idx + 1}
                  title={language === "en" ? area.titleEn : area.titleMn}
                  description={language === "en" ? area.descriptionEn : area.descriptionMn}
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
