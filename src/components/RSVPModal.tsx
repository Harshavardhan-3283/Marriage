import React, { useState } from 'react';
import { X, CheckCircle, Heart, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guestsCount: '2',
    attendingEvents: ['muhurtham', 'sadya', 'reception'],
    dietary: 'traditional-sadya',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (eventId: string) => {
    setFormData(prev => {
      const exists = prev.attendingEvents.includes(eventId);
      return {
        ...prev,
        attendingEvents: exists
          ? prev.attendingEvents.filter(id => id !== eventId)
          : [...prev.attendingEvents, eventId]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Save to local storage
    const savedRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    savedRSVPs.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('wedding_rsvps', JSON.stringify(savedRSVPs));

    setIsSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C87D65', '#9A5038', '#F59E0B']
    });
  };

  const ceremonyOptions = [
    { id: 'haldi', label: t.rsvp.ceremonies.haldi },
    { id: 'muhurtham', label: t.rsvp.ceremonies.muhurtham },
    { id: 'sadya', label: t.rsvp.ceremonies.sadya },
    { id: 'reception', label: t.rsvp.ceremonies.reception },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden my-8 animate-in fade-in zoom-in duration-300">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#FDF5F0] via-[#FAF7F2] to-[#F9ECE5] px-6 py-5 border-b border-[#C87D65]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#9A5038] fill-[#9A5038]" />
            <h3 className="text-xl font-cinzel font-bold text-[#4A3528]">
              {t.rsvp.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#634735] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#F9ECE5] rounded-full flex items-center justify-center mx-auto text-[#9A5038] border-2 border-[#D4AF37]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-cinzel font-bold text-[#4A3528]">
                {t.rsvp.thankYouTitle}, {formData.name}!
              </h4>
              <p className="text-sm font-cormorant text-[#634735] italic max-w-sm mx-auto text-base">
                {t.rsvp.thankYouMessage}
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-2.5 rounded-full bg-[#9A5038] text-white font-cinzel font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-[#7B241C] transition"
              >
                {t.rsvp.closeButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-cinzel font-semibold text-[#634735] mb-1">
                  {t.rsvp.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.rsvp.fullNamePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] focus:ring-1 focus:ring-[#9A5038] outline-none text-sm bg-[#FAF7F2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-cinzel font-semibold text-[#634735] mb-1">
                    {t.rsvp.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] focus:ring-1 focus:ring-[#9A5038] outline-none text-sm bg-[#FAF7F2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-cinzel font-semibold text-[#634735] mb-1">
                    {t.rsvp.guests}
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] focus:ring-1 focus:ring-[#9A5038] outline-none text-sm bg-[#FAF7F2]"
                  >
                    <option value="1">{t.rsvp.guestOptions.one}</option>
                    <option value="2">{t.rsvp.guestOptions.two}</option>
                    <option value="3">{t.rsvp.guestOptions.three}</option>
                    <option value="4">{t.rsvp.guestOptions.four}</option>
                    <option value="5+">{t.rsvp.guestOptions.fivePlus}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-cinzel font-semibold text-[#634735] mb-2">
                  {t.rsvp.ceremoniesTitle}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                  {ceremonyOptions.map(evt => (
                    <label
                      key={evt.id}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#C87D65]/20 cursor-pointer hover:bg-[#F9ECE5] transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.attendingEvents.includes(evt.id)}
                        onChange={() => handleCheckboxChange(evt.id)}
                        className="rounded text-[#9A5038] focus:ring-[#9A5038]"
                      />
                      <span className="text-[#4A3528] font-medium">{evt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-cinzel font-semibold text-[#634735] mb-1">
                  {t.rsvp.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.rsvp.notesPlaceholder}
                  className="w-full px-4 py-2 rounded-xl border border-[#C87D65]/30 focus:border-[#9A5038] focus:ring-1 focus:ring-[#9A5038] outline-none text-sm bg-[#FAF7F2]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#9A5038] to-[#7B241C] text-white font-cinzel font-bold text-xs tracking-widest uppercase shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 border border-[#D4AF37]/40"
              >
                <Send className="w-4 h-4" />
                {t.rsvp.confirmButton}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
