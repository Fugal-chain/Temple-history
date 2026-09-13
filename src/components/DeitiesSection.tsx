import React, { useState } from 'react';
import { Shield, Sparkles, Info, X, ShieldAlert, ChevronRight } from 'lucide-react';
import { Language } from '../data/translations';
import { deitiesData, Deity } from '../data/deitiesData';

interface DeitiesSectionProps {
  lang: Language;
}

export const DeitiesSection: React.FC<DeitiesSectionProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const majorDeities = deitiesData.filter(d => d.isMajor);
  const otherDeities = deitiesData.filter(d => !d.isMajor);

  const [selectedDeity, setSelectedDeity] = useState<Deity | null>(null);
  const [activeMajorTab, setActiveMajorTab] = useState<string>('sudalaimadan');

  const currentMajor = majorDeities.find(d => d.id === activeMajorTab) || majorDeities[0];

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B0A0A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>{isTa ? 'திருக்கோவில் அருள்மூர்த்திகள்' : 'Sacred Enshrined Deities'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'குலதெய்வமும் காவல் தெய்வங்களும்' : 'Principal Deities & Guardians'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'ஸ்ரீ சுடலைமாட சுவாமி பிரதான மூர்த்தியாகவும், அன்னை முத்தாரம்மன் மற்றும் ஸ்ரீ சாஸ்தா உள்ளிட்ட 15 தெய்வங்கள் இத்திருக்கோவிலில் எழுந்தருளி அருள்பாலிக்கின்றனர்.'
              : 'Sri Sudalaimada Swamy as the principal deity, together with Mutharamman, Sri Sastha, and 15 sacred guardian deities safeguarding family peace and faith.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* MAJOR DEITIES INTERACTIVE TAB SHOWCASE */}
        <div className="mb-20">
          
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
            {majorDeities.map((deity) => {
              const isActive = activeMajorTab === deity.id;
              return (
                <button
                  key={deity.id}
                  onClick={() => setActiveMajorTab(deity.id)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold font-tamil transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#3B0A0A] to-[#5A1212] text-[#D4AF37] border-2 border-[#D4AF37] shadow-xl scale-105'
                      : 'bg-[#1A1410] text-[#EAE3D2] border border-[#D4AF37]/30 hover:bg-[#3B0A0A] hover:text-[#D4AF37]'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
                  <span>{isTa ? deity.nameTa : deity.nameEn}</span>
                </button>
              );
            })}
          </div>

          {/* Active Major Deity Detailed Card Showcase */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1A1410] via-[#240505]/80 to-[#0E0C0A] border-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image & Placeholder Tag */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 relative shadow-xl group">
                  <img
                    src={currentMajor.image}
                    alt={currentMajor.nameEn}
                    className="w-full h-56 sm:h-72 lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent" />
                  
                  {/* Placeholder Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0E0C0A]/90 border border-[#D4AF37]/50 text-[10px] font-mono text-[#D4AF37] flex items-center gap-1 shadow">
                    <ShieldAlert className="w-3 h-3 text-[#D4AF37]" />
                    <span>PLACEHOLDER — REPLACE WITH ORIGINAL MEDIA</span>
                  </div>

                  {/* Form Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-maroon border border-[#D4AF37]/30 text-xs">
                    <span className="text-[#D4AF37] font-semibold block mb-0.5">
                      {isTa ? 'வடிவம் / தோற்றம்:' : 'Sacred Form / Arrangement:'}
                    </span>
                    <span className="text-[#FAF6EE] font-tamil">
                      {isTa ? currentMajor.formTa : currentMajor.formEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Sacred Attributes Column */}
              <div className="lg:col-span-7 space-y-5 text-[#FAF6EE]">
                
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] font-mono font-semibold">
                    {isTa ? currentMajor.roleTa : currentMajor.roleEn}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold font-tamil gold-text-gradient mt-2 mb-1">
                    {isTa ? currentMajor.nameTa : currentMajor.nameEn}
                  </h3>
                  <p className="text-xs text-gray-400 font-serif-en">
                    {isTa ? `அமைவிடம்: ${currentMajor.sanctumLocationTa}` : `Sanctum Location: ${currentMajor.sanctumLocationEn}`}
                  </p>
                </div>

                {/* Tradition Notice for Periyavar or Mutharamman or Sastha */}
                {currentMajor.id === 'periyavar' && (
                  <div className="p-3.5 rounded-xl bg-[#2A2215] border-l-4 border-[#D4AF37] text-xs text-[#F3E5AB]">
                    <span className="font-semibold text-[#D4AF37] block mb-1">
                      {isTa ? 'குடும்பப் பாரம்பரியக் குறிப்பு:' : 'Family Tradition Wording:'}
                    </span>
                    <p className="italic">
                      "According to family tradition, Periyavar is regarded as the founder of the temple."
                    </p>
                  </div>
                )}

                {currentMajor.id === 'mutharamman' && (
                  <div className="p-3.5 rounded-xl bg-[#2A2215] border-l-4 border-red-500 text-xs text-[#F3E5AB]">
                    <span className="font-semibold text-red-400 block mb-1">
                      {isTa ? 'வடிவக் குறிப்பு:' : 'Form Tradition:'}
                    </span>
                    <p className="italic">
                      {isTa
                        ? 'அன்னை முத்தாரம்மனுக்குச் செதுக்கப்பட்ட மனித வடிவச் சிலை கிடையாது. திரிசூலம், வாள், சிவப்புப் புடவை மற்றும் நெய் விளக்குகள் கொண்ட புனித வழிபாட்டு அமைப்பாக ஆராதிக்கப்படுகிறாள்.'
                        : 'Mutharamman has no conventional human-sculpted idol. She is worshipped through a sacred arrangement with Trishulam, ceremonial sword, red saree, and oil lamps.'}
                    </p>
                  </div>
                )}

                {/* Attributes Bullet List */}
                {currentMajor.attributesEn && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2 font-mono">
                      {isTa ? 'தெய்வீக அமைப்பும் அடையாளங்களும்' : 'Sacred Attributes & Symbols'}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-200">
                      {(isTa ? currentMajor.attributesTa : currentMajor.attributesEn)?.map((attr, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#1A1410] border border-[#D4AF37]/20 font-tamil">
                          <span className="text-[#D4AF37]">✦</span>
                          <span>{attr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Offerings & Special Association */}
                {currentMajor.specialAssociationEn && (
                  <div className="p-4 rounded-xl bg-[#1A1410]/80 border border-[#D4AF37]/30 text-xs sm:text-sm text-gray-300">
                    <span className="font-semibold text-[#D4AF37] block mb-1 font-tamil">
                      {isTa ? 'சிறப்பு வழிபாட்டு முக்கியத்துவம்:' : 'Special Worship Significance:'}
                    </span>
                    <p className="leading-relaxed font-tamil">
                      {isTa ? currentMajor.specialAssociationTa : currentMajor.specialAssociationEn}
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

        {/* OTHER GUARDIAN DEITIES GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-tamil text-[#FAF6EE] mb-2">
              {isTa ? 'பிரகாரக் காவல் தெய்வங்கள்' : 'Enshrined Precinct Guardians'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {isTa
                ? 'கருவறை மற்றும் பிரகாரத்தைச் சுற்றி எழுந்தருளி அருள்பாலிக்கும் ஏனைய காவல் மூர்த்திகள்.'
                : 'Sacred guardian deities enshrined in the inner Karuvarai and outer temple wings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {otherDeities.map((deity) => (
              <div
                key={deity.id}
                onClick={() => setSelectedDeity(deity)}
                className="group p-5 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-lg cursor-pointer flex flex-col justify-between hover:bg-[#240505]/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#3B0A0A] border border-[#D4AF37]/30 text-[10px] font-mono text-[#D4AF37]">
                      {isTa ? deity.roleTa : deity.roleEn}
                    </span>
                    <Info className="w-4 h-4 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <h4 className="text-lg font-bold font-tamil text-[#FAF6EE] group-hover:text-[#D4AF37] transition-colors mb-2">
                    {isTa ? deity.nameTa : deity.nameEn}
                  </h4>

                  <p className="text-xs text-gray-400 font-serif-en mb-4">
                    📍 {isTa ? deity.sanctumLocationTa : deity.sanctumLocationEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3B0A0A] flex items-center justify-between text-xs text-[#D4AF37]">
                  <span className="font-tamil">{isTa ? 'விவரங்களைக் காண்க' : 'View Deity Details'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL FOR DEITY DETAILS */}
      {selectedDeity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0C0A]/90 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1A1410] border-2 border-[#D4AF37] rounded-3xl max-w-lg w-full p-6 relative shadow-2xl text-[#FAF6EE] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedDeity(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#3B0A0A] text-[#D4AF37] hover:bg-red-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#D4AF37]">
                {isTa ? selectedDeity.roleTa : selectedDeity.roleEn}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-tamil gold-text-gradient mb-2">
              {isTa ? selectedDeity.nameTa : selectedDeity.nameEn}
            </h3>

            <p className="text-xs text-gray-400 mb-4 font-serif-en">
              📍 {isTa ? `அமைவிடம்: ${selectedDeity.sanctumLocationTa}` : `Location: ${selectedDeity.sanctumLocationEn}`}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-gray-200">
              <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/30">
                <span className="font-semibold text-[#D4AF37] block mb-1">
                  {isTa ? 'தோற்றம் / வடிவம்:' : 'Form & Representation:'}
                </span>
                <span>{isTa ? selectedDeity.formTa || 'புனிதக் கல் திருமேனி' : selectedDeity.formEn || 'Sacred Stone Form'}</span>
              </div>

              {selectedDeity.specialAssociationEn && (
                <div className="p-3 rounded-xl bg-[#3B0A0A]/60 border border-[#D4AF37]/30">
                  <span className="font-semibold text-[#D4AF37] block mb-1">
                    {isTa ? 'சிறப்பு வழக்கம்:' : 'Special Tradition:'}
                  </span>
                  <span>{isTa ? selectedDeity.specialAssociationTa : selectedDeity.specialAssociationEn}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedDeity(null)}
              className="w-full mt-6 py-2.5 rounded-full bg-[#3B0A0A] border border-[#D4AF37] text-xs font-semibold text-[#D4AF37] hover:bg-[#5A1212] hover:text-white transition-all cursor-pointer"
            >
              {isTa ? 'மூடுக' : 'Close Details'}
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
