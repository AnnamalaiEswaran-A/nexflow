import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}

export interface AiConsultationResponse {
  analysis: string;
  solution: string;
  estimatedSavings: string;
}
