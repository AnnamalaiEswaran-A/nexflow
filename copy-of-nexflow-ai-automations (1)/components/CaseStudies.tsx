import React from 'react';
import { ArrowUpRight, Clock, TrendingUp, Zap, Users, Briefcase } from 'lucide-react';
import { CaseStudy } from '../types';

const caseStudies: CaseStudy[] = [
  {
    title: "HR Resume Screening",
    metric: "10+ Hours Saved",
    description: "Automated candidate filtering reduced manual screening time by 90%, allowing HR to focus purely on high-quality interviews."
  },
  {
    title: "Sales Follow-up Bot",
    metric: "+28% Conversions",
    description: "AI-driven immediate responses and follow-ups ensured no lead was left behind, boosting monthly qualified leads significantly."
  },
  {
    title: "Marketing Automation",
    metric: "70% Faster Content",
    description: "Generated SEO blogs, social posts, and email newsletters automatically, maintaining brand consistency with minimal effort."
  },
  {
    title: "Employee Onboarding",
    metric: "2x Faster Training",
    description: "Interactive AI assistant answered new hire FAQs 24/7, reducing dependency on senior staff and accelerating ramp-up time."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative background for the section */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <Briefcase size={14} />
            Proven Track Record
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Results, Real Growth</h2>
          <p className="text-lg text-slate-600">
            See how we've helped other businesses transform their workflows and reclaim their time with practical AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                 <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {index === 0 && <Clock size={24} />}
                    {index === 1 && <TrendingUp size={24} />}
                    {index === 2 && <Zap size={24} />}
                    {index === 3 && <Users size={24} />}
                 </div>
                 <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
              
              <div className="mb-4">
                <span className="block text-3xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{study.metric}</span>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000 ease-out delay-100"></div>
                </div>
              </div>
              
              <h3 className="font-bold text-slate-800 text-lg mb-3">{study.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">{study.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-block p-1 bg-white border border-slate-100 rounded-full shadow-sm">
               <button className="px-8 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                 View detailed case studies <ArrowUpRight size={18} />
               </button>
             </div>
        </div>
      </div>
    </section>
  );
};