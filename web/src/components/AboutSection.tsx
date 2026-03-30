export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-slate-200/80 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Бидний тухай</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            GK Tugs Engineering LLC нь дэд бүтэц, инженерийн шугам сүлжээ болон сэргээгдэх эрчим
            хүчийн чиглэлээр мэргэшсэн баг, олон жилийн туршлагатай. Бид төслийн бүх үе шатанд
            чанар, аюулгүй байдал, хугацаа хэмнэлтийг эрхэмлэн ажилладаг.
          </p>
        </div>
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center">
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-sky">
              Чиглэл
            </dt>
            <dd className="mt-2 text-sm font-semibold text-brand-navy">Инженерийн шийдэл</dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center">
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-sky">
              Анхаарлаа хандуулдаг
            </dt>
            <dd className="mt-2 text-sm font-semibold text-brand-navy">Стандарт & аюулгүй байдал</dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center">
            <dt className="text-xs font-semibold uppercase tracking-wide text-brand-sky">Үнэт зүйл</dt>
            <dd className="mt-2 text-sm font-semibold text-brand-navy">Түншийн итгэлцэл</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
