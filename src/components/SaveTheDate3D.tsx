import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export const SaveTheDate3D: React.FC = () => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 3D Tilt states
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move handler for interactive 3D card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#9A5038', '#F59E0B', '#FCEAE5', '#E11D48']
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-10 mb-2 px-2 sm:px-4 select-none">
      
      {/* Scalable SVG ClipPath Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="scalableHeartClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.95 C 0.18,0.72 0.03,0.52 0.03,0.30 C 0.03,0.12 0.16,0.03 0.31,0.03 C 0.405,0.03 0.465,0.08 0.5,0.15 C 0.535,0.08 0.595,0.03 0.69,0.03 C 0.84,0.03 0.97,0.12 0.97,0.30 C 0.97,0.52 0.82,0.72 0.5,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Responsive Layout: Left Special Invites, Center 3D Heart, Right Special Invites */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-14 w-full perspective-[1500px]">

        {/* LEFT: Special Invites — Pullaiah & Venkatha Lakshmi */}
        <div className="order-2 lg:order-1 flex flex-col items-center justify-center text-center px-4 py-2 w-auto">
          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-5 sm:w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9A5038]" />
            <span className="text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] text-[#9A5038] uppercase whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesTitle}
            </span>
            <span className="w-5 sm:w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9A5038]" />
          </div>

          {/* Names */}
          <div className="space-y-1">
            <p className="font-cinzelDec font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3B261B] tracking-wide leading-snug whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesLeft.name1}
            </p>
            <p className="font-cinzelDec font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3B261B] tracking-wide leading-snug whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesLeft.name2}
            </p>
          </div>
        </div>

        {/* CENTER 3D TILT LOVE HEART CONTAINER */}
        <div className="order-1 lg:order-2 flex justify-center w-full max-w-[440px] sm:max-w-[480px]">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full aspect-[1/1] sm:aspect-[1/0.95] max-w-[440px] sm:max-w-[480px] mx-auto cursor-pointer"
          >
        
        {/* 1. SVG 3D HEART FRAME */}
        <svg
          viewBox="0 0 1000 960"
          className="absolute inset-0 w-full h-full pointer-events-none z-0 filter drop-shadow-[0_22px_42px_rgba(74,53,40,0.23)]"
        >
          <defs>
            <radialGradient id="heartSlabBg" cx="50%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="45%" stopColor="#FAF4EA" />
              <stop offset="85%" stopColor="#F5E8D3" />
              <stop offset="100%" stopColor="#EAD8BE" />
            </radialGradient>

            <linearGradient id="heartGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#B38F22" />
              <stop offset="100%" stopColor="#9A5038" />
            </linearGradient>
          </defs>

          {/* Heart Base Plaque */}
          <path
            d="M 500 920 C 180 700, 30 500, 30 290 C 30 120, 160 30, 310 30 C 405 30, 465 80, 500 145 C 535 80, 595 30, 690 30 C 840 30, 970 120, 970 290 C 970 500, 820 700, 500 920 Z"
            fill="url(#heartSlabBg)"
            stroke="url(#heartGoldBorder)"
            strokeWidth="6.8"
          />

          {/* Inner Dotted Filigree Ring */}
          <path
            d="M 500 890 C 195 675, 52 485, 52 290 C 52 135, 172 52, 310 52 C 395 52, 455 98, 500 158 C 545 98, 605 52, 690 52 C 828 52, 948 135, 948 290 C 948 485, 805 675, 500 890 Z"
            fill="none"
            stroke="#C87D65"
            strokeWidth="2.4"
            strokeDasharray="7.5 4"
            opacity="0.62"
          />
        </svg>

        {/* 2. 3D SPECULAR LIGHT GLARE */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
          style={{ clipPath: 'url(#scalableHeartClip)' }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 245, 200, ${glarePos.opacity}) 0%, rgba(212, 175, 55, ${glarePos.opacity * 0.4}) 35%, transparent 70%)`,
            }}
          />
        </div>

        {/* 3. MAIN CONTENT LAYERED INSIDE THE 3D HEART: ROYAL WEDDING RINGS & VECTOR TYPOGRAPHY */}
        <div 
          onClick={triggerCelebration}
          className="relative z-20 w-full h-full flex flex-col items-center justify-start pt-16 sm:pt-18 md:pt-20 px-6 sm:px-12 select-none"
        >
          <div 
            style={{ transform: 'translateZ(72px)' }} 
            className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 max-w-lg cursor-pointer hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Real Royal Interlocking Wedding Rings (Groom's 24K Band & Bride's Solitaire Diamond Ring) */}
            <div className="flex items-center justify-center mb-0.5 sm:mb-1">
              <svg viewBox="0 0 160 90" className="w-16 sm:w-20 h-auto filter drop-shadow-[0_5px_12px_rgba(212,175,55,0.42)]">
                <defs>
                  {/* Yellow Gold Gradient */}
                  <linearGradient id="goldRing1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF4C2" />
                    <stop offset="25%" stopColor="#F5BE23" />
                    <stop offset="50%" stopColor="#FFECA8" />
                    <stop offset="75%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8C6314" />
                  </linearGradient>
                  {/* Rose/Champagne Gold Gradient for 2nd Ring */}
                  <linearGradient id="goldRing2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFF9E6" />
                    <stop offset="30%" stopColor="#E5B25D" />
                    <stop offset="60%" stopColor="#FFF5D6" />
                    <stop offset="85%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#7E5410" />
                  </linearGradient>
                  {/* Solitaire Diamond Shimmer */}
                  <linearGradient id="diamondShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="35%" stopColor="#E0F7FA" />
                    <stop offset="70%" stopColor="#80DEEA" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                {/* Groom's Ring (Left Band) */}
                <ellipse cx="62" cy="50" rx="25" ry="23" fill="none" stroke="url(#goldRing1)" strokeWidth="5.5" transform="rotate(-15 62 50)" />

                {/* Bride's Ring (Right Band, interlocking) */}
                <ellipse cx="98" cy="50" rx="25" ry="23" fill="none" stroke="url(#goldRing2)" strokeWidth="5.5" transform="rotate(15 98 50)" />

                {/* Overlap Arc for realistic interlocking effect */}
                <path d="M 75 34 A 25 23 0 0 1 87 52" fill="none" stroke="url(#goldRing1)" strokeWidth="5.5" transform="rotate(-15 62 50)" />

                {/* Solitaire Diamond Crown on Bride's Ring */}
                <g transform="translate(108, 20) rotate(15)">
                  {/* Gold Crown Prongs */}
                  <path d="M -6 5 L -4 10 L 4 10 L 6 5" fill="none" stroke="#D4AF37" strokeWidth="1.6" />
                  {/* Faceted Solitaire Diamond */}
                  <polygon points="0,-8 8,0 5,8 -5,8 -8,0" fill="url(#diamondShimmer)" stroke="#D4AF37" strokeWidth="1.2" />
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.9" />
                  <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="1" opacity="0.9" />
                  {/* Diamond Sparkle Glint */}
                  <path d="M 0 -13 Q 0 -8 5 -8 Q 0 -8 0 -3 Q 0 -8 -5 -8 Q 0 -8 0 -13" fill="#FFFFFF" />
                </g>
              </svg>
            </div>

            {/* Top: Gold Line — SAVE THE DATE — Gold Line */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9A5038]" />
              <span className="text-[11px] sm:text-xs md:text-sm font-cinzel font-semibold tracking-[0.35em] sm:tracking-[0.42em] text-[#9A5038] uppercase drop-shadow-sm whitespace-nowrap">
                {t.saveTheDate.badge}
              </span>
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9A5038]" />
            </div>

            {/* Center: Large Luxury Serif Numbers `25 · 11 · 2026` */}
            <div className="flex items-center justify-center gap-2 sm:gap-3.5 my-0.5 sm:my-1">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant italic font-bold text-[#3B261B] tracking-[0.05em] leading-none drop-shadow-[0_2px_8px_rgba(74,53,40,0.18)] flex items-center gap-1.5 sm:gap-3">
                <span>25</span>
                <span className="text-xl sm:text-3xl md:text-4xl font-sans not-italic text-[#9A5038] opacity-80 leading-none">·</span>
                <span>11</span>
                <span className="text-xl sm:text-3xl md:text-4xl font-sans not-italic text-[#9A5038] opacity-80 leading-none">·</span>
                <span>2026</span>
              </h2>
            </div>

            {/* Centered Muhurtam inside the Heart */}
            <div className="flex flex-col items-center pt-2 sm:pt-3 mt-1 sm:mt-1.5 border-t border-[#D4AF37]/40 w-full max-w-[220px] sm:max-w-[280px]">
              <span className="text-[10px] sm:text-xs font-cinzel font-bold tracking-[0.22em] text-[#9A5038] uppercase">
                {t.saveTheDate.muhurtam}
              </span>
              <span className="text-sm sm:text-xl font-cormorant italic font-bold text-[#3B261B] tracking-wide mt-0.5">
                {t.saveTheDate.muhurtamTime}
              </span>
            </div>

          </div>
          </div>
        </div>
      </div>

        {/* RIGHT: Special Invites — Sathi Babu & Veera Venkata Lakshmi */}
        <div className="order-3 lg:order-3 flex flex-col items-center justify-center text-center px-4 py-2 w-auto">
          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-5 sm:w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#9A5038]" />
            <span className="text-xs sm:text-sm font-cinzel font-bold tracking-[0.25em] text-[#9A5038] uppercase whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesTitle}
            </span>
            <span className="w-5 sm:w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#9A5038]" />
          </div>

          {/* Names */}
          <div className="space-y-1">
            <p className="font-cinzelDec font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3B261B] tracking-wide leading-snug whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesRight.name1}
            </p>
            <p className="font-cinzelDec font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#3B261B] tracking-wide leading-snug whitespace-nowrap drop-shadow-sm">
              {t.saveTheDate.specialInvitesRight.name2}
            </p>
          </div>
        </div>

      </div>

      {/* Delightful Dinner Celebration Banner below the Heart in the wide space */}
      <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 text-center max-w-lg mx-auto px-4">
        <p className="text-sm sm:text-base font-cormorant italic text-[#634735] leading-relaxed mb-2.5">
          {t.saveTheDate.dinnerQuote}
        </p>
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#FAF4EA] to-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_4px_16px_rgba(74,53,40,0.08)]">
          <span className="text-sm sm:text-base">🍽️</span>
          <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-[0.18em] text-[#9A5038] uppercase">
            {t.saveTheDate.dinnerLabel}
          </span>
          <span className="text-sm sm:text-base font-cormorant italic font-bold text-[#3B261B] tracking-wide">
            {t.saveTheDate.dinnerTime}
          </span>
        </div>
      </div>

    </div>
  );
};
