import Link from "next/link";
import { IconMail, IconMapPin, IconPhone } from "./icons";

const serviceLinks = [
  { href: "/uilchilge", label: "Инженеринг & угсралт" },
  { href: "/uilchilge", label: "Сэргээгдэх эрчим хүч" },
  { href: "/uilchilge", label: "Худалдаа нийлүүлэлт" },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 mt-auto bg-brand-navy text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            БИДНИЙ ТУХАЙ
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-xs font-semibold italic text-slate-100/90">
            <li>
              <Link
                href="/about"
                className="transition hover:text-white hover:underline"
              >
                Бидний тухай
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">ҮЙЛЧИЛГЭЭ</h3>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-xs font-semibold italic text-slate-100/90">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">ХОЛБОО БАРИХ</h3>
          <ul className="mt-4 space-y-4 text-xs font-semibold text-slate-100/90">
            <li>
              <a
                href="tel:+97670001211"
                className="flex items-start gap-2 transition hover:text-white"
                dir="ltr"
              >
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" aria-hidden />
                +976 7000 1211
              </a>
            </li>
            <li>
              <a
                href="mailto:gk.tugsengineering@gmail.com"
                className="flex items-start gap-2 break-all transition hover:text-white"
              >
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" aria-hidden />
                gk.tugsengineering@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" aria-hidden />
              <span className="leading-relaxed">
                Daco Business Center 13<sup>th</sup>
                <br />
                khoroo, Bayangol District,
                <br />
                Ulaanbaatar, Mongolia
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
            СОШИАЛ ХОЛБООС
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-white transition hover:brightness-110"
              aria-label="Facebook"
            >
              <span className="text-sm font-bold">f</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:opacity-90"
              aria-label="X"
            >
              <span className="text-xs font-bold">𝕏</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0000] text-white transition hover:brightness-110"
              aria-label="YouTube"
            >
              <span className="text-xs font-bold">▶</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} GK Tugs Engineering LLC. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
}
