import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Холбоо барих — GK Tugs Engineering LLC",
  description: "Бидэнтэй холбогдох: утас, и-мэйл, хаяг болон хүсэлт илгээх маягт.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-slate-50 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_22px_60px_-24px_rgba(2,26,51,0.25)] ring-1 ring-slate-200/80">
            <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-6 py-7 sm:px-10 sm:py-9">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10% 0%, rgba(14,165,233,0.18), transparent 40%), radial-gradient(circle at 90% 10%, rgba(14,165,233,0.14), transparent 46%), radial-gradient(circle at 50% 90%, rgba(0,51,102,0.08), transparent 56%)",
                }}
              />
              <div className="relative grid gap-8 lg:items-stretch lg:grid-cols-[1fr_1fr] lg:gap-10">
                <div className="overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_-28px_rgba(2,26,51,0.6)] ring-1 ring-slate-200/80">
                  <div className="h-[340px] w-full sm:h-[420px] lg:h-full lg:min-h-[560px]">
                    <iframe
                      title="GK Tugs Engineering location"
                      className="block h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps?q=Daco%20Business%20Center%20Ulaanbaatar&output=embed"
                    />
                  </div>
                </div>

                <div className="lg:flex lg:flex-col lg:self-stretch">
                  <h1 className="text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl">
                    БИДЭНТЭЙ ХОЛБОГДОХ
                  </h1>
                  <div className="mt-6 lg:flex-1">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

            <section className="bg-gradient-to-b from-white to-sky-50 px-6 py-10 sm:px-10 sm:py-12">
              <div className="mx-auto max-w-4xl space-y-7 text-center">
                <a
                  href="tel:+97670001211"
                  className="group flex items-center justify-center gap-4 text-brand-navy"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand-sky shadow-[0_18px_40px_-28px_rgba(2,26,51,0.7)] ring-1 ring-slate-200/80 transition group-hover:scale-[1.02]">
                    <IconPhone className="h-7 w-7" aria-hidden />
                  </span>
                  <span className="text-2xl font-extrabold tracking-tight" dir="ltr">
                    +976 7000 1211
                  </span>
                </a>

                <a
                  href="mailto:gk.tugsengineering@gmail.com"
                  className="group flex items-center justify-center gap-4 text-brand-navy"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-fuchsia-600 shadow-[0_18px_40px_-28px_rgba(2,26,51,0.7)] ring-1 ring-slate-200/80 transition group-hover:scale-[1.02]">
                    <IconMail className="h-7 w-7" aria-hidden />
                  </span>
                  <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
                    GK.TUGSENGINEERING@GMAIL.COM
                  </span>
                </a>

                <div className="flex items-center justify-center gap-4 text-brand-navy">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-rose-500 shadow-[0_18px_40px_-28px_rgba(2,26,51,0.7)] ring-1 ring-slate-200/80">
                    <IconMapPin className="h-7 w-7" aria-hidden />
                  </span>
                  <div className="text-left text-sm font-extrabold uppercase tracking-wide sm:text-base">
                    DACO BUSINESS CENTER 13<sup>TH</sup>
                    <br />
                    KHOROO, BAYANGOL DISTRICT,
                    <br />
                    ULAANBAATAR, MONGOLIA
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

