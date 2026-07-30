import React from 'react';
import { 
  Award, ShieldCheck, Heart, Users, Target, Eye, Compass, 
  MapPin, Clock, Phone, MessageCircle, CheckCircle2 
} from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const timelineEvents = [
    {
      year: "2012",
      title: "Store Foundation",
      description: "Established by Mr. Vijay Kumar at Gouri Road, Gewalbigha, Gaya to provide authentic prescription medicines."
    },
    {
      year: "2016",
      title: "Cold Chain Expansion",
      description: "Installed state-of-the-art medical refrigeration units to safely store insulin, vaccines, and biologics."
    },
    {
      year: "2020",
      title: "Emergency Response & Doorstep Care",
      description: "Initiated 24/7 phone assistance and express local home delivery to serve elderly and homebound patients in Gaya."
    },
    {
      year: "2024",
      title: "Digital WhatsApp Prescription Ordering",
      description: "Launched seamless WhatsApp prescription uploading and live stock checking for patient convenience."
    },
    {
      year: "2026",
      title: "Over 25,000+ Families Served",
      description: "Recognized as one of Gewalbigha & Rampur’s most trusted community medical stores."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="About Us - Story & Mission"
        description="Learn about Vijay Medical Store's 14+ year journey in Gaya, Bihar. Dedicated to providing genuine prescription medicines, cold-chain storage, and compassionate customer service."
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            Our Legacy of Trust
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About Vijay Medical Store
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            For over 14 years, Vijay Medical Store has been the pillar of healthcare security for households in Gewalbigha, Rampur, Mohan Nagar, and nearby areas of Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* Business Story & Owner Message */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Compass className="w-4 h-4" /> The Vijay Medical Store Journey
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Built on Integrity, Authentic Sourcing & Personal Patient Attention
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Vijay Medical Store was founded with a singular core belief: <strong>every patient deserves genuine medicines without doubt or compromise</strong>. In an era where counterfeit drugs and improper storage threaten health outcomes, we established a strictly verified supply chain directly connected to accredited pharmaceutical distributors.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Located conveniently at Gouri Road, Rampur, Mohan Nagar, Gewalbigha, our pharmacy serves as a warm, reassuring destination where patients receive expert guidance on dosage, administration, storage conditions, and potential drug interactions.
              </p>

              {/* Owner Quote Box */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border-l-4 border-emerald-500 shadow-sm space-y-2">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic font-medium">
                  "When a patient walks into Vijay Medical Store, they aren't just buying a box of tablets; they are trusting us with their family's health. We honor that trust by ensuring 100% genuine products, correct advice, and compassionate service every single day."
                </p>
                <div className="text-xs font-bold text-slate-900 dark:text-white pt-2">
                  — Mr. Vijay Kumar <span className="text-slate-400 font-normal">| Founder & Lead Pharmacist</span>
                </div>
              </div>
            </div>

            {/* Store Overview Image & Quick Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                  alt="Vijay Medical Store Front View"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-3">
                <h3 className="font-bold text-emerald-900 dark:text-emerald-200 text-base">
                  Store Verification Details
                </h3>
                <ul className="space-y-2 text-xs text-emerald-800 dark:text-emerald-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Registered Pharmacy License under Drug Control Department, Bihar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certified Cold Chain Storage (2°C to 8°C maintained 24/7)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>WHO-GMP Certified Distributor Partner Network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Our Core Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To provide genuine, high-quality, affordable medicines and medical equipment to every resident of Gaya while maintaining flawless customer support and ethical pharmacy practices.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To become Gaya’s most tech-enabled yet personal community healthcare hub—combining instant WhatsApp home delivery with trustworthy, in-person pharmacist consultation.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Absolute authenticity, patient empathy, speed of emergency response, clear pricing transparency, and unyielding commitment to local welfare in Gaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Milestones
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
              Store Journey Timeline
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {timelineEvents.map((evt, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full sm:w-1/2 px-4 sm:px-8 py-2">
                  <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-2">
                    <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                      {evt.year}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-bold">Have Questions About Your Prescription or Health Supplies?</h2>
          <p className="text-xs text-slate-300">
            Visit our physical store at Gouri Road, Rampur, Gewalbigha, Gaya or order online via WhatsApp.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
            >
              Order via WhatsApp
            </button>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs border border-slate-700 transition-colors"
            >
              Call Store Pharmacist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
