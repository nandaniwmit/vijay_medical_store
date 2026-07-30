import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight, ShieldCheck, 
  Pill, Activity, Truck, Award, Clock, Star, HelpCircle, HeartHandshake, Search
} from 'lucide-react';
import { STORE_INFO, SERVICES_DATA, REVIEWS_DATA, FAQS_DATA, HEALTH_TIPS } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredReviews = REVIEWS_DATA.slice(0, 3);
  const featuredFaqs = FAQS_DATA.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Home - Trusted Pharmacy in Gaya for Genuine Medicines"
        description="Vijay Medical Store in Gewalbigha, Rampur, Gaya. Providing genuine prescription medicines, healthcare devices, baby care, and 45-minute WhatsApp home delivery."
        faqSchemaData={featuredFaqs.map(f => ({ question: f.question, answer: f.answer }))}
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1920"
            alt="Vijay Medical Store Pharmacy Counter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Medicines • Gaya, Bihar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Your Trusted Medical Store for <span className="text-emerald-400">Genuine Medicines</span> & Healthcare Needs
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices across Gewalbigha, Rampur & Gaya.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 stroke-emerald-500" />
                <span>WhatsApp Order Now</span>
              </button>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all text-base"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>Call Store</span>
              </a>

              <a
                href={STORE_INFO.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 text-slate-300 hover:text-white font-semibold flex items-center justify-center gap-1.5 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Under 45-Min Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Licensed Pharmacist</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Cold Chain Storage</span>
              </div>
            </div>
          </div>

          {/* Hero Quick Card Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Pill className="w-5 h-5 text-emerald-400" />
                  <span>Quick Prescription Order</span>
                </h2>
                <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full font-bold">
                  Fast Dispatch
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Snap a photo of your doctor's prescription or type your medicine name to order directly on WhatsApp.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Upload Prescription on WhatsApp</span>
                </button>

                <a
                  href="#home-stock-checker"
                  className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <Search className="w-4 h-4 text-sky-400" />
                  <span>Check Medicine Price & Stock</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>📍 Gouri Rd, Gewalbigha, Gaya</span>
                <span className="text-emerald-400 font-bold">Open Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800"
                  alt="Vijay Medical Store Shelves"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px]">
                <div className="text-3xl font-black">14+ Years</div>
                <div className="text-xs text-emerald-100 font-medium mt-1">
                  Dedicated healthcare service in Gewalbigha, Gaya
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                <HeartHandshake className="w-3.5 h-3.5" /> About Vijay Medical Store
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Gaya’s Preferred Pharmacy for Original Medicines & Compassionate Care
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Established with a vision to make authentic healthcare accessible to every household in Gaya, Vijay Medical Store stands as a symbol of reliability. We stock genuine prescription medicines, infant nutrition, diagnostic devices, and OTC items directly sourced from certified distributors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {STORE_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
                    <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold rounded-xl text-sm transition-colors"
                >
                  <span>Read Our Full Story & Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXCLUSIVE MEDICINE STOCK CHECKER PREVIEW */}
      <section id="home-stock-checker" className="py-16 bg-slate-100/80 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppModal(medName)} />
        </div>
      </section>

      {/* 4. FEATURED SERVICES (Max 6) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Healthcare Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2">
              Comprehensive Pharmacy & Medical Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
              From chronic prescription refills to emergency surgical equipment, explore our range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Request Service / Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-600/20"
            >
              <span>Explore All Categories & Full Inventory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Why Vijay Medical Store
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              Why Thousands of Families in Gaya Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from authorized pharmaceutical distributors with batch verification and original GST invoicing.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Express WhatsApp Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Order in seconds by sending your prescription photo. Doorstep delivery across Gewalbigha and Rampur within 45 minutes.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">Temperature Sealed Cold Chain</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated medical refrigeration for insulin, vaccines, and biopharmaceuticals ensuring zero degradation.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">24/7 Emergency Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency medicine dispatch support available on call day or night for critical patient care requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Local Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                What Our Customers Say
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-amber-500 font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 dark:text-white font-extrabold text-base">4.9 / 5</span>
              <span className="text-slate-500 text-xs">(Based on 500+ local Google reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{rev.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{rev.location}</div>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {featuredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 pl-7 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Have more questions? Contact our pharmacist team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Health & Wellness Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Health Awareness & Advice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 overflow-hidden">
                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {tip.category}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mt-2 line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                      {tip.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="py-14 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Need Emergency Medicines or Doctor Consultation Advice in Gaya?
          </h2>
          <p className="text-emerald-100 text-sm max-w-2xl mx-auto">
            Our experienced pharmacists at Gouri Road, Rampur are ready to assist you right away.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-8 py-3.5 bg-white text-emerald-800 font-extrabold rounded-2xl shadow-lg hover:bg-emerald-50 transition-colors text-sm"
            >
              WhatsApp Medicine Order
            </button>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl border border-emerald-500 transition-colors text-sm"
            >
              Call Store: {STORE_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
