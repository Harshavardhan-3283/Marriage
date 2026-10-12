import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden select-none bg-[#FAF1E0]">
      
      {/* 1. FULL VERTICAL BACKGROUND */}
      {/* Mobile background: Sacred Namam, Mandala & Divine Panigrahana (Holding Hands) */}
      <div 
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url('/assets/hero-mobile.jpg')` }}
      />
      
      {/* Desktop vertical centered artwork: Divine Lotus Hands */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center w-full h-full pointer-events-none overflow-hidden">
        <img
          src="/assets/hero-desktop.jpg"
          alt="Divine Lotus Wedding"
          className="w-180 h-auto object-contain -rotate-90 md:-rotate-90"
        />
      </div>

      {/* 2. CENTER CONTENT: WEDDING INVITATION TITLE, GANESHA SYMBOL & COUPLE NAMES */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl transform -translate-y-8 sm:-translate-y-4 md:translate-y-0">
        
        {/* Top Header: Buradanarasu's Wedding Invitation */}
        <div className="mb-2 sm:mb-2.5 flex items-center justify-center">
          <span className="text-[11px] sm:text-xs md:text-sm font-cinzel font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#9A5038] drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FFF9F2]/85 backdrop-blur-xs border border-[#D4AF37]/50 shadow-xs">
            {t.hero.invitationTitle}
          </span>
        </div>

        {/* Little Lord Ganesha Swamy Symbol */}
        <div className="mb-2 sm:mb-3 flex items-center justify-center">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF9F2]/90 backdrop-blur-md border border-[#D4AF37]/70 flex items-center justify-center shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:scale-105 transition-transform">
            <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-7 sm:h-7 text-[#9A5038]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Crown / Mukut */}
              <path d="M26 14 L32 7 L38 14 L32 17 Z" fill="#D4AF37" stroke="#9A5038" strokeWidth="1.2" />
              {/* Tilak / Bindu */}
              <circle cx="32" cy="22" r="1.5" fill="#D4AF37" stroke="none" />
              <path d="M30 20 Q32 25 34 20" stroke="#9A5038" strokeWidth="1.2" />
              {/* Ears */}
              <path d="M22 24 C14 22 14 34 22 36" stroke="#9A5038" strokeWidth="1.8" />
              <path d="M42 24 C50 22 50 34 42 36" stroke="#9A5038" strokeWidth="1.8" />
              {/* Face and Trunk (Vakratunda) */}
              <path d="M24 24 C24 38 27 44 32 46 C37 48 39 52 35 55 C31 57 26 53 26 48" stroke="#9A5038" strokeWidth="2.2" />
              {/* Tusk & Modak accent */}
              <path d="M26 36 L23 38" stroke="#9A5038" strokeWidth="1.5" />
              <circle cx="39" cy="46" r="2" fill="#D4AF37" stroke="#9A5038" strokeWidth="0.8" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-[#3B261B] tracking-widest leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]">
          {t.hero.groom}
        </h1>
        
        <div className="flex items-center gap-3 sm:gap-4 my-2 sm:my-3">
          <span className="w-8 sm:w-16 md:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#C87D65] to-[#9A5038]"></span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-script text-[#9A5038] lowercase px-2 drop-shadow-sm">
            {t.hero.and}
          </span>
          <span className="w-8 sm:w-16 md:w-20 h-[1.5px] bg-gradient-to-l from-transparent via-[#C87D65] to-[#9A5038]"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-[#3B261B] tracking-widest leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]">
          {t.hero.bride}
        </h2>
      </div>

    </section>
  );
};
