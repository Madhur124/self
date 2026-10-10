import { FaMicrochip } from "react-icons/fa6";
import { CODE, PLATFORM_FEATURES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function highlight(src: string) {
  const esc = src.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return esc
    .replace(/(#.*)$/gm, '<span class="tk-c">$1</span>')
    .replace(/("[^"]*")/g, '<span class="tk-s">$1</span>')
    .replace(/\b(async def|def|if|elif|else|await)\b/g, '<span class="tk-k">$1</span>')
    .replace(/(@bot\.on_message)/g, '<span class="tk-k">$1</span>')
    .replace(/\b(handle|detect|send|open|catalogue|pricelist|create_lead|assign)\b(?=\()/g, '<span class="tk-f">$1</span>');
}

export default function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <SectionHeading icon={FaMicrochip} tag="The platform" title="Built on a stack that" accent="doesn't flinch"
          sub="Python-powered flows, official WhatsApp APIs and a dashboard that shows what's actually working." />
        <div className="split">
          <Reveal>
            {PLATFORM_FEATURES.map((f) => (
              <div className="feat" key={f.title}>
                <span className="ico"><f.icon /></span>
                <div><h4>{f.title}</h4><p>{f.text}</p></div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <div className="code">
              <div className="code-bar">
                <i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} />
                <span>bot_flow.py</span>
              </div>
              <pre dangerouslySetInnerHTML={{ __html: highlight(CODE) }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
