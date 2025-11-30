import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>NexFlow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Home</a>
          <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Services</a>
          <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">Pricing</a>
          <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">About</a>
          <button 
            onClick={openModal}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors"
          >
            Book Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-slate-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#services" className="text-slate-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#pricing" className="text-slate-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold"
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};