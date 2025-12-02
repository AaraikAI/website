import React from 'react';
import { Sparkles, ShieldCheck, Brain } from 'lucide-react';
import Feature from './Feature';

const PathosEthosLogos = () => (
  <div className="grid md:grid-cols-3 gap-4">
    <Feature icon={Sparkles} title="Inspire" copy="Human-centered UX that reduces cognitive load. Less clutter, more clarity." />
    <Feature icon={ShieldCheck} title="Trust" copy="Responsible AI and security by default—governance, privacy, auditability." />
    <Feature icon={Brain} title="Prove" copy="Retrieval‑augmented answers grounded in your data with measurable ROI." />
  </div>
);

export default PathosEthosLogos;