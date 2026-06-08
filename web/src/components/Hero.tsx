"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

function IconCrane() {
  return (
    <svg className="h-6 w-6 text-brand-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V3l14 6v4H9" />
      <path d="M19 9l-4 4" strokeLinecap="round" />
      <circle cx="9" cy="21" r="1" />
      <circle cx="15" cy="21" r="1" />
    </svg>
  );
}

function IconWindmill() {
  return (
    <svg className="h-6 w-6 text-brand-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" d="M12 12v9M12 12l-6-4M12 12l6-4M12 12v-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l3-3M18 8l-3-3M12 4L9 7" />
    </svg>
  );
}

function IconCargo() {
  return (
    <svg className="h-6 w-6 text-brand-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

const slides = [
  "/hero_slide_1.png",
  "/hero_slide_2.png",
  "/hero_slide_3.png"
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative bg-[#f4f7fa]">
      {/* CSS style block for Ken Burns animation */}
      <style>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .animate-kenburns {
          animation: kenburns 6500ms ease-out forwards;
        }
      `}</style>

      {/* Hero Background and Text Section */}
      <div className="relative min-h-[480px] sm:min-h-[580px] w-full overflow-hidden flex items-center">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((src, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt="GK Tugs Engineering background"
                  fill
                  priority={index === 0}
                  className={`object-cover ${isActive ? "animate-kenburns" : ""}`}
                  sizes="100vw"
                />
              </div>
            );
          })}
          {/* Subtle gradient overlay to darken image for text readability - must be z-20 to sit on top of images */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent z-20" />
        </div>

        {/* Content Container */}
        <div className="relative z-30 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Small Header Texts */}
            <div className="mb-4 space-y-1">
              <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
                {t("hero.subtitle", "ENGINEERING & PROJECTS...", "ИНЖЕНЕРИНГ БОЛОН ТӨСӨЛ ХӨТӨЛБӨРҮҮД...")}
              </span>
            </div>

            {/* Main Header */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-wide text-white sm:text-4xl md:text-5xl uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {language === "en" ? (
                <>
                  Engineering pipelines
                  <br />
                  &amp; renewable energy
                </>
              ) : (
                <>
                  Инженерийн шугам сүлжээ
                  <br />
                  &amp; сэргээгдэх эрчим хүч
                </>
              )}
            </h1>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#about"
                className="inline-block rounded-none bg-brand-navy px-8 py-3.5 text-xs font-bold tracking-wider text-white shadow-lg border border-brand-sky/20 transition-all duration-300 hover:bg-brand-sky hover:shadow-brand-sky/25"
              >
                {t("hero.cta", "PROFILE", "ТАНИЛЦУУЛГА")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Cards Container */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Card 1 */}
          <a
            href="/uilchilge#core-1"
            className="group flex flex-col justify-between bg-white p-8 shadow-[0_15px_35px_-15px_rgba(2,26,51,0.15)] hover:shadow-[0_20px_45px_-12px_rgba(2,26,51,0.25)] transition-all duration-300 border border-slate-100/80 min-h-[220px]"
          >
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center bg-slate-50 rounded-none border border-slate-100">
                <IconCrane />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-brand-navy-deep uppercase mb-2">
                {t("hero.card1.title", "ENGINEERING & CONSTRUCTION", "ИНЖЕНЕРИЙН & УГСРАЛТ")}
              </h3>
              <p className="text-[11px] font-medium leading-relaxed text-slate-400 uppercase">
                {t("hero.card1.desc", "PIPELINE NETWORK INSTALLATION", "ИНЖЕНЕРИЙН ШУГАМ СҮЛЖЭЭНИЙ УГСРАЛТ")}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider group-hover:text-brand-sky transition-colors">
                {t("hero.learn_more", "LEARN MORE", "ДЭЛГЭРЭНГҮЙ")}
              </span>
              <span className="text-slate-400 text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="/uilchilge#core-2"
            className="group flex flex-col justify-between bg-white p-8 shadow-[0_15px_35px_-15px_rgba(2,26,51,0.15)] hover:shadow-[0_20px_45px_-12px_rgba(2,26,51,0.25)] transition-all duration-300 border border-slate-100/80 min-h-[220px]"
          >
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center bg-slate-50 rounded-none border border-slate-100">
                <IconWindmill />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-brand-navy-deep uppercase mb-2">
                {t("hero.card2.title", "RENEWABLE ENERGY", "СЭРГЭЭГДЭХ ЭРЧИМ ХҮЧ")}
              </h3>
              <p className="text-[11px] font-medium leading-relaxed text-slate-400 uppercase">
                {t("hero.card2.desc", "WIND & SOLAR ENERGY SOLUTIONS", "САЛХИ, НАРНЫ ЭРЧИМ ХҮЧНИЙ ШИЙДЭЛ")}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider group-hover:text-brand-sky transition-colors">
                {t("hero.learn_more", "LEARN MORE", "ДЭЛГЭРЭНГҮЙ")}
              </span>
              <span className="text-slate-400 text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="/uilchilge#core-3"
            className="group flex flex-col justify-between bg-white p-8 shadow-[0_15px_35px_-15px_rgba(2,26,51,0.15)] hover:shadow-[0_20px_45px_-12px_rgba(2,26,51,0.25)] transition-all duration-300 border border-slate-100/80 min-h-[220px]"
          >
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center bg-slate-50 rounded-none border border-slate-100">
                <IconCargo />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-brand-navy-deep uppercase mb-2">
                {t("hero.card3.title", "TRADE & SUPPLY", "ХУДАЛДАА НИЙЛҮҮЛЭЛТ")}
              </h3>
              <p className="text-[11px] font-medium leading-relaxed text-slate-400 uppercase">
                {t("hero.card3.desc", "EQUIPMENT SUPPLY & TRADING", "БҮТЭЭГДЭХҮҮН НИЙЛҮҮЛЭЛТ, ХУДАЛДАА")}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider group-hover:text-brand-sky transition-colors">
                {t("hero.learn_more", "LEARN MORE", "ДЭЛГЭРЭНГҮЙ")}
              </span>
              <span className="text-slate-400 text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
