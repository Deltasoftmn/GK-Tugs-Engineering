import Image from "next/image";

export function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(248,250,252,1), rgba(255,255,255,1))",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="text-center text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl">
          МЭДЭЭ МЭДЭЭЛЭЛ
        </h2>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="relative h-[320px] sm:h-[360px]">
            <div className="absolute inset-0">
              <Image
                src="/medeimg1.png"
                alt="Мэдээ мэдээлэл"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-white/70" />
            </div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.92)), radial-gradient(circle at 20% 10%, rgba(14,165,233,0.12), transparent 45%), radial-gradient(circle at 90% 30%, rgba(0,51,102,0.10), transparent 55%)",
              }}
            />
            <div className="absolute inset-0 opacity-35" aria-hidden>
              <svg
                viewBox="0 0 800 400"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 260c120-140 200-120 300-60 80 48 180 56 320-40"
                  stroke="rgba(0,51,102,0.35)"
                  strokeWidth="2"
                />
                <path
                  d="M60 310h680"
                  stroke="rgba(0,51,102,0.18)"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
                <circle cx="210" cy="215" r="46" stroke="rgba(0,51,102,0.28)" strokeWidth="2" />
                <circle cx="210" cy="215" r="12" stroke="rgba(0,51,102,0.22)" strokeWidth="2" />
                <rect
                  x="320"
                  y="170"
                  width="160"
                  height="90"
                  rx="10"
                  stroke="rgba(0,51,102,0.22)"
                  strokeWidth="2"
                />
                <path
                  d="M340 200h120M340 225h90"
                  stroke="rgba(0,51,102,0.18)"
                  strokeWidth="2"
                />
                <path
                  d="M560 120l-26 84h54l-26 84"
                  stroke="rgba(0,51,102,0.22)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative grid h-full place-items-center px-6 text-center">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-slate-500">
                  Техникийн зураглалын хэсэг
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  Төсөл, тендер, шинэчлэлийн мэдээг удахгүй нэмнэ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
