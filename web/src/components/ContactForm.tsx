"use client";

import { useMemo, useState } from "react";

type FormState = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function FieldLabel({ children }: { children: string }) {
  return (
    <div className="text-xs font-extrabold text-brand-navy">
      {children}
      <span className="text-red-500">*</span>
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
      `Овог: ${form.lastName}`,
      `Нэр: ${form.firstName}`,
      `И-мэйл: ${form.email}`,
      `Утас: ${form.phone}`,
      "",
      form.message,
    ];
    const body = lines.join("\n").trim();
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

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
          <FieldLabel>Овог</FieldLabel>
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
          <FieldLabel>Нэр</FieldLabel>
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
          <FieldLabel>И-мэйл хаяг</FieldLabel>
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
          <FieldLabel>Утас</FieldLabel>
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
        <FieldLabel>Хүсэлт</FieldLabel>
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
        <div className="text-xs font-extrabold text-brand-navy">Агуулга</div>
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
          Илгээх
        </button>
      </div>
    </form>
  );
}

