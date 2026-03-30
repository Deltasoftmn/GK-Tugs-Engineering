import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="GK Tugs Engineering нүүр хуудасны загвар"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
          <div className="mt-10 max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-4xl">
              ИНЖЕНЕРИЙН ШУГАМ СҮЛЖЭЭ
              <br className="hidden sm:block" /> &amp; СЭРГЭЭГДЭХ ЭРЧИМ ХҮЧ
            </h1>
          </div>

          <div
            id="services"
            className="mt-10 grid scroll-mt-28 gap-4 sm:grid-cols-3"
          >
            <a
              href="#services"
              className="group flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_-14px_rgba(2,26,51,0.5)] ring-1 ring-white/60 backdrop-blur transition hover:bg-white"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <Image
                  src="/img1.png"
                  alt="Инженеринг угсралт"
                  fill
                  className="object-contain p-2"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="text-sm font-extrabold text-brand-navy">
                  ИНЖЕНЕРИНГ
                  <br /> УГСРАЛТ
                </div>
                <div className="mt-1 text-[11px] font-medium leading-snug text-slate-600">
                  Инженерийн шугам сүлжээний угсралт
                </div>
              </div>
              <span className="ml-auto hidden text-xs font-bold text-brand-sky group-hover:block">
                →
              </span>
            </a>

            <a
              href="#services"
              className="group flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_-14px_rgba(2,26,51,0.5)] ring-1 ring-white/60 backdrop-blur transition hover:bg-white"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <Image
                  src="/img2.png"
                  alt="Сэргээгдэх эрчим хүч"
                  fill
                  className="object-contain p-2"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="text-sm font-extrabold text-brand-navy">
                  СЭРГЭЭГДЭХ
                  <br /> ЭРЧИМ ХҮЧ
                </div>
                <div className="mt-1 text-[11px] font-medium leading-snug text-slate-600">
                  Салхи, нарны эрчим хүчний шийдэл
                </div>
              </div>
              <span className="ml-auto hidden text-xs font-bold text-brand-sky group-hover:block">
                →
              </span>
            </a>

            <a
              href="#services"
              className="group flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_-14px_rgba(2,26,51,0.5)] ring-1 ring-white/60 backdrop-blur transition hover:bg-white"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                <Image
                  src="/img3.png"
                  alt="Худалдаа нийлүүлэлт"
                  fill
                  className="object-contain p-2"
                  sizes="56px"
                />
              </div>
              <div>
                <div className="text-sm font-extrabold text-brand-navy">
                  ХУДАЛДАА
                  <br /> НИЙЛҮҮЛЭЛТ
                </div>
                <div className="mt-1 text-[11px] font-medium leading-snug text-slate-600">
                  Бараа бүтээгдэхүүн, худалдаа
                </div>
              </div>
              <span className="ml-auto hidden text-xs font-bold text-brand-sky group-hover:block">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
