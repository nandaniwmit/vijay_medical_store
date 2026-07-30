import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Privacy Policy - Vijay Medical Store"
        description="Privacy Policy for Vijay Medical Store, Gaya. We are committed to protecting your health and personal prescription information."
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">Privacy Policy</h1>
              <p className="text-xs text-slate-500">Last updated: July 2026 • Vijay Medical Store, Gaya</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              At <strong>{STORE_INFO.name}</strong>, accessible from {STORE_INFO.address}, protecting your health privacy and personal information is our highest priority.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p>
              When you submit an order or prescription via our WhatsApp Order Form or contact form, we collect information including your name, contact phone number, delivery address in Gaya, prescription image files, and specific medicine requirements.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
            <p>
              Your information is strictly used to fulfill your medicine orders, verify doctor prescription accuracy, arrange doorstep delivery, and provide customer support. We never sell or share your personal health records with third parties.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at <strong>{STORE_INFO.email}</strong> or call <strong>{STORE_INFO.phoneDisplay}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
