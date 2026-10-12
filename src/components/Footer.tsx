import React, { useState } from 'react';
import { Heart, Share2, Sparkles, Check, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const shareInvitation = () => {
    const text = `🌸 You are warmly invited to the Wedding Celebration of Pavan Kumar & Santhi on Wednesday, 25 November 2026 at Sri Sai Alekhya Functional Hall, Katravulapalli, Samarlakota, Andhra Pradesh! ✨ View invitation & itinerary: ${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: 'Pavan Kumar & Santhi Wedding Celebration',
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#FAF7F2] to-[#F4DFD2] border-t border-[#C87D65]/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Lord Ganesha / Om Symbol */}
        <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/50 shadow-md flex items-center justify-center text-[#9A5038] mb-6">
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
        </div>

        {/* Auspicious Sanskrit Shloka */}
        <p className="text-sm sm:text-base font-cinzel font-semibold text-[#8C533E] tracking-widest uppercase mb-2">
          {t.footer.shloka}
        </p>
        <p className="text-xs font-cormorant italic text-[#634735] max-w-md mx-auto mb-8">
          {t.footer.blessingQuote}
        </p>

        {/* Big Monogram */}
        <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#4A3528] tracking-widest mb-1">
          {t.footer.couplesTitle}
        </h3>
        <p className="text-xs font-cinzel font-semibold text-[#9A5038] tracking-wider uppercase mb-8">
          {t.footer.eventDate}
        </p>

        {/* Share & Scroll Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={shareInvitation}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#9A5038] font-cinzel font-semibold text-xs tracking-wider shadow-md border border-[#C87D65]/30 transition"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4 text-[#C87D65]" />}
            <span>{copied ? t.footer.inviteCopied : t.footer.shareInvite}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9A5038] hover:bg-[#7B241C] text-white font-cinzel font-semibold text-xs tracking-wider shadow-md transition"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{t.footer.backToTop}</span>
          </button>
        </div>

        {/* Footer Bottom Bar: Left (Families) | Center (Powered by DevDoes) | Right (Special Day) */}
        <div className="pt-8 border-t border-[#C87D65]/20 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between text-xs sm:text-[13px] font-sans text-[#8C6D58] gap-4 md:gap-3">
          
          {/* Left: Families gratitude */}
          <span className="text-center md:text-left">
            {t.footer.familiesGratitude}
          </span>

          {/* Center: Powered by devdoes */}
          <div className="flex items-center gap-2 sm:gap-2.5 my-2 md:my-0">
            <span className="font-cinzel font-semibold tracking-wider text-xs sm:text-sm text-[#9A5038] uppercase whitespace-nowrap">
              {t.footer.builtBy}
            </span>
            <a
              href="https://devdoes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:scale-105 transition-transform duration-300 group"
              title="DevDoes — devdoes.com"
            >
              <img
                src="/assets/devdoes-logo.png"
                alt="devdoes"
                className="h-5 sm:h-6 md:h-7 w-auto object-contain mix-blend-multiply group-hover:opacity-80 transition-opacity drop-shadow-sm"
              />
            </a>
          </div>

          {/* Right: Crafted for Special Day */}
          <div className="flex items-center gap-1.5 text-center md:text-right whitespace-nowrap">
            <span>{t.footer.craftedWith}</span>
            <Heart className="w-4 h-4 text-[#C87D65] fill-[#C87D65]" />
            <span>{t.footer.forSpecialDay}</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
