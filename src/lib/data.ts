import type { IconType } from "react-icons";
import {
  FaWhatsapp, FaCode, FaMobileScreen, FaGears, FaPlugCircleCheck, FaShieldHalved,
  FaBolt, FaBrain, FaChartPie, FaLock, FaBullseye, FaComments, FaInfinity, FaHeadset,
} from "react-icons/fa6";

export const NAV = [
  { id: "services", label: "Services" },
  { id: "platform", label: "Platform" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "feedback", label: "Feedback" },
] as const;

export const HERO_STATS = [
  { value: "320+", label: "Bots deployed" },
  { value: "180+", label: "Websites built" },
  { value: "42M+", label: "Messages automated" },
  { value: "98%", label: "Client retention" },
];

export const TRUST = ["320+ bots shipped", "99.9% uptime", "24h response SLA"];

export const CHAT = [
  { from: "bot", text: "👋 Welcome to PyCrafters. Are you here for a bot, a website, or something custom?" },
  { from: "me", text: "A bot that takes orders on WhatsApp." },
  { from: "bot", text: "Done-for-you flow on the official Business API — live in about 10 days 🚀" },
  { from: "me", text: "Nice. And payments?" },
  { from: "bot", text: "Built in. Customer pays inside the chat, order lands in your CRM automatically ✅" },
] as const;

export const MARQUEE = [
  "Meta Cloud API", "n8n Automation", "OpenAI & LLMs", "WhatsApp Business API",
  "Python · FastAPI", "Next.js · React", "MongoDB · Postgres", "Razorpay · Stripe", "Docker · AWS",
];

export interface Service {
  icon: IconType; title: string; blurb: string; points: string[]; popular?: boolean;
}
export const SERVICES: Service[] = [
  { icon: FaWhatsapp, title: "WhatsApp Automation Bots", popular: true,
    blurb: "Official Business API bots that greet, qualify, sell, collect payments and hand off to a human — all inside the chat.",
    points: ["Broadcast & drip campaigns", "Catalogue & cart in chat", "Payments & invoices", "Human handoff & CRM sync"] },
  { icon: FaCode, title: "Website Development",
    blurb: "Lightning-fast, SEO-ready marketing sites and web apps with pixel-perfect design and a CMS you'll actually enjoy using.",
    points: ["Landing pages & e-commerce", "Next.js / React builds", "CMS & admin panels", "Analytics & SEO baked in"] },
  { icon: FaMobileScreen, title: "Mobile Apps",
    blurb: "Cross-platform apps for Android and iOS built from one codebase, wired straight into your backend and bots.",
    points: ["React Native / Flutter", "Push & in-app messaging", "Offline-first sync", "Store submission handled"] },
  { icon: FaGears, title: "Custom Software",
    blurb: "Bespoke tools that fit your process exactly — CRMs, billing systems, inventory dashboards and internal admin panels.",
    points: ["Process automation", "Custom CRM / ERP modules", "Role-based dashboards", "Scalable cloud architecture"] },
  { icon: FaPlugCircleCheck, title: "API & Integrations",
    blurb: "Connect the tools you already use — payments, ERPs, sheets, couriers and LLMs — into one reliable pipeline.",
    points: ["REST & webhooks", "n8n / Zapier workflows", "Payment gateways", "Third-party sync"] },
  { icon: FaShieldHalved, title: "Support & Maintenance",
    blurb: "Monitoring, fixes and iteration after launch, so your automations keep earning long after go-live.",
    points: ["24h response SLA", "Uptime monitoring", "Monthly optimisation", "Template approvals"] },
];

export const PRICING = [
  { tier: "Starter", price: "From ₹14,999", note: "Single bot or landing page" },
  { tier: "Growth", price: "From ₹39,999", note: "Bot + website + integrations", featured: true },
  { tier: "Enterprise", price: "Custom", note: "Full software & SLA contract" },
];

export const PLATFORM_FEATURES = [
  { icon: FaBolt, title: "Sub-second replies", text: "Queued workers keep response times low even at a few thousand messages a minute." },
  { icon: FaBrain, title: "AI that knows your business", text: "Grounded on your catalogue, FAQs and policies — not generic chatbot filler." },
  { icon: FaChartPie, title: "Numbers you can act on", text: "Live dashboard for conversations, conversions, drop-offs and campaign ROI." },
  { icon: FaLock, title: "Compliant & secure", text: "Opt-in flows, template approval guidance, encrypted credentials and data isolation." },
];

export const STEPS = [
  { n: "01", title: "Discover", text: "A 30-minute call to map your funnel, the messages customers send, and where money leaks." },
  { n: "02", title: "Design", text: "We script the conversation flow and screen designs, then get your sign-off before writing code." },
  { n: "03", title: "Build", text: "Weekly demos on a staging number and staging URL so you can test everything as it grows." },
  { n: "04", title: "Launch & scale", text: "Go live, we train your team, then keep optimising flows against the numbers." },
];

export const VALUES = [
  { icon: FaBullseye, title: "Outcome first", text: "Every flow is tied to a metric — leads, orders, tickets deflected." },
  { icon: FaComments, title: "Plain language", text: "No jargon walls. You get clear scope, clear price, clear timeline." },
  { icon: FaInfinity, title: "Built to last", text: "Documented code, monitored infra and a handover that survives us." },
  { icon: FaHeadset, title: "Real humans", text: "A named engineer on your project, reachable on WhatsApp. Fitting, really." },
];

export const ABOUT_STATS = [
  { value: "14", label: "Craftspeople" },
  { value: "9", label: "Countries served" },
  { value: "6", label: "Years shipping" },
];

export const CODE = `@bot.on_message
async def handle(msg):
    intent = await nlu.detect(msg.text)

    if intent == "order":
        await bot.send(msg.from_, catalogue())
        await cart.open(msg.from_)

    elif intent == "price":
        await bot.send(msg.from_, pricelist())

    # human handoff + CRM sync
    else:
        await crm.create_lead(msg)
        await agent.assign(msg.from_)`;
