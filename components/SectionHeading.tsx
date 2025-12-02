import React from 'react';

const SectionHeading = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
  <div className="max-w-3xl">
    {kicker && (
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">{kicker}</div>
    )}
    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">{title}</h3>
    {sub && <p className="text-gray-700">{sub}</p>}
  </div>
);

export default SectionHeading;