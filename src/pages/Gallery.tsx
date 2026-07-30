import React, { useState, useMemo } from 'react';
import { Maximize2, Filter, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES, GalleryImage } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GalleryModal } from '../components/GalleryModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Devices & Products' },
    { id: 'equipment', label: 'Cold Storage' },
    { id: 'counter', label: 'Dispensing Desk' }
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setActiveImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <SEO
        title="Photo Gallery - Vijay Medical Store Gaya"
        description="View photos of Vijay Medical Store in Gewalbigha, Gaya. Organized medicine shelves, cold chain storage, diagnostic devices counter, and store interior."
      />

      <Breadcrumbs items={[{ label: 'Photo Gallery' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            Store Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Vijay Medical Store Photo Gallery
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Explore our hygienic store interior, temperature-controlled drug storage, and extensive product inventory at Gouri Road, Gaya.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {img.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No photos found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <GalleryModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
