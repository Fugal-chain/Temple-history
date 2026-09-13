import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, ChevronRight } from 'lucide-react';
import { playTempleBell } from '../utils/audioBell';
import { Language, translations } from '../data/translations';

interface OpeningSequenceProps {
  onEnter: () => void;
  lang: Language;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onEnter, lang }) => {
  const [step, setStep] = useState<number>(1);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const t = translations[lang].opening;

  useEffect(() => {
    // Step progression timer sequence
    // 1: Black screen
    // 2: Single oil lamp slowly appears (1.2s)
    // 3: Flame lights (2.5s)
    // 4: Temple bell rings (3.5s)
    // 5: Hero visual background reveals (4.5s)
    // 6: Tamil temple name appears (5.5s)
    // 7: English temple name appears (6.5s)
    // 8: Tamil motto appears (7.8s)
    // 9: English motto appears (9.0s)
    // 10: Enter button appears (10.2s)

    const timers = [
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => {
        setStep(4);
        if (audioEnabled) {
          playTempleBell();
        }
      }, 3200),
      setTimeout(() => setStep(5), 4500),
      setTimeout(() => setStep(6), 5800),
      setTimeout(() => setStep(7), 7000),
      setTimeout(() => setStep(8), 8300),
      setTimeout(() => setStep(9), 9600),
      setTimeout(() => setStep(10), 10800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [audioEnabled]);

  const triggerBell = () => {
    setAudioEnabled(!audioEnabled);
    if (!audioEnabled) {
      playTempleBell();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0907] text-[#FAF6EE] overflow-hidden select-none transition-colors duration-1000">
      
      {/* Background Hero Layer (Step 5+) */}
      {step >= 5 && (
        <div className="absolute inset-0 transition-opacity duration-1000 ease-out opacity-40">
          <img 
            src="/images/hero-temple.jpg" 
            alt="Temple Sanctum Background" 
            className="w-full h-full object-cover scale-105 animate-pulse"
            style={{ animationDuration: '10s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/80 to-transparent" />
        </div>
      )}

      {/* Floating Audio & Skip Controls */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={triggerBell}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full bg-[#1A1410]/80 border border-[#D4AF37]/40 text-xs text-[#D4AF37] hover:bg-[#3B0A0A] transition-all cursor-pointer"
          aria-label={t.audioToggle}
        >
          {audioEnabled ? <Volume2 className="w-4 h-4 text-[#D4AF37]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
          <span className="hidden sm:inline">{audioEnabled ? 'Bell Audio On' : 'Audio Muted'}</span>
        </button>

        <button
          onClick={onEnter}
          className="px-2.5 sm:px-4 py-1.5 rounded-full bg-[#3B0A0A]/90 border border-[#D4AF37]/50 text-xs text-[#F3E5AB] hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer"
        >
          {t.skip}
        </button>
      </div>

      {/* Main Sacred Centered Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 text-center flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Lamp & Flame (Steps 2-10) */}
        {step >= 2 && (
          <div className={`transition-all duration-1000 transform ${step >= 3 ? 'scale-100 opacity-100' : 'scale-90 opacity-40'} mb-8`}>
            <div className="relative flex flex-col items-center">
              
              {/* Flame Glow */}
              {step >= 3 && (
                <div className="relative mb-[-6px]">
                  <div className="w-6 h-10 bg-gradient-to-t from-amber-600 via-yellow-400 to-yellow-100 rounded-full blur-[2px] animate-flicker" />
                  <div className="absolute inset-0 w-12 h-16 -left-3 -top-3 bg-amber-500/30 rounded-full blur-xl animate-pulse" />
                </div>
              )}

              {/* Brass Oil Lamp Base */}
              <svg className="w-20 h-16 text-[#D4AF37] drop-shadow-lg" viewBox="0 0 100 80" fill="currentColor">
                {/* Wicks cup */}
                <ellipse cx="50" cy="20" rx="35" ry="8" fill="#AA820A" />
                <path d="M15 20 Q 50 35 85 20 L 75 45 Q 50 55 25 45 Z" fill="url(#lampGrad)" />
                {/* Stem */}
                <rect x="45" y="45" width="10" height="20" fill="#9A7B1C" />
                {/* Pedestal Base */}
                <ellipse cx="50" cy="65" rx="30" ry="8" fill="#7A5B0C" />
                <ellipse cx="50" cy="68" rx="35" ry="6" fill="#D4AF37" />
                <defs>
                  <linearGradient id="lampGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#5A4005" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        )}

        {/* Tamil Temple Name (Step 6+) */}
        {step >= 6 && (
          <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold font-tamil gold-text-gradient tracking-wide leading-relaxed mb-3 animate-fade-in px-2">
            வில்வமூடு ஸ்ரீ சிவ சுடலைமாட சுவாமி திருக்கோவில்
          </h1>
        )}

        {/* English Temple Name (Step 7+) */}
        {step >= 7 && (
          <h2 className="text-sm sm:text-lg md:text-2xl font-serif-en text-[#FAF6EE] tracking-widest uppercase mb-6 font-semibold animate-fade-in px-2">
            Vilvamoodu Sri Siva Sudalaimada Swamy Temple
          </h2>
        )}

        {/* Decorative Divider */}
        {step >= 7 && (
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3 mx-auto" />
        )}

        {/* Tamil Motto (Step 8+) */}
        {step >= 8 && (
          <p className="text-sm sm:text-base font-tamil text-[#D4AF37] leading-relaxed mb-2 font-medium px-4">
            "புனித வில்வத்தில் வேரூன்றி, தலைமுறைகள் தோறும் பாதுகாக்கப்படும் பாரம்பரியம்."
          </p>
        )}

        {/* English Motto (Step 9+) */}
        {step >= 9 && (
          <p className="text-xs sm:text-sm font-serif-en text-[#EAE3D2] italic tracking-wider mb-8 px-4">
            "Rooted in the Sacred Vilvam. Preserved Through Generations."
          </p>
        )}

        {/* Enter Button (Step 10) */}
        {step >= 10 && (
          <div className="mt-4 animate-bounce-slow">
            <button
              onClick={onEnter}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#3B0A0A] via-[#5A1212] to-[#1B4332] border-2 border-[#D4AF37] text-[#FAF6EE] font-medium text-sm sm:text-base shadow-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-tamil font-semibold tracking-wide">
                {lang === 'ta' ? 'திருக்கோவிலுக்குள் நுழைக' : 'Enter the Temple'}
              </span>
              <ChevronRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* Subtle Bottom Footer Notice */}
      <div className="absolute bottom-4 text-center text-[10px] sm:text-xs text-gray-500 font-serif-en px-4">
        Keezha Ramanputhur, Kanyakumari • Seven Generations Kula Deivam Heritage
      </div>
    </div>
  );
};
