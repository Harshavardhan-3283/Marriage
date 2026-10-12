import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HangingPhotoMarquee } from './HangingPhotoMarquee';
import { SaveTheDate3D } from './SaveTheDate3D';

export const CoupleStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="pt-16 sm:pt-24 pb-4 sm:pb-6 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative top lotus divider */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#C87D65]"></span>
        <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-white shadow-sm">
          <Heart className="w-5 h-5 text-[#C87D65] fill-[#C87D65]/20" />
        </div>
        <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#C87D65]"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-cinzel font-semibold tracking-[0.3em] uppercase text-[#9A5038]">
            {t.story.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#4A3528] mt-2 mb-3">
            {t.story.title}
          </h2>
          <p className="text-sm sm:text-base font-cormorant italic text-[#634735] leading-relaxed">
            {t.story.quote}
          </p>
        </div>

        {/* HANGING PHOTOS STRING MARQUEE (CONTINUOUSLY MOVING RIGHT TO LEFT) */}
        <HangingPhotoMarquee />

        {/* CREATIVE 3D GRAPHICS SAVE THE DATE INVITATION */}
        <SaveTheDate3D />

      </div>
    </section>
  );
};
