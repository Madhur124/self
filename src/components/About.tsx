import { FaPeopleGroup, FaQuoteLeft } from "react-icons/fa6";
import { ABOUT_STATS, VALUES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="story">
            <h3>Since 2019</h3>
            <p>Started as a two-person Python studio automating spreadsheets for local shops. Today we&apos;re a distributed engineering team shipping automation for brands across India, the UAE and the UK.</p>
            <div className="story-stats">
              {ABOUT_STATS.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
            </div>
          </div>
          <blockquote className="quote" style={{ margin: "0 0 90px" }}>
            <FaQuoteLeft /> We only ship automations we&apos;d be happy to run on our own business number.
          </blockquote>
        </Reveal>

        <SectionHeading icon={FaPeopleGroup} tag="About us" title="A small team obsessed with" accent="things that work"
          sub="PyCrafters is a software studio specialising in conversational automation and product engineering. We're deliberately small so the people who design your bot are the people who maintain it." />
        <div className="grid-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 90}>
              <div className="card value" style={{ height: "100%", padding: 26 }}>
                <div className="icon-box"><v.icon /></div>
                <h4>{v.title}</h4><p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
