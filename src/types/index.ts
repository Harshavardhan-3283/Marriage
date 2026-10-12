export interface CoupleProfile {
  groom: {
    name: string;
    fullName: string;
    role: string;
    parents: string;
    about: string;
    instagram?: string;
  };
  bride: {
    name: string;
    fullName: string;
    role: string;
    parents: string;
    about: string;
    instagram?: string;
  };
  weddingDate: string; // ISO string or formatted
  venue: {
    name: string;
    temple: string;
    city: string;
    state: string;
    country: string;
    mapUrl: string;
    coordinates?: { lat: number; lng: number };
  };
}

export interface CeremonyEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  dressColor: string;
  description: string;
  iconName: string;
  mapUrl: string;
  calendarUrl: string;
  auspiciousTime?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface BlessingMessage {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  city?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'moments' | 'rituals' | 'portraits';
}

export interface ContactPerson {
  name: string;
  relation: string;
  phone: string;
  whatsapp: string;
}
