"use client";
import { useEffect, useState } from "react";
import { FaBolt, FaLayerGroup, FaCircleCheck, FaWhatsapp, FaRobot, FaCartShopping, FaArrowTrendUp, FaPaperPlane, FaStar } from "react-icons/fa6";
import { CHAT, HERO_STATS, TRUST } from "@/lib/data";
import Reveal from "./Reveal";

function ChatDemo() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= CHAT.length) return;
    const t = setTimeout(() => setN(n + 1), n === 0 ? 900 : 1700);
    return () => clearTimeout(t);
  }, [n]);
  const next = CHAT[n];
  return (
    <div className="chat-body">
      {CHAT.slice(0, n).map((m, i) => (
        <div key={i} className={`bubble ${m.from}`}>{m.text}<small>just now ✓✓</small></div>
      ))}
      {next?.from === "bot" && n > 0 && <div className="typing"><i /><i /><i /></div>}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal>
          <span className="pill"><FaStar size={11} /> WhatsApp-first software studio</span>
          <h1>Automate conversations. <span className="grad-text">Ship products that sell.</span></h1>
          <p className="lead">We build WhatsApp bots, websites and custom software that handle your orders and follow-ups — then watch your pipeline compound.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary"><FaBolt /> Start your project</a>
            <a href="#services" className="btn btn-ghost"><FaLayerGroup /> Explore services</a>
          </div>
          <ul className="trust">{TRUST.map((t) => <li key={t}><FaCircleCheck /> {t}</li>)}</ul>
        </Reveal>

        <div className="stats">
          {HERO_STATS.map((s) => (<div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>))}
        </div>

        <div className="phone-wrap">
          <div className="float-card fc-1"><FaRobot /><div><b>Auto-reply</b><small>0.4s response</small></div></div>
          <div className="float-card fc-2"><FaCartShopping /><div><b>Order captured</b><small>#4821 · ₹4,299</small></div></div>
          <div className="float-card fc-3"><FaArrowTrendUp /><div><b>+38% leads</b><small>this month</small></div></div>
          <div className="phone">
            <div className="notch" />
            <div className="chat-head">
              <span className="wa-dot"><FaWhatsapp /></span>
              <div><b>PyCrafters Bot</b><small>online · replies instantly</small></div>
            </div>
            <ChatDemo />
            <div className="chat-input"><span>Type a message…</span><span className="send"><FaPaperPlane size={15} /></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
