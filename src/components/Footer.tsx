"use client";
import { useState } from "react";
import { FaRobot, FaArrowRight, FaLinkedinIn, FaXTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="logo" style={{ fontSize: 22 }}><span className="logo-mark sm"><FaRobot /></span><span>Py<span className="grad-text">Crafters</span></span></a>
            <p className="about">Automation, websites and custom software for businesses that want to move faster than their inbox.</p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="#" aria-label="X"><FaXTwitter /></a>
              <a href="#" aria-label="GitHub"><FaGithub /></a><a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul><li><a href="#services">WhatsApp bots</a></li><li><a href="#services">Website development</a></li><li><a href="#services">Mobile apps</a></li><li><a href="#services">Custom software</a></li></ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul><li><a href="#about">About us</a></li><li><a href="#process">Our process</a></li><li><a href="#feedback">Client feedback</a></li><li><a href="#contact">Contact</a></li></ul>
          </div>
          <div className="news">
            <div style={{ width: "100%" }}>
              <h5>Newsletter</h5>
              <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 14 }}>Monthly automation ideas. No spam, unsubscribe anytime.</p>
              <form style={{ display: "flex", gap: 10 }} onSubmit={(e) => { e.preventDefault(); if (email) { setDone(true); setEmail(""); } }}>
                <input className="input" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: 999 }} />
                <button className="go" aria-label="Subscribe"><FaArrowRight /></button>
              </form>
              {done && <p className="msg ok" style={{ textAlign: "left" }}>Subscribed!</p>}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PyCrafters. All rights reserved.</span>
          <span>Privacy · Terms · Built with care, and a lot of WhatsApp.</span>
        </div>
      </div>
    </footer>
  );
}
