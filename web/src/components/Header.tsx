"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconPhone } from "./icons";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const nav = [
  {
    href: "/about",
    label: "БИДНИЙ ТУХАЙ",
    submenu: [
      { href: "/about#history", label: "ТҮҮХЭН ЗАМНАЛ" },
      { href: "/about#principles", label: "БАТЛАХ ЗАРЧИМ" },
    ],
  },
  { href: "/uilchilge", label: "ҮЙЛЧИЛГЭЭ" },
  { href: "/projects", label: "ТӨСӨЛ ХӨТӨЛБӨРҮҮД" },
  { href: "/careers", label: "ХҮНИЙ НӨӨЦ" },
  { href: "/contact", label: "ХОЛБОО БАРИХ" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const getTranslatedLabel = (href: string, defaultLabel: string) => {
    if (href === "/about") return language === "en" ? "ABOUT US" : "БИДНИЙ ТУХАЙ";
    if (href === "/about#history") return language === "en" ? "HISTORY" : "ТҮҮХЭН ЗАМНАЛ";
    if (href === "/about#principles") return language === "en" ? "OUR PRINCIPLES" : "БАТЛАХ ЗАРЧИМ";
    if (href === "/uilchilge") return language === "en" ? "SERVICES" : "ҮЙЛЧИЛГЭЭ";
    if (href === "/projects") return language === "en" ? "PROJECTS" : "ТӨСӨЛ ХӨТӨЛБӨРҮҮД";
    if (href === "/careers") return language === "en" ? "CAREERS" : "ХҮНИЙ НӨӨЦ";
    if (href === "/contact") return language === "en" ? "CONTACT" : "ХОЛБОО БАРИХ";
    return defaultLabel;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <span className="relative block h-12 w-[168px] ">
            <Image
              src="/logo1.png"
              alt="GK TUGS ENGINEERING LLC"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 168px, 196px"
            />
          </span>
        </Link>

        {/* Center: Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {nav.map((item) => {
            const isActive = pathname?.startsWith(item.href.split("#")[0]);
            const hasSubmenu = "submenu" in item;

            if (hasSubmenu) {
              return (
                <div key={item.href} className="relative group py-2">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-xs font-bold tracking-wider transition-colors hover:text-brand-sky flex items-center gap-1 ${
                      isActive ? "text-brand-navy" : "text-slate-600"
                    }`}
                  >
                    {getTranslatedLabel(item.href, item.label)}
                    <svg
                      className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-brand-sky"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {/* Dropdown menu */}
                  <div className="absolute left-0 top-full z-50 w-48 origin-top-left border border-slate-100 bg-white p-2 shadow-lg scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-[10px] font-bold tracking-wider text-slate-600 hover:bg-slate-50 hover:text-brand-sky transition-colors uppercase"
                      >
                        {getTranslatedLabel(sub.href, sub.label)}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-xs font-bold tracking-wider transition-colors hover:text-brand-sky ${
                  isActive ? "text-brand-navy " : "text-slate-600"
                }`}
              >
                {getTranslatedLabel(item.href, item.label)}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact info & Language Switch */}
        <div className="hidden md:flex items-center gap-6">
          {/* <a
            href="tel:+97670001211"
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 hover:text-brand-sky transition-colors"
          >
            <IconPhone className="h-4 w-4 text-brand-sky" />
            <span dir="ltr">+976 7000 1211</span>
          </a> */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-6 text-xs font-bold">
            <button
              onClick={() => setLanguage("mn")}
              className={`hover:text-brand-sky transition-colors ${
                language === "mn" ? "text-brand-navy font-extrabold" : "text-slate-400"
              }`}
            >
              MN
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={() => setLanguage("en")}
              className={`hover:text-brand-sky transition-colors ${
                language === "en" ? "text-brand-navy font-extrabold" : "text-slate-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center p-2 rounded-md text-slate-600 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white py-2 shadow-inner">
          <nav className="flex flex-col space-y-1 px-4">
            {nav.map((item) => {
              const isActive = pathname?.startsWith(item.href.split("#")[0]);
              const hasSubmenu = "submenu" in item;

              return (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => !hasSubmenu && setMobileMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-bold tracking-wider ${
                      isActive ? "bg-slate-50 text-brand-sky" : "text-slate-600 hover:bg-slate-50 hover:text-brand-sky"
                    }`}
                  >
                    {getTranslatedLabel(item.href, item.label)}
                  </Link>
                  {hasSubmenu && (
                    <div className="pl-4 flex flex-col space-y-1 mt-1 border-l border-slate-100 ml-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-3 text-xs font-bold text-slate-500 hover:text-brand-sky uppercase"
                        >
                          {getTranslatedLabel(sub.href, sub.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 px-3 py-3 border-t border-slate-100 mt-2 text-sm font-bold">
              <span className="text-slate-400">Хэл / Language:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage("mn")}
                  className={`hover:text-brand-sky transition-colors ${
                    language === "mn" ? "text-brand-navy font-extrabold" : "text-slate-400"
                  }`}
                >
                  MN
                </button>
                <span className="text-slate-300">/</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`hover:text-brand-sky transition-colors ${
                    language === "en" ? "text-brand-navy font-extrabold" : "text-slate-400"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href="tel:+97670001211"
              className="flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-700 border-t border-slate-100 mt-2"
            >
              <IconPhone className="h-4 w-4 text-brand-sky" />
              <span dir="ltr">+976 7000 1211</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
