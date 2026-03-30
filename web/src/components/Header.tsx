import Image from "next/image";
import Link from "next/link";
import { IconPhone } from "./icons";

const nav = [
  { href: "/", label: "НҮҮР" },
  { href: "/about", label: "БИДНИЙ ТУХАЙ" },
  { href: "/uilchilge", label: "ҮЙЛЧИЛГЭЭ" },
  { href: "/#products", label: "БҮТЭЭГДЭХҮҮН" },
  { href: "/contact", label: "ХОЛБОО БАРИХ" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="border-b border-slate-200/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative block h-11 w-[170px] sm:h-12 sm:w-[200px]">
              <Image
                src="/logo.png"
                alt="GK TUGS ENGINEERING LLC"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 170px, 200px"
              />
            </span>
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-600">
                Инженерингээр хөгжлийг асаана…
              </div>
              <div className="text-[11px] font-semibold tracking-wide text-slate-500">
                ENGINEERING PROGRESS…
              </div>
            </div>
            <a
              href="tel:+97670001211"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-slate-200 transition hover:ring-brand-sky/40"
            >
              <IconPhone className="h-4 w-4 text-brand-sky" aria-hidden />
              <span dir="ltr">+976 7000 1211</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center px-4 py-2.5 sm:px-6 lg:px-8">
        <ul className="mx-auto flex flex-wrap items-center justify-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded px-3 py-2 text-xs font-extrabold tracking-wide text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+97670001211"
          className="ml-auto md:hidden inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-brand-navy ring-1 ring-slate-200"
        >
          <IconPhone className="h-4 w-4 text-brand-sky" aria-hidden />
          <span dir="ltr">+976 7000 1211</span>
        </a>
      </nav>
    </header>
  );
}
