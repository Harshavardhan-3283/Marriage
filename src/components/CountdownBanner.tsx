import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { weddingData } from '../data/weddingData';
import { CountdownTimer } from './CountdownTimer';

export const CountdownBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 py-12 sm:py-16 bg-gradient-to-b from-[#FAF7F2] via-[#FDF5F0] to-[#FAF7F2] border-y border-[#C87D65]/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
        
        {/* Banner Title */}
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm md:text-base font-cinzel font-bold uppercase tracking-[0.25em] text-[#9A5038]">
            {t.countdown.title}
          </span>
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full">
          <CountdownTimer targetDate={weddingData.couple.weddingDate} />
        </div>

        {/* Calendar Action Button */}
        <div className="flex items-center justify-center pt-2">
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pavan+Kumar+%26+Santhi+Wedding&dates=20261125T040000Z/20261125T160000Z&details=Auspicious+Wedding+Celebration+at+Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Kakinada,+Andhra+Pradesh&location=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#FFFDF9] text-[#4A3528] font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-md hover:shadow-lg border border-[#C87D65]/30 hover:border-[#D4AF37] hover:scale-105 transition duration-300"
          >
            <Calendar className="w-4 h-4 text-[#9A5038]" />
            {t.countdown.addToCalendar}
          </a>
        </div>

      </div>
    </section>
  );
};
