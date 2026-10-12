import React, { useState } from 'react';
import { X, Pause, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HangingCard {
  id: string;
  url: string;
  titleEn: string;
  titleTe: string;
  ribbonColor: string;
  objectPosition?: string;
}

const DEFAULT_HANGING_PHOTOS: HangingCard[] = [
  {
    id: 'h1',
    url: '/assets/album-2.jpg',
    titleEn: 'Sacred Garlands & Traditional Blessings',
    titleTe: 'సాంప్రదాయ పూలదండలు & పవిత్ర ఆశీస్సులు',
    ribbonColor: '#9A5038', // Terracotta Maroon
    objectPosition: 'object-top'
  },
  {
    id: 'h2',
    url: '/assets/album-1.png',
    titleEn: 'Rings of Forever • Sunset Silhouette',
    titleTe: 'శాశ్వత బంధం • ఉంగరాల వెలుగు',
    ribbonColor: '#D4AF37', // Royal Gold
    objectPosition: 'object-top'
  },
  {
    id: 'h3',
    url: '/assets/album-3.jpg',
    titleEn: 'Joyful Smiles & Timeless Togetherness',
    titleTe: 'ఆనంద క్షణాలు • కలకాలం తోడు',
    ribbonColor: '#059669', // Emerald Silk
    objectPosition: 'object-top'
  },
  {
    id: 'h4',
    url: '/assets/album-4.png',
    titleEn: 'Hand in Hand, Journey of a Lifetime',
    titleTe: 'చేయి చేయి కలిపి • నూతన ప్రయాణం',
    ribbonColor: '#C87D65', // Rose Terracotta
    objectPosition: 'object-center'
  }
];

// Silk Ribbon Bow Tie Component
const RibbonTie: React.FC<{ color: string; id: string }> = ({ color, id }) => {
  const gradId = `ribbon-grad-${id}`;
  return (
    <svg
      viewBox="0 0 60 50"
      className="w-12 h-10 sm:w-14 sm:h-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="40%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#3E2015" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Left Ribbon Loop */}
      <path
        d="M30 18 C16 4 2 12 10 24 C16 28 25 21 30 18 Z"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
      />
      {/* Inner Left Loop Depth Shadow */}
      <path
        d="M25 18 C18 11 11 15 15 21 C18 23 23 20 25 18 Z"
        fill="rgba(0,0,0,0.22)"
      />

      {/* Right Ribbon Loop */}
      <path
        d="M30 18 C44 4 58 12 50 24 C44 28 35 21 30 18 Z"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
      />
      {/* Inner Right Loop Depth Shadow */}
      <path
        d="M35 18 C42 11 49 15 45 21 C42 23 37 20 35 18 Z"
        fill="rgba(0,0,0,0.22)"
      />

      {/* Left Flowing Ribbon Tail */}
      <path
        d="M26 21 C21 28 15 38 10 46 L17 43 L21 47 C22 38 26 28 27 21 Z"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
      />

      {/* Right Flowing Ribbon Tail */}
      <path
        d="M34 21 C39 28 45 38 50 46 L43 43 L39 47 C38 38 34 28 33 21 Z"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
      />

      {/* Center Silk Knot */}
      <ellipse
        cx="30"
        cy="18"
        rx="6"
        ry="5"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
      />
      {/* Center Knot Highlight Gleam */}
      <ellipse
        cx="29"
        cy="16.5"
        rx="2.5"
        ry="1.5"
        fill="rgba(255,255,255,0.5)"
      />
    </svg>
  );
};

export const HangingPhotoMarquee: React.FC = () => {
  const { t, language } = useLanguage();
  const [photos] = useState<HangingCard[]>(DEFAULT_HANGING_PHOTOS);
  const [isPaused, setIsPaused] = useState(false);
  const [activePhoto, setActivePhoto] = useState<HangingCard | null>(null);

  // Duplicate photos array for seamless infinite marquee scroll
  const marqueeList = [...photos, ...photos];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-8 sm:my-12 overflow-hidden select-none">
      
      {/* Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-cinzel font-bold tracking-widest uppercase text-[#9A5038]">
            {t.story.memoriesTitle}
          </span>
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#634735] border border-[#C87D65]/25 text-xs font-cinzel font-semibold shadow-sm hover:shadow transition"
          title={isPaused ? t.story.resume : t.story.pause}
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-[#9A5038]" /> : <Pause className="w-3.5 h-3.5 text-[#9A5038]" />}
          <span>{isPaused ? t.story.resume : t.story.pause}</span>
        </button>
      </div>

      {/* FULL-BLEED HANGING STRING CANVAS */}
      <div className="relative w-full pt-8 pb-12 overflow-hidden">
        
        {/* Continuous Curved Golden Clothesline / String SVG */}
        <div className="absolute top-10 left-0 right-0 w-full pointer-events-none z-10">
          <svg viewBox="0 0 1200 35" preserveAspectRatio="none" className="w-full h-8 text-[#A67C1E]/50 stroke-current fill-none">
            <path d="M0,15 Q300,30 600,16 T1200,15" strokeWidth="2.5" strokeDasharray="6 3" />
          </svg>
        </div>

        {/* Continuous Right-to-Left Scrolling Track */}
        <div 
          className="animate-marquee-left flex items-start gap-6 sm:gap-8 px-4"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeList.map((card, idx) => {
            const isOdd = idx % 2 === 0;
            const title = language === 'te' ? card.titleTe : card.titleEn;
            return (
              <div
                key={`${card.id}-${idx}`}
                onClick={() => setActivePhoto(card)}
                className={`relative flex-shrink-0 w-56 sm:w-68 pt-7 cursor-pointer group transition-all duration-500 hover:scale-105 hover:z-30 ${
                  isOdd ? 'sway-card-1' : 'sway-card-2'
                }`}
              >
                {/* ELEGANT SILK RIBBON BOW TIE (TIED TO THE STRING ABOVE THE PHOTO) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <RibbonTie color={card.ribbonColor} id={`${card.id}-${idx}`} />
                </div>

                {/* Photo Card Frame */}
                <div className="relative w-full aspect-[4/5] rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-white/95 ring-1 ring-black/10 bg-[#F3EBE6]">
                  <img
                    src={card.url}
                    alt={title}
                    className={`w-full h-full object-cover ${card.objectPosition || 'object-top'} rounded-3xl group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-3 border-2 border-[#D4AF37]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto.url}
              alt={language === 'te' ? activePhoto.titleTe : activePhoto.titleEn}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-cinzel font-bold text-[#4A3528]">
                {language === 'te' ? activePhoto.titleTe : activePhoto.titleEn}
              </h4>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
