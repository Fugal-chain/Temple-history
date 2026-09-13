import React from 'react';
import { Users, Heart, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { Language } from '../data/translations';
import { templeData } from '../data/templeData';

interface OurStorySectionProps {
  setActiveTab?: (tab: string) => void;
  lang: Language;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ setActiveTab, lang }) => {
  const isTa = lang === 'ta';

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B0A0A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B4332]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{isTa ? 'ஏழு தலைமுறை குடும்ப பாரம்பரியம்' : 'Seven Generations Family Heritage'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'எங்கள் பாரம்பரியக் கதை' : 'Our Sacred Stewardship Story'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa ? templeData.management.descriptionTa : templeData.management.descriptionEn}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Visual Showcase Box */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl group">
            <img
              src="/images/hero-temple.jpg"
              alt="Temple Heritage Sanctum"
              className="w-full h-56 sm:h-80 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/40 to-transparent" />
            
            {/* Overlay Banner */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-temple border border-[#D4AF37]/50">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <h4 className="text-sm font-bold font-tamil text-[#FAF6EE]">
                    {isTa ? 'தலைமுறை கடந்து தொடரும் பக்தி' : 'Devotion Across Generations'}
                  </h4>
                  <p className="text-xs text-[#D4AF37]">
                    {isTa ? 'குடும்ப குலதெய்வ பராமரிப்பு & வருடாந்திர திருவிழாச் சங்கமம்' : 'Kula Deivam guardianship & annual family reunions'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-[#FAF6EE]">
            
            <div className="p-4 rounded-xl bg-[#1A1410] border-l-4 border-[#D4AF37] text-xs sm:text-sm text-[#F3E5AB]">
              <span className="font-semibold block text-[#D4AF37] mb-1">
                {isTa ? 'குடும்பப் பாரம்பரிய சொல் வழக்கு:' : 'Family Tradition Language:'}
              </span>
              <p className="italic">
                {isTa
                  ? '"குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, சுமார் நான்கு நூற்றாண்டுகளுக்கு முன்னதாக எங்கள் முன்னோர்களால் இந்த குலதெய்வ தலம் வழிபடப்பட்டு, ஏழு தலைமுறைகளாகத் தொடர்ந்து பாதுகாக்கப்பட்டு வருகிறது."'
                  : '"According to family tradition, this Kula Deivam temple has been inherited and preserved across approximately seven generations of family stewardship."'}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-200">
              <p>
                {isTa
                  ? 'வில்வமூடு ஸ்ரீ சிவ சுடலைமாட சுவாமி திருக்கோவில் ஒரு தனிநபர் அல்லது பொது அமைப்பால் நடத்தப்படும் கோவில் அல்ல; இது குடும்பத்தின் பிரதான குலதெய்வக் கோவில் ஆகும். தமிழ்நாட்டின் பல மாவட்டங்களிலிருந்தும் பிற மாநிலங்களிலிருந்தும் குடும்ப உறுப்பினர்கள் ஆண்டுதோறும் தை மாதம் நடைபெறும் கோவில் கொடையில் ஒன்றிணைகின்றனர்.'
                  : 'Vilvamoodu Sri Siva Sudalaimada Swamy Temple is a cherished family Kula Deivam temple preserved continuously over seven generations. Family members residing in different districts and states make a sacred pilgrimage back home during the annual Thai Kovil Kodai.'}
              </p>
              <p>
                {isTa
                  ? 'குடும்பத்தில் புதிதாகப் பிறக்கும் ஒவ்வொரு குழந்தையும் முதல் வழிபாட்டிற்காகத் திருக்கோவிலுக்கு அழைத்து வரப்பட்டு, ஸ்ரீ சுடலைமாட சுவாமி மற்றும் முத்தாரம்மனின் திருவடிகளில் சமர்ப்பிக்கப்பட்டு ஆசி பெறுகின்றனர்.'
                  : 'Newborn family members are brought to the temple for their initial sacred blessings, presented before Sri Sudalaimada Swamy and Mutharamman to ensure protective grace throughout their lives.'}
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3 rounded-lg bg-[#1A1410] border border-[#D4AF37]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold font-tamil text-[#D4AF37]">
                    {isTa ? 'குலதெய்வப் பாதுகாப்பு' : 'Kula Deivam Protection'}
                  </h5>
                  <p className="text-[11px] text-gray-300">
                    {isTa ? 'எங்கு சென்றாலும் குடும்பத்தைக் காக்கும் தெய்வம்' : 'Devotees believe he protects the family wherever they go'}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#1A1410] border border-[#D4AF37]/30 flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold font-tamil text-[#D4AF37]">
                    {isTa ? 'குடும்ப ஒற்றுமை' : 'Family Unity'}
                  </h5>
                  <p className="text-[11px] text-gray-300">
                    {isTa ? 'கொடையின் போது அனைவரும் ஒன்றிணையும் புனிதத் தளம்' : 'Sacred gathering point bringing all members together'}
                  </p>
                </div>
              </div>
            </div>

            {setActiveTab && (
              <div className="pt-4">
                <button
                  onClick={() => setActiveTab('temple-map')}
                  className="px-6 py-3 rounded-full bg-[#3B0A0A] border border-[#D4AF37] text-xs font-semibold text-[#FAF6EE] hover:bg-[#5A1212] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isTa ? 'கோவில் வரைபடம் & அமைப்பைக் காண்க' : 'Explore Temple Interactive Map'}</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
