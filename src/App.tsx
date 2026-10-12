import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HeroSection } from './components/HeroSection';
import { CountdownBanner } from './components/CountdownBanner';
import { CoupleStory } from './components/CoupleStory';
import { EventSchedule } from './components/EventSchedule';
import { Guestbook } from './components/Guestbook';
import { Footer } from './components/Footer';
import { RSVPModal } from './components/RSVPModal';
import { AudioPlayer } from './components/AudioPlayer';
import { FallingPetals } from './components/FallingPetals';

export const App: React.FC = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#4A3528] selection:bg-[#F9ECE5] selection:text-[#9A5038] relative">
        
        {/* Top Right Language Switcher Button (English / తెలుగు) */}
        <LanguageSwitcher />

        {/* Continuous Falling Flower Petals Shower (Lotus, Marigold, Rose & Gold Sparkles) */}
        <FallingPetals />

        {/* Main Content Sections */}
        <main>
          {/* 1. Pure Full-Screen Hero Wedding Invitation (Web & Mobile) */}
          <HeroSection />

        {/* 2. Live Countdown & Action Buttons */}
        <div id="countdown-banner">
          <CountdownBanner />
        </div>

        {/* 3. The Couple Story, Hanging Photo Marquee & 3D Save The Date */}
        <CoupleStory />

        {/* 4. Wall of Blessings / Guestbook */}
        <Guestbook />

        {/* 5. Guruvayur Shri Krishna Temple (Google Maps Location & Live Directions) */}
        <EventSchedule />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive RSVP Modal */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />

      {/* Floating Ambient Temple Chimes Player */}
      <AudioPlayer />
    </div>
  </LanguageProvider>
  );
};

export default App;
