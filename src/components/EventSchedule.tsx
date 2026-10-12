import React, { useState } from 'react';
import { MapPin, Copy, Check, ExternalLink, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const EventSchedule: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const venue = {
    name: t.venue.name,
    subtitle: 'Sacred Wedding Ceremony & Muhurtham',
    address: 'Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh',
    landmark: 'Sri Sai Alekhya Functional Hall',
    directionsUrl: 'https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6',
    embedUrl: 'https://maps.google.com/maps?q=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed'
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Wedding Venue - ${venue.name}`,
          text: `Join us for the wedding at ${venue.name}, ${venue.address}`,
          url: venue.directionsUrl,
        });
      } catch {
        navigator.clipboard.writeText(venue.directionsUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(venue.directionsUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="ceremonies" className="pt-20 sm:pt-28 pb-12 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#3B261B] mt-1 mb-3">
          {venue.name}
        </h2>
        <p className="text-sm sm:text-base font-cormorant italic text-[#634735] max-w-xl mx-auto">
          {t.venue.subtitle}
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white hover:bg-[#FDF5F0] text-[#9A5038] font-cinzel font-semibold text-xs sm:text-sm tracking-wider border border-[#C87D65]/30 transition shadow-md hover:scale-105"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#C87D65]" />}
            {copied ? t.venue.addressCopied : t.venue.copyAddress}
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white hover:bg-[#FDF5F0] text-[#634735] font-cinzel font-semibold text-xs sm:text-sm tracking-wider border border-[#C87D65]/30 transition shadow-md hover:scale-105"
          >
            <Share2 className="w-4 h-4 text-[#9A5038]" />
            {t.venue.shareLocation}
          </button>
        </div>
      </div>

      {/* 2. FULL-BLEED LEFT-TO-RIGHT GOOGLE MAP */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] bg-[#E5E3DF] border-y-2 border-[#D4AF37]/50 shadow-inner group">
        <iframe
          title={`Google Map - ${venue.name}`}
          src={venue.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Direct Directions Button on Map */}
        <a
          href={venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#9A5038] to-[#7B241C] text-white px-4 py-2 rounded-full shadow-xl border border-[#D4AF37]/70 text-[11px] sm:text-xs font-cinzel font-bold hover:scale-105 transition-all duration-300"
        >
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t.venue.gpsNavigation}</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

    </section>
  );
};
