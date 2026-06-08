"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormState = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function FieldLabel({ children, required = true }: { children: string; required?: boolean }) {
  return (
    <div className="text-xs font-extrabold text-brand-navy">
      {children}
      {required && <span className="text-red-500">*</span>}
    </div>
  );
}

function InputShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded bg-white shadow-[0_10px_22px_-18px_rgba(2,26,51,0.55)] ring-1 ring-slate-200/80">
      {children}
    </div>
  );
}

export function ContactForm() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState<FormState>({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const to = "gk.tugsengineering@gmail.com";
    const subject = form.subject?.trim() || "Website contact";
    const lines = [
      language === "en" ? `Last Name: ${form.lastName}` : `Овог: ${form.lastName}`,
      language === "en" ? `First Name: ${form.firstName}` : `Нэр: ${form.firstName}`,
      language === "en" ? `Email: ${form.email}` : `И-мэйл: ${form.email}`,
      language === "en" ? `Phone: ${form.phone}` : `Утас: ${form.phone}`,
      "",
      form.message,
    ];
    const body = lines.join("\n").trim();
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form, language]);

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <FieldLabel>{t("contact.form.lastname", "Last Name", "Овог")}</FieldLabel>
          <InputShell>
            <input
              required
              value={form.lastName}
              onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
              placeholder=""
            />
          </InputShell>
        </div>

        <div className="space-y-2">
          <FieldLabel>{t("contact.form.firstname", "First Name", "Нэр")}</FieldLabel>
          <InputShell>
            <input
              required
              value={form.firstName}
              onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
              placeholder=""
            />
          </InputShell>
        </div>

        <div className="space-y-2">
          <FieldLabel>{t("contact.form.email", "Email Address", "И-мэйл хаяг")}</FieldLabel>
          <InputShell>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
              placeholder=""
            />
          </InputShell>
        </div>

        <div className="space-y-2">
          <FieldLabel>{t("contact.form.phone", "Phone", "Утас")}</FieldLabel>
          <InputShell>
            <input
              required
              inputMode="tel"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
              placeholder=""
            />
          </InputShell>
        </div>
      </div>

      <div className="space-y-2">
        <FieldLabel>{t("contact.form.subject", "Subject", "Хүсэлт")}</FieldLabel>
        <InputShell>
          <input
            required
            value={form.subject}
            onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
            className="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
            placeholder=""
          />
        </InputShell>
      </div>

      <div className="space-y-2">
        <FieldLabel required={false}>{t("contact.form.message", "Message", "Агуулга")}</FieldLabel>
        <InputShell>
          <textarea
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            rows={7}
            className="w-full resize-none bg-transparent px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
            placeholder=""
          />
        </InputShell>
      </div>

      <div className="flex items-center justify-start">
        <button
          type="submit"
          className="rounded bg-brand-sky px-8 py-2.5 text-sm font-extrabold text-white shadow-[0_14px_26px_-18px_rgba(2,26,51,0.75)] transition hover:brightness-110"
        >
          {t("contact.form.submit", "SEND MESSAGE", "Илгээх")}
        </button>
      </div>
    </form>
  );
}
