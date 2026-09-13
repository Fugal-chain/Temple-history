import React, { useState } from 'react';
import { Menu, X, Sparkles, Volume2 } from 'lucide-react';
import { VilvamLogo } from './VilvamLogo';
import { Language, translations } from '../data/translations';
import { playTempleBell } from '../utils/audioBell';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onReplayOpening: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onReplayOpening
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'our-story', label: t.ourStory },
    { id: 'deities', label: t.deities },
    { id: 'sacred-vilvam', label: t.sacredVilvam },
    { id: 'kovil-kodai', label: t.kovilKodai },
    { id: 'temple-map', label: t.templeMap },
    { id: 'heritage-gallery', label: t.heritageGallery },
    { id: 'calendar', label: t.calendar },
    { id: 'visit', label: t.visit },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E0C0A]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-xl transition-all">
      {/* Top Info Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-gradient-to-r from-[#240505] via-[#1B4332] to-[#240505] text-xs text-[#FAF6EE]/80 border-b border-[#D4AF37]/15 font-serif-en">
        <div className="flex items-center gap-4">
          <span>📍 Thattanvillai, Keezha Ramanputhur, Kanyakumari - 629004</span>
          <span>•</span>
          <span>✨ Seven Generations Family Kula Deivam Heritage</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={playTempleBell}
            className="flex items-center gap-1.5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            title="Ring Temple Bell"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Temple Bell</span>
          </button>
          <span>•</span>
          <button
            onClick={onReplayOpening}
            className="flex items-center gap-1.5 text-[#F3E5AB] hover:text-white transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Replay Opening</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none cursor-pointer group shrink-0"
          >
            <VilvamLogo size="md" showText={true} lang={lang} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/60 shadow-inner'
                      : 'text-[#EAE3D2] hover:text-[#D4AF37] hover:bg-[#1A1410]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Language Switcher & Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            
            {/* Global Language Toggle */}
            <div className="flex items-center rounded-full bg-[#1A1410] border border-[#D4AF37]/40 p-0.5">
              <button
                onClick={() => setLang('ta')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  lang === 'ta'
                    ? 'bg-[#3B0A0A] text-[#D4AF37] shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#1B4332] text-[#D4AF37] shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Replay Opening (Mobile/Tablet visible) */}
            <button
              onClick={onReplayOpening}
              className="lg:hidden p-2 rounded-full bg-[#1A1410] text-[#D4AF37] hover:bg-[#3B0A0A] transition-colors cursor-pointer"
              title="Replay Sacred Opening"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#1A1410] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0E0C0A] border-t border-[#D4AF37]/30 px-3 sm:px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fade-in">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#3B0A0A] text-[#D4AF37] border-l-4 border-[#D4AF37]'
                    : 'text-[#EAE3D2] hover:bg-[#1A1410] hover:text-[#D4AF37]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-[#D4AF37]">●</span>}
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#3B0A0A] flex items-center justify-between text-xs text-gray-400 px-2 flex-wrap gap-2">
            <span className="text-[10px] text-gray-500">Keezha Ramanputhur, KK - 629004</span>
            <button
              onClick={playTempleBell}
              className="flex items-center gap-1 text-[#D4AF37] cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Bell Sound</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
