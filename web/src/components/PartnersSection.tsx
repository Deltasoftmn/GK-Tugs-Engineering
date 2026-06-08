"use client";

import { useLanguage } from "@/context/LanguageContext";

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f0f4f8] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-8">
          {t("partners.section_title", "PARTNER ORGANIZATIONS", "ХАМТРАН АЖИЛЛАГЧ БАЙГУУЛЛАГУУД")}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xs sm:text-sm font-extrabold tracking-[0.2em] text-brand-navy-deep/80">
          <span className="hover:text-brand-sky transition-colors cursor-default uppercase">
            {t("partners.moe", "MINISTRY OF ENERGY", "ЭРЧИМ ХҮЧНИЙ ЯАМ")}
          </span>
          <span className="hover:text-brand-sky transition-colors cursor-default uppercase">
            {t("partners.gov", "GOVERNMENT OF MONGOLIA", "ЗАСГИЙН ГАЗАР")}
          </span>
          <span className="hover:text-brand-sky transition-colors cursor-default uppercase">
            {t("partners.mak", "MAK LLC", "МАК ХХК")}
          </span>
          <span className="hover:text-brand-sky transition-colors cursor-default uppercase">
            CTGE GROUP
          </span>
        </div>
      </div>
    </section>
  );
}
