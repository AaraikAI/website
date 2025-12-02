import React, { useState, useEffect, useRef } from 'react';
import { Service } from '../types';
import { BRAND_NAME, ROTATION_MS } from '../constants';

const HeroPreviewRotator = ({ items, onJumpTo }: { items: Service[]; onJumpTo: (title: string) => void }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % items.length);
    }, ROTATION_MS);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, items.length]);

  const active = items[index];
  const handleJump = (title: string) => onJumpTo(title);
  const previewItems = Array.from({ length: Math.min(6, items.length) }).map((_, n) => items[(index + n) % items.length]);

  return (
    <div
      className="p-6 rounded-3xl bg-white/80 border border-gray-100 shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="rounded-2xl overflow-hidden border border-gray-200 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => handleJump(active.title)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleJump(active.title);
          }
        }}
        aria-label={`Go to ${active.title}`}
      >
        <div className="bg-gray-100 h-10 flex items-center px-4 text-xs text-gray-600">{BRAND_NAME}.ai</div>
        <div className="p-4 space-y-3">
          <div className="h-8 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="flex gap-2">
            <div className="h-8 bg-gray-200 rounded w-24" />
            <div className="h-8 bg-gray-200 rounded w-40" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {previewItems.map((it, i) => (
              <button
                key={`${it.title}-${i}`}
                type="button"
                className={`h-24 rounded text-left p-3 transition ${i === 0 ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleJump(it.title);
                }}
                aria-label={`Jump to ${it.title}`}
                title={it.title}
              >
                <div className="text-xs font-medium line-clamp-1">{it.title}</div>
                <div className="text-[11px] opacity-70 line-clamp-2">{it.copy}</div>
              </button>
            ))}
          </div>
          <div className="mt-2">
            <div className="text-sm font-medium text-gray-900">{active.title}</div>
            <div className="text-xs text-gray-600 line-clamp-2">{active.copy}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs text-gray-600">Rotating every {ROTATION_MS / 1000}s — click any tile to jump</div>
        <div className="flex gap-1" aria-hidden>
          {Array.from({ length: previewItems.length }).map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-gray-900" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPreviewRotator;