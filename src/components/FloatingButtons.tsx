import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';

interface FloatingButtonsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 bg-slate-800/90 hover:bg-slate-900 text-white rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.phone}`}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl shadow-sky-600/30 transition-all hover:scale-105 group"
        aria-label="Call Vijay Medical Store"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="text-xs font-bold hidden sm:inline group-hover:inline">Call Store</span>
      </a>

      {/* Floating WhatsApp Order Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-600/40 transition-all hover:scale-105 group"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
        <span className="text-xs font-bold tracking-wide">WhatsApp Order</span>
      </button>
    </div>
  );
};
