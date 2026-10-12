import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { BlessingMessage } from '../types';

export const Guestbook: React.FC = () => {
  const { t, language } = useLanguage();
  const [blessings, setBlessings] = useState<BlessingMessage[]>(() => {
    // Reset wall of blessings: clear legacy test storage
    localStorage.removeItem('wedding_blessings');
    const saved = localStorage.getItem('wedding_blessings_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = formCardRef.current;
    if (!el) return;

    const updateHeight = () => {
      if (el) {
        setFormHeight(el.offsetHeight);
      }
    };

    updateHeight();

    const ro = new ResizeObserver(() => {
      updateHeight();
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newBlessing: BlessingMessage = {
      id: 'b-' + Date.now(),
      name: name.trim(),
      relation: relation.trim() || 'Well Wisher',
      message: message.trim(),
      city: city.trim() || 'India',
      timestamp: 'Just now'
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    localStorage.setItem('wedding_blessings_v3', JSON.stringify(updated));

    setName('');
    setRelation('');
    setMessage('');
    setCity('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleReset = () => {
    localStorage.removeItem('wedding_blessings');
    localStorage.removeItem('wedding_blessings_v3');
    setBlessings([]);
  };


  const displayList = (
    blessings.length === 0
      ? []
      : blessings.length === 1
        ? [...blessings, ...blessings, ...blessings, ...blessings, ...blessings, ...blessings]
        : blessings.length <= 2 
          ? [...blessings, ...blessings, ...blessings, ...blessings]
          : blessings.length <= 4 
            ? [...blessings, ...blessings, ...blessings] 
            : [...blessings, ...blessings]
  );

  return (
    <section id="blessings" className="pt-4 sm:pt-6 pb-16 sm:pb-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9A5038]">
            {t.guestbook.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#4A3528] mt-2 mb-4">
            {t.guestbook.title}
          </h2>
          <p className="text-sm sm:text-base font-cormorant italic text-[#634735]">
            {t.guestbook.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Form: Write a Blessing */}
          <div className="lg:col-span-5">
            <div ref={formCardRef} className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#C87D65]/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xl font-cinzel font-bold text-[#4A3528]">
                  {t.guestbook.formTitle}
                </h3>
              </div>

              {submitted && (
                <div className="mb-3 p-2.5 rounded-xl bg-[#F9ECE5] border border-[#C87D65]/40 text-[#9A5038] text-xs font-cinzel font-bold text-center">
                  {t.guestbook.successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-cinzel font-semibold text-[#634735] mb-1">
                    {t.guestbook.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.guestbook.namePlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] outline-none bg-[#FAF7F2] text-xs sm:text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block font-cinzel font-semibold text-[#634735] mb-1">
                      {t.guestbook.relationLabel}
                    </label>
                    <input
                      type="text"
                      maxLength={30}
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      placeholder={t.guestbook.relationPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] outline-none bg-[#FAF7F2] text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-cinzel font-semibold text-[#634735] mb-1">
                      {t.guestbook.cityLabel}
                    </label>
                    <input
                      type="text"
                      maxLength={30}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={t.guestbook.cityPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] outline-none bg-[#FAF7F2] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cinzel font-semibold text-[#634735] mb-1">
                    {t.guestbook.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={3}
                    maxLength={300}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.guestbook.messagePlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] outline-none bg-[#FAF7F2] text-xs sm:text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#9A5038] hover:bg-[#7B241C] text-white font-cinzel font-bold text-xs tracking-widest uppercase shadow-md transition flex items-center justify-center gap-2 border border-[#D4AF37]/40 mt-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  {t.guestbook.postButton}
                </button>
              </form>
            </div>
          </div>

          {/* Right Feed: Equal Height to Form */}
          <div className="lg:col-span-7">
            <div 
              style={formHeight ? { height: `${formHeight}px` } : undefined}
              className="relative rounded-3xl overflow-hidden group border border-[#C87D65]/20 bg-gradient-to-b from-[#FAF7F2] via-white/50 to-[#FAF7F2] shadow-inner flex flex-col justify-between"
            >
              
              {blessings.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 my-auto">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#D4AF37]/50 shadow-md flex items-center justify-center text-[#D4AF37] mb-3">
                    <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-cinzel font-bold text-[#4A3528] mb-1.5">
                    {t.guestbook.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-cormorant italic text-[#634735] max-w-sm leading-relaxed mb-4">
                    {language === 'te'
                      ? 'పవన్ కుమార్ & శాంతి దంపతులకు మీ ఆశీస్సులు మరియు శుభాకాంక్షలను అందించండి. మీరే మొదటి ఆశీర్వచనం పంపండి!'
                      : 'Shower Pavan Kumar & Santhi with your love, prayers, and auspicious wishes. Be the first to share your blessing on this wall!'}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E1] border border-[#D4AF37]/40 text-[#9A5038] text-xs font-cinzel font-semibold tracking-wider uppercase shadow-xs">
                    ✍️ {language === 'te' ? 'ఎడమవైపు ఫారంలో పంపండి' : 'Write your blessing on the left'}
                  </div>
                </div>
              ) : (
                <>
                  {/* Reset button */}
                  <button
                    onClick={handleReset}
                    className="absolute top-2.5 right-3 z-20 text-[10px] font-cinzel font-semibold text-[#8C6D58] hover:text-[#9A5038] bg-white/80 hover:bg-white px-2 py-0.5 rounded-md border border-[#C87D65]/20 shadow-xs transition"
                    title="Reset wall of blessings"
                  >
                    {language === 'te' ? 'రీసెట్' : 'Reset'}
                  </button>

                  {/* Top & Bottom Soft Fading Gradient Overlays */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-10 pointer-events-none" />

                  {/* Vertical Infinite Scrolling Track */}
                  <div className="p-3 sm:p-3.5 h-full overflow-hidden">
                    <div 
                      className="animate-marquee-vertical flex flex-col gap-2.5 sm:gap-3"
                      style={{
                        animationDuration: `${Math.max(16, (blessings.length <= 3 ? blessings.length * 5.5 : blessings.length * 3.8))}s`
                      }}
                    >
                      {displayList.map((b, idx) => (
                        <div
                          key={`${b.id}-${idx}`}
                          className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-sm border border-[#C87D65]/15 hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] overflow-hidden shrink-0"
                        >
                          <div className="flex items-start justify-between gap-2.5 mb-1.5">
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <div className="w-8 h-8 rounded-full bg-[#F9ECE5] border border-[#D4AF37]/40 flex items-center justify-center text-xs font-cinzel font-bold text-[#9A5038] shadow-xs shrink-0">
                                {b.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-cinzel font-bold text-[#4A3528] text-xs sm:text-[13px] leading-tight truncate">
                                  {b.name}
                                </h4>
                                <p className="text-[10px] sm:text-[11px] font-cormorant text-[#8C6D58] font-semibold leading-tight truncate">
                                  {b.relation} {b.city && `• ${b.city}`}
                                </p>
                              </div>
                            </div>
                            <span className="text-[9px] font-sans text-gray-400 whitespace-nowrap shrink-0">
                              {b.timestamp}
                            </span>
                          </div>

                          <p className="text-xs sm:text-[13px] font-sans text-[#634735]/90 leading-relaxed italic pl-10.5 break-words [overflow-wrap:anywhere] [word-break:break-word]">
                            "{b.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
