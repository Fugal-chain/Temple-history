import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { templeData } from '../data/templeData';
import { festivalsData } from '../data/festivalsData';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, lang }) => {
  const t = translations[lang];
  const nextKodaiDate = festivalsData[0].estimatedNextDate;

  // Live dynamic countdown timer logic
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date(nextKodaiDate + "T18:00:00").getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextKodaiDate]);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-temple-pattern border-b border-[#D4AF37]/30">
      
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-temple.jpg"
          alt="Vilvamoodu Sri Siva Sudalaimada Swamy Temple Courtyard"
          className="w-full h-full object-cover scale-105 opacity-30 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#240505]/60 via-transparent to-[#081710]/60" />
      </div>

      {/* Floating Vilvam Leaf & Glow Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#1B4332]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6 sm:pb-12 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Heritage Pill Tag */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#1A1410]/90 border border-[#D4AF37]/50 text-[10px] sm:text-xs text-[#D4AF37] mb-6 shadow-lg w-fit max-w-[90vw]">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
          <span className="font-semibold tracking-wide text-center leading-snug">
            {lang === 'ta'
              ? 'ஏழு தலைமுறை குடும்ப குலதெய்வத் திருக்கோவில்'
              : <><span className="hidden sm:inline">Seven Generations Family Kula Deivam Sanctuary</span><span className="sm:hidden">7 Generations Kula Deivam</span></>
            }
          </span>
        </div>

        {/* Temple Name Title */}
        <h1 className="text-xl sm:text-4xl lg:text-6xl font-bold font-tamil gold-text-gradient tracking-wide leading-snug max-w-5xl mb-3 drop-shadow-xl px-3 break-words">
          {templeData.name.ta}
        </h1>

        <h2 className="text-[11px] sm:text-xl lg:text-2xl font-serif-en text-[#FAF6EE] tracking-wider sm:tracking-widest uppercase mb-5 font-semibold max-w-3xl px-3 leading-snug">
          {templeData.name.en}
        </h2>

        {/* Mottos */}
        <div className="max-w-3xl mx-auto space-y-2 mb-8 px-4">
          <p className="text-xs sm:text-xl font-tamil text-[#D4AF37] font-medium leading-relaxed">
            "{templeData.motto.ta}"
          </p>
          <p className="text-[10px] sm:text-base font-serif-en text-[#EAE3D2] italic tracking-wide">
            "{templeData.motto.en}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full px-4">
          <button
            onClick={() => setActiveTab('our-story')}
            className="w-full sm:w-auto group px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#3B0A0A] to-[#5A1212] border border-[#D4AF37] text-[#FAF6EE] font-medium text-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-tamil">{t.hero.exploreStory}</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab('temple-map')}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#1A1410]/80 border border-[#D4AF37]/50 text-[#FAF6EE] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-tamil">{t.hero.interactiveMap}</span>
          </button>
        </div>

      </div>

      {/* Dynamic Festival Live Countdown Ticker Banner */}
      <div className="relative z-10 bg-gradient-to-r from-[#240505] via-[#1B4332] to-[#240505] border-t border-[#D4AF37]/40 py-3 sm:py-4 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:gap-3">

          {/* Festival label row */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-full bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/40 shrink-0">
              <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 animate-spin" style={{ animationDuration: '15s' }} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[9px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                {lang === 'ta' ? 'அடுத்த திருவிழா' : 'Upcoming Festival'}
              </span>
              <span className="text-[10px] sm:text-sm font-bold text-[#FAF6EE] font-tamil block leading-tight">
                {lang === 'ta'
                  ? 'கோவில் கொடை மகா திருவிழா'
                  : <><span className="hidden sm:inline">Annual Kovil Kodai Festival (Thai Month)</span><span className="sm:hidden">Kovil Kodai Festival</span></>
                }
              </span>
            </div>
          </div>

          {/* Countdown + button row */}
          <div className="flex items-center justify-between gap-2">
            {/* Countdown boxes */}
            <div className="flex items-center gap-1 sm:gap-2">
              {[
                { val: timeLeft.days,    label: lang === 'ta' ? 'நாள்' : 'Days' },
                { val: timeLeft.hours,   label: lang === 'ta' ? 'மணி' : 'Hrs' },
                { val: timeLeft.minutes, label: lang === 'ta' ? 'நிமி' : 'Min' },
                { val: timeLeft.seconds, label: lang === 'ta' ? 'வினா' : 'Sec' },
              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center justify-center w-[42px] sm:w-[58px] py-1.5 sm:py-2 rounded-lg bg-[#0E0C0A]/80 border border-[#D4AF37]/30">
                    <span className="text-sm sm:text-xl font-bold font-mono text-[#D4AF37] leading-none">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase mt-0.5">{item.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-[#D4AF37] font-bold text-xs sm:text-sm mb-3">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={() => setActiveTab('kovil-kodai')}
              className="px-2.5 sm:px-4 py-2 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/60 text-[10px] sm:text-xs text-[#FAF6EE] hover:bg-[#5A1212] transition-colors cursor-pointer shrink-0 whitespace-nowrap"
            >
              {lang === 'ta' ? 'காண்க' : 'Schedule'}
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};