import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

export default function SectionHeading({ icon: Icon, tag, title, accent, sub }: { icon: IconType; tag: string; title: ReactNode; accent: string; sub: string }) {
  return (
    <Reveal className="sec-head">
      <span className="pill"><Icon /> {tag}</span>
      <h2>{title} <span className="grad-text">{accent}</span></h2>
      <p>{sub}</p>
    </Reveal>
  );
}
