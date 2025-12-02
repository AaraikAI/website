import { ComponentType } from 'react';

export type Accent =
  | "green"
  | "emerald"
  | "teal"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "amber"
  | "orange"
  | "rose"
  | "red"
  | "slate";

export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  copy: string;
  tags?: string[];
  accent?: Accent;
  badge?: string;
}

export interface FeatureProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  copy: string;
}