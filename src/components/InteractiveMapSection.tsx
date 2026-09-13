import React, { useState } from 'react';
import { Compass, Play, Pause, ChevronRight, ChevronLeft, Info, X } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { templeMapNodes, MapNode } from '../data/templeMapData';

interface InteractiveMapProps {
  lang: Language;
}

export const InteractiveMapSection: React.FC<InteractiveMapProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const t = translations[lang].common;

  const [selectedNode, setSelectedNode] = useState<MapNode | null>(templeMapNodes[0]);
  const [guidedOrderActive, setGuidedOrderActive] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  // Filter out Vilvam tree (order 0) for the 15-step worship tour
  const worshipSteps = templeMapNodes
    .filter(n => n.worshipOrder > 0)
    .sort((a, b) => a.worshipOrder - b.worshipOrder);

  const startGuidedTour = () => {
    setGuidedOrderActive(true);
    setCurrentStepIndex(0);
    setSelectedNode(worshipSteps[0]);
  };

  const stopGuidedTour = () => {
    setGuidedOrderActive(false);
  };

  const nextStep = () => {
    if (currentStepIndex < worshipSteps.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      setSelectedNode(worshipSteps[nextIdx]);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      setSelectedNode(worshipSteps[prevIdx]);
    }
  };

  return (
    <section className="py-20 bg-[#0E0C0A] relative overflow-hidden border-b border-[#D4AF37]/20">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-temple-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{isTa ? 'இடஞ்சார்ந்த கோவில் அமைவிடம்' : 'Spatial Temple Layout & Plan'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'திருக்கோவில் வரைபடம்' : 'Interactive Temple Map'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'கோவில் நுழைவாயில், கோபுரம், கருவறை மற்றும் பிரகாரத் தெய்வங்களின் புனித அமைவிடங்களைக் கண்டு வழிகாட்டலைப் பின்பற்றுங்கள்.'
              : 'Explore the spatial arrangement of the Gopuram, Karuvarai sanctum, and surrounding deity sanctuaries, or follow the guided traditional worship sequence.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Guided Worship Order Banner Controls */}
        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-[#3B0A0A] via-[#1A1410] to-[#1B4332] border border-[#D4AF37]/50 shadow-xl flex flex-col gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#D4AF37] text-[#0E0C0A] font-bold text-sm shrink-0">
              {guidedOrderActive ? `${currentStepIndex + 1}/15` : '15'}
            </div>
            <div>
              <h4 className="text-sm font-bold font-tamil text-[#FAF6EE]">
                {isTa ? 'பாரம்பரிய வழிபாட்டு வரிசை (1 முதல் 15)' : 'Traditional Worship Order (Steps 1 to 15)'}
              </h4>
              <p className="text-xs text-[#D4AF37]">
                {guidedOrderActive
                  ? `${isTa ? 'தற்போதைய தலம்' : 'Active Spot'}: ${worshipSteps[currentStepIndex]?.[isTa ? 'nameTa' : 'nameEn']}`
                  : isTa ? '15 தெய்வங்களையும் வரிசைப்படி வணங்கும் வழிகாட்டுதல்' : 'Follow the sequential ritual path starting from Periyavar'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {!guidedOrderActive ? (
              <button
                onClick={startGuidedTour}
                className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#0E0C0A] font-bold text-xs hover:bg-[#F3E5AB] transition-all cursor-pointer flex items-center gap-2 shadow"
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="font-tamil">{t.followOrder}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  disabled={currentStepIndex === 0}
                  className="p-2 rounded-full bg-[#1A1410] border border-[#D4AF37]/40 text-[#D4AF37] disabled:opacity-30 hover:bg-[#3B0A0A] cursor-pointer"
                  title={t.prevStep}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-[#D4AF37] px-2">
                  {currentStepIndex + 1} / {worshipSteps.length}
                </span>
                <button
                  onClick={nextStep}
                  disabled={currentStepIndex === worshipSteps.length - 1}
                  className="p-2 rounded-full bg-[#1A1410] border border-[#D4AF37]/40 text-[#D4AF37] disabled:opacity-30 hover:bg-[#3B0A0A] cursor-pointer"
                  title={t.nextStep}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={stopGuidedTour}
                  className="px-3 py-1.5 rounded-full bg-[#3B0A0A] text-xs text-red-300 border border-red-800 hover:bg-red-950 cursor-pointer ml-2"
                >
                  <Pause className="w-3.5 h-3.5 inline mr-1" />
                  <span>{t.stopOrder}</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* MAP CANVAS & CONCISE INFO CARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MAP CANVAS CONTAINER (8 Cols) */}
          className="lg:col-span-8 relative rounded-3xl bg-gradient-to-b from-[#1F1D1B] via-[#151210] to-[#0A0806] border-2 border-[#D4AF37]/40 p-4 sm:p-6 shadow-2xl overflow-hidden min-h-[360px] sm:min-h-[580px] flex flex-col justify-between">
            
            {/* Map Spatial Architecture Background Diagram Labels */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {/* Outer Walls */}
              <div className="absolute inset-4 sm:inset-8 border-2 border-dashed border-[#D4AF37]" />
              {/* Inner Gopuram Sanctum Box */}
              <div className="absolute top-[20%] left-[30%] right-[30%] bottom-[50%] border-2 border-amber-500/50 rounded-xl bg-amber-950/20" />
            </div>

            {/* Top Label: Karuvarai Sanctum */}
            <div className="relative z-10 text-center py-1">
              <span className="px-3 py-1 rounded-full bg-[#3B0A0A]/80 border border-[#D4AF37]/40 text-[10px] sm:text-xs text-[#D4AF37] font-mono font-semibold">
                🏛️ {isTa ? 'கருவறை & கோபுரம் (Karuvarai Gopuram)' : 'Gopuram Karuvarai Sanctum'}
              </span>
            </div>

            {/* SPATIAL INTERACTIVE MAP NODES */}
            <div className="relative w-full h-[260px] sm:h-[460px] my-2">
              {templeMapNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const isGuidedCurrent = guidedOrderActive && worshipSteps[currentStepIndex]?.id === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setSelectedNode(node);
                      if (guidedOrderActive && node.worshipOrder > 0) {
                        const stepIdx = worshipSteps.findIndex(s => s.id === node.id);
                        if (stepIdx !== -1) setCurrentStepIndex(stepIdx);
                      }
                    }}
                    style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 cursor-pointer z-20 ${
                      isSelected || isGuidedCurrent ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    {/* Node Dot Icon */}
                    <div className="relative flex items-center justify-center">
                      
                      {/* Active Halo Effect */}
                      {(isSelected || isGuidedCurrent) && (
                        <div className="absolute w-10 h-10 rounded-full bg-[#D4AF37]/40 animate-ping" />
                      )}

                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-xl border-2 transition-colors ${
                        node.id === 'node-vilvam-tree'
                          ? 'bg-[#1B4332] text-emerald-300 border-emerald-400'
                          : isSelected || isGuidedCurrent
                          ? 'bg-[#D4AF37] text-[#0E0C0A] border-white shadow-[0_0_15px_rgba(212,175,55,0.9)]'
                          : 'bg-[#3B0A0A] text-[#FAF6EE] border-[#D4AF37]/60 group-hover:border-[#D4AF37]'
                      }`}>
                        {node.worshipOrder > 0 ? node.worshipOrder : '🌿'}
                      </div>

                      {/* Tooltip Label */}
                      <span className={`absolute top-10 whitespace-nowrap text-[10px] sm:text-xs px-2 py-0.5 rounded shadow-md pointer-events-none transition-all ${
                        isSelected || isGuidedCurrent
                          ? 'bg-[#D4AF37] text-[#0E0C0A] font-bold z-40'
                          : 'bg-[#1A1410]/90 text-gray-200 border border-[#D4AF37]/30 hidden sm:block'
                      }`}>
                        {isTa ? node.nameTa : node.nameEn}
                      </span>

                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Label: Main Entrance */}
            <div className="relative z-10 text-center py-1 border-t border-[#3B0A0A] flex justify-between items-center text-[9px] sm:text-xs text-gray-400 gap-1">
              <span className="shrink-0">⬅️ <span className="hidden sm:inline">{isTa ? 'இடதுப் பிரகாரம்' : 'Left Wing'}</span></span>
              <span className="font-semibold text-[#D4AF37] text-center">🚪 {isTa ? 'பிரதான நுழைவாயில்' : 'Main Entrance'}</span>
              <span className="shrink-0"><span className="hidden sm:inline">{isTa ? 'வலதுப் பிரகாரம் & வில்வம்' : 'Right Wing & Vilvam'}</span> ➡️</span>
            </div>

          </div>

          {/* CONCISE INFORMATION CARD (4 Cols - Section 17 small card rule!) */}
          <div className="lg:col-span-4">
            {selectedNode ? (
              <div className="p-5 rounded-2xl bg-[#1A1410] border-2 border-[#D4AF37] shadow-2xl text-[#FAF6EE] space-y-4 animate-fade-in relative">
                
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3B0A0A] border border-[#D4AF37] text-[#D4AF37] text-xs font-mono font-bold flex items-center justify-center">
                      {selectedNode.worshipOrder > 0 ? selectedNode.worshipOrder : '🌿'}
                    </span>
                    <span className="text-xs uppercase font-mono text-[#D4AF37]">
                      {isTa ? selectedNode.sectionTa : selectedNode.sectionEn}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Node Image */}
                <div className="relative rounded-xl overflow-hidden h-36 border border-[#D4AF37]/30">
                  <img
                    src={selectedNode.image}
                    alt={selectedNode.nameEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent" />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#0E0C0A]/90 border border-[#D4AF37]/40 text-[9px] font-mono text-[#D4AF37]">
                    PLACEHOLDER
                  </span>
                </div>

                {/* Names */}
                <div>
                  <h3 className="text-xl font-bold font-tamil gold-text-gradient">
                    {isTa ? selectedNode.nameTa : selectedNode.nameEn}
                  </h3>
                </div>

                {/* Short General Explanation */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-tamil">
                  {isTa ? selectedNode.descriptionTa : selectedNode.descriptionEn}
                </p>

                {/* Temple Specific Info */}
                <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20 text-xs text-[#F3E5AB]">
                  <span className="font-semibold text-[#D4AF37] block mb-1">
                    ✨ {isTa ? 'திருக்கோவில் சிறப்புத் தகவல்:' : 'Temple Specific Info:'}
                  </span>
                  <span>{isTa ? selectedNode.templeInfoTa : selectedNode.templeInfoEn}</span>
                </div>

              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/30 text-center text-gray-400 space-y-3">
                <Info className="w-8 h-8 text-[#D4AF37] mx-auto opacity-60" />
                <p className="text-xs sm:text-sm font-tamil">
                  {isTa
                    ? 'வரைபடத்தில் உள்ள ஒரு தலத்தைக் கிளிக் செய்து அதன் விவரங்களை அறியவும்.'
                    : 'Click any location node on the temple map to view its concise details.'}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
