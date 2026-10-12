import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AudioPlayer: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/assets/wedding-music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handleTimeUpdate = () => {
      // Loop seamlessly after first 1 minute (60 seconds)
      if (audio.currentTime >= 60) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        className={`group flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl transition-all duration-500 border backdrop-blur-md ${
          isPlaying
            ? 'bg-[#C87D65]/90 text-white border-[#D4AF37] shadow-[#C87D65]/30'
            : 'bg-white/90 text-[#634735] border-[#C87D65]/30 hover:border-[#C87D65]'
        }`}
        title={isPlaying ? t.audio.muteTooltip : t.audio.playTooltip}
      >
        <div className="relative">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 w-4">
              <span className="w-1 bg-white animate-[bounce_1s_infinite_100ms] rounded-full h-full"></span>
              <span className="w-1 bg-white animate-[bounce_1s_infinite_300ms] rounded-full h-3"></span>
              <span className="w-1 bg-white animate-[bounce_1s_infinite_200ms] rounded-full h-5"></span>
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#C87D65] group-hover:scale-110 transition-transform" />
          )}
        </div>

        <span className="text-xs font-cinzel font-semibold tracking-wider hidden sm:inline">
          {isPlaying ? t.audio.playing : t.audio.playPrompt}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-white" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#8FA89B]" />
        )}
      </button>
    </div>
  );
};
