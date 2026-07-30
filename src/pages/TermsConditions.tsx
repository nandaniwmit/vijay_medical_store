import React from 'react';
import { FileText } from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Terms & Conditions - Vijay Medical Store"
        description="Terms and Conditions for ordering medicines from Vijay Medical Store, Gaya, Bihar."
      />

      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <FileText className="w-8 h-8 text-sky-600" />
            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">Terms & Conditions</h1>
              <p className="text-xs text-slate-500">Vijay Medical Store • Gewalbigha, Gaya, Bihar</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Prescription Requirements</h2>
            <p>
              Schedule H and H1 drugs require a valid prescription issued by a registered medical practitioner. Orders placed without a valid prescription for regulated drugs will be subject to pharmacist verification or refusal.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Local Home Delivery Terms</h2>
            <p>
              Home delivery is available across Gewalbigha, Rampur, Mohan Nagar, and surrounding Gaya neighborhoods. Delivery times are subject to stock availability and weather conditions.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Pricing and Payments</h2>
            <p>
              Prices shown in the online inventory checker are based on Maximum Retail Price (MRP). Payment can be made via Cash on Delivery, UPI, or QR code upon delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
