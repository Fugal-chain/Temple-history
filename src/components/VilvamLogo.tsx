import React from 'react';

interface VilvamLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lang?: 'ta' | 'en';
}

export const VilvamLogo: React.FC<VilvamLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  lang = 'ta'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#3B0A0A] via-[#1B4332] to-[#0E0C0A] p-0.5 border border-[#D4AF37]/50 shadow-md ${sizeClasses[size]} shrink-0`}>
        {/* Subtle Outer Decorative Lamp Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/30 animate-spin" style={{ animationDuration: '40s' }} />
        
        {/* Sacred Vilvam Trifoliate Leaf Vector */}
        <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-[#D4AF37] fill-current drop-shadow">
          {/* Central Leaf */}
          <path d="M50 15 C 40 32, 42 55, 50 72 C 58 55, 60 32, 50 15 Z" fill="url(#vilvamGrad)" />
          {/* Left Leaflet */}
          <path d="M48 50 C 30 35, 12 45, 25 65 C 38 68, 46 58, 48 50 Z" fill="url(#vilvamGrad)" />
          {/* Right Leaflet */}
          <path d="M52 50 C 70 35, 88 45, 75 65 C 62 68, 54 58, 52 50 Z" fill="url(#vilvamGrad)" />
          {/* Stem & Lamp Flame Base */}
          <path d="M50 72 C 49 82, 50 88, 50 92" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="91" r="3" fill="#EA580C" />
          
          <defs>
            <linearGradient id="vilvamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E5AB" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#2D6A4F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col min-w-0 overflow-hidden">
          <span className="font-heading font-bold text-[#FAF6EE] text-xs sm:text-sm md:text-base leading-tight tracking-wide truncate">
            {lang === 'ta' ? 'வில்வமூடு ஸ்ரீ சிவ சுடலைமாடன்' : 'Vilvamoodu Sri Siva Sudalaimada'}
          </span>
          <span className="text-[10px] sm:text-xs text-[#D4AF37] font-serif-en tracking-wider truncate">
            {lang === 'ta' ? 'திருக்கோவில் • கீழ இராமன்புதூர்' : 'Swamy Temple • Kanyakumari'}
          </span>
        </div>
      )}
    </div>
  );
};