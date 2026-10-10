import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}
