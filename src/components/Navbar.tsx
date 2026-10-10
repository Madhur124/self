"use client";
import { useEffect, useState } from "react";
import { FaRobot, FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import { NAV } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      let cur = "";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 140) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark"><FaRobot /></span>
          <span>Py<span className="grad-text">Crafters</span></span>
        </a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <FaXmark /> : <FaBars />}</button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`link ${active === n.id ? "active" : ""}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Get a Quote <FaArrowRight size={13} /></a>
        </nav>
      </div>
      <div className="progress" style={{ width: `${progress}%` }} />
    </header>
  );
}
