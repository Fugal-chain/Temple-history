import React, { useState } from 'react';
import { Send, CheckCircle2, Heart, Sparkles, Utensils, MessageSquare } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { servicesData } from '../data/servicesData';

interface ServicesAndContactProps {
  lang: Language;
}

export const ServicesAndContactSection: React.FC<ServicesAndContactProps> = ({ lang }) => {
  const isTa = lang === 'ta';
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactInfo || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-temple-pattern relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SERVICES / OFFERINGS SHOWCASE */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>{isTa ? 'வழிபாடு & காணிக்கைகள்' : 'Sacred Offerings & Services'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-tamil gold-text-gradient mb-4">
              {isTa ? 'திருக்கோவில் வழிபாட்டுச் சேவைகள்' : 'Temple Services & Contributions'}
            </h2>
            <p className="text-base text-[#EAE3D2] leading-relaxed">
              {isTa
                ? 'காணிக்கைகள், அன்னதானப் பங்களிப்பு மற்றும் சிறப்புக் குடும்பப் பிரார்த்தனைகள் தொடர்புக்குக் குடும்ப உறுப்பினர்களைத் தொடர்பு கொள்ளுங்கள்.'
                : 'Arranging deity offerings, Annadhanam contributions, and special family prayers through direct coordination with the temple stewards.'}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[#1A1410] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#3B0A0A] text-[#D4AF37] border border-[#D4AF37]/40">
                      {service.id === 'annadhanam' ? <Utensils className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-bold font-tamil text-[#FAF6EE]">
                      {isTa ? service.nameTa : service.nameEn}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-tamil mb-4">
                    {isTa ? service.descriptionTa : service.descriptionEn}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#3B0A0A]">
                    <span className="text-[11px] uppercase font-mono font-bold text-[#D4AF37]">
                      {isTa ? 'செயல்முறை:' : 'Process:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-200">
                      {(isTa ? service.processTa : service.processEn).map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-0.5">✦</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20 text-[11px] text-[#F3E5AB] text-center font-tamil">
                  {isTa ? 'நிர்ணயிக்கப்பட்ட கட்டணம் இல்லை — அன்பின் பங்களிப்பு' : 'No fixed fees — Devotional voluntary contribution'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT FORM */}
        <div id="contact-form-section" className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-[#1A1410] via-[#240505] to-[#0E0C0A] border-2 border-[#D4AF37] p-5 sm:p-8 lg:p-12 shadow-2xl">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A0A] border border-[#D4AF37]/40 text-xs text-[#D4AF37] mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{isTa ? 'நேரடித் தொடர்பு' : 'Direct Inquiry'}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-tamil gold-text-gradient mb-2">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE3D2]">
              {t.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#1B4332]/90 border border-emerald-400 text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold font-tamil text-[#FAF6EE]">
                {isTa ? 'நன்றி!' : 'Thank You!'}
              </h4>
              <p className="text-sm text-emerald-100 font-tamil">
                {t.successMessage}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', contactInfo: '', subject: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#3B0A0A] border border-[#D4AF37] text-xs font-semibold text-[#D4AF37] hover:bg-[#5A1212] transition-colors cursor-pointer"
              >
                {isTa ? 'மற்றொரு செய்தி அனுப்புக' : 'Send Another Message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-xs uppercase font-mono text-[#D4AF37] mb-2">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/40 text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder={isTa ? 'உங்கள் முழுப் பெயர்' : 'e.g. Shanmugam'}
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-[#D4AF37] mb-2">
                  {t.emailPhoneLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/40 text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder={isTa ? 'மின்னஞ்சல் அல்லது மொபைல் எண்' : 'e.g. name@example.com / +91 9876543210'}
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-[#D4AF37] mb-2">
                  {t.subjectLabel}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/40 text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder={isTa ? 'செய்தியின் பொருள் (எ.கா. சிறப்பு வழிபாடு / கொடை தகவல்கள்)' : 'e.g. Special Pooja Inquiry'}
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono text-[#D4AF37] mb-2">
                  {t.messageLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/40 text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder={isTa ? 'உங்கள் செய்தியை உள்ளிடவும்...' : 'Write your respectful message...'}
                />
              </div>

              <div className="p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/20 text-[11px] text-gray-400 font-serif-en italic text-center">
                🔒 {t.note}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#3B0A0A] via-[#5A1212] to-[#1B4332] border-2 border-[#D4AF37] text-[#FAF6EE] font-bold text-base shadow-xl hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-tamil">{t.submitButton}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
