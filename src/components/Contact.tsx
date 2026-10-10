"use client";
import { useState } from "react";
import { FaRocket, FaWhatsapp, FaClock, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { submitLead } from "@/lib/feedback";
import Reveal from "./Reveal";

const ROWS = [
  { icon: FaWhatsapp, label: "WhatsApp", value: "+91 90000 00000" },
  { icon: FaClock, label: "Hours", value: "Mon–Sat · 10:00–19:00 IST" },
  { icon: FaLocationDot, label: "Studio", value: "Remote-first · India / UAE" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus({ ok: false, text: "Name, email and a short brief are required." }); return; }
    setBusy(true); setStatus(null);
    try { await submitLead(form); setForm({ name: "", email: "", phone: "", message: "" }); setStatus({ ok: true, text: "Got it! We'll reply within 24 hours." }); }
    catch (err) { setStatus({ ok: false, text: err instanceof Error ? err.message : "Something went wrong." }); }
    finally { setBusy(false); }
  }

  return (
    <section className="section" id="contact" style={{ paddingTop: 40 }}>
      <div className="container">
        <Reveal>
          <div className="cta">
            <div>
              <span className="pill"><FaRocket /> Let&apos;s build</span>
              <h2>Ready to automate your <span className="grad-text">customer conversations?</span></h2>
              <p>Tell us what you&apos;re trying to achieve. We&apos;ll reply with a scope, timeline and fixed price within 24 hours.</p>
              {ROWS.map((r) => (
                <div className="contact-row" key={r.label}>
                  <span className="ico"><r.icon /></span>
                  <div><small>{r.label}</small><span>{r.value}</span></div>
                </div>
              ))}
            </div>
            <form onSubmit={onSubmit} noValidate>
              <div className="field"><label>Name *</label><input className="input" value={form.name} onChange={set("name")} placeholder="Your name" /></div>
              <div className="field"><label>Email *</label><input className="input" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" /></div>
              <div className="field"><label>Phone</label><input className="input" value={form.phone} onChange={set("phone")} placeholder="+91 …" /></div>
              <div className="field"><label>Project brief *</label><textarea className="input" value={form.message} onChange={set("message")} placeholder="What should the bot or site do?" /></div>
              <button className="btn btn-block" disabled={busy}><FaPaperPlane size={15} /> {busy ? "Sending…" : "Send request"}</button>
              {status && <p className={`msg ${status.ok ? "ok" : "err"}`}>{status.text}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
