import React from 'react';
import { MapPin, Clock, Navigation, Info, AlertTriangle, ExternalLink } from 'lucide-react';
import { Language } from '../data/translations';
import { templeData } from '../data/templeData';
import { visitInfo } from '../data/servicesData';

interface VisitSectionProps {
  lang: Language;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ lang }) => {
  const isTa = lang === 'ta';

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isTa ? 'கோவில் வருகை வழிகாட்டி' : 'Visitor Planning Guide'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
            {isTa ? 'திருக்கோவிலுக்கு வருகை தருக' : 'Plan Your Temple Visit'}
          </h2>
          <p className="text-base text-[#EAE3D2] leading-relaxed">
            {isTa
              ? 'அமைவிட முகவரி, வெள்ளிக்கிழமை தரிசன நேரங்கள், போக்குவரத்து வசதிகள் மற்றும் பக்தர்களுக்கான வழிகாட்டுதல்கள்.'
              : 'Location address, Friday opening hours, transportation details, and respectful temple etiquette guidelines for all visitors.'}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* TOP SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Location & Address Card */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/40">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                {isTa ? 'திருக்கோவில் முகவரி' : 'Temple Address'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-tamil">
              {isTa ? visitInfo.addressTa : visitInfo.addressEn}
            </p>

            <a
              href={templeData.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B0A0A] border border-[#D4AF37] text-xs font-semibold text-[#D4AF37] hover:bg-[#5A1212] transition-colors cursor-pointer"
            >
              <span>{isTa ? 'Google மேப்ஸில் காண்க' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Opening Hours Card */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#1B4332] text-emerald-400 border border-emerald-500/40">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                {isTa ? 'தரிசன நேரங்கள்' : 'Worship & Opening Hours'}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/30 text-xs text-[#FAF6EE] font-medium font-tamil">
              {isTa ? visitInfo.openingHoursTa : visitInfo.openingHoursEn}
            </div>

            <div className="p-3 rounded-xl bg-[#240505] border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{isTa ? visitInfo.morningWorshipNoticeTa : visitInfo.morningWorshipNoticeEn}</span>
            </div>
          </div>

          {/* Dress Guidance Card */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/40 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/40">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                {isTa ? 'ஆடை வழிகாட்டுதல்' : 'Visitor Dress Guidance'}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-serif-en italic">
              "{visitInfo.dressGuidanceEn}"
            </p>

            <p className="text-xs text-gray-300 leading-relaxed font-tamil">
              {visitInfo.dressGuidanceTa}
            </p>
          </div>

        </div>

        {/* LOGISTICS & FACILITIES NOTICES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Transportation Routes */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/30 space-y-4">
            <h3 className="text-lg font-bold font-tamil text-[#FAF6EE] flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#D4AF37]" />
              <span>{isTa ? 'போக்குவரத்து வழித்தடங்கள்' : 'Transport & Access Routes'}</span>
            </h3>

            <div className="space-y-3">
              {(isTa ? visitInfo.transportTa : visitInfo.transportEn).map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20 flex items-start gap-3 text-xs sm:text-sm">
                  <span className="px-2.5 py-0.5 rounded bg-[#3B0A0A] text-[#D4AF37] font-bold shrink-0">
                    {t.mode}
                  </span>
                  <span className="text-gray-200">{t.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Temple Facilities Notices */}
          <div className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/30 space-y-4">
            <h3 className="text-lg font-bold font-tamil text-[#FAF6EE] flex items-center gap-2">
              <Info className="w-5 h-5 text-[#D4AF37]" />
              <span>{isTa ? 'வசதிகள் குறித்தத் தகவல்கள்' : 'Facilities & Compound Notices'}</span>
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-gray-200">
              <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20">
                <span className="font-semibold text-[#D4AF37] block mb-0.5 font-tamil">
                  🅿️ {isTa ? 'வாகன நிறுத்துமிடம்:' : 'Parking Notice:'}
                </span>
                <span>{isTa ? visitInfo.facilitiesTa.parking : visitInfo.facilitiesEn.parking}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20">
                <span className="font-semibold text-[#D4AF37] block mb-0.5 font-tamil">
                  🚻 {isTa ? 'கழிப்பறை வசதி:' : 'Restroom Notice:'}
                </span>
                <span>{isTa ? visitInfo.facilitiesTa.restrooms : visitInfo.facilitiesEn.restrooms}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20">
                <span className="font-semibold text-[#D4AF37] block mb-0.5 font-tamil">
                  🐾 {isTa ? 'செல்லப் பிராணிகள்:' : 'Pets Policy:'}
                </span>
                <span>{isTa ? visitInfo.facilitiesTa.pets : visitInfo.facilitiesEn.pets}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
