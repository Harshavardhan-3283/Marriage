import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { t } = useLanguage();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.mins, value: timeLeft.minutes },
    { label: t.countdown.secs, value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5">
        {units.map((unit, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center">
              {/* Clean, Elegant Counter Box (No Neon/Blur Glow) */}
              <div className="flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-2xl border border-[#C87D65]/25 shadow-md hover:border-[#D4AF37] transition-all duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl font-cinzel font-bold text-[#3B261B] tracking-wider leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[11px] font-cinzel tracking-widest text-[#9A5038] uppercase font-bold mt-1.5">
                  {unit.label}
                </span>
              </div>
            </div>
            {idx < units.length - 1 && (
              <span className="text-lg sm:text-2xl font-cinzel text-[#9A5038] font-bold self-center -mt-1">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
