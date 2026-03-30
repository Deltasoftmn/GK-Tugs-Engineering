import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-100/80 bg-white/95 p-6 shadow-[0_20px_50px_-12px_rgba(0,51,102,0.15)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-sky/30 hover:shadow-[0_28px_60px_-12px_rgba(0,51,102,0.22)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-sky-soft to-sky-100 text-brand-navy transition group-hover:from-brand-sky/20 group-hover:to-brand-sky-soft">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
