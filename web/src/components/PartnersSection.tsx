import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const partners = [
  { label: "Эрчим хүч", src: "/erchim-huch-yam.jpg", alt: "Эрчим хүч" },
  { label: "Байгаль орчин", src: "/hot-baiguulalt.jpg", alt: "Байгаль орчин" },
  { label: "MAK", src: "/mongol-alt.jpeg", alt: "MAK" },
  { label: "CTCE GROUP", src: "/ctce.png", alt: "CTCE GROUP" },
] as const;

export function PartnersSection() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="ХАМТРАН АЖИЛЛАГЧ БАЙГУУЛЛАГУУД" />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((p) => (
            <div
              key={p.label}
              className="group flex h-14 min-w-[140px] items-center justify-center rounded-lg border border-slate-200 bg-white px-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:h-16 sm:min-w-[170px]"
            >
              <div className="relative h-10 w-full max-w-[140px] sm:h-11 sm:max-w-[150px]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain opacity-90 transition group-hover:opacity-100"
                  sizes="150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
