import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PricingTier } from '../types';
import { useModal } from '../context/ModalContext';

const tiers: PricingTier[] = [
  {
    name: "Starter Package",
    price: "₹25,000",
    description: "Perfect for single-task automation to prove ROI.",
    features: [
      "1 Small Automation Workflow",
      "Email/CRM/Document Tasks",
      "Delivered in 24-48 Hours",
      "1 Month Support",
      "Basic Documentation"
    ]
  },
  {
    name: "Department Standard",
    price: "₹50,000",
    description: "Complete automation for one specific department.",
    recommended: true,
    features: [
      "3-5 Workflow Automations",
      "Custom Dashboard Setup",
      "Team Training Session",
      "3 Months Support",
      "Process Optimization Audit",
      "Priority Delivery"
    ]
  },
  {
    name: "Full Transformation",
    price: "₹1,00,000+",
    description: "End-to-end operational redesign and custom AI.",
    features: [
      "End-to-End Automation",
      "Custom AI Assistant (RAG)",
      "Workflow Redesign",
      "Dedicated Account Manager",
      "Unlimited Fine-tuning",
      "Ongoing Maintenance"
    ]
  }
];

export const Pricing: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Investment</h2>
          <p className="text-lg text-slate-600">
            Affordable, fixed pricing. No hidden development fees or hourly billing surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 bg-white border ${tier.recommended ? 'border-blue-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm min-h-[40px]">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                {tier.name === "Full Transformation" ? "" : <span className="text-slate-500"> / project</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={openModal}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                tier.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};