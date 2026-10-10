"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaComments, FaPenToSquare, FaStar, FaPaperPlane, FaInbox, FaRotateRight, FaRegStar } from "react-icons/fa6";
import { listFeedback, submitFeedback, type FeedbackItem } from "@/lib/feedback";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Stars({ value }: { value: number }) {
  return <div className="stars">{[1, 2, 3, 4, 5].map((i) => <span key={i} className={i <= Math.round(value) ? "on" : ""}><FaStar /></span>)}</div>;
}

export default function Feedback() {
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [sort, setSort] = useState("new");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(() => { listFeedback().then(setItems).catch(() => setItems([])); }, []);
  useEffect(load, [load]);

  const avg = items.length ? items.reduce((a, b) => a + b.rating, 0) / items.length : 0;
  const sorted = useMemo(() => {
    const c = [...items];
    if (sort === "new") c.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    if (sort === "old") c.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
    if (sort === "high") c.sort((a, b) => b.rating - a.rating);
    return c;
  }, [items, sort]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !rating) { setStatus({ ok: false, text: "Please add your name, a rating and a message." }); return; }
    setBusy(true); setStatus(null);
    try {
      const item = await submitFeedback({ name: name.trim(), message: message.trim(), rating });
      setItems((p) => [item, ...p]);
      setName(""); setMessage(""); setRating(0);
      setStatus({ ok: true, text: "Thank you! Your feedback is live." });
    } catch (err) {
      setStatus({ ok: false, text: err instanceof Error ? err.message : "Something went wrong." });
    } finally { setBusy(false); }
  }

  return (
    <section className="section" id="feedback">
      <div className="container" style={{ maxWidth: 940 }}>
        <SectionHeading icon={FaComments} tag="Testimonials" title="What our clients" accent="actually say"
          sub="Feedback is stored live and shown as it arrives. Leave yours below — it takes 20 seconds." />

        <Reveal>
          <div className="rating-box">
            {items.length ? (
              <><div className="rating-big">{avg.toFixed(1)}</div><div><Stars value={avg} /><small>{items.length} review{items.length > 1 ? "s" : ""}</small></div></>
            ) : (
              <div><div style={{ width: 44, height: 6, borderRadius: 3, background: "var(--gold)", margin: "0 auto 18px" }} /><Stars value={0} /><small>No ratings yet — be the first!</small></div>
            )}
          </div>
        </Reveal>

        <Reveal>
          <form className="panel" onSubmit={onSubmit} noValidate>
            <h3><FaPenToSquare /> Share your experience</h3>
            <div className="field">
              <label htmlFor="fb-name">Your name *</label>
              <input id="fb-name" className="input" placeholder="e.g. Aarav Mehta" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
            </div>
            <div className="field">
              <label>Your rating *</label>
              <div className="star-pick">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button type="button" key={i} className={i <= rating ? "on" : ""} aria-label={`${i} stars`} onClick={() => setRating(i)}>
                    {i <= rating ? <FaStar /> : <FaRegStar />}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label htmlFor="fb-msg">Your feedback *</label>
              <textarea id="fb-msg" className="input" placeholder="What did we build for you, and how did it go?" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={600} />
            </div>
            <button className="btn btn-block" disabled={busy}><FaPaperPlane size={15} /> {busy ? "Submitting…" : "Submit feedback"}</button>
            {status && <p className={`msg ${status.ok ? "ok" : "err"}`}>{status.text}</p>}
          </form>
        </Reveal>

        <Reveal>
          <div className="panel">
            <div className="wall-head">
              <h3>Feedback wall</h3>
              <div className="wall-tools">
                <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="new">Newest first</option><option value="old">Oldest first</option><option value="high">Highest rated</option>
                </select>
                <button className="icon-btn" aria-label="Refresh" onClick={load}><FaRotateRight size={14} /></button>
              </div>
            </div>
            {sorted.length === 0 ? (
              <div className="empty"><FaInbox /><p>No feedback yet — be the first to leave one!</p></div>
            ) : sorted.map((f) => (
              <div className="review" key={f.id}>
                <div className="review-top"><b>{f.name}</b><small>{new Date(f.createdAt).toLocaleDateString()}</small></div>
                <Stars value={f.rating} /><p>{f.message}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
