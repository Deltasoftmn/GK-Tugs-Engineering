"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function IconDownload() {
  return (
    <svg
      className="mr-2 h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col">
      <span className="h-1.5 w-1.5 bg-brand-sky mb-4" />
      <h3 className="text-xs font-bold tracking-[0.2em] text-[#a88143] uppercase mb-4">
        {title}
      </h3>
      <p className="text-xs font-semibold leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function CareersPage() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Шугам сүлжээний инженер",
    message: "",
  });

  const benefits = [
    {
      titleMn: "Өсөн дэвжих боломж",
      titleEn: "Career Growth",
      descMn: "Мэргэжлийн болон хувь хүний хувьд тасралтгүй суралцах, карьерын өсөлтийг дэмжинэ.",
      descEn: "We support continuous learning and career advancement professionally and personally.",
    },
    {
      titleMn: "Өрсөлдөхүйц цалин",
      titleEn: "Competitive Salary",
      descMn: "Таны гүйцэтгэл, ур чадварт тохирсон өрсөлдөхүйц цалин хөлс, урамшуулалт олгоно.",
      descEn: "We offer competitive salaries and rewards matching your skills and performance.",
    },
    {
      titleMn: "Эрүүл, аюулгүй орчин",
      titleEn: "Safe Environment",
      descMn: "Хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн стандартыг дээд зэргээр хангасан ажиллах нөхцөл.",
      descEn: "Work conditions that strictly adhere to occupational health and safety standards.",
    },
    {
      titleMn: "Орчин үеийн технология",
      titleEn: "Modern Technology",
      descMn: "Салбарын хамгийн сүүлийн үеийн тоног төхөөрөмж, программ хангамж дээр ажиллах боломж.",
      descEn: "Opportunity to operate using the latest industry-leading tools and software.",
    },
  ];

  const jobs = [
    {
      titleMn: "Шугам сүлжээний инженер",
      titleEn: "Pipeline Network Engineer",
      typeMn: "Бүтэн цагийн",
      typeEn: "Full-time",
      expMn: "3+ жил ажилласан туршлагатай",
      expEn: "3+ years of experience",
      dutiesMn: "Дулаан, ус хангамж, ариутгах татуургын шугам сүлжээний угсралтын зураг төсөл, гүйцэтгэлд хяналт тавих.",
      dutiesEn: "Supervise drawings, installation, and performance of heating, water, and sewage pipeline networks.",
    },
    {
      titleMn: "Барилга угсралтын техникч",
      titleEn: "Construction Technician",
      typeMn: "Бүтэн цагийн",
      typeEn: "Full-time",
      expMn: "2+ жил ажилласан туршлагатай",
      expEn: "2+ years of experience",
      dutiesMn: "Төслийн талбайд инженерийн зааварчилгааны дагуу шугам хоолой, холбох хэрэгслийн угсралтыг чанартай хийж гүйцэтгэх.",
      dutiesEn: "Execute quality assembly of pipelines and fittings on-site in accordance with engineering guidance.",
    },
    {
      titleMn: "Төслийн менежер",
      titleEn: "Project Manager",
      typeMn: "Бүтэн цагийн",
      typeEn: "Full-time",
      expMn: "5+ жил ажилласан туршлагатай",
      expEn: "5+ years of experience",
      dutiesMn: "Эрчим хүч, дэд бүтцийн төслүүдийн төлөвлөлт, хугацаа, чанарын хяналт болон логистикийг хариуцан зохион байгуулах.",
      dutiesEn: "Organize planning, schedule tracking, quality control, and logistics for energy and infrastructure projects.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Dotted Grid Hero Section */}
        <section
          className="relative bg-slate-800 text-white overflow-hidden py-16 sm:py-24"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40 z-0" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase leading-tight mb-6 drop-shadow-sm">
                  {language === "en" ? (
                    <>
                      Careers &amp;
                      <br />
                      Opportunities
                    </>
                  ) : (
                    <>
                      Хүний нөөц &amp;
                      <br />
                      Ажлын байр
                    </>
                  )}
                </h1>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 mb-8 max-w-lg">
                  {t(
                    "careers.hero_desc",
                    "Our greatest asset is our talented and creative team. We invite you to join the growing team at GK Tugs Engineering LLC.",
                    "Бидний хамгийн том үнэт зүйл бол чадварлаг, бүтээлч хамт олон юм. Таныг Жи Кэй Төгс инженеринг ХХК-ийн өсөн нэмэгдэж буй багт нэгдэхийг урьж байна."
                  )}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-[#0c2b5c] px-6 py-3 text-xs font-bold tracking-wider text-white shadow-lg border border-slate-700/50 hover:bg-brand-sky hover:border-brand-sky transition-all duration-300 rounded-none uppercase"
                  >
                    <IconDownload />
                    {t("careers.download_form", "DOWNLOAD APPLICATION FORM", "АЖЛЫН АНКЕТ ТАТАХ")}
                  </a>
                </div>
              </div>

              {/* Right: Rotated Masked Image */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative background shape offset */}
                <div className="absolute inset-0 max-w-[420px] aspect-[4/3] rounded-[48px] bg-slate-700/40 rotate-[12deg] scale-95 translate-x-4 translate-y-4 pointer-events-none" />
                
                {/* Main masked image container */}
                <div className="relative overflow-hidden rounded-[48px] rotate-[12deg] aspect-[4/3] w-full max-w-[420px] border-4 border-slate-700/50 shadow-2xl bg-slate-800">
                  <div className="-rotate-[12deg] scale-125 w-full h-full relative">
                    <Image
                      src="/careers_hero.png"
                      alt="GK Tugs Engineering Careers"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("careers.benefits_label", "WHY JOIN US", "БИДЭНТЭЙ НЭГДСЭНЭЭР")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("careers.benefits_title", "What are the benefits of joining us?", "Бидэнтэй нэгдсэнээр танд ямар давуу талтай вэ?")}
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, idx) => (
                <BenefitCard
                  key={idx}
                  title={language === "en" ? b.titleEn : b.titleMn}
                  description={language === "en" ? b.descEn : b.descMn}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="bg-[#f0f4f8] py-16 sm:py-20 border-b border-slate-200/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("careers.jobs_label", "OPEN POSITIONS", "АЖЛЫН БАЙР")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("careers.jobs_title", "Current Job Openings", "Нээлттэй ажлын байрууд")}
              </h2>
            </div>
            
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-sm sm:text-base font-extrabold text-brand-navy-deep uppercase">
                        {language === "en" ? job.titleEn : job.titleMn}
                      </h3>
                      <span className="inline-block rounded-none bg-sky-50 px-2.5 py-1 text-[10px] font-bold text-brand-sky uppercase border border-sky-100">
                        {language === "en" ? job.typeEn : job.typeMn}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold text-[#a88143] uppercase mb-2">
                      {language === "en" ? job.expEn : job.expMn}
                    </p>
                    <p className="text-xs font-semibold leading-relaxed text-slate-500 max-w-2xl">
                      {language === "en" ? job.dutiesEn : job.dutiesMn}
                    </p>
                  </div>
                  <a
                    href="#apply-form"
                    className="inline-block flex-shrink-0 rounded-none bg-brand-navy px-6 py-2.5 text-xs font-bold tracking-wider text-white shadow-md hover:bg-brand-sky transition-colors duration-300 uppercase"
                  >
                    {t("careers.apply_now", "APPLY NOW", "Анкет илгээх")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" className="bg-white py-16 sm:py-20 scroll-mt-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="block text-[10px] font-bold tracking-[0.25em] text-[#a88143] uppercase mb-3">
                {t("careers.form_label", "APPLICATION", "ХОЛБООС")}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-brand-navy-deep uppercase">
                {t("careers.form_title", "Submit Job Application", "Ажлын анкет илгээх")}
              </h2>
              <p className="mt-2 text-xs font-semibold text-slate-400">
                {t(
                  "careers.form_subtitle",
                  "Fill in the form below and attach your CV/Resume to apply.",
                  "Доорх анкетыг бөглөж CV / Анкет файлаа хавсарган илгээнэ үү."
                )}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-emerald-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-base font-extrabold text-brand-navy-deep uppercase mb-2">
                  {t("careers.form.success_title", "Application Submitted!", "Анкет амжилттай илгээгдлээ!")}
                </h3>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-md mx-auto">
                  {t(
                    "careers.form.success_desc",
                    "Our HR department has received your information. We will get back to you soon. Thank you.",
                    "Таны мэдээллийг манай хүний нөөцийн хэлтэс хүлээж авлаа. Бид тантай удахгүй эргэн холбогдох болно. Баярлалаа."
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-block rounded-none border border-slate-300 px-6 py-2 text-xs font-bold text-slate-500 hover:text-brand-sky hover:border-brand-sky transition-colors duration-300 uppercase"
                >
                  {t("careers.form.resubmit", "SEND ANOTHER", "Дахин илгээх")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                      {t("careers.form.name", "Full Name *", "Бүтэн нэр *")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("careers.form.name_placeholder", "Your full name", "Таны нэр")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand-sky focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                      {t("careers.form.phone", "Phone Number *", "Утасны дугаар *")}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t("careers.form.phone_placeholder", "Contact number", "Холбоо барих утас")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand-sky focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                      {t("careers.form.email", "Email Address", "И-мэйл хаяг")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("careers.form.email_placeholder", "Your email address", "И-мэйл хаяг")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand-sky focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                      {t("careers.form.position", "Interested Position", "Сонирхож буй ажлын байр")}
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand-sky focus:bg-white transition-colors appearance-none rounded-none"
                    >
                      <option value="Шугам сүлжээний инженер">
                        {t("careers.jobs.eng", "Pipeline Network Engineer", "Шугам сүлжээний инженер")}
                      </option>
                      <option value="Барилга угсралтын техникч">
                        {t("careers.jobs.tech", "Construction Technician", "Барилга угсралтын техникч")}
                      </option>
                      <option value="Төслийн менежер">
                        {t("careers.jobs.pm", "Project Manager", "Төслийн менежер")}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                    {t("careers.form.intro", "Introduction / Cover Letter", "Танилцуулга / Нэмэлт мэдээлэл")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("careers.form.intro_placeholder", "Tell us briefly about yourself...", "Өөрийн тухай товч танилцуулга...")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:border-brand-sky focus:bg-white transition-colors"
                  />
                </div>

                {/* CV File Upload */}
                <div>
                  <label className="block text-[10px] font-bold text-brand-navy-deep uppercase tracking-wider mb-2">
                    {t("careers.form.cv", "Attach CV / Resume (.pdf, .doc, .docx)", "CV / Анкет хавсаргах (.pdf, .doc, .docx)")}
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed bg-slate-50 hover:bg-slate-100 hover:border-brand-sky/40 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 text-slate-400 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                          {t("careers.form.file_select", "CHOOSE FILE OR DRAG HERE", "Файл сонгох буюу чирч оруулах")}
                        </p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-block w-full sm:w-auto rounded-none bg-brand-navy px-12 py-3.5 text-xs font-bold tracking-wider text-white shadow-md hover:bg-brand-sky transition-colors duration-300 uppercase"
                  >
                    {t("careers.form.submit", "SUBMIT APPLICATION", "Анкет илгээх")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
