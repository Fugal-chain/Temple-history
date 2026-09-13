export type Language = 'ta' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    ourStory: string;
    deities: string;
    sacredVilvam: string;
    kovilKodai: string;
    templeMap: string;
    heritageGallery: string;
    calendar: string;
    visit: string;
    contact: string;
  };
  opening: {
    enterButton: string;
    replayOpening: string;
    audioToggle: string;
    skip: string;
  };
  hero: {
    subtitle: string;
    exploreStory: string;
    interactiveMap: string;
    kulaDeivamTitle: string;
  };
  pillars: {
    title: string;
    subtitle: string;
    vilvamTitle: string;
    vilvamSubtitle: string;
    kulaDeivamTitle: string;
    kulaDeivamSubtitle: string;
    sevenGenTitle: string;
    sevenGenSubtitle: string;
  };
  common: {
    placeholderBadge: string;
    viewDetails: string;
    close: string;
    backToHome: string;
    followOrder: string;
    stopOrder: string;
    step: string;
    nextStep: string;
    prevStep: string;
    countdownTitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    filterAll: string;
    officialMediaNotice: string;
    languageName: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailPhoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitButton: string;
    successMessage: string;
    note: string;
  };
  footer: {
    rights: string;
    locationShort: string;
    managedBy: string;
    mediaDisclaimer: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  ta: {
    nav: {
      home: "முகப்பு",
      ourStory: "எங்கள் பாரம்பரியம்",
      deities: "தெய்வங்கள்",
      sacredVilvam: "புனித வில்வம்",
      kovilKodai: "கோவில் கொடை",
      templeMap: "கோவில் வரைபடம்",
      heritageGallery: "வரலாற்றுத் தளம்",
      calendar: "நாட்காட்டி",
      visit: "வருகை தருக",
      contact: "தொடர்பு கொள்ள"
    },
    opening: {
      enterButton: "திருக்கோவிலுக்குள் நுழைக",
      replayOpening: "ஆரம்ப அனுபவத்தை மீண்டும் காண்க",
      audioToggle: "மணி ஒலி / இசை",
      skip: "நேரடியாக நுழைக"
    },
    hero: {
      subtitle: "புனித வில்வத்தில் வேரூன்றி, தலைமுறைகள் தோறும் பாதுகாக்கப்படும் பாரம்பரியம்.",
      exploreStory: "எங்கள் வரலாற்றைக் காண்க",
      interactiveMap: "வரைபடத்தில் காண்க",
      kulaDeivamTitle: "தலைமுறை காக்கும் குலதெய்வக் கோவில்"
    },
    pillars: {
      title: "திருக்கோவிலின் மூன்று தூண்கள்",
      subtitle: "பக்தியும், இயற்கையும், தலைமுறை வழிக் காவலும் இணைந்த புனித பூமி",
      vilvamTitle: "புனித வில்வம்",
      vilvamSubtitle: "150+ ஆண்டுகள் பழமையான புனித மரம், மணலிலிருந்து உயர்ந்து சிவபெருமானின் அருளாக மிளிர்கிறது.",
      kulaDeivamTitle: "குலதெய்வ அருள்",
      kulaDeivamSubtitle: "ஸ்ரீ சுடலைமாட சுவாமி முதன்மை மூர்த்தியாகவும் குடும்பக் காவலராகவும் அருள்பாலிக்கிறார்.",
      sevenGenTitle: "ஏழு தலைமுறைகள்",
      sevenGenSubtitle: "சுமார் ஏழு தலைமுறைகளாகக் குடும்பத்தாரால் தொடர்ச்சியாகப் பேணிப் பாதுகாக்கப்படும் பாரம்பரியம்."
    },
    common: {
      placeholderBadge: "மாதிரிப் படம் — அசல் படங்கள் பின்னர் மாற்றப்படும்",
      viewDetails: "விவரங்களைக் காண்க",
      close: "மூடுக",
      backToHome: "முகப்பிற்குத் திரும்புக",
      followOrder: "பாரம்பரிய வழிபாட்டு வரிசையைப் பின்பற்றுக",
      stopOrder: "வரிசைப் பார்வையை நிறுத்துக",
      step: "படி",
      nextStep: "அடுத்த தலம்",
      prevStep: "முந்தைய தலம்",
      countdownTitle: "அடுத்த கோவில் கொடை வரை",
      days: "நாட்கள்",
      hours: "மணி",
      minutes: "நிமிடம்",
      seconds: "விநாடி",
      filterAll: "அனைத்தும்",
      officialMediaNotice: "அதிகாரப்பூர்வ ஊடகக் கொள்கை: குடும்பச் சொந்தமான மற்றும் கோவில் அனுமதிபெற்ற அசல் படங்கள் மட்டுமே பயன்படுத்தப்படும்.",
      languageName: "தமிழ்"
    },
    contact: {
      title: "திருக்கோவிலைத் தொடர்பு கொள்ள",
      subtitle: "வழிபாடுகள், காணிக்கைகள் மற்றும் தகவல்களுக்குக் குடும்ப உறுப்பினர்களுக்குச் செய்தி அனுப்புங்கள்.",
      nameLabel: "உங்கள் பெயர்",
      emailPhoneLabel: "மின்னஞ்சல் அல்லது தொலைபேசி எண்",
      subjectLabel: "பொருள்",
      messageLabel: "உங்கள் செய்தி",
      submitButton: "செய்தி அனுப்புக",
      successMessage: "உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! கோவில் குடும்பத்தினர் விரைவில் உங்களைத் தொடர்பு கொள்வர்.",
      note: "அனைத்துச் செய்திகளும் கோவில் குடும்ப உறுப்பினர்களால் நேரடியாகப் பரிசீலிக்கப்படும்."
    },
    footer: {
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      locationShort: "தட்டான்விளை, கீழ இராமன்புதூர், கன்னியாகுமரி மாவட்டம், தமிழ்நாடு - 629004",
      managedBy: "ஏழு தலைமுறை குடும்ப அறக்கட்டளை பராமரிப்பு",
      mediaDisclaimer: "V1 மாதிரி ஊடகப் பதிப்பு — அசல் படங்கள் விரைவில் மாற்றப்படும்."
    }
  },
  en: {
    nav: {
      home: "Home",
      ourStory: "Our Story",
      deities: "Deities",
      sacredVilvam: "Sacred Vilvam",
      kovilKodai: "Kovil Kodai",
      templeMap: "Temple Map",
      heritageGallery: "Heritage Gallery",
      calendar: "Calendar",
      visit: "Visit",
      contact: "Contact"
    },
    opening: {
      enterButton: "Enter the Temple",
      replayOpening: "Replay Sacred Opening",
      audioToggle: "Temple Bell Sound",
      skip: "Skip Opening"
    },
    hero: {
      subtitle: "Rooted in the Sacred Vilvam. Preserved Through Generations.",
      exploreStory: "Explore Our Heritage",
      interactiveMap: "Interactive Map",
      kulaDeivamTitle: "Seven Generations of Kula Deivam Stewardship"
    },
    pillars: {
      title: "Three Pillars of Divine Faith",
      subtitle: "Where nature, devotion, and ancestral duty merge into a sacred sanctuary",
      vilvamTitle: "Sacred Vilvam",
      vilvamSubtitle: "150+ year living tree growing directly from the sand, believed to be a divine boon from Lord Shiva.",
      kulaDeivamTitle: "Kula Deivam Sanctuary",
      kulaDeivamSubtitle: "Sri Sudalaimada Swamy as principal deity and eternal protector of the family and devotees.",
      sevenGenTitle: "Seven Generations",
      sevenGenSubtitle: "A living heritage and sacred family duty preserved continuously across approximately seven generations."
    },
    common: {
      placeholderBadge: "PLACEHOLDER — REPLACE WITH ORIGINAL MEDIA",
      viewDetails: "View Details",
      close: "Close",
      backToHome: "Back to Home",
      followOrder: "Follow Traditional Worship Order",
      stopOrder: "Stop Guided Order",
      step: "Step",
      nextStep: "Next Sacred Spot",
      prevStep: "Previous Spot",
      countdownTitle: "Countdown to Next Kovil Kodai",
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs",
      filterAll: "All Archives",
      officialMediaNotice: "Official Website Media Policy: Only family-owned and temple-authorized original media will be featured.",
      languageName: "English"
    },
    contact: {
      title: "Contact the Temple",
      subtitle: "Send a respectful inquiry regarding worship, offerings, or visits directly to the family stewards.",
      nameLabel: "Your Full Name",
      emailPhoneLabel: "Email or Phone Number",
      subjectLabel: "Subject",
      messageLabel: "Your Message",
      submitButton: "Send Message",
      successMessage: "Thank you for reaching out! Your message has been received by the temple family stewards.",
      note: "Messages are handled respectfully by temple family members."
    },
    footer: {
      rights: "All Rights Reserved.",
      locationShort: "Thattanvillai, Keezha Ramanputhur, Kanyakumari District, Tamil Nadu - 629004",
      managedBy: "Seven Generations Family Heritage Stewardship",
      mediaDisclaimer: "V1 Placeholder Edition — All media marked internal placeholder."
    }
  }
};
