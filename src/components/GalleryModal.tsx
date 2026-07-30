import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../data/pharmacyData';

interface GalleryModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose, onNext, onPrev }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between p-4 bg-slate-900/80 text-white border-b border-slate-800">
          <div>
            <h3 className="font-bold text-base sm:text-lg">{image.title}</h3>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">{image.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black min-h-[300px] sm:min-h-[450px]">
          <img
            src={image.imageUrl}
            alt={image.title}
            className="max-h-[70vh] w-auto object-contain mx-auto"
          />

          {/* Navigation Buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Caption */}
        <div className="p-4 bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
};
