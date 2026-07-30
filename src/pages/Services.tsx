import React from 'react';
import { 
  Pill, Activity, Baby, Sparkles, ShieldAlert, Truck, Stethoscope, 
  CheckCircle2, ArrowRight, MessageCircle, Phone, Search 
} from 'lucide-react';
import { SERVICES_DATA, STORE_INFO } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const medicineCategories = [
    { title: "Prescription Medicines", count: "1,500+ Items", desc: "Ethical & branded drugs for fever, infection, BP, diabetes & thyroid.", icon: Pill },
    { title: "OTC & First Aid", count: "800+ Items", desc: "Pain sprays, antiseptics, cough syrups, digestives & band-aids.", icon: ShieldAlert },
    { title: "Health Devices & Monitors", count: "250+ Models", desc: "Digital BP machines, Accu-Chek glucometers, pulse oximeters & nebulizers.", icon: Activity },
    { title: "Baby Care & Infant Nutrition", count: "400+ Products", desc: "Cerelac, formula milk, diapers, baby wipes & pediatric multivitamins.", icon: Baby },
    { title: "Supplements & Bone Care", count: "350+ Products", desc: "Calcium D3, Protein powders, Omega-3 fish oil & immunity boosters.", icon: Sparkles },
    { title: "Surgical & Home Care Supplies", count: "500+ Products", desc: "Wheelchairs, adult diapers, urine bags, sterile dressings & IV sets.", icon: Stethoscope }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Services & Medicine Inventory - Vijay Medical Store Gaya"
        description="Explore complete pharmacy services at Vijay Medical Store, Gaya. Category-wise prescription medicines, OTC items, health devices, baby care, and live medicine stock checker."
      />

      <Breadcrumbs items={[{ label: 'Services & Stock' }]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            Full Pharmacy Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Healthcare Services & Medicine Stock
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Check real-time stock availability, search prices, and request express doorstep delivery in Gaya.
          </p>
        </div>
      </section>

      {/* 1. EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppModal(medName)} />
      </section>

      {/* 2. MEDICINE CATEGORIES OVERVIEW */}
      <section className="py-14 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Complete Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Browse Medicine & Supplies Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicineCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between hover:border-emerald-500 transition-all hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">{cat.title}</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                        {cat.count}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                    <button
                      onClick={() => onOpenWhatsAppModal(cat.title)}
                      className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order Category on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICE CARDS */}
      <section className="py-16 bg-slate-100/70 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Specialized Patient Care Services
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Learn how Vijay Medical Store assists chronic patients, new parents, and emergency health cases.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                  <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {srv.category}
                  </span>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {srv.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onOpenWhatsAppModal(srv.title)}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire / Order on WhatsApp</span>
                    </button>

                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>Call Store Pharmacist</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
