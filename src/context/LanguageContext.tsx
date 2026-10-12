import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te';

export interface Translations {
  // Hero Section
  hero: {
    invitationTitle: string;
    groom: string;
    bride: string;
    and: string;
  };
  // Countdown
  countdown: {
    title: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
    addToCalendar: string;
  };
  // Story
  story: {
    subtitle: string;
    title: string;
    quote: string;
    memoriesTitle: string;
    pause: string;
    resume: string;
  };
  // Save The Date
  saveTheDate: {
    badge: string;
    muhurtam: string;
    muhurtamTime: string;
    dinnerQuote: string;
    dinnerLabel: string;
    dinnerTime: string;
    specialInvitesTitle: string;
    specialInvitesLeft: {
      name1: string;
      name2: string;
    };
    specialInvitesRight: {
      name1: string;
      name2: string;
    };
  };
  // Wall of Blessings
  guestbook: {
    subtitle: string;
    title: string;
    description: string;
    formTitle: string;
    successMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    relationLabel: string;
    relationPlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    postButton: string;
    autoScrollBadge: string;
  };
  // Temple Venue
  venue: {
    name: string;
    subtitle: string;
    copyAddress: string;
    addressCopied: string;
    shareLocation: string;
    gpsNavigation: string;
  };
  // Footer
  footer: {
    shloka: string;
    blessingQuote: string;
    couplesTitle: string;
    eventDate: string;
    shareInvite: string;
    inviteCopied: string;
    backToTop: string;
    familiesGratitude: string;
    builtBy: string;
    craftedWith: string;
    forSpecialDay: string;
  };
  // Audio Player
  audio: {
    playing: string;
    playPrompt: string;
    muteTooltip: string;
    playTooltip: string;
  };
  // RSVP Modal
  rsvp: {
    title: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    guests: string;
    guestOptions: {
      one: string;
      two: string;
      three: string;
      four: string;
      fivePlus: string;
    };
    ceremoniesTitle: string;
    ceremonies: {
      haldi: string;
      muhurtham: string;
      sadya: string;
      reception: string;
    };
    notesLabel: string;
    notesPlaceholder: string;
    confirmButton: string;
    thankYouTitle: string;
    thankYouMessage: string;
    closeButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      invitationTitle: "Buradanarasu's Wedding Invitation",
      groom: 'PAVAN KUMAR',
      bride: 'SANTHI',
      and: 'and'
    },
    countdown: {
      title: 'Counting Down To The Auspicious Muhurtham',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      addToCalendar: 'Add To Calendar'
    },
    story: {
      subtitle: 'The Journey of Two Souls',
      title: 'Our Love Story',
      quote: '"In every prayer, in every shared dream, and beside every temple lamp, we found our forever."',
      memoriesTitle: 'Memories Tied on the Sacred Thread',
      pause: 'Pause',
      resume: 'Resume'
    },
    saveTheDate: {
      badge: 'SAVE THE DATE',
      muhurtam: 'MUHURTAM',
      muhurtamTime: '9:35 PM',
      dinnerQuote: '"Join us for a delightful dinner and an evening of celebration."',
      dinnerLabel: 'Dinner:',
      dinnerTime: '7:00 PM onwards',
      specialInvitesTitle: 'Special Invites',
      specialInvitesLeft: {
        name1: 'Pullaiah,',
        name2: 'Venkatha Lakshmi'
      },
      specialInvitesRight: {
        name1: 'Sathi Babu,',
        name2: 'Veera Venkata Lakshmi'
      }
    },
    guestbook: {
      subtitle: 'Warm Wishes',
      title: 'Wall of Blessings',
      description: 'Shower Pavan Kumar & Santhi with your love, prayers, and auspicious wishes.',
      formTitle: 'Send Your Blessings',
      successMessage: '✨ Your blessing has been added to the wall!',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Radhika Sharma',
      relationLabel: 'Relationship',
      relationPlaceholder: 'e.g. Friend / Aunt',
      cityLabel: 'City / Country',
      cityPlaceholder: 'e.g. Kakinada / Hyderabad',
      messageLabel: 'Your Blessing / Message *',
      messagePlaceholder: 'May Lord Venkateswara shower His divine blessings and happiness on Pavan Kumar & Santhi...',
      postButton: 'Post Blessing',
      autoScrollBadge: 'Auto-Scrolling • Hover to Pause'
    },
    venue: {
      name: 'Sri Sai Alekhya Functional Hall',
      subtitle: '"Katravulapalli, Samarlakota, Kakinada, Andhra Pradesh — Tap below for live turn-by-turn Google Maps navigation."',
      copyAddress: 'Copy Venue Address',
      addressCopied: 'Address Copied!',
      shareLocation: 'Share Location',
      gpsNavigation: 'Tap For Live GPS Navigation'
    },
    footer: {
      shloka: '॥ Om Namo Narayanaya ॥',
      blessingQuote: '"May the divine grace of the Almighty illuminate our new journey with joy, health, peace, and eternal togetherness."',
      couplesTitle: 'PAVAN KUMAR & SANTHI',
      eventDate: '25 November 2026 • Sri Sai Alekhya Functional Hall, Samarlakota, Andhra Pradesh',
      shareInvite: 'Share Wedding Invite',
      inviteCopied: 'Invite Copied!',
      backToTop: 'Back to Top',
      familiesGratitude: 'With love & gratitude from the Buradanarasu Family',
      builtBy: 'Powered by',
      craftedWith: 'Crafted with',
      forSpecialDay: 'for our Special Day'
    },
    audio: {
      playing: 'Playing Seetha Kalyanam',
      playPrompt: 'Play Wedding Music',
      muteTooltip: 'Pause Wedding Music',
      playTooltip: 'Play Seetha Kalyanam (Wedding Music)'
    },
    rsvp: {
      title: 'Wedding RSVP',
      fullName: 'Your Full Name *',
      fullNamePlaceholder: 'e.g. Arvind Rao',
      phone: 'Phone Number (WhatsApp) *',
      guests: 'Number of Guests',
      guestOptions: {
        one: '1 Person',
        two: '2 Persons',
        three: '3 Persons',
        four: '4 Persons',
        fivePlus: '5+ Family Members'
      },
      ceremoniesTitle: 'Ceremonies You Will Attend',
      ceremonies: {
        haldi: 'Ganesh Pooja & Haldi (24 November)',
        muhurtham: 'Sacred Muhurtham (25 November)',
        sadya: 'Grand Wedding Feast (25 November)',
        reception: 'Reception & Dinner (25 November)'
      },
      notesLabel: 'Warm Wishes / Notes for Pavan Kumar & Santhi',
      notesPlaceholder: 'Share a heartfelt blessing or message...',
      confirmButton: 'Confirm Attendance',
      thankYouTitle: 'Thank You',
      thankYouMessage: 'Your RSVP has been gratefully recorded. We are overjoyed to celebrate our special day with you!',
      closeButton: 'Close'
    }
  },
  te: {
    hero: {
      invitationTitle: 'బురదనరసు వివాహ ఆహ్వాన పత్రిక',
      groom: 'పవన్ కుమార్',
      bride: 'శాంతి',
      and: 'మరియు'
    },
    countdown: {
      title: 'శుభ ముహూర్తానికి కౌంట్‌డౌన్',
      days: 'రోజులు',
      hours: 'గంటలు',
      mins: 'నిమిషాలు',
      secs: 'సెకన్లు',
      addToCalendar: 'క్యాలెండర్‌కు జోడించండి'
    },
    story: {
      subtitle: 'రెండు మనసుల పవిత్ర బంధం',
      title: 'మా ప్రణయ గాథ',
      quote: '"ప్రతి పూజలో, ప్రతి కలయికలో, గుడి దీపాల సాక్షిగా మేము మా కలకాలం తోడును కనుగొన్నాము."',
      memoriesTitle: 'పవిత్ర దారంతో ముడిపడిన మధుర స్మృతులు',
      pause: 'ఆపు',
      resume: 'ప్రారంభించు'
    },
    saveTheDate: {
      badge: 'తేదీని గుర్తుంచుకోండి',
      muhurtam: 'శుభ ముహూర్తం',
      muhurtamTime: 'రాత్రి 9:35 గంటలకు',
      dinnerQuote: '"రుచికరమైన విందు మరియు వేడుకల సాయంత్రంలో మాతో చేరండి."',
      dinnerLabel: 'విందు:',
      dinnerTime: 'రాత్రి 7:00 గంటల నుండి',
      specialInvitesTitle: 'ప్రత్యేక ఆహ్వానం',
      specialInvitesLeft: {
        name1: 'పుల్లయ్య,',
        name2: 'వెంకట లక్ష్మి'
      },
      specialInvitesRight: {
        name1: 'సత్తి బాబు,',
        name2: 'వీర వెంకట లక్ష్మి'
      }
    },
    guestbook: {
      subtitle: 'శుభాకాంక్షలు',
      title: 'ఆశీర్వాదాల గోడ',
      description: 'పవన్ కుమార్ మరియు శాంతిలకు మీ ప్రేమ, ప్రార్థనలు మరియు శుభాకాంక్షలను అందించండి.',
      formTitle: 'మీ ఆశీస్సులను పంపండి',
      successMessage: '✨ మీ ఆశీర్వచనం విజయవంతంగా చేర్చబడింది!',
      nameLabel: 'మీ పేరు *',
      namePlaceholder: 'ఉదా. రాధిక శర్మ',
      relationLabel: 'సంబంధం / చుట్టరికం',
      relationPlaceholder: 'ఉదా. మిత్రులు / బంధువులు',
      cityLabel: 'ఊరు / నగరం',
      cityPlaceholder: 'ఉదా. కాకినాడ / హైదరాబాద్',
      messageLabel: 'మీ ఆశీర్వచన సందేశం *',
      messagePlaceholder: 'శ్రీ వేంకటేశ్వర స్వామి దివ్య అనుగ్రహంతో పవన్ కుమార్ & శాంతి దంపతులు ఆయురారోగ్య ఐశ్వర్యాలతో వర్ధిల్లాలని కోరుకుంటూ...',
      postButton: 'సందేశాన్ని పోస్ట్ చేయండి',
      autoScrollBadge: 'ఆటో స్క్రోలింగ్ • ఆపడానికి హోవర్ చేయండి'
    },
    venue: {
      name: 'శ్రీ సాయి అలేఖ్య ఫంక్షన్ హాల్',
      subtitle: '"కాత్రావులపల్లి, సామర్లకోట, కాకినాడ, ఆంధ్రప్రదేశ్ — లైవ్ గూగుల్ మ్యాప్స్ కోసం కింద నొక్కండి."',
      copyAddress: 'చిరునామా కాపీ చేయండి',
      addressCopied: 'చిరునామా కాపీ చేయబడింది!',
      shareLocation: 'లొకేషన్ షేర్ చేయండి',
      gpsNavigation: 'లైవ్ GPS నావిగేషన్ కోసం నొక్కండి'
    },
    footer: {
      shloka: '॥ ఓం నమో నారాయణాయ ॥',
      blessingQuote: '"భగవంతుని దివ్య అనుగ్రహం మా కొత్త జీవితాన్ని ఆనందం, ఆరోగ్యం, శాంతి మరియు శాశ్వతమైన ఐక్యతతో ప్రకాశింపజేయాలి."',
      couplesTitle: 'పవన్ కుమార్ & శాంతి',
      eventDate: '25 నవంబర్ 2026 • శ్రీ సాయి అలేఖ్య ఫంక్షన్ హాల్, సామర్లకోట, ఆంధ్రప్రదేశ్',
      shareInvite: 'శుభలేఖను షేర్ చేయండి',
      inviteCopied: 'శుభలేఖ కాపీ చేయబడింది!',
      backToTop: 'పైకి వెళ్ళండి',
      familiesGratitude: 'బురదనరసు కుటుంబం నుండి సదా ప్రేమ మరియు కృతజ్ఞతలతో',
      builtBy: 'పవర్డ్ బై',
      craftedWith: 'రూపొందించబడింది',
      forSpecialDay: 'మా ప్రత్యేక శుభదినం కోసం'
    },
    audio: {
      playing: 'సీత కళ్యాణం ప్లే అవుతోంది',
      playPrompt: 'మంగళ సంగీతం వినండి',
      muteTooltip: 'సంగీతం ఆపండి',
      playTooltip: 'సీత కళ్యాణం పాట వినండి'
    },
    rsvp: {
      title: 'వివాహ హాజరు నిర్ధారణ (RSVP)',
      fullName: 'మీ పూర్తి పేరు *',
      fullNamePlaceholder: 'ఉదా. అరవింద్ రావు',
      phone: 'ఫోన్ నంబర్ (వాట్సాప్) *',
      guests: 'అతిథుల సంఖ్య',
      guestOptions: {
        one: '1 వ్యక్తి',
        two: '2 వ్యక్తులు',
        three: '3 వ్యక్తులు',
        four: '4 వ్యక్తులు',
        fivePlus: '5+ కుటుంబ సభ్యులు'
      },
      ceremoniesTitle: 'మీరు పాల్గొనే శుభకార్యాలు',
      ceremonies: {
        haldi: 'గణపతి పూజ & హల్దీ (24 నవంబర్)',
        muhurtham: 'పవిత్ర ముహూర్తం (25 నవంబర్)',
        sadya: 'వివాహ భోజన విందు (25 నవంబర్)',
        reception: 'రిసెప్షన్ & విందు (25 నవంబర్)'
      },
      notesLabel: 'వధూవరులకు మీ ఆశీర్వచన సందేశం (పవన్ కుమార్ & శాంతి)',
      notesPlaceholder: 'మీ శుభాకాంక్షలు లేదా సందేశాన్ని రాయండి...',
      confirmButton: 'హాజరును ధృవీకరించండి',
      thankYouTitle: 'ధన్యవాదాలు',
      thankYouMessage: 'మీ సమాచారం విజయవంతంగా నమోదైంది. మా పెళ్లి వేడుకలో మిమ్మల్ని ఆహ్వానించడానికి మేము ఎంతో సంతోషిస్తున్నాము!',
      closeButton: 'ముగించు'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('wedding_language');
    return saved === 'te' || saved === 'en' ? (saved as Language) : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('wedding_language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
