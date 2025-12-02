import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  Brain,
  Wrench,
  Repeat,
  Gauge,
  Workflow,
  ShieldCheck,
  Users,
  Landmark
} from 'lucide-react';

import ErrorBoundary from './components/ErrorBoundary';
import Logo from './components/Logo';
import SafeAnchor from './components/SafeAnchor';
import Stat from './components/Stat';
import Feature from './components/Feature';
import SectionHeading from './components/SectionHeading';
import CardRail from './components/CardRail';
import HeroPreviewRotator from './components/HeroPreviewRotator';
import ContactForm from './components/ContactForm';
import PathosEthosLogos from './components/PathosEthosLogos';

import {
  BRAND_NAME,
  HERO_TAGLINE,
  ROUTE_CONTACT,
  SOLUTION_CARDS,
  COACHING_CARDS,
  ALL_SERVICES,
  SHOW_COPY_DECK
} from './constants';
import { slugify, waitForElement, scrollToId, flashCard } from './utils';

export default function App() {
  const [offerTab, setOfferTab] = useState<"solutions" | "coaching">("solutions");
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  const navigateToService = (title: string) => {
    const id = slugify(title);
    const inSolutions = SOLUTION_CARDS.findIndex((s) => s.title === title);
    const inCoaching = COACHING_CARDS.findIndex((s) => s.title === title);

    const jump = async () => {
      await waitForElement(id);
      scrollToId(id);
      flashCard(id);
    };

    if (inSolutions !== -1) {
      setOfferTab("solutions");
      const visibleCount = showAllSolutions ? SOLUTION_CARDS.length : Math.min(6, SOLUTION_CARDS.length);
      if (inSolutions >= visibleCount) {
        setShowAllSolutions(true);
      }
      setTimeout(jump, 90);
      return;
    }

    if (inCoaching !== -1) {
      setOfferTab("coaching");
      setTimeout(jump, 90);
      return;
    }

    scrollToId("offer");
  };

  const compactSolutions = useMemo(() => (showAllSolutions ? [...SOLUTION_CARDS] : SOLUTION_CARDS.slice(0, 6)), [showAllSolutions]);
  const rotatorItems = useMemo(() => [...ALL_SERVICES], []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900">
        <div className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl opacity-60" />
          <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-purple-100 blur-3xl opacity-60" />
        </div>

        <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <SafeAnchor href="#offer" className="hover:text-gray-900">What we offer</SafeAnchor>
              <SafeAnchor href="#approach" className="hover:text-gray-900">Approach</SafeAnchor>
              <SafeAnchor href="#outcomes" className="hover:text-gray-900">Outcomes</SafeAnchor>
              <SafeAnchor href="#trust" className="hover:text-gray-900">Trust</SafeAnchor>
              <SafeAnchor href={ROUTE_CONTACT} className="hover:text-gray-900">Contact</SafeAnchor>
            </nav>
            <SafeAnchor href={ROUTE_CONTACT} className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:opacity-90">Start a Pilot</SafeAnchor>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://picsum.photos/1200/800" 
              alt="Business team reviewing AI dashboards" 
              className="w-full h-full object-cover opacity-25" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90" />
          </div>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/70 border-gray-200 text-xs text-gray-700 mb-4">
                <Sparkles className="w-4 h-4" /> Human‑Centered • Responsible • Proven
              </div>
              <h1 className="text-4xl md:text-6xl leading-tight font-semibold tracking-tight mb-4">{HERO_TAGLINE}</h1>
              <p className="text-lg text-gray-700 mb-6 max-w-xl">Grounded, retrieval‑augmented assistants that turn your data into decisions.</p>
              <div className="flex items-center gap-3">
                <SafeAnchor href={ROUTE_CONTACT} className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium hover:opacity-90">Start a Pilot</SafeAnchor>
                <SafeAnchor href={ROUTE_CONTACT} className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50">Request a Demo</SafeAnchor>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8 max-w-lg">
                <Stat value=">70%" label="Faster answers" />
                <Stat value="30–50%" label="Less manual research" />
                <Stat value="<1s" label="Avg response time" />
              </div>
            </div>
            <div className="md:col-span-5">
              <HeroPreviewRotator items={rotatorItems} onJumpTo={navigateToService} />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 pb-6 -mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
            <span className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">Public Sector</span>
            <span className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">Healthcare</span>
            <span className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">Education</span>
            <span className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">Energy</span>
            <span className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">Financial Services</span>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <PathosEthosLogos />
        </section>

        <section id="offer" className="max-w-7xl mx-auto px-4 py-12">
          <SectionHeading title="What we offer" sub="Concise by default. Explore details when you need them." />
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white/70 p-1 inline-flex">
            <button className={`px-4 py-2 rounded-xl text-sm ${offerTab === "solutions" ? "bg-gray-900 text-white" : "text-gray-700"}`} onClick={() => setOfferTab("solutions")} type="button">Solutions</button>
            <button className={`px-4 py-2 rounded-xl text-sm ${offerTab === "coaching" ? "bg-gray-900 text-white" : "text-gray-700"}`} onClick={() => setOfferTab("coaching")} type="button">Coaching</button>
          </div>

          {offerTab === "solutions" ? (
            <div className="mt-6 space-y-4">
              <CardRail items={compactSolutions} />
              <div className="text-center">
                <button type="button" onClick={() => setShowAllSolutions((v) => !v)} className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm hover:bg-gray-50">{showAllSolutions ? "Show less" : "Show all"}</button>
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <CardRail items={COACHING_CARDS} />
            </div>
          )}
        </section>

        <section id="approach" className="max-w-7xl mx-auto px-4 py-12">
          <SectionHeading title="A fast, responsible path to value" sub="Prototype in days, scale in weeks—with evaluation at every step." />
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <Feature icon={Search} title="Discover" copy="Map decisions to data. Define users, tasks, policies." />
            <Feature icon={Brain} title="Design" copy="Choose models, chunking, embeddings, and guardrails." />
            <Feature icon={Wrench} title="Deploy" copy="Ship a pilot with observability and eval harnesses." />
            <Feature icon={Repeat} title="Iterate" copy="Optimize prompts, tools, and retrieval—continuously." />
          </div>
        </section>

        <section id="outcomes" className="max-w-7xl mx-auto px-4 py-12">
          <SectionHeading title="Outcomes that matter" />
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Feature icon={Gauge} title="Speed to insight" copy=">70% faster answers vs. baseline search with grounded RAG." />
            <Feature icon={Workflow} title="Operational lift" copy="30–50% reduction in manual assembly and research." />
            <Feature icon={ShieldCheck} title="Risk managed" copy="Audit trails, eval dashboards, and policy gates built‑in." />
          </div>
        </section>

        <section id="trust" className="max-w-7xl mx-auto px-4 py-12">
          <SectionHeading title="Built to be trusted" sub="Privacy-first, transparent, and ready for regulated environments." />
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Feature icon={ShieldCheck} title="Security" copy="Encryption in transit/at rest, least‑privilege access, SOC2‑ready practices." />
            <Feature icon={Users} title="Human‑Centered" copy="Accessible UX, HITL review, and transparent model behavior." />
            <Feature icon={Landmark} title="Governance" copy="Policy frameworks for public sector & regulated industries." />
          </div>
        </section>

        {SHOW_COPY_DECK && (
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="p-6 rounded-3xl bg-white/70 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Copy Deck (dev‑only)</h4>
              <p className="text-sm text-gray-700">Hidden in production. Flip SHOW_COPY_DECK to true during editing.</p>
            </div>
          </section>
        )}

        <section id="contact" className="max-w-7xl mx-auto px-4 py-12">
          <div className="p-6 rounded-3xl bg-gray-900 text-white grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-2">Tell us what you'd like to build</h3>
              <p className="text-white/80">Get a scoped plan, clear success metrics, and a live demo using your data.</p>
              <ul className="mt-4 text-white/80 text-sm list-disc list-inside space-y-1">
                <li>Typical response time: &lt; 1 business day</li>
                <li>We'll follow up with a 7‑day pilot plan template</li>
                <li>Privacy-first: we never use your data for training</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <SafeAnchor href={ROUTE_CONTACT} className="px-4 py-2 rounded-xl bg-white text-gray-900 font-medium">Start a Pilot</SafeAnchor>
                <SafeAnchor href={ROUTE_CONTACT} className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium">Request a Demo</SafeAnchor>
                <SafeAnchor href={ROUTE_CONTACT} className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium">Book Coaching</SafeAnchor>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Logo className="w-48" />
              <p className="text-sm text-gray-600 max-w-md">We elevate everyday work by making AI convenient and seamlessly embedded in every business.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">Offer</div>
                <ul className="space-y-1 text-gray-700">
                  <li><SafeAnchor href="#offer" onHash={() => setOfferTab("solutions")}>Solutions</SafeAnchor></li>
                  <li><SafeAnchor href="#offer" onHash={() => setOfferTab("coaching")}>Coaching</SafeAnchor></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Company</div>
                <ul className="space-y-1 text-gray-700">
                  <li><SafeAnchor href="#trust">Responsible AI</SafeAnchor></li>
                  <li>Privacy</li>
                  <li><SafeAnchor href={ROUTE_CONTACT}>Contact</SafeAnchor></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Resources</div>
                <ul className="space-y-1 text-gray-700">
                  <li>RAG Playbook</li>
                  <li>Case Studies</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center pb-8">© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}