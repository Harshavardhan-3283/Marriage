import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 select-none">
      <div className="flex flex-col items-center gap-1 p-1 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/60 shadow-[0_4px_16px_rgba(74,53,40,0.12)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.25)] transition-all duration-300">
        <div className="pt-1 pb-0.5 text-[#9A5038] flex items-center justify-center">
          <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* English Button */}
        <button
          onClick={() => setLanguage('en')}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[11px] sm:text-xs font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center justify-center ${
            language === 'en'
              ? 'bg-gradient-to-b from-[#9A5038] to-[#7B241C] text-white shadow-sm scale-100'
              : 'text-[#634735] hover:text-[#9A5038] hover:bg-[#F9ECE5]/70'
          }`}
          title="Switch to English"
        >
          EN
        </button>

        {/* Telugu Button (First letter 'తె') */}
        <button
          onClick={() => setLanguage('te')}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center leading-none ${
            language === 'te'
              ? 'bg-gradient-to-b from-[#9A5038] to-[#7B241C] text-white shadow-sm scale-100'
              : 'text-[#634735] hover:text-[#9A5038] hover:bg-[#F9ECE5]/70'
          }`}
          title="తెలుగులోకి మార్చండి"
        >
          తె
        </button>
      </div>
    </div>
  );
};
