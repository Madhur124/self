export interface FeedbackItem { id: string; name: string; rating: number; message: string; createdAt: string; }

const API = process.env.NEXT_PUBLIC_API_URL;
const KEY = "pycrafters:feedback";

const readLocal = (): FeedbackItem[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
};

export async function listFeedback(): Promise<FeedbackItem[]> {
  if (API) {
    const r = await fetch(`${API}/api/feedback`);
    if (!r.ok) throw new Error("Failed to load feedback");
    return r.json();
  }
  return readLocal();
}

export async function submitFeedback(data: Omit<FeedbackItem, "id" | "createdAt">): Promise<FeedbackItem> {
  if (API) {
    const r = await fetch(`${API}/api/feedback`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!r.ok) throw new Error("Could not submit feedback");
    return r.json();
  }
  const item: FeedbackItem = { ...data, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  try { localStorage.setItem(KEY, JSON.stringify([item, ...readLocal()])); } catch { /* ignore */ }
  return item;
}

export async function submitLead(data: { name: string; email: string; phone?: string; message: string }) {
  if (!API) return { ok: true };
  const r = await fetch(`${API}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!r.ok) throw new Error("Could not send your message");
  return r.json();
}
