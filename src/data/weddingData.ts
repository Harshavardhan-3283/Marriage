import type { CoupleProfile, CeremonyEvent, Milestone, BlessingMessage, ContactPerson } from '../types';

export const weddingData: {
  couple: CoupleProfile;
  events: CeremonyEvent[];
  milestones: Milestone[];
  initialBlessings: BlessingMessage[];
  contacts: ContactPerson[];
  hotelRecommendations: Array<{ name: string; distance: string; rating: string; phone: string }>;
} = {
  couple: {
    groom: {
      name: "Pavan Kumar",
      fullName: "Pavan Kumar",
      role: "The Groom",
      parents: "Son of the Buradanarasu Family",
      about: "A warm, dedicated soul with a vibrant spirit and immense love for family, laughter, and timeless traditions.",
      instagram: "@pavankumar"
    },
    bride: {
      name: "Santhi",
      fullName: "Santhi",
      role: "The Bride",
      parents: "Daughter of the Family",
      about: "A graceful, kind-hearted soul whose joyful smile brings brightness and warmth to everyone around her.",
      instagram: "@santhi"
    },
    weddingDate: "2026-11-25T21:35:00+05:30",
    venue: {
      name: "Sri Sai Alekhya Functional Hall",
      temple: "Katravulapalli, Samarlakota",
      city: "Kakinada",
      state: "Andhra Pradesh",
      country: "India",
      mapUrl: "https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6",
    }
  },

  events: [
    {
      id: "haldi-mehendi",
      title: "Ganesh Pooja & Haldi",
      subtitle: "The Golden Glow & Auspicious Beginnings",
      date: "Tuesday, 24 Nov 2026",
      time: "04:30 PM onwards",
      venue: "Sri Sai Alekhya Functional Hall",
      address: "Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh",
      dressCode: "Festive Indian / Haldi Sunshine Yellow & Pastels",
      dressColor: "#F59E0B",
      description: "A joyful evening of sacred blessings, turmeric paste ceremonies, traditional music, and cheerful celebration.",
      iconName: "Sparkles",
      mapUrl: "https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ganesh+Pooja+%26+Haldi+-+Pavan+Kumar+%26+Santhi&dates=20261124T110000Z/20261124T150000Z&details=Haldi+and+Pooja+Celebration+for+Pavan+Kumar+and+Santhi&location=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh"
    },
    {
      id: "muhurtham",
      title: "The Sacred Muhurtham",
      subtitle: "The Auspicious Union of Two Souls",
      date: "Wednesday, 25 Nov 2026",
      time: "09:35 PM onwards",
      auspiciousTime: "Auspicious Muhurtham: 09:35 PM (Sumuhurtham)",
      venue: "Sri Sai Alekhya Functional Hall",
      address: "Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh",
      dressCode: "Traditional Wedding Attire / Pattu Silk",
      dressColor: "#D4AF37",
      description: "The sacred Vedic wedding rituals, chanting of mantras, exchange of garlands, and tying of the holy Mangalasutram.",
      iconName: "Heart",
      mapUrl: "https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sacred+Muhurtham+-+Pavan+Kumar+%26+Santhi+Wedding&dates=20261125T033000Z/20261125T063000Z&details=Auspicious+Muhurtham+at+Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota&location=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh"
    },
    {
      id: "sadya",
      title: "Grand Wedding Feast (Bhojanam)",
      subtitle: "A Traditional Culinary Feast & Celebration",
      date: "Wednesday, 25 Nov 2026",
      time: "12:30 PM - 03:00 PM",
      venue: "Sri Sai Alekhya Functional Hall Dining",
      address: "Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh",
      dressCode: "Traditional / Elegant",
      dressColor: "#10B981",
      description: "A sumptuous authentic traditional Andhra wedding feast with delectable delicacies and divine sweets.",
      iconName: "Utensils",
      mapUrl: "https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Feast+-+Pavan+Kumar+%26+Santhi&dates=20261125T070000Z/20261125T093000Z&details=Traditional+Feast+for+Pavan+Kumar+and+Santhi+Wedding&location=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh"
    },
    {
      id: "reception",
      title: "Grand Reception & Dinner",
      subtitle: "An Enchanting Evening of Celebration & Blessings",
      date: "Wednesday, 25 Nov 2026",
      time: "07:00 PM onwards",
      venue: "Sri Sai Alekhya Functional Hall",
      address: "Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh",
      dressCode: "Festive Ethnic / Royal Pastels",
      dressColor: "#C87D65",
      description: "A celebratory evening of joyful memories, blessings from elders, delicious dinner buffet, and family togetherness.",
      iconName: "Music",
      mapUrl: "https://maps.app.goo.gl/hmU4tT1AsntZ3Uxu6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Grand+Reception+-+Pavan+Kumar+%26+Santhi&dates=20261125T133000Z/20261125T173000Z&details=Evening+Reception+for+Pavan+Kumar+and+Santhi&location=Sri+Sai+Alekhya+Functional+Hall,+Katravulapalli,+Samarlakota,+Andhra+Pradesh"
    }
  ],

  milestones: [
    {
      year: "November 2022",
      title: "A Serendipitous Encounter",
      description: "Met at a heritage art and classical music festival in Fort Kochi. A casual chat over warm spiced tea turned into hours of timeless conversation.",
      tag: "First Sight"
    },
    {
      year: "December 2023",
      title: "The Backwater Journey",
      description: "Traveling through the serene backwaters of Alleppey, sharing dreams, favorite books, and discovering how beautifully our worlds aligned.",
      tag: "Our Journey"
    },
    {
      year: "October 2024",
      title: "Under The Auspicious Stars",
      description: "With blessings from both families and a ring exchanged with heartfelt joy, Pavan Kumar asked the big question and Santhi said a joyful yes!",
      tag: "The Proposal"
    },
    {
      year: "November 2026",
      title: "The Auspicious Union",
      description: "Embarking on a lifetime of shared love, laughter, tradition, and togetherness surrounded by the divine blessings at Sri Sai Alekhya Functional Hall.",
      tag: "Forever & Always"
    }
  ],

  initialBlessings: [
    {
      id: "b1",
      name: "Dr. K. Narayanan",
      relation: "Family Elder",
      message: "May Lord Venkateswara shower His divine grace and eternal blessings on dear Pavan Kumar and Santhi as you begin this sacred journey together.",
      timestamp: "Yesterday",
      city: "Kakinada"
    },
    {
      id: "b2",
      name: "Ananya & Rahul",
      relation: "Cousins & Friends",
      message: "Wishing you both a lifetime filled with immense joy, shared adventures, endless laughter, and beautiful moments! Can't wait to celebrate!",
      timestamp: "2 days ago",
      city: "Bengaluru"
    },
    {
      id: "b3",
      name: "Priya Menon",
      relation: "College Best Friend",
      message: "Seeing two of the kindest souls united brings tears of pure happiness to my eyes. You two are truly made for each other!",
      timestamp: "3 days ago",
      city: "Kochi"
    }
  ],

  contacts: [
    {
      name: "Shri. Ramachandran Nair (Groom's Father)",
      relation: "Groom's Family Helpline",
      phone: "+91 98470 12345",
      whatsapp: "919847012345"
    },
    {
      name: "Shri. Venugopal Menon (Bride's Father)",
      relation: "Bride's Family Helpline",
      phone: "+91 94471 67890",
      whatsapp: "919447167890"
    },
    {
      name: "Arjun Nair (Wedding Coordinator)",
      relation: "Travel & Stay Hospitality Desk",
      phone: "+91 97455 11223",
      whatsapp: "919745511223"
    }
  ],

  hotelRecommendations: [
    {
      name: "Kalyan Heritage Resort & Suites",
      distance: "1.2 km from Temple East Nada",
      rating: "4.8 / 5.0",
      phone: "+91 487 255 1200"
    },
    {
      name: "Sowparnika Grand Palace Hotel",
      distance: "500m from Temple South Gate",
      rating: "4.7 / 5.0",
      phone: "+91 487 255 8899"
    },
    {
      name: "Bhasuri Inn Luxury Stay",
      distance: "800m from Temple West Nada",
      rating: "4.6 / 5.0",
      phone: "+91 487 255 6833"
    }
  ]
};
