import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { analyzeBusinessPainPoint } from '../services/geminiService';
import { AiConsultationResponse } from '../types';
import { useModal } from '../context/ModalContext';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiConsultationResponse | null>(null);
  const { openModal } = useModal();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const response = await analyzeBusinessPainPoint(input);
      setResult(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-4">
              <Sparkles size={20} />
              <span>Instant AI Opportunity Analyzer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Don't know where to start? <br />
              <span className="text-blue-400">Ask our AI Consultant.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Tell us about a manual, boring, or time-consuming task you do every week. 
              Our Gemini-powered agent will instantly suggest an automation strategy.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Try: "Screening 100 resumes per week"</div>
               </div>
               <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Try: "Manually copying leads from email to Excel"</div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleAnalyze} className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">Describe your workflow bottleneck</label>
                <div className="relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. My sales team spends 2 hours a day writing follow-up emails..."
                    className="w-full bg-slate-900 border border-slate-600 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none h-32"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input}
                    className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                  >
                    {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
              </form>

              {result && (
                <div className="mt-6 animate-fade-in">
                  <div className="bg-slate-900 rounded-xl border border-blue-500/30 p-5 space-y-4">
                    <div>
                      <h4 className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Analysis</h4>
                      <p className="text-slate-300 text-sm italic">"{result.analysis}"</p>
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div>
                      <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">Proposed Solution</h4>
                      <p className="text-white font-medium">{result.solution}</p>
                    </div>
                    <div className="bg-blue-900/20 rounded-lg p-3 flex items-center justify-between border border-blue-500/20">
                      <span className="text-sm text-slate-300">Estimated Impact</span>
                      <span className="font-bold text-blue-300">{result.estimatedSavings}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button 
                      onClick={openModal}
                      className="text-sm text-blue-400 hover:text-blue-300 underline"
                    >
                      Book a call to build this
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};