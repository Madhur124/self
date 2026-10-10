import { FaCheck, FaLayerGroup } from "react-icons/fa6";
import { PRICING, SERVICES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading icon={FaLayerGroup} tag="What we do" title="Services engineered for" accent="real growth"
          sub="From a single automation flow to a full product build — pick what your business needs today and scale it tomorrow." />
        <div className="grid-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <article className="card" style={{ height: "100%" }}>
                {s.popular && <span className="badge">Most popular</span>}
                <div className="icon-box"><s.icon /></div>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <ul className="ticks">{s.points.map((p) => <li key={p}><FaCheck /> {p}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="pricing">
            {PRICING.map((p) => (
              <div key={p.tier} className={`price ${p.featured ? "featured" : ""}`}>
                <small>{p.tier}</small><b>{p.price}</b><span>{p.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
