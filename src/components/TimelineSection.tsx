import React from 'react';
import { History, Flame, Users, Sparkles, Hammer, Heart, ShieldCheck } from 'lucide-react';
import { Language } from '../data/translations';
import { timelineData } from '../data/timelineData';

interface TimelineSectionProps {
  lang: Language;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const isTa = lang === 'ta';

  const categoryColors = {
    family_tradition: { bg: 'bg-amber-950/80', border: 'border-amber-500/50', text: 'text-amber-300' },
    approximate: { bg: 'bg-emerald-950/80', border: 'border-emerald-500/50', text: 'text-emerald-300' },
    confirmed: { bg: 'bg-red-950/90', border: 'border-red-500/60', text: 'text-yellow-300' },
    living_heritage: { bg: 'bg-[#3B0A0A]', border: 'border-[#D4AF37]/50', text: 'text-[#D4AF37]' }
  };

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Flame,
    Users,
    Sparkles,
    Hammer,
    Heart,
    ShieldCheck
  };

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <History className="w-3.5 h-3.5" />
            <span>{isTa ? 'காலச்சுவடுகள் & வரலாறு' : 'Chronicles of Sacred Heritage'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'வரலாற்றுத் தடம்' : 'Temple Heritage Timeline'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'குடும்பப் பாரம்பரிய நம்பிக்கை, தோராயமான காலம், உறுதிசெய்யப்பட்ட கும்பாபிஷேகத் தேதி மற்றும் வாழும் மரபுகளைத் தெளிவாக வேறுபடுத்திக் காட்டும் காலக்கோட்டுத் தடம்.'
              : 'Clearly distinguishing family oral tradition, approximate historical periods, confirmed consecration dates, and living ancestral stewardship.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Category Legend Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-xs px-2">
          <span className="px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 font-semibold font-mono">
            ✦ {isTa ? 'குடும்பப் பாரம்பரிய நம்பிக்கை' : 'Family Tradition'}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-semibold font-mono">
            ✦ {isTa ? 'தோராயமான காலம்' : 'Approximate Period'}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-red-950/90 border border-red-500/60 text-yellow-300 font-semibold font-mono">
            ✦ {isTa ? 'உறுதிசெய்யப்பட்ட தேதி' : 'Confirmed Date'}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/50 text-[#D4AF37] font-semibold font-mono">
            ✦ {isTa ? 'வாழும் பாரம்பரியம்' : 'Living Heritage'}
          </span>
        </div>

        {/* Vertical Timeline Nodes */}
        <div className="relative border-l-2 border-[#D4AF37]/40 ml-3 sm:ml-32 space-y-12">
          {timelineData.map((item) => {
            const cat = categoryColors[item.category];
            const IconComp = iconMap[item.iconName] || History;

            return (
              <div key={item.id} className="relative pl-6 sm:pl-12 group">
                
                {/* Period Badge on Left for Desktop */}
                <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                  <span className="text-xs font-mono font-bold text-[#D4AF37] block">
                    {isTa ? item.periodTa : item.periodEn}
                  </span>
                </div>

                {/* Node Icon Circle */}
                <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-[#1A1410] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg group-hover:scale-125 transition-transform duration-300 ${
                  item.highlight ? 'bg-[#3B0A0A] border-amber-400 ring-4 ring-[#D4AF37]/30' : ''
                }`}>
                  <IconComp className="w-4 h-4" />
                </div>

                {/* Card Container */}
                <div className={`p-6 rounded-2xl bg-[#1A1410]/90 border ${cat.border} shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300 space-y-3`}>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3B0A0A] pb-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-mono font-bold ${cat.bg} ${cat.text} border ${cat.border}`}>
                      {isTa ? item.categoryLabelTa : item.categoryLabelEn}
                    </span>
                    <span className="sm:hidden text-xs font-mono font-bold text-[#D4AF37]">
                      {isTa ? item.periodTa : item.periodEn}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-tamil text-[#FAF6EE] group-hover:text-[#D4AF37] transition-colors">
                    {isTa ? item.titleTa : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-tamil">
                    {isTa ? item.descriptionTa : item.descriptionEn}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
