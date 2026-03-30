import Image from "next/image";

export type ProjectItem = {
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProjectCard({ title, excerpt, imageSrc, imageAlt }: ProjectItem) {
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
        <h3 className="font-semibold text-brand-navy">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
      </div>
    </article>
  );
}
