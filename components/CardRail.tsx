import React from 'react';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import { slugify } from '../utils';

const CardRail = ({ items }: { items: Service[] }) => (
  <div className="relative">
    <div className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 pr-4 snap-x snap-mandatory">
        {items.map((s, i) => (
          <ServiceCard key={i} idProp={slugify(s.title)} {...s} />
        ))}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
  </div>
);

export default CardRail;