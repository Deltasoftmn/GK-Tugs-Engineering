import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconHardHatPipes, IconRenewable, IconSupply } from "@/components/icons";

export const metadata = {
  title: "Үйлчилгээ — GK Tugs Engineering LLC",
  description: "Үйл ажиллагааны чиглэл, үндсэн болон шинэ бизнесийн чиглэлүүд.",
};

export default function UilchilgePage() {
  return (
    <>
      <Header />
      <main className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_22px_60px_-24px_rgba(2,26,51,0.25)] ring-1 ring-slate-200/80">
            <div className="border-b border-slate-200/70 px-6 py-6 text-center sm:px-10 sm:py-8">
              <h1 className="text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl md:text-[1.7rem]">
                Үйл ажиллагааны чиглэл
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                Инженерийн шугам сүлжээ, сэргээгдэх эрчим хүч, худалдаа нийлүүлэлтийн шийдлүүдийг
                иж бүрэн хэрэгжүүлнэ.
              </p>
            </div>

            <section className="p-4 sm:p-6 lg:p-8">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-white to-slate-50 ring-1 ring-slate-200/80">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  aria-hidden
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 15% 20%, rgba(14,165,233,0.18), transparent 44%), radial-gradient(circle at 90% 35%, rgba(0,51,102,0.10), transparent 52%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.10), transparent 55%)",
                  }}
                />

                <div className="relative px-4 py-10 sm:px-8 lg:px-10 lg:py-14">
                  <div className="grid gap-10 md:grid-cols-[1fr_240px_1fr] md:grid-rows-[auto_1fr] md:gap-x-10 md:gap-y-6 lg:gap-x-12">
                    <div className="md:col-start-1 md:row-start-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-base font-extrabold italic text-brand-navy sm:text-lg">
                          Core business
                        </h2>
                        <span className="h-px flex-1 bg-slate-200" aria-hidden />
                      </div>
                    </div>

                    <div className="hidden md:block md:col-start-2 md:row-span-2">
                      <div className="relative h-full">
                        <div className="flex h-full items-center justify-center">
                          <Hub />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-start-3 md:row-start-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-base font-extrabold italic text-brand-navy sm:text-lg">
                          New Business Areas
                        </h2>
                        <span className="h-px flex-1 bg-slate-200" aria-hidden />
                      </div>
                    </div>

                    <div className="space-y-6 md:col-start-1 md:row-start-2">
                      <NodeCard
                        id="core-1"
                        icon={<IconHardHatPipes className="h-8 w-8" aria-hidden />}
                        title="Инженерийн шугам сүлжээний угсралт"
                        description="Дулаан, ус хангамж, ариутгах татуурга, холбоо дохиоллын угсралт, туршилт тохируулга."
                      />
                      <NodeCard
                        id="core-2"
                        icon={<IconRenewable className="h-8 w-8" aria-hidden />}
                        title="Сэргээгдэх эрчим хүчний шийдэл"
                        description="Нар, салхины эх үүсвэрийн судалгаа, зураг төсөл, угсралт, ашиглалтад оруулах."
                      />
                      <NodeCard
                        id="core-3"
                        icon={<IconSupply className="h-8 w-8" aria-hidden />}
                        title="Худалдаа нийлүүлэлт"
                        description="Тоног төхөөрөмж, сэлбэг хэрэгсэл, материал нийлүүлэлт болон логистикийн зохион байгуулалт."
                      />
                    </div>

                    <div className="space-y-6 md:col-start-3 md:row-start-2">
                      <MiniCard
                        id="new-1"
                        title="Дулааны болон хүйтний тооцоо, мониторинг"
                        description="Операторын хяналт, мэдрэгч, өгөгдөл цуглуулах, тайлангийн шийдэл."
                      />
                      <MiniCard
                        id="new-2"
                        title="Төслийн ба үйлдвэрийн барилга байгууламжийн угсралт"
                        description="Инженерийн уялдаа холбоотой, шат дараалсан барилга угсралтын ажил."
                      />
                      <MiniCard
                        id="new-3"
                        title="Сэргээгдэх эрчим хүчний барилга байгууламжийн зөвлөх үйлчилгээ"
                        description="ТЭЗҮ, зураг төсөл, техникийн шаардлага, хяналт, зөвлөх."
                      />
                      <MiniCard
                        id="new-4"
                        title="Дулаан хангамжийн систем болон сэргээгдэх эрчим хүчний төсөл, судалгаа"
                        description="Судалгаа, эдийн засгийн үнэлгээ, хэрэгжилтийн төлөвлөлт."
                      />
                    </div>

                    <div className="relative md:hidden">
                      <div className="mx-auto mt-4 max-w-md">
                        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.25em] text-slate-500">
                          <span className="h-px w-10 bg-slate-200" aria-hidden />
                          HUB
                          <span className="h-px w-10 bg-slate-200" aria-hidden />
                        </div>
                        <div className="mt-4 flex justify-center">
                          <Hub compact />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function NodeCard({
  icon,
  title,
  description,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <article
      id={id}
      className="relative max-w-[380px] overflow-hidden rounded-2xl bg-white/92 p-5 shadow-[0_18px_40px_-26px_rgba(2,26,51,0.55)] ring-1 ring-slate-200/80"
    >
      <div className="flex gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f2fbff] text-brand-navy ring-1 ring-slate-200/80">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-extrabold text-brand-navy">{title}</h3>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

function MiniCard({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <article
      id={id}
      className="ml-auto max-w-[420px] rounded-2xl bg-white/92 p-5 shadow-[0_18px_40px_-26px_rgba(2,26,51,0.55)] ring-1 ring-slate-200/80"
    >
      <h3 className="text-sm font-extrabold text-brand-navy">{title}</h3>
      <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

function Hub({ compact }: { compact?: boolean }) {
  return (
    <div
      className={[
        "relative mx-auto grid place-items-center rounded-full bg-white shadow-[0_26px_80px_-50px_rgba(2,26,51,0.9)] ring-1 ring-slate-200/80",
        compact ? "h-24 w-24" : "h-[190px] w-[190px]",
      ].join(" ")}
    >
      <div
        className="absolute inset-0 rounded-full"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(14,165,233,0.18), transparent 58%), radial-gradient(circle at 70% 65%, rgba(0,51,102,0.08), transparent 58%)",
        }}
      />
      <div className="relative grid place-items-center text-brand-navy">
        <svg
          viewBox="0 0 64 64"
          className={compact ? "h-10 w-10" : "h-14 w-14"}
          fill="none"
          aria-hidden
        >
          <path
            d="M28 6h8l1.5 8.2a19.7 19.7 0 0 1 4.7 2l7-4.6 5.7 5.7-4.6 7a19.7 19.7 0 0 1 2 4.7L60 28v8l-8.2 1.5a19.7 19.7 0 0 1-2 4.7l4.6 7-5.7 5.7-7-4.6a19.7 19.7 0 0 1-4.7 2L36 60h-8l-1.5-8.2a19.7 19.7 0 0 1-4.7-2l-7 4.6-5.7-5.7 4.6-7a19.7 19.7 0 0 1-2-4.7L4 36v-8l8.2-1.5a19.7 19.7 0 0 1 2-4.7l-4.6-7 5.7-5.7 7 4.6a19.7 19.7 0 0 1 4.7-2L28 6z"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.85"
          />
        </svg>
        <div className={compact ? "mt-1 text-[10px] font-extrabold" : "mt-2 text-xs font-extrabold"}>
          GK TUGS
        </div>
      </div>
    </div>
  );
}


