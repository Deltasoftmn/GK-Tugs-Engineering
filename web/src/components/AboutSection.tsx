"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function BlueprintSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute left-0 bottom-0 h-[85%] w-auto opacity-10 pointer-events-none z-0 text-brand-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* CAD Valve Schematic */}
      <circle cx="200" cy="200" r="85" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="60" />
      <circle cx="200" cy="200" r="18" />
      <line x1="200" y1="30" x2="200" y2="370" />
      <line x1="30" y1="200" x2="370" y2="200" />
      <path d="M 115 115 L 285 285 M 115 285 L 285 115" />
      <rect x="140" y="60" width="120" height="15" rx="1" />
      <rect x="140" y="325" width="120" height="15" rx="1" />
      <rect x="60" y="140" width="15" height="120" rx="1" />
      <rect x="325" y="140" width="15" height="120" rx="1" />
      <circle cx="200" cy="200" r="130" strokeDasharray="8 8" />
    </svg>
  );
}

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-[#e6ebf0] py-20 overflow-hidden"
    >
      {/* Blueprint Drawing Watermark */}
      <BlueprintSVG />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Content & Stats */}
          <div className="max-w-xl">
            <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
              {t("about.section_title", "ABOUT US", "БИДНИЙ ТУХАЙ")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-brand-navy-deep uppercase leading-tight mb-6">
              {language === "en" ? (
                <>
                  We deliver
                  <br />
                  sustainable
                  <br />
                  engineering solutions
                </>
              ) : (
                <>
                  Бид инженерчлэлийн
                  <br />
                  тогтвортой шийдлүүдийг
                  <br />
                  бүтээнэ
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-semibold mb-10">
              {t(
                "about.desc",
                "GK Tugs Engineering LLC strives to introduce modern, advanced techniques and technologies in the energy and infrastructure sectors to deliver quality and reliable performance to our clients.",
                "ГК Төгс Инженеринг ХХК нь эрчим хүч, дэд бүтцийн салбарт орчин үеийн дэвшсэн техник технологийг нэвтрүүлж, чанартай, найдвартай гүйцэтгэлийг хэрэглэгчдэд хүргэхийг эрмэлзэн ажилладаг."
              )}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-300/60">
              <div>
                <span className="block text-3xl font-extrabold text-brand-navy-deep tracking-tight mb-1">
                  100+
                </span>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  {t("about.stats.projects", "projects completed", "хэрэгжүүлсэн төсөл")}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-brand-navy-deep tracking-tight mb-1">
                  15+
                </span>
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  {t("about.stats.partners", "our partners", "манай түншүүд")}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Offset Framed Image */}
          <div className="relative mx-auto md:ml-auto md:mr-0 max-w-[340px] w-full aspect-square z-10">
            {/* Outline Box Offset */}
            <div className="absolute inset-0 border border-slate-900 translate-x-4 translate-y-4 z-0 pointer-events-none" />
            
            {/* Image Wrapper */}
            <div className="relative z-10 w-full h-full border border-slate-900 overflow-hidden bg-white shadow-xl">
              <Image
                src="/engineer_about.png"
                alt="GK Tugs Engineering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 340px, 340px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
