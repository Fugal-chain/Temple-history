import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Sparkles, Utensils, Music } from 'lucide-react';
import { Language } from '../data/translations';
import { festivalsData, varushabishekamData, FestivalEvent } from '../data/festivalsData';

interface CalendarSectionProps {
  lang: Language;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const [selectedFestival, setSelectedFestival] = useState<FestivalEvent>(festivalsData[0]);

  // Dynamic countdown timer for selected festival
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date(selectedFestival.estimatedNextDate + "T12:00:00").getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, [selectedFestival]);

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>{isTa ? 'ஆண்டுத் திருவிழா நாட்காட்டி' : 'Annual Festival Calendar'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'திருக்கோவில் திருவிழாக்கள்' : 'Sacred Festival Calendar'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'தை மாதம் கோவில் கொடை, ஆனி வருஷாபிஷேகம், தை பொங்கல், பங்குனி உத்திரம் மற்றும் தமிழ் வருடப்பிறப்பு திருவிழாக்கள்.'
              : 'Dynamic annual calendar celebrating Kovil Kodai, Varushabishekam, Panguni Uthiram, Pongal, and Tamil New Year.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* SELECTED FESTIVAL COUNTDOWN SHOWCASE */}
        <div className="mb-16 p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A1410] via-[#240505] to-[#0E0C0A] border-2 border-[#D4AF37] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs font-mono text-[#D4AF37]">
                  {isTa ? selectedFestival.dateRuleTa : selectedFestival.dateRuleEn}
                </span>
                {selectedFestival.isMajor && (
                  <span className="px-2.5 py-0.5 rounded bg-amber-500 text-black text-[10px] font-bold font-mono uppercase">
                    Major Festival
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-tamil gold-text-gradient">
                {isTa ? selectedFestival.nameTa : selectedFestival.nameEn}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-tamil">
                {isTa ? selectedFestival.descriptionTa : selectedFestival.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {(isTa ? selectedFestival.traditionsTa : selectedFestival.traditionsEn).map((trad, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#0E0C0A] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-tamil">
                    ✦ {trad}
                  </span>
                ))}
              </div>
            </div>

            {/* Countdown Clock Display */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0E0C0A] border border-[#D4AF37]/40 text-center space-y-4 shadow-inner">
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-mono">
                <Clock className="w-4 h-4" />
                <span>{isTa ? 'அடுத்த விழா வரை கணிப்பு' : 'Live Countdown Clock'}</span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                <div className="p-2 sm:p-3 rounded-xl bg-[#1A1410] border border-[#D4AF37]/30 text-center">
                  <span className="text-xl sm:text-3xl font-bold font-mono text-[#D4AF37] block">{timeLeft.days}</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 block">{isTa ? 'நாட்கள்' : 'Days'}</span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-[#1A1410] border border-[#D4AF37]/30 text-center">
                  <span className="text-xl sm:text-3xl font-bold font-mono text-[#D4AF37] block">{timeLeft.hours}</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 block">{isTa ? 'மணி' : 'Hours'}</span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-[#1A1410] border border-[#D4AF37]/30 text-center">
                  <span className="text-xl sm:text-3xl font-bold font-mono text-[#D4AF37] block">{timeLeft.minutes}</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 block">{isTa ? 'நிமிடம்' : 'Mins'}</span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-[#1A1410] border border-[#D4AF37]/30 text-center">
                  <span className="text-xl sm:text-3xl font-bold font-mono text-[#D4AF37] block">{timeLeft.seconds}</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 block">{isTa ? 'விநாடி' : 'Secs'}</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-serif-en">
                Estimated Date: {selectedFestival.estimatedNextDate}
              </p>
            </div>

          </div>
        </div>

        {/* ALL FESTIVALS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {festivalsData.map((fest) => (
            <div
              key={fest.id}
              onClick={() => setSelectedFestival(fest)}
              className={`p-6 rounded-2xl bg-[#1A1410] border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-102 ${
                selectedFestival.id === fest.id
                  ? 'border-[#D4AF37] bg-[#240505]/70 shadow-2xl ring-2 ring-[#D4AF37]/30'
                  : 'border-[#D4AF37]/30 hover:border-[#D4AF37]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#3B0A0A] border border-[#D4AF37]/30 text-[10px] font-mono text-[#D4AF37]">
                    {isTa ? fest.monthTa : fest.monthEn}
                  </span>
                  {fest.isMajor && (
                    <span className="text-xs text-amber-400 font-bold font-mono">★ Major</span>
                  )}
                </div>

                <h4 className="text-lg font-bold font-tamil text-[#FAF6EE] mb-2">
                  {isTa ? fest.nameTa : fest.nameEn}
                </h4>

                <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-tamil mb-4">
                  {isTa ? fest.descriptionTa : fest.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#3B0A0A] flex items-center justify-between text-xs text-[#D4AF37] font-mono">
                <span>📅 {isTa ? fest.dateRuleTa : fest.dateRuleEn}</span>
                <span>Select ➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* VARUSHABHISHEKAM SPECIAL FEATURE (Section 21) */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1B4332] via-[#091912] to-[#1A1410] border-2 border-emerald-500/50 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-500/30 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#1B4332] text-emerald-300 text-xs font-mono font-semibold border border-emerald-400/30">
                {isTa ? 'ஆனி மாதம் சிறப்பு ஆராதனை' : 'Aani Month Special Tradition'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-tamil gold-text-gradient mt-2">
                {isTa ? 'வருஷாபிஷேகம் & ஊட்டுப் படைப்பு' : 'Varushabishekam & Ootu Padappu'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
              <Clock className="w-4 h-4" />
              <span>Starts 12:00 PM • First Worship at Sastha</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-200">
            
            <div className="space-y-3 p-4 rounded-xl bg-[#0E0C0A]/80 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Utensils className="w-4 h-4" />
                <span>{isTa ? 'ஊட்டுப் படைப்பு சிறப்பு உணவுகள்:' : 'Ootu Padappu Prepared by Temple Chef:'}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-tamil">
                {isTa
                  ? varushabishekamData.oottuPadappu.preparedByTa
                  : varushabishekamData.oottuPadappu.preparedByEn}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {(isTa ? varushabishekamData.oottuPadappu.foodsTa : varushabishekamData.oottuPadappu.foodsEn).map((food, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-[#1B4332] text-emerald-200 text-xs border border-emerald-500/30">
                    {food}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-[#0E0C0A]/80 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Music className="w-4 h-4" />
                <span>{isTa ? 'பாரம்பரிய கலைகள் & படைப்பு தெய்வங்கள்:' : 'Folk Performances & Deity Offerings:'}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-tamil">
                {isTa
                  ? 'கணியான் கூத்து மற்றும் தப்பாட்ட இசையுடன் சுடலைமாடன், முண்டன், பிரம்மசக்தி, பேச்சியம்மன் மற்றும் தளவாய் பலவேசக்காரருக்கு ஊட்டுப் படைப்பு சமர்ப்பிக்கப்படுகிறது.'
                  : 'Accompanied by Kaniyan Koothu and Thappattai folk music, offered to Sudalaimadan, Mundan, Brahmasakthi, Pechiamman, and Palavesakarar.'}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {(isTa ? varushabishekamData.performancesTa : varushabishekamData.performancesEn).map((perf, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-500/40">
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    {perf}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
