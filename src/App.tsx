import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loading pages as explicitly required in the prompt
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(m => ({ default: m.TermsConditions })));

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading Spinner Fallback
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
    <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4" />
    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
      Loading Vijay Medical Store...
    </span>
  </div>
);

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
          <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/about" element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />

          {/* Floating Call & WhatsApp Action Buttons on Every Page */}
          <FloatingButtons onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* Global WhatsApp Medicine Order Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={() => setIsWhatsAppModalOpen(false)}
            prefilledMedicine={prefilledMedicine}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
