import React from 'react';

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="p-4 rounded-2xl bg-white/70 shadow-sm border border-gray-100">
    <div className="text-3xl font-bold tracking-tight">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default Stat;