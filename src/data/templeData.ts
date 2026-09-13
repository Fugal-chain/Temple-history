export interface TempleInfo {
  name: {
    ta: string;
    en: string;
  };
  motto: {
    ta: string;
    en: string;
  };
  type: string;
  typeTa: string;
  location: {
    address: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    mapsUrl: string;
    landmarks: string[];
  };
  management: {
    type: string;
    typeTa: string;
    generations: number;
    descriptionEn: string;
    descriptionTa: string;
  };
  heritage: {
    originalAge: string;
    originalAgeTa: string;
    rebuild: string;
    rebuildTa: string;
    kumbabishekamYear: number;
  };
}

export interface SacredVilvamInfo {
  age: string;
  ageTa: string;
  locationEn: string;
  locationTa: string;
  naturallyGrown: boolean;
  stillLiving: boolean;
  leavesUsedInWorship: boolean;
  associatedWithLordShiva: boolean;
  templeNamedAfterTree: boolean;
  girthEstimate: string;
  girthEstimateTa: string;
  growsFromSand: boolean;
  familyBeliefEn: string;
  familyBeliefTa: string;
  festivalDecoration: boolean;
  isPlaceholder: boolean;
  placeholderNotice: string;
}

export const templeData: TempleInfo = {
  name: {
    ta: "வில்வமூடு ஸ்ரீ சிவ சுடலைமாட சுவாமி திருக்கோவில்",
    en: "Vilvamoodu Sri Siva Sudalaimada Swamy Temple"
  },
  motto: {
    ta: "புனித வில்வத்தில் வேரூன்றி, தலைமுறைகள் தோறும் பாதுகாக்கப்படும் பாரம்பரியம்.",
    en: "Rooted in the Sacred Vilvam. Preserved Through Generations."
  },
  type: "Family Kula Deivam Temple",
  typeTa: "குடும்ப குலதெய்வ திருக்கோவில்",
  location: {
    address: "Thattanvillai, Keezha Ramanputhur",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    country: "India",
    pincode: "629004",
    mapsUrl: "https://maps.app.goo.gl/g9VJVNf7TCT2we7z6",
    landmarks: [
      "Ramanputhur Junction",
      "Hindu College Bus Stop",
      "Nagercoil Railway Station (~4-5 km)"
    ]
  },
  management: {
    type: "Family managed",
    typeTa: "குடும்ப நிர்வாகம்",
    generations: 7,
    descriptionEn: "Preserved across approximately seven generations of family stewardship. Family members travel from various districts and states to gather during Kovil Kodai, bringing newborn family members to receive the blessings of the Kula Deivam.",
    descriptionTa: "ஏழு தலைமுறைகளாகக் குடும்பத்தாரால் பேணிப் பாதுகாக்கப்படுகிறது. கோவில் கொடையின் போது பல்வேறு மாவட்டங்களிலிருந்தும் மாநிலங்களிலிருந்தும் குடும்ப உறுப்பினர்கள் ஒன்று கூடி, பிறந்த குழந்தைகளை அழைத்து வந்து குலதெய்வ அருள் பெறுகின்றனர்."
  },
  heritage: {
    originalAge: "400+ years according to family tradition",
    originalAgeTa: "குடும்பப் பாரம்பரிய நம்பிக்கையின்படி 400+ ஆண்டுகள் தொன்மை வாய்ந்தது",
    rebuild: "Temple was rebuilt before the 2016 Kumbabishekam",
    rebuildTa: "2016 மகா கும்பாபிஷேகத்திற்கு முன்னதாகக் கோவில் புனரமைக்கப்பட்டது",
    kumbabishekamYear: 2016
  }
};

export const sacredVilvamData: SacredVilvamInfo = {
  age: "150+ years",
  ageTa: "150+ ஆண்டுகள்",
  locationEn: "Inside temple compound, right side of the Gopuram when viewed from the main entrance",
  locationTa: "கோவில் வளாகத்திற்குள், பிரதான நுழைவாயிலில் இருந்து பார்க்கும் போது கோபுரத்தின் வலது புறம்",
  naturallyGrown: true,
  stillLiving: true,
  leavesUsedInWorship: true,
  associatedWithLordShiva: true,
  templeNamedAfterTree: true,
  girthEstimate: "Approximately two people can hug the trunk",
  girthEstimateTa: "சுமார் இரண்டு நபர்கள் அணைக்கும் அளவு தடிமனான அடிமரம்",
  growsFromSand: true,
  familyBeliefEn: "According to family tradition, the presence of the Sacred Vilvam tree is believed to be a divine boon from Lord Shiva. Older than the current temple structure, it grows directly from the sand, continuously producing leaves used in daily worship and decorated with lights and garlands during festivals.",
  familyBeliefTa: "குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, இந்த புனித வில்வ மரம் சிவபெருமானின் பெருங்கருணையாகக் கருதப்படுகிறது. தற்போதைய கோவில் கட்டிடத்தை விடப் பழமையான இம்மரம், மணலிலிருந்து நேரடியாக வளர்ந்து, வழிபாட்டிற்குரிய வில்வ இலைகளைத் தொடர்ந்து வழங்கி வருகிறது.",
  festivalDecoration: true,
  isPlaceholder: true,
  placeholderNotice: "PLACEHOLDER — REPLACE WITH ORIGINAL MEDIA"
};

export const mediaPolicy = {
  v1UsePlaceholders: true,
  placeholderTag: "PLACEHOLDER — REPLACE WITH ORIGINAL MEDIA",
  officialMediaPolicyEn: "Only family-owned media, temple-authorized photographs, and official event recordings are utilized for heritage publication. Third-party or web map imagery is referenced strictly for planning purpose.",
  officialMediaPolicyTa: "குடும்பப் பாரம்பரிய ஊடகங்கள், கோவில் அதிகாரப்பூர்வ புகைப்படங்கள் மற்றும் வீடியோக்கள் மட்டுமே பயன்படுத்தப்படுகின்றன.",
  futureOriginalMedia: [
    "Original 2016 Kumbabishekam ceremony video",
    "2016 Kumbabishekam overhead temple photograph",
    "Actual deity photographs & sanctum views",
    "Actual Sacred Vilvam tree photographs",
    "Kovil Kodai & Varushabishekam photographs",
    "Family-approved historical documents and archives"
  ]
};
