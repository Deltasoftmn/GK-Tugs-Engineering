"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectTile } from "@/components/ProjectTile";
import { projects } from "@/data/projects";
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

export default function ProjectsPage() {
  const { t } = useLanguage();

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
                  {t("projects.hero_title", "Projects &amp; Programs", "Төсөл, Хөтөлбөрүүд")}
                </h1>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 mb-8 max-w-lg">
                  {t(
                    "projects.hero_desc",
                    "Explore the highlights of our successfully executed projects and infrastructure programs.",
                    "Манай хамт олны хэрэгжүүлсэн онцлох төсөл, хөтөлбөрүүдтэй танилцаарай."
                  )}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-[#0c2b5c] px-6 py-3 text-xs font-bold tracking-wider text-white shadow-lg border border-slate-700/50 hover:bg-brand-sky hover:border-brand-sky transition-all duration-300 rounded-none uppercase"
                  >
                    <IconDownload />
                    {t("projects.download_profile", "DOWNLOAD PROJECT PROFILE", "ТӨСЛИЙН ТАНИЛЦУУЛГА ТАТАХ")}
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
                      src="/project_heating.png"
                      alt="GK Tugs Engineering Projects"
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

        {/* Projects Grid Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("projects.grid_label", "COMPLETED PROJECTS", "ХЭРЭГЖҮҮЛСЭН ТӨСЛҮҮД")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("projects.grid_title", "Our Project Portfolio", "Манай төслүүд")}
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <ProjectTile
                  key={p.title}
                  title={p.title}
                  titleEn={p.titleEn}
                  imageSrc={p.imageSrc}
                  imageAlt={p.imageAlt}
                  location={p.location}
                  locationEn={p.locationEn}
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
