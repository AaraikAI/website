import {
  Megaphone,
  Tractor,
  Leaf,
  GraduationCap,
  Users,
  Stethoscope,
  Workflow,
  Layers,
  Gauge,
  Building2,
  Sparkles,
  ShieldCheck,
  Repeat,
} from "lucide-react";
import { Service } from "./types";

export const VERSION = "1.4";
export const BRAND_NAME = "AARAIK AI";
export const HERO_TAGLINE = "Turn AI Potential into Business Reality";
export const SHOW_COPY_DECK = false;
export const ROUTE_CONTACT = "#contact";
export const ROTATION_MS = 3000;
export const FLASH_MS = 2000;

export const SOLUTION_CARDS: Service[] = [
  { icon: Megaphone, title: "AI Media & Marketing", copy: "On‑brand content, ads, and multichannel orchestration for B2B/B2C—grounded in your style and data.", tags: ["B2B", "B2C", "Ads"], accent: "violet", badge: "Marketing" },
  { icon: Tractor, title: "Agro AI & Autonomy", copy: "Applied AI for agriculture—autonomous field operations, crop health monitoring, yield forecasting, and precision input management from sensor & satellite data to decisions.", tags: ["Agriculture", "Autonomy"], accent: "green", badge: "Agriculture" },
  { icon: Leaf, title: "Environmental AI", copy: "Detection, reporting, and optimization with geospatial + sensor data.", tags: ["Geospatial", "Sensors"], accent: "emerald", badge: "Sustainability" },
  { icon: GraduationCap, title: "Educational AI", copy: "Personalized learning paths, assessment assistants, and knowledge agents.", tags: ["LMS", "Assessments"], accent: "indigo" },
  { icon: Users, title: "Woman Empowerment AI", copy: "Govt. initiatives that augment access, upskilling, and entrepreneurship with ethically‑designed AI.", tags: ["Gov", "Upskilling"], accent: "rose", badge: "Inclusion" },
  { icon: Stethoscope, title: "Government & Medicine AI", copy: "Triage, retrieval, and compliant decision support—safety and privacy first.", tags: ["Compliance", "HITL"], accent: "red" },
  { icon: Workflow, title: "AI‑Enabled Workflows", copy: "Automate drafting, summarizing, routing, QA, and approvals.", tags: ["Automation", "Ops"], accent: "teal" },
  { icon: Layers, title: "Agentic Agents", copy: "Agentic Agents are an advanced evolution of knowledge retrieval systems, seamlessly unifying data from PDFs, emails, wikis, and databases to deliver grounded, context-aware answers.", tags: ["RAG", "Agents"], accent: "blue", badge: "RAG" },
  { icon: Gauge, title: "AI Strategy & E2E Solutions", copy: "Roadmaps, pilots, and productionization tuned to your KPIs and risk posture.", tags: ["Strategy", "Pilot"], accent: "amber", badge: "Strategy" },
];

export const COACHING_CARDS: Service[] = [
  { icon: Building2, title: "Executive AI Coaching", copy: "1:1 and small‑group sessions focused on strategy, risk, and ROI—tailored to your industry.", tags: ["C‑suite", "ROI"], accent: "blue" },
  { icon: Users, title: "Team Enablement", copy: "Role‑based training for product, ops, marketing, and IT with live exercises on your workflows.", tags: ["Training", "Hands‑on"], accent: "indigo" },
  { icon: Sparkles, title: "Prompting & Applied RAG", copy: "Playbooks for prompt patterns, retrieval best practices, and evaluation with your data.", tags: ["Prompts", "RAG"], accent: "violet" },
  { icon: GraduationCap, title: "AI Literacy for Everyone", copy: "Foundations, ethics, and daily‑use skills for non‑technical teams.", tags: ["Foundations", "Ethics"], accent: "sky" },
  { icon: ShieldCheck, title: "Responsible AI & Governance", copy: "Policy templates, model cards, and human‑in‑the‑loop review procedures.", tags: ["Governance", "Policy"], accent: "slate" },
  { icon: Repeat, title: "Change Management", copy: "Adoption plans, champions network, and success metrics to scale usage.", tags: ["Adoption", "Metrics"], accent: "orange" },
];

export const ALL_SERVICES = [...SOLUTION_CARDS, ...COACHING_CARDS];