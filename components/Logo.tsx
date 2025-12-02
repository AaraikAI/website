import React, { useId } from 'react';
import { BRAND_NAME } from '../constants';

const Logo = ({ className = "w-40" }: { className?: string }) => {
  const maybeId = useId();
  const gradientId = `${maybeId}-grad`;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className="w-10 h-10"
        aria-label={`${BRAND_NAME} logo`}
      >
        <circle cx="60" cy="60" r="54" fill={`url(#${gradientId})`} opacity="0.12" />
        <path
          d="M18 72c12-22 36-34 60-34s48 12 60 34"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.15"
          transform="translate(-18,0)"
        />
        <path
          d="M38 80l14-40h8l14 40h-8l-3-9H49l-3 9h-8zm14-16h10l-5-16-5 16z"
          fill="#111827"
        />
        <g transform="translate(82,28)">
          <circle cx="0" cy="0" r="5" fill="#111827" />
          <path
            d="M0 -12v-6M0 12v6M12 0h6M-12 0h-6M8 8l4 4M-8 -8l-4 -4M8 -8l4 -4M-8 8l-4 4"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-semibold tracking-tight text-xl text-gray-900">{BRAND_NAME}</span>
    </div>
  );
};

export default Logo;