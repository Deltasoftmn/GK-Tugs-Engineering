type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2 className="text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl md:text-[1.6rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{subtitle}</p>
      ) : null}
      <div
        className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand-sky"
        aria-hidden
      />
    </div>
  );
}
