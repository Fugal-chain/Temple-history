import React from 'react';
import { Sparkles, ShieldAlert, CheckCircle, Info } from 'lucide-react';
import { Language } from '../data/translations';
import { sacredVilvamData } from '../data/templeData';

interface SacredVilvamProps {
  lang: Language;
}

export const SacredVilvamSection: React.FC<SacredVilvamProps> = ({ lang }) => {
  const isTa = lang === 'ta';

  const vilvamFacts = [
    {
      titleEn: "150+ Years Living Heritage",
      titleTa: "150+ ஆண்டுகள் தொன்மையான வாழ்வு",
      descEn: "Standing tall inside the temple compound for approximately 150+ years, older than the present temple building.",
      descTa: "கோவில் தற்போதைய கட்டிடத்தை விடப் பழமையானது, 150 ஆண்டுகளுக்கும் மேலாகச் சாட்சியாக வளர்ந்து நிற்கிறது."
    },
    {
      titleEn: "Naturally Grown From Sand",
      titleTa: "மணலில் இயற்கை வளர்ச்சி",
      descEn: "Grows naturally directly out of the soft sand soil inside the temple inner courtyard.",
      descTa: "கோவில் பிரகாரத்தின் மென்மையான மணலிலிருந்து நேரடியாக இயற்கையாக வளர்ந்து தோன்றியது."
    },
    {
      titleEn: "Majestic Trunk Girth",
      titleTa: "தடிமனான பிரம்மாண்ட அடிமரம்",
      descEn: "The trunk is so thick that approximately two people holding hands are required to hug around it.",
      descTa: "சுமார் இரண்டு மனிதர்கள் கைகோர்த்து அணைக்கும் அளவுக்குப் பிரம்மாண்டமான தடிமன் கொண்டது."
    },
    {
      titleEn: "Fresh Leaves for Daily Worship",
      titleTa: "வழிபாட்டிற்குரிய புனித இலைகள்",
      descEn: "Continuously produces fresh green Vilvam leaves that are picked and used for deity worship in the sanctum.",
      descTa: "கருவறை தெய்வங்களின் அர்ச்சனைக்கும் வழிபாட்டிற்கும் தேவையான புதிய வில்வ இலைகளைத் தொடர்ந்து வழங்கி வருகிறது."
    },
    {
      titleEn: "Associated with Lord Shiva",
      titleTa: "சிவபெருமானின் பெருங்கருணை",
      descEn: "Associated directly with Lord Shiva. According to family tradition, the presence of this tree is believed to be a divine boon.",
      descTa: "சிவபெருமானுடன் தொடர்புடையது. குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, இம்மரத்தின் இருப்பு சிவபெருமானின் பெருங்கருணையாகக் கருதப்படுகிறது."
    },
    {
      titleEn: "Temple Named After the Tree",
      titleTa: "மரத்தின் பெயரால் அமைந்த திருக்கோவில்",
      descEn: "The temple itself is named 'Vilvamoodu' (Rooted in Vilvam) honoring this sacred tree at its core.",
      descTa: "'வில்வமூடு' எனும் திருநாமமே இம்மரத்தின் வேரினை அடிப்படையாகக் கொண்டு அமைந்த பெருமை வாய்ந்தது."
    }
  ];

  return (
    <section className="py-20 bg-vilvam-gradient relative overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Background Leaves Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#2D6A4F_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] border border-emerald-500/40 text-xs text-emerald-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isTa ? 'புனித தலவிருட்சம்' : 'Sacred Temple Tree (Sthala Vriksham)'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil vilvam-text-gradient mb-4">
            {isTa ? 'புனித வில்வ மரம்' : 'The Sacred Vilvam Tree'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa ? sacredVilvamData.familyBeliefTa : sacredVilvamData.familyBeliefEn}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Top Showcase: Placeholder Image & Family Wording */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl relative group">
              <img
                src="/images/sacred-vilvam-tree.jpg"
                alt="Sacred Vilvam Tree Aegle Marmelos"
                className="w-full h-56 sm:h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091912] via-transparent to-transparent" />
              
              {/* Internal Placeholder Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#0E0C0A]/90 border border-[#D4AF37]/50 text-[10px] font-mono text-[#D4AF37] flex items-center gap-1.5 shadow">
                <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{sacredVilvamData.placeholderNotice}</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-temple border border-emerald-500/30">
                <h4 className="text-sm font-bold font-tamil text-[#FAF6EE] mb-1">
                  {isTa ? 'கோவில் வளாகத்தில் 150+ ஆண்டுகள் நிற்கும் புனித வில்வம்' : '150+ Year Old Vilvam Tree Inside Temple Yard'}
                </h4>
                <p className="text-xs text-emerald-300">
                  {isTa ? 'திருவிழாக்களின் போது விளக்குகளாலும் மலர்களாலும் அலங்கரிக்கப்படும் சுபிட்ச மரம்' : 'Decorated with glowing lamps and garlands during festival occasions'}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Wording Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-5 rounded-2xl bg-[#081710] border border-emerald-600/40 text-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
                <Info className="w-4 h-4 shrink-0" />
                <span>{isTa ? 'குடும்ப மரபுச் செய்தி:' : 'Family Tradition Wording:'}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed italic text-gray-200">
                {isTa
                  ? '"குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, இந்த புனித வில்வ மரத்தின் பிரசன்னம் சிவபெருமானின் தனிக் கருணையாகப் போற்றப்படுகிறது. இது கோவிலின் பெயரைத் தாங்கி நிற்கும் பிரதான வாழ்வியற் சான்றாகும்."'
                  : '"According to family tradition, the Sacred Vilvam tree is believed to be a divine boon from Lord Shiva. Naturally growing out of the sand, its leaves have blessed generations of daily deity worship."'}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                {isTa
                  ? 'வில்வ மரம் (Aegle marmelos) சைவ சமய வழிபாட்டில் மிகுந்த புனிதத்துவம் வாய்ந்தது. இம்மரம் தற்போதைய கோவில் கட்டிட அமைப்பை விடப் பழமையானது. சுமார் இரண்டு நபர்கள் அணைக்கும் அளவு தடிமனான இதன் அடிமரம், மணற்பரப்பிலிருந்து நேராக உயர்ந்து நிற்கிறது.'
                  : 'The Vilvam tree (Aegle marmelos) holds supreme sanctity in Shiva worship. Older than the current temple structure, its trunk girth requires approximately two people holding hands to hug around it, growing directly out of the sand.'}
              </p>
              <p>
                {isTa
                  ? 'ஆண்டுதோறும் நடைபெறும் தை மாதம் கோவில் கொடைத் திருவிழாவின் போது, இந்த புனித வில்வ மரம் வண்ண விளக்குகளாலும், மலர் மாலைகளாலும் கோலாகலமாக அலங்கரிக்கப்பட்டு, சிறப்பு ஆராதனைகள் நடத்தப்படுகின்றன.'
                  : 'During the major annual Kovil Kodai festival, the tree is reverently adorned with glowing lights, fresh garlands, and special lamps, symbolizing living spiritual continuity.'}
              </p>
            </div>

          </div>

        </div>

        {/* 6 Core Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vilvamFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#081710]/90 border border-emerald-700/40 hover:border-emerald-400 transition-all duration-300 shadow-lg flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold font-tamil text-[#FAF6EE] mb-2">
                  {isTa ? fact.titleTa : fact.titleEn}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {isTa ? fact.descTa : fact.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
