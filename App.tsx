import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { AiConsultant } from './components/AiConsultant';
import { BarChart, Clock, TrendingUp, Users } from 'lucide-react';
import { ModalProvider, useModal } from './context/ModalContext';
import { BookingModal } from './components/BookingModal';

const StatsSection: React.FC = () => (
  <section className="py-12 bg-white border-b border-slate-100">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: Clock, value: "20-40h", label: "Saved Monthly" },
          { icon: TrendingUp, value: "3x", label: "Faster Workflow" },
          { icon: BarChart, value: "80%", label: "Cost Reduction" },
          { icon: Users, value: "3-7 Days", label: "To Deploy" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <stat.icon className="text-blue-500 mb-2" size={24} />
            <span className="text-3xl font-bold text-slate-900 block">{stat.value}</span>
            <span className="text-sm text-slate-500 uppercase tracking-wide font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Industries: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-8">Industries We Empower</p>
      <div className="flex flex-wrap justify-center gap-4">
        {["IT & SaaS", "Real Estate", "Healthcare", "E-commerce", "Education", "Fintech", "Manufacturing", "HR Agencies"].map((ind) => (
          <span key={ind} className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 transition-colors">
            {ind}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
           <span className="text-white text-xl font-bold">NexFlow</span>
           <p className="mt-4 text-sm leading-relaxed">
             Helping small and mid-sized companies adopt AI the right way. Practical solutions, real results.
           </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Workflow Automation</a></li>
            <li><a href="#" className="hover:text-blue-400">HR Transformation</a></li>
            <li><a href="#" className="hover:text-blue-400">Sales Bots</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Case Studies</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-semibold mb-4">Contact</h4>
           <p className="text-sm">hello@nexflow.ai</p>
           <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} NexFlow AI Automations. All rights reserved.
      </div>
    </div>
  </footer>
);

const MainContent: React.FC = () => {
  const { openModal } = useModal();

  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <CaseStudies />
      
      {/* Why Choose Us / Value Prop Highlights */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl shadow-blue-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple automations, massive impact.</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              80% of businesses haven't implemented simple automations that could save 20–40 hours every month. Don't be one of them.
            </p>
            <button 
              onClick={openModal}
              className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      <AiConsultant />
      <Pricing />
      <Industries />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BookingModal />
      <MainContent />
    </ModalProvider>
  );
};

export default App;