import { FaDiagramProject } from "react-icons/fa6";
import { STEPS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading icon={FaDiagramProject} tag="How we work" title="Four steps from idea to" accent="live automation"
          sub="Transparent milestones, weekly demo, no surprise invoices." />
        <div className="grid-2">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 90}>
              <article className="card step" style={{ height: "100%" }}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
