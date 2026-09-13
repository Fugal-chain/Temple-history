import { useState, useEffect } from 'react';
import { OpeningSequence } from './components/OpeningSequence';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ThreePillarsSection } from './components/ThreePillarsSection';
import { OurStorySection } from './components/OurStorySection';
import { SacredVilvamSection } from './components/SacredVilvamSection';
import { DeitiesSection } from './components/DeitiesSection';
import { KovilKodaiSection } from './components/KovilKodaiSection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { TimelineSection } from './components/TimelineSection';
import { HeritageGallerySection } from './components/HeritageGallerySection';
import { CalendarSection } from './components/CalendarSection';
import { VisitSection } from './components/VisitSection';
import { ServicesAndContactSection } from './components/ServicesAndContactSection';
import { Language, translations } from './data/translations';
import { ArrowLeft } from 'lucide-react';

export function App() {
  // Tamil default language
  const [lang, setLang] = useState<Language>('ta');
  
  // Navigation active tab: 'home' | 'our-story' | 'deities' | 'sacred-vilvam' | 'kovil-kodai' | 'temple-map' | 'heritage-gallery' | 'calendar' | 'visit' | 'contact'
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Sacred opening experience overlay state
  const [showOpening, setShowOpening] = useState<boolean>(true);

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0E0C0A] text-[#FAF6EE] flex flex-col font-sans selection:bg-[#3B0A0A] selection:text-[#D4AF37]">
      
      {/* 1. Sacred Opening Sequence (Sequence 1 to 10) */}
      {showOpening && (
        <OpeningSequence
          lang={lang}
          onEnter={() => setShowOpening(false)}
        />
      )}

      {/* Main Website Structure */}
      {!showOpening && (
        <>
          {/* Header */}
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            lang={lang}
            setLang={setLang}
            onReplayOpening={() => setShowOpening(true)}
          />

          {/* Main Body Content based on Active Tab */}
          <main className="flex-1">
            
            {/* If specific sub-page selected, render breadcrumb header */}
            {activeTab !== 'home' && (
              <div className="bg-[#1A1410] border-b border-[#D4AF37]/30 py-3 px-4 sm:px-8 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-tamil">{translations[lang].common.backToHome}</span>
                </button>

                <span className="text-xs uppercase font-mono text-gray-400">
                  {lang === 'ta' ? 'வில்வமூடு திருக்கோவில்' : 'Vilvamoodu Digital Heritage'}
                </span>
              </div>
            )}

            {/* Tab 1: HOMEPAGE (Cinematic Story Flow) */}
            {activeTab === 'home' && (
              <div className="space-y-0">
                <HeroSection setActiveTab={setActiveTab} lang={lang} />
                <OurStorySection setActiveTab={setActiveTab} lang={lang} />
                <ThreePillarsSection setActiveTab={setActiveTab} lang={lang} />
                <SacredVilvamSection lang={lang} />
                <DeitiesSection lang={lang} />
                <KovilKodaiSection lang={lang} />
                <InteractiveMapSection lang={lang} />
                <TimelineSection lang={lang} />
                <HeritageGallerySection lang={lang} />
                <CalendarSection lang={lang} />
                <VisitSection lang={lang} />
                <ServicesAndContactSection lang={lang} />
              </div>
            )}

            {/* Tab 2: Our Story */}
            {activeTab === 'our-story' && (
              <div>
                <OurStorySection lang={lang} />
                <TimelineSection lang={lang} />
              </div>
            )}

            {/* Tab 3: Deities */}
            {activeTab === 'deities' && (
              <DeitiesSection lang={lang} />
            )}

            {/* Tab 4: Sacred Vilvam */}
            {activeTab === 'sacred-vilvam' && (
              <SacredVilvamSection lang={lang} />
            )}

            {/* Tab 5: Kovil Kodai */}
            {activeTab === 'kovil-kodai' && (
              <KovilKodaiSection lang={lang} />
            )}

            {/* Tab 6: Temple Map */}
            {activeTab === 'temple-map' && (
              <InteractiveMapSection lang={lang} />
            )}

            {/* Tab 7: Heritage Gallery */}
            {activeTab === 'heritage-gallery' && (
              <HeritageGallerySection lang={lang} />
            )}

            {/* Tab 8: Calendar */}
            {activeTab === 'calendar' && (
              <CalendarSection lang={lang} />
            )}

            {/* Tab 9: Visit */}
            {activeTab === 'visit' && (
              <VisitSection lang={lang} />
            )}

            {/* Tab 10: Contact */}
            {activeTab === 'contact' && (
              <ServicesAndContactSection lang={lang} />
            )}

          </main>

          {/* Footer */}
          <Footer
            setActiveTab={setActiveTab}
            lang={lang}
          />
        </>
      )}

    </div>
  );
}

export default App;
