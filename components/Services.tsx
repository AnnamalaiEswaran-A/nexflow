import React from 'react';
import { Bot, Workflow, Users, GraduationCap, Database, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive tasks across HR, Sales, Marketing, and Finance.",
    icon: Workflow,
    features: ["AI Agents & LLMs", "Python Scripts", "Zapier/Make Integrations", "Slack/Teams Bots"]
  },
  {
    title: "Department Transformation",
    description: "Fixed-price automation packages for entire departments.",
    icon: Users,
    features: ["HR Resume Screening", "Sales Lead Qual", "Customer Support Bots", "Marketing Content"]
  },
  {
    title: "Custom AI Assistants",
    description: "Bespoke AI tools tailored specifically to your business data.",
    icon: Bot,
    features: ["Internal ChatGPT", "Policy Q&A Bots", "SOP Assistants", "Document Analysis"]
  },
  {
    title: "Team Training",
    description: "Empower your workforce to use AI safely and effectively.",
    icon: GraduationCap,
    features: ["Prompt Engineering", "Tool-Specific Workshops", "Security Best Practices", "Hands-on Labs"]
  },
  {
    title: "Backend Integration",
    description: "Deep technical integration for data-heavy companies.",
    icon: Database,
    features: ["API Agents", "CRM/ERP Plugins", "Data Pipelines", "Custom Dashboards"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-600">
            Internal IT teams are busy with maintenance. We focus solely on AI integration that drives efficiency and reduces costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon size={100} className="text-blue-600" />
              </div>
              
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-50">
                <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};