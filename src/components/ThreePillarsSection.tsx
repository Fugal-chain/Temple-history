import React from 'react';
import { Shield, Sparkles, Users, ArrowRight } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ThreePillarsProps {
  setActiveTab: (tab: string) => void;
  lang: Language;
}

export const ThreePillarsSection: React.FC<ThreePillarsProps> = ({ setActiveTab, lang }) => {
  const t = translations[lang].pillars;

  const pillars = [
    {
      id: 'sacred-vilvam',
      title: t.vilvamTitle,
      subtitle: '150+ Years of Living Heritage',
      description: t.vilvamSubtitle,
      icon: Sparkles,
      gradient: 'from-[#1B4332] via-[#091912] to-[#0E0C0A]',
      borderColor: 'border-emerald-700/50',
      badgeColor: 'text-emerald-400 bg-emerald-950/80',
      image: '/images/sacred-vilvam-tree.jpg'
    },
    {
      id: 'deities',
      title: t.kulaDeivamTitle,
      subtitle: 'Guardian Spirit & Principal Deity',
      description: t.kulaDeivamSubtitle,
      icon: Shield,
      gradient: 'from-[#3B0A0A] via-[#240505] to-[#0E0C0A]',
      borderColor: 'border-red-900/60',
      badgeColor: 'text-amber-300 bg-red-950/80',
      image: '/images/sudalaimada-swamy.jpg'
    },
    {
      id: 'our-story',
      title: t.sevenGenTitle,
      subtitle: 'Preserved Across Generations',
      description: t.sevenGenSubtitle,
      icon: Users,
      gradient: 'from-[#201D1A] via-[#1A1410] to-[#0E0C0A]',
      borderColor: 'border-[#D4AF37]/40',
      badgeColor: 'text-[#D4AF37] bg-[#2A2215]',
      image: '/images/hero-temple.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#0E0C0A] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
            {lang === 'ta' ? 'ஆன்மீகத்தின் பிரதான தூண்கள்' : 'Core Foundations of Heritage'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-tamil gold-text-gradient mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#EAE3D2] leading-relaxed">
            {t.subtitle}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b ${pillar.gradient} border ${pillar.borderColor} shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between`}
              >
                
                {/* Background Image Preview Layer */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pillar.badgeColor} border border-[#D4AF37]/30 shadow`}>
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-[#1A1410] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#3B0A0A] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-tamil text-[#FAF6EE] group-hover:text-[#D4AF37] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6 font-tamil">
                      {pillar.description}
                    </p>
                  </div>

                  {/* View Details Action */}
                  <button
                    onClick={() => setActiveTab(pillar.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1A1410] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] hover:bg-[#3B0A0A] hover:text-white hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="font-tamil">{translations[lang].common.viewDetails}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
