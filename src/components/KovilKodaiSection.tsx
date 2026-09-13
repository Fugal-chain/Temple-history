import React, { useState } from 'react';
import { Calendar, Clock, Utensils, Music, Sparkles, Flame } from 'lucide-react';
import { Language } from '../data/translations';
import { kovilKodaiData } from '../data/festivalsData';

interface KovilKodaiProps {
  lang: Language;
}

export const KovilKodaiSection: React.FC<KovilKodaiProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <section className="py-20 bg-maroon-gradient relative overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Background Decorative Sparkles */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{isTa ? 'பிரதான வருடாந்திர விழா' : 'Primary Annual Festival'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'கோவில் கொடை மகா திருவிழா' : 'Kovil Kodai Annual Festival'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'தை மாதம் கடைசி வெள்ளிக்கிழமையில் தொடங்கும் 3 நாட்கள் & 2 இரவுகள் நடைபெறும் அருள்நிறை திருக்கோவில் கொடைப் பெருவிழா.'
              : 'Commencing on the last Friday of Thai month, a 3-day & 2-night spiritual festival reuniting family members and community devotees.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 3-DAY SCHEDULE TABS */}
        <div className="mb-16">
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {[1, 2, 3].map((dayNum) => (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayNum)}
                className={`flex-1 min-w-[90px] max-w-[140px] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-tamil transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeDay === dayNum
                    ? 'bg-[#3B0A0A] text-[#D4AF37] border-2 border-[#D4AF37] shadow-xl scale-105'
                    : 'bg-[#1A1410] text-[#EAE3D2] border border-[#D4AF37]/30 hover:bg-[#3B0A0A]'
                }`}
              >
                <Flame className={`w-4 h-4 ${activeDay === dayNum ? 'text-amber-400' : 'text-gray-400'}`} />
                <span>{isTa ? `நாள் ${dayNum}` : `Day ${dayNum}`}</span>
              </button>
            ))}
          </div>

          {/* DAY 1 SCHEDULE */}
          {activeDay === 1 && (
            <div className="p-5 sm:p-8 rounded-2xl bg-[#1A1410]/90 border border-[#D4AF37]/40 shadow-2xl space-y-6 animate-fade-in">
              <div className="border-b border-[#D4AF37]/20 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold font-tamil gold-text-gradient">
                  {isTa ? 'முதல் நாள்: கணபதி ஹோமம், திருவிளக்கு பூஜை & வில்லுப்பாட்டு' : 'Day 1: Ganapathi Homam, Thiru Vilakku Pooja & Villupattu'}
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] bg-[#3B0A0A] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {isTa ? 'தை கடைசி வெள்ளிக்கிழமை' : 'Last Friday of Thai'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20">
                  <h4 className="text-sm font-semibold text-[#D4AF37] mb-2 font-tamil">
                    🌅 {isTa ? 'காலை வழிபாடுகள்' : 'Morning Rituals'}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200">
                    {kovilKodaiData.day1[isTa ? 'morningTa' : 'morningEn'].map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#D4AF37]">✦</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20">
                  <h4 className="text-sm font-semibold text-[#D4AF37] mb-2 font-tamil">
                    🌆 {isTa ? 'மாலை வழிபாடுகள்' : 'Evening Rituals'}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200">
                    {kovilKodaiData.day1[isTa ? 'eveningTa' : 'eveningEn'].map((e, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#D4AF37]">✦</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#D4AF37]">
                  {isTa ? 'இரவு நிகழ்ச்சிகள்' : 'Evening & Night Events Timeline'}
                </h4>
                {kovilKodaiData.day1.timeEvents.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#240505] border border-[#D4AF37]/30 flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4AF37] min-w-[80px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#FAF6EE] font-tamil">
                      {isTa ? item.eventTa : item.eventEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DAY 2 SCHEDULE */}
          {activeDay === 2 && (
            <div className="p-5 sm:p-8 rounded-2xl bg-[#1A1410]/90 border border-[#D4AF37]/40 shadow-2xl space-y-4 animate-fade-in">
              <div className="border-b border-[#D4AF37]/20 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold font-tamil gold-text-gradient">
                  {isTa ? 'இரண்டாம் நாள்: மகா உச்சி பூஜை, பெருந்திரள் அன்னதானம் & மஞ்சள் கிடாரம்' : 'Day 2: Grand Noon Pooja, Annadhanam & Manjal Kidaram'}
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] bg-[#3B0A0A] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {isTa ? 'சனிக்கிழமை நாள் & இரவு' : 'Saturday Day & Night'}
                </span>
              </div>

              <div className="space-y-3">
                {kovilKodaiData.day2.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#240505] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4AF37] min-w-[100px] shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#FAF6EE] font-tamil font-medium">
                      {isTa ? item.eventTa : item.eventEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DAY 3 SCHEDULE */}
          {activeDay === 3 && (
            <div className="p-5 sm:p-8 rounded-2xl bg-[#1A1410]/90 border border-[#D4AF37]/40 shadow-2xl space-y-4 animate-fade-in">
              <div className="border-b border-[#D4AF37]/20 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold font-tamil gold-text-gradient">
                  {isTa ? 'மூன்றாம் நாள்: பூ படைப்பு & பொங்கல் வழிபாடு (நிறைவுப் பூஜை)' : 'Day 3: Poo Padappu & Pongal Vazhipaadu (Final Consecration)'}
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] bg-[#3B0A0A] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {isTa ? 'ஞாயிறு அதிகாலை' : 'Sunday Early Morning'}
                </span>
              </div>

              <div className="space-y-3">
                {kovilKodaiData.day3.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#240505] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4AF37] min-w-[100px] shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#FAF6EE] font-tamil font-medium">
                      {isTa ? item.eventTa : item.eventEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ANNADHANAM & TRADITIONAL ARTS FEATURE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Annadhanam Card */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border-2 border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/40">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                  {isTa ? 'மகா அன்னதானம் (500–700 பக்தர்கள்)' : 'Grand Annadhanam Sacred Feast'}
                </h3>
                <span className="text-xs text-[#D4AF37]">
                  {isTa ? kovilKodaiData.annadhanamInfo.foodTypeTa : kovilKodaiData.annadhanamInfo.foodTypeEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-tamil">
              {isTa
                ? 'கொடையின் இரண்டாம் நாள் மதியம் சுமார் 500 முதல் 700 பக்தர்களுக்குத் தூய சைவ விருந்து பரிமாறப்படுகிறது. இதில் பாரம்பரிய அவியல், ஊறுகாய், வாழைக்காய், சாம்பார், ரசம் மற்றும் பாயாசம் உள்ளிட்டுச் சிறப்பிக்கப்படுகிறது.'
                : 'Served during Day 2 afternoon to approximately 500-700 devotees. Features fresh traditional banana leaf dishes including Aviyal, Pickle, Vazhaikai, Sambar, Rasam, and Payasam.'}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {(isTa ? kovilKodaiData.annadhanamInfo.dishesTa : kovilKodaiData.annadhanamInfo.dishesEn).map((dish, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-tamil">
                  {dish}
                </span>
              ))}
            </div>
          </div>

          {/* Traditional Performing Arts Card */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border-2 border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#1B4332] text-emerald-400 border border-emerald-500/40">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                  {isTa ? 'பாரம்பரிய கலை நிகழ்ச்சிகள்' : 'Traditional Temple Folk Arts'}
                </h3>
                <span className="text-xs text-emerald-400">
                  {isTa ? 'வில்லுப்பாட்டு, நையாண்டி மேளம் & தப்பாட்டம்' : 'Villupattu, Naiyandi Melam & Thappattai'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-tamil">
              {isTa
                ? 'கொடை திருவிழா முழுவதும் வில்லுப்பாட்டு கலை நிகழ்ச்சிகள் இரவெல்லாம் இசைக்கப்படுகின்றன. நையாண்டி மேளம் மற்றும் தப்பாட்டம் ஆகியவை திருவிழாவிற்குத் தெய்வீக உத்வேகமளிக்கின்றன.'
                : 'Throughout the festival, traditional Villupattu storytelling continues through the night, accompanied by the uplifting rhythms of Naiyandi Melam and Thappattai drums.'}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-tamil text-gray-200 pt-2">
              <div className="p-2 rounded bg-[#0E0C0A] border border-[#D4AF37]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isTa ? 'வில்லுப்பாட்டு' : 'Villupattu Storytelling'}</span>
              </div>
              <div className="p-2 rounded bg-[#0E0C0A] border border-[#D4AF37]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isTa ? 'நையாண்டி மேளம்' : 'Naiyandi Melam Music'}</span>
              </div>
              <div className="p-2 rounded bg-[#0E0C0A] border border-[#D4AF37]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isTa ? 'பூ படைப்பு' : 'Poo Padappu Offering'}</span>
              </div>
              <div className="p-2 rounded bg-[#0E0C0A] border border-[#D4AF37]/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isTa ? 'மஞ்சள் கிடாரம்' : 'Manjal Kidaram Ritual'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
