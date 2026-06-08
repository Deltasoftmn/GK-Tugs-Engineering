"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export type ProjectTileItem = {
  title: string;
  titleEn?: string;
  imageSrc: string;
  imageAlt: string;
  location?: string;
  locationEn?: string;
};

export function ProjectTile({ title, titleEn, imageSrc, imageAlt, location, locationEn }: ProjectTileItem) {
  const { language } = useLanguage();

  return (
    <article className="group overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(2,26,51,0.08)] flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[11px] font-extrabold tracking-wider text-brand-navy-deep uppercase leading-snug mb-2 flex-1">
          {language === "en" && titleEn ? titleEn : title}
        </h3>
        {(location || locationEn) && (
          <p className="text-[10px] text-slate-400 font-semibold tracking-wide lowercase mt-auto">
            {language === "en" && locationEn ? locationEn : location}
          </p>
        )}
      </div>
    </article>
  );
}
