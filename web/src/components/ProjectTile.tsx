import Image from "next/image";

export type ProjectTileItem = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProjectTile({ title, imageSrc, imageAlt }: ProjectTileItem) {
  return (
    <article className="overflow-hidden rounded-md bg-white shadow-[0_12px_24px_-12px_rgba(2,26,51,0.35)] ring-1 ring-slate-200">
      <div className="relative aspect-[4/3] bg-slate-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="px-3 py-3 text-center">
        <h3 className="text-[11px] font-extrabold italic uppercase leading-snug tracking-wide text-brand-navy">
          {title}
        </h3>
      </div>
    </article>
  );
}

