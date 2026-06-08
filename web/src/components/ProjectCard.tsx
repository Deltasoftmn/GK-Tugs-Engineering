"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export type ProjectItem = {
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  imageSrc: string;
  imageAlt: string;
  location?: string;
  locationEn?: string;
};

export function ProjectCard({ title, titleEn, excerpt, excerptEn, imageSrc, imageAlt }: ProjectItem) {
  const { language } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-brand-sky/40 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy-deep/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-brand-navy">
          {language === "en" && titleEn ? titleEn : title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {language === "en" && excerptEn ? excerptEn : excerpt}
        </p>
      </div>
    </article>
  );
}
