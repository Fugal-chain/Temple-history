import React from 'react';
import { VilvamLogo } from './VilvamLogo';
import { Language, translations } from '../data/translations';
import { templeData, mediaPolicy } from '../data/templeData';
import { ShieldAlert, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0806] text-[#FAF6EE] border-t border-[#D4AF37]/30 pt-12 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0404]/30 via-transparent to-[#081710]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* V1 Media Rule Banner */}
        <div className="mb-10 p-4 rounded-xl bg-[#1A1410] border border-[#D4AF37]/40 flex flex-col gap-3 text-xs text-[#F3E5AB]">
          <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <div className="flex-1">
            <span className="font-semibold text-[#D4AF37] block sm:inline mr-2">
              V1 Digital Heritage Notice:
            </span>
            <span>
              {lang === 'ta' ? mediaPolicy.officialMediaPolicyTa : mediaPolicy.officialMediaPolicyEn}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded bg-[#3B0A0A] text-[10px] uppercase font-mono text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
            {mediaPolicy.placeholderTag}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Motto */}
          <div className="space-y-4">
            <VilvamLogo size="lg" showText={true} lang={lang} />
            <p className="text-sm font-tamil text-[#D4AF37] leading-relaxed">
              "{templeData.motto.ta}"
            </p>
            <p className="text-xs font-serif-en text-gray-300 italic">
              "{templeData.motto.en}"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] font-heading border-b border-[#D4AF37]/30 pb-2">
              {lang === 'ta' ? 'வழிசெலுத்தல்' : 'Navigation'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE3D2]">
              <li>
                <button onClick={() => { setActiveTab('our-story'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.ourStory}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('deities'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.deities}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('sacred-vilvam'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.sacredVilvam}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('kovil-kodai'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.kovilKodai}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('temple-map'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.templeMap}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Heritage Archive */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] font-heading border-b border-[#D4AF37]/30 pb-2">
              {lang === 'ta' ? 'பாரம்பரியத் தளம்' : 'Heritage & Visit'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE3D2]">
              <li>
                <button onClick={() => { setActiveTab('heritage-gallery'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.heritageGallery}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('calendar'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.calendar}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('visit'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.visit}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('contact'); scrollToTop(); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Opening Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] font-heading border-b border-[#D4AF37]/30 pb-2">
              {lang === 'ta' ? 'அமைவிடம்' : 'Location & Hours'}
            </h3>
            <div className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{templeData.location.address}, {templeData.location.district}, {templeData.location.state} - {templeData.location.pincode}</span>
            </div>
            <div className="p-3 rounded bg-[#1A1410] border border-[#D4AF37]/20 text-xs text-[#F3E5AB]">
              <span className="font-semibold block text-[#D4AF37] mb-1">
                {lang === 'ta' ? 'திறக்கும் நேரம்:' : 'Opening Hours:'}
              </span>
              <span>{lang === 'ta' ? 'வெள்ளிக்கிழமை & திருவிழா நாட்களில் மாலை 6:00 - இரவு 10:00' : 'Fridays & Festival Days: 6:00 PM – 10:00 PM'}</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#3B0A0A] pt-6 flex flex-col items-center gap-4 text-xs text-gray-400 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>{lang === 'ta' ? 'ஏழு தலைமுறை குடும்ப குலதெய்வ அறக்கட்டளை பராமரிப்பு' : 'Preserved through Seven Generations of Family Stewardship'}</span>
          </div>

          <div className="text-center">
            <span>© {new Date().getFullYear()} {templeData.name.en}. {t.footer.rights}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#1A1410] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#3B0A0A] transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
