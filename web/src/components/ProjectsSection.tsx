"use client";

import { projects } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="products" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mockup Header Layout */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex-shrink-0">
            <span className="block text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-2">
              {t("projects.section_subtitle", "OUR WORK", "БИДНИЙ АЖИЛ")}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
              {t("projects.section_title", "COMPLETED PROJECTS & PROGRAMS", "ХЭРЭГЖҮҮЛСЭН ТӨСӨЛ ХӨТӨЛБӨРҮҮД")}
            </h2>
          </div>
          
          {/* Horizontal Line connecting Title and Button */}
          <div className="hidden sm:block h-px bg-slate-200/80 flex-grow mx-6 mb-2.5" />
          
          <div className="flex-shrink-0">
            <Link
              href="/projects"
              className="inline-block rounded-none border border-slate-300 px-6 py-2.5 text-xs font-bold tracking-wider text-slate-600 hover:text-brand-sky hover:border-brand-sky transition-colors duration-300 uppercase"
            >
              {t("projects.all_projects", "ALL PROJECTS", "БҮХ ТӨСӨЛ")}
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p) => (
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
  );
}
