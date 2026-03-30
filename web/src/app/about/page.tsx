"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type AboutTab = "intro" | "principles";

const sideNav: Array<{ label: string; tab: AboutTab; hash: `#${string}` }> = [
  { label: "КОМПАНИЙН ТАНИЛЦУУЛГА", tab: "intro", hash: "#intro" },
  { label: "БАРИМТЛАХ ЗАРЧИМ", tab: "principles", hash: "#principles" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrincipleCard({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(14,165,233,0.45), rgba(14,165,233,0.18))",
          clipPath: "polygon(0 0, 100% 0, 65% 50%, 100% 100%, 0 100%)",
        }}
      />
      <p className="pl-7 text-sm font-semibold italic leading-relaxed text-slate-800">
        {text}
      </p>
    </div>
  );
}

function MiniIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-brand-navy ring-1 ring-slate-200/80">
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [tab, setTab] = useState<AboutTab>("intro");

  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash || "#intro";
      setTab(hash === "#principles" ? "principles" : "intro");
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const activeHash = useMemo(
    () => (tab === "principles" ? "#principles" : "#intro"),
    [tab],
  );

  return (
    <>
      <Header />
      <main
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-slate-50 py-10 sm:py-12"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_22px_60px_-24px_rgba(2,26,51,0.25)] ring-1 ring-slate-200/80">
            <div className="relative h-[260px] w-full sm:h-[360px]">
              <Image
                src="/banner2.png"
                alt="GK Tugs Engineering баг"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 via-transparent to-slate-900/30" />
            </div>

            <section className="relative">
              <div className="grid gap-6 bg-white p-6 sm:grid-cols-[260px_1fr] sm:gap-8 sm:p-10">
                <aside>
                  <div className="space-y-3">
                    {sideNav.map((item) => {
                      const isActive = activeHash === item.hash;
                      return (
                        <a
                          key={item.hash}
                          href={item.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            setTab(item.tab);
                            window.history.replaceState(null, "", item.hash);
                          }}
                          className={[
                            "group flex items-center justify-between rounded bg-white px-4 py-3 text-[11px] font-extrabold uppercase tracking-wide shadow-sm ring-1 transition",
                            isActive
                              ? "text-brand-navy ring-brand-sky/40"
                              : "text-brand-navy ring-slate-200/80 hover:bg-slate-50",
                          ].join(" ")}
                        >
                          <span className="flex-1">{item.label}</span>
                          <span
                            className={[
                              "grid h-7 w-7 place-items-center rounded bg-white ring-1 transition",
                              isActive
                                ? "text-brand-sky ring-brand-sky/30"
                                : "text-brand-navy/70 ring-slate-200/70 group-hover:text-brand-sky",
                            ].join(" ")}
                          >
                            <Arrow />
                          </span>
                        </a>
                      );
                    })}
                    <div className="h-14 rounded bg-white shadow-sm ring-1 ring-slate-200/80" />
                  </div>

                <div className="mt-6 rounded bg-white p-5 shadow-sm ring-1 ring-slate-200/80">
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <MiniIcon>
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                          <path
                            d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          />
                          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      </MiniIcon>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Алсын хараа:</div>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-700">
                          Улс орны хөгжилд дэвшилд хувь нэмэр оруулан, дэлхийн жишигт нийцсэн техник
                          технологийг нэвтрүүлж, эрчим хүч, барилгын салбарт дэвшил бүхий инженерийн
                          шийдлийг хэрэгжүүлэгч байгууллага байна.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MiniIcon>
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                          <path
                            d="M12 2c4.4 0 8 3.6 8 8 0 3.1-1.8 5.7-4.4 7l-1.6 4H10l-1.6-4C5.8 15.7 4 13.1 4 10c0-4.4 3.6-8 8-8z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 10.5l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </MiniIcon>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Эрхэм зорилго:</div>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-700">
                          Инженерингээр хөгжлийг асаана.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MiniIcon>
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                          <path
                            d="M12 2l3 7 7 .6-5.3 4.4 1.7 6.6L12 17.8 5.6 20.6 7.3 14 2 9.6 9 9l3-7z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </MiniIcon>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">Үнэт зүйл:</div>
                        <ul className="mt-1 list-disc space-y-1 pl-4 text-xs font-semibold leading-relaxed text-slate-700">
                          <li>Үнэнч шударга зарчим</li>
                          <li>Багийн сэтгэлгээ</li>
                          <li>Бүтээлч сэтгэхүй</li>
                          <li>Үргэлж суралцах хүсэл тэмүүлэл</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                </aside>

                {tab === "intro" ? (
                  <div id="intro" className="space-y-4">
                    <div className="rounded bg-white p-6 shadow-sm ring-1 ring-slate-200/80 sm:p-7">
                      <h1 className="text-lg font-extrabold italic text-brand-navy sm:text-xl">
                        Бидний тухай
                      </h1>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-800">
                        <p className="font-semibold italic">
                          Жи Кэй Төгс инженеринг ХХК нь 2021 байгуулагдсан бөгөөд эрчим хүч,
                          инженерийн шугам сүлжээ, барилга угсралтын чиглэлээр мэргэшлийн үйл
                          ажиллагаа явуулж байна. Манай хамт олон чанар, хөдөлмөрийн аюулгүй байдал,
                          төсөл менежментийн үйл ажиллагааны үндсэн зарчим болон баримталдаг.
                        </p>
                      </div>
                    </div>

                    <div className="rounded bg-white p-6 shadow-sm ring-1 ring-slate-200/80 sm:p-7">
                      <div className="space-y-4 text-sm leading-relaxed text-slate-800">
                        <p className="font-semibold italic">
                          Байгууллагдсан цагаасаа хойш өнөө хүртэл бид улсын болон дотоод, гадаадын
                          аж ахуйн нэгжүүдтэй ашигтай хамтран ажиллаж, эрчим хүч болон барилга
                          угсралтын салбарт 20 гаруй төсөл, хөтөлбөрийг чанарын өндөр түвшинд
                          гүйцэтгэн ашиглалтад оруулж байна.
                        </p>
                        <p className="font-semibold italic">
                          Манай компани нь эрчим хүч, барилга угсралтын салбарт дэд бүтэц, инженерийн
                          шугам сүлжээний угсралт, туршилт тохируулга, зөвлөх үйлчилгээ, мөн эрчим
                          хүчний барилга байгууламж, сэргээгдэх эрчим хүчний тоног төхөөрөмжийн
                          угсралт, инженерийн шийдэлтэй барилга байгууламжийн угсралтын ажлуудыг иж
                          бүрэн гүйцэтгэж байна.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    id="principles"
                    className="relative overflow-hidden rounded bg-gradient-to-br from-sky-50 via-white to-sky-100 p-6 shadow-sm ring-1 ring-slate-200/80 sm:p-7"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-70"
                      aria-hidden
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 15% 15%, rgba(14,165,233,0.18), transparent 40%), radial-gradient(circle at 85% 65%, rgba(0,51,102,0.10), transparent 45%)",
                      }}
                    />
                    <div className="relative">
                      <h1 className="text-sm font-extrabold italic uppercase tracking-wide text-brand-navy">
                        Баримтлах зарчим
                      </h1>
                      <div className="mt-4 space-y-3">
                        <PrincipleCard text="Харилцагч, түншлэгч, захиалагчтайгаа харилцахдаа үнэнч шударга зарчмыг баримтална." />
                        <PrincipleCard text="Бид шиннийг сэдэж, аливааг сайжруулах боломжийг цаг ямагт эрэлхийлнэ." />
                        <PrincipleCard text="Бид хөдөлмөрийн аюулгүй байдал, эрүүл ахуйг нэн тэргүүнд хангаж ажиллана." />
                        <PrincipleCard text="Бид ажилдаа сэтгэлтэй хандаж, компанийн нэр хүнд, өмч хөрөнгөө хайрлан хамгаална." />
                        <PrincipleCard text="Бид ажилтан бүрт хөгжиж дэвших боломж, ижил тэгш бололцоо олгож, ажилтны өсөлт хөгжлийг дэмжих нь тухайн хүний ур чадвар, гүйцэтгэл, оруулж буй хувь нэмэртэй шууд холбоотой байна." />
                      </div>

                    <div className="mt-6 rounded-md border border-brand-sky/30 bg-white/80 px-5 py-4 text-sm font-semibold italic leading-relaxed text-slate-800 shadow-sm">
                      Өндөр чадавхи, харилцан итгэлцэл, хүндлэлд суурилсан хамтын зүтгэл нь бидний
                      тогтвортой амжилтын үндэс юм.
                    </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

