import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Hero: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-10"
        />
        {/* Gradients to blend image into the clean theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/80 to-slate-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now accepting new clients for Q4
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Automate Your Business. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Accelerate Growth.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help small and mid-sized companies adopt AI the right way. 
              From automating workflows to building custom AI assistants, 
              we deliver real productivity improvements in days, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-md">
                See Use Cases
                <PlayCircle size={20} />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                 <img src="https://picsum.photos/32/32?random=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                 <img src="https://picsum.photos/32/32?random=2" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                 <img src="https://picsum.photos/32/32?random=3" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p>Trusted by <span className="font-semibold text-slate-700">50+ growing companies</span></p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl bg-white shadow-2xl border border-slate-100 p-3 transform hover:scale-[1.01] transition-transform duration-500">
               <div className="relative rounded-xl overflow-hidden h-[400px]">
                  <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-multiply"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="AI Automation Dashboard" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Metric Card */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs animate-fade-in-up">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Efficiency Gain</p>
                        <p className="text-2xl font-bold text-slate-900">+240%</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Floating Element */}
                  <div className="absolute top-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-slate-700 animate-fade-in-down">
                     <p className="text-xs text-blue-300 font-medium font-mono flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        AI Agent Active
                     </p>
                  </div>
               </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};