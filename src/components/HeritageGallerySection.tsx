import React, { useState } from 'react';
import { Camera, ShieldAlert, Download, Lock, X, Maximize2, Filter } from 'lucide-react';
import { Language } from '../data/translations';
import { galleryData, galleryCategories, GalleryItem } from '../data/galleryData';

interface HeritageGalleryProps {
  lang: Language;
}

export const HeritageGallerySection: React.FC<HeritageGalleryProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryData.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{isTa ? 'டிஜிட்டல் ஆவணக் காப்பகம்' : 'Digital Heritage Archive'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'வரலாற்று நிழற்படத் தளம்' : 'Heritage Archive Gallery'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'திருக்கோவில், புனித வில்வம், கும்பாபிஷேகம் 2016 மற்றும் கொடைத் திருவிழா நிகழ்வுகளின் வரலாற்றுப் பதிவுகள்.'
              : 'Digital heritage collection documenting the temple, Sacred Vilvam tree, 2016 Kumbabishekam consecration, and Kovil Kodai festivals.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 px-2">
          <div className="flex items-center gap-1 text-xs text-[#D4AF37] font-mono mr-2">
            <Filter className="w-4 h-4" />
            <span>{isTa ? 'வடிகட்டி:' : 'Filter:'}</span>
          </div>

          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold font-tamil transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#3B0A0A] text-[#D4AF37] border-2 border-[#D4AF37] shadow-lg scale-105'
                    : 'bg-[#1A1410] text-[#EAE3D2] border border-[#D4AF37]/30 hover:bg-[#3B0A0A]'
                }`}
              >
                {cat === 'Family Heritage' && <Lock className="w-3 h-3 inline mr-1 text-amber-400" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#1A1410] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              
              {/* Image Preview */}
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setLightboxItem(item)}>
                <img
                  src={item.image}
                  alt={item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent opacity-80" />

                {/* Placeholder Watermark Indicator */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0E0C0A]/90 border border-[#D4AF37]/40 text-[9px] font-mono text-[#D4AF37] flex items-center gap-1 shadow">
                  <ShieldAlert className="w-3 h-3" />
                  <span>PLACEHOLDER</span>
                </div>

                {/* Private Badge */}
                {item.isPrivate && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-950 border border-amber-500 text-[10px] font-mono font-bold text-amber-300 flex items-center gap-1 shadow">
                    <Lock className="w-3 h-3" />
                    <span>PRIVATE V1</span>
                  </div>
                )}

                <button
                  onClick={() => setLightboxItem(item)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-[#3B0A0A]/90 border border-[#D4AF37] text-[#D4AF37] hover:scale-110 transition-transform cursor-pointer"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Caption & Category */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D4AF37] font-mono mb-1">
                    <span>{isTa ? item.categoryTa : item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-base font-bold font-tamil text-[#FAF6EE] group-hover:text-[#D4AF37] transition-colors">
                    {isTa ? item.titleTa : item.titleEn}
                  </h3>

                  <p className="text-xs text-gray-300 mt-2 leading-relaxed font-tamil">
                    {isTa ? item.captionTa : item.captionEn}
                  </p>
                </div>

                {/* Private Notice or Download Action */}
                {item.isPrivate ? (
                  <div className="p-2.5 rounded-lg bg-[#2A2215] border border-amber-500/40 text-[11px] text-amber-200 italic flex items-center gap-2 font-serif-en">
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Restricted to family member access in V1.</span>
                  </div>
                ) : (
                  <a
                    href={item.image}
                    download={`vilvamoodu-${item.id}.jpg`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors pt-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isTa ? 'படத்தைப் பதிவிறக்குக' : 'Download Photo'}</span>
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0C0A]/95 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1A1410] border-2 border-[#D4AF37] rounded-3xl max-w-3xl w-full p-6 relative shadow-2xl text-[#FAF6EE] max-h-[95vh] overflow-y-auto">
            
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-[#3B0A0A] text-[#D4AF37] hover:bg-red-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 mb-4 max-h-[500px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.titleEn}
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
                <span>{isTa ? lightboxItem.categoryTa : lightboxItem.category} • {lightboxItem.year}</span>
                <span className="px-2 py-0.5 rounded bg-[#3B0A0A] border border-[#D4AF37]/30 text-[10px]">
                  PLACEHOLDER — REPLACE WITH ORIGINAL MEDIA
                </span>
              </div>

              <h3 className="text-2xl font-bold font-tamil gold-text-gradient">
                {isTa ? lightboxItem.titleTa : lightboxItem.titleEn}
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed font-tamil">
                {isTa ? lightboxItem.captionTa : lightboxItem.captionEn}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
