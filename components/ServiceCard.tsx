import React from 'react';
import { Service, Accent } from '../types';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-700">{children}</span>
);

const ACCENTS: Record<Accent, { bg: string; text: string; border: string }> = {
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
  slate: { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
};

const ServiceCard: React.FC<Service & { idProp?: string }> = ({ idProp, icon: Icon, title, copy, tags = [], accent, badge }) => {
  const ac = accent ? ACCENTS[accent] : undefined;
  const bg = ac?.bg ?? "bg-gray-100";
  const text = ac?.text ?? "text-gray-700";
  const border = ac?.border ?? "border-gray-200";
  
  return (
    <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start" id={idProp}>
      <div className="p-6 rounded-3xl bg-white/80 border border-gray-100 shadow-sm hover:shadow-lg transition group">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2.5 rounded-2xl ${bg}`}>
            <Icon className={`w-5 h-5 ${text}`} />
          </div>
          <h4 className="font-semibold text-gray-900 flex-1">{title}</h4>
          {badge && (
            <span className={`px-2 py-0.5 rounded-full text-[11px] border ${bg} ${text} ${border}`}>{badge}</span>
          )}
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{copy}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;