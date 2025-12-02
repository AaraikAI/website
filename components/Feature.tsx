import React from 'react';
import { FeatureProps } from '../types';

const Feature = ({ icon: Icon, title, copy }: FeatureProps) => (
  <div className="p-5 rounded-3xl bg-white/80 border border-gray-100 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-xl bg-gray-100">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed">{copy}</p>
  </div>
);

export default Feature;