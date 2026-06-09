"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const contactDetails = [
  { icon: "📍", label: "Campus Address", value: "Level 4/590 Parramatta Rd,\nPetersham NSW 2049, Australia" },
  { icon: "📞", label: "Phone",          value: "+61 2 XXXX XXXX" },
  { icon: "✉️", label: "Email",          value: "admissions@aie.edu.au" },
  { icon: "🌐", label: "Website",        value: "www.aie.edu.au" },
];

const officeHours = [
  ["Monday – Friday", "8:30 AM – 5:30 PM"],
  ["Saturday",        "9:00 AM – 1:00 PM"],
  ["Sunday",          "Closed"],
  ["Public Holidays", "Closed"],
];

const enquiryTypes = [
  "Admissions Enquiry",
  "Course Information",
  "Fees & Scholarships",
  "Credit Transfer / RPL",
  "International Student",
  "General Enquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    subject: "Admissions Enquiry", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── PAGE HERO ── */}
      <section className="bg-gradient-to-br from-[#0f2157] via-[#1e3a8a] to-[#0f2157] pt-36 pb-20 px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[2px] uppercase text-blue-300 mb-5">
          📬 Contact Us
        </span>
        <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-bold text-white leading-tight mb-4">
          Get in <span className="text-blue-400">Touch</span>
        </h1>
        <p className="text-slate-300 text-[17px] max-w-lg mx-auto leading-relaxed">
          Have a question about admissions, courses, or campus life? Our team is ready to help.
        </p>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">

        {/* ── LEFT: Contact Info ── */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Let's Connect</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            Reach out to the AIE admissions team for any enquiries about our programs,
            entry requirements, fees, or the application process.
          </p>

          {/* Info cards */}
          <div className="flex flex-col gap-4 mb-8">
            {contactDetails.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl
                           hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="w-11 h-11 flex-shrink-0 bg-blue-50 border border-blue-100 rounded-xl
                                flex items-center justify-center text-xl">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[1px] uppercase text-blue-600 mb-1">
                    {c.label}
                  </div>
                  <div className="text-[14.5px] text-slate-700 leading-snug whitespace-pre-line">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office hours */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="font-serif text-[17px] font-bold text-slate-900 mb-4">
              🕐 Office Hours
            </div>
            {officeHours.map(([day, time]) => (
              <div
                key={day}
                className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0 text-[13.5px]"
              >
                <span className="text-slate-500">{day}</span>
                <span className={`font-semibold ${time === "Closed" ? "text-red-400" : "text-slate-800"}`}>
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-5">✅</div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out. A member of the AIE admissions team
                will get back to you within 2 business days.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
              <p className="text-slate-400 text-[14px] mb-8">We typically respond within 1–2 business days.</p>

              <form onSubmit={handleSubmit}>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50
                                 text-slate-800 text-[14.5px] placeholder-slate-400
                                 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50
                                 text-slate-800 text-[14.5px] placeholder-slate-400
                                 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 4XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50
                                 text-slate-800 text-[14.5px] placeholder-slate-400
                                 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50
                                 text-slate-800 text-[14.5px]
                                 focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    >
                      {enquiryTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50
                               text-slate-800 text-[14.5px] placeholder-slate-400 resize-y
                               focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99]
                             text-white font-bold text-[15px] rounded-xl
                             shadow-lg shadow-blue-200 hover:shadow-blue-300
                             transition-all duration-200"
                >
                  Send Message →
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}