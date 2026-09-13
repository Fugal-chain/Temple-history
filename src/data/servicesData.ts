export interface TempleService {
  id: string;
  nameEn: string;
  nameTa: string;
  descriptionEn: string;
  descriptionTa: string;
  processEn: string[];
  processTa: string[];
  notesEn?: string;
  notesTa?: string;
}

export const servicesData: TempleService[] = [
  {
    id: "offerings",
    nameEn: "Deity Offerings & Worship Items",
    nameTa: "சுவாமி வழிபாட்டுக் காணிக்கைகள்",
    descriptionEn: "Devotees can arrange traditional offerings including flower garlands, white dhoti, red saree drapes, and oil lamp contributions.",
    descriptionTa: "மலர் மாலைகள், வெண்வஸ்திரம், சிவப்புப் புடவை, நெய் விளக்குகள் போன்ற பாரம்பரியக் காணிக்கைகளை வழங்க ஏற்பாடு செய்யலாம்.",
    processEn: [
      "Contact the temple family before your visit",
      "Specify your intended worship offering (Garlands, Oil, Dhoti/Saree)",
      "The family will coordinate and welcome you at the temple during open hours"
    ],
    processTa: [
      "வருகைக்கு முன் கோவில் குடும்பத்தினரைத் தொடர்பு கொள்ளவும்",
      "தாங்கள் வழங்க விரும்பும் காணிக்கையைக் குறிப்பிடவும்",
      "கோவில் திறக்கும் நேரத்தில் குடும்பத்தினர் உங்களை வரவேற்று வழிநடத்துவர்"
    ]
  },
  {
    id: "annadhanam",
    nameEn: "Annadhanam Sacred Food Contribution",
    nameTa: "அன்னதானத் திருப்பணி",
    descriptionEn: "Annadhanam is a major pillar during Kovil Kodai and annual festivals, feeding 500-700 people traditional vegetarian meals.",
    descriptionTa: "கோவில் கொடையின் போது 500-700 பக்தர்களுக்குத் தூய சைவ உணவு வழங்கும் அன்னதான அறப்பணி பிரதானமானது.",
    processEn: [
      "Contributions can include monetary support, fresh vegetables (sambar, aviyal ingredients), rice, or payasam items",
      "Reach out through the temple contact form or family members",
      "All Annadhanam offerings are prepared fresh inside the temple kitchen"
    ],
    processTa: [
      "பொருள் உதவி, காய்கறிகள், அரிசி அல்லது தானியங்கள் வழியே பங்களிக்கலாம்",
      "கோவில் தொடர்புப் படிவம் மூலம் குடும்பத்தினரைத் தொடர்பு கொள்ளவும்",
      "அனைத்து அன்னதான உணவுகளும் கோவில் மடைப்பள்ளியில் தூய்மையாகத் தயாரிக்கப்படுகின்றன"
    ]
  },
  {
    id: "special-pooja",
    nameEn: "Special Pooja & Family Prayers",
    nameTa: "சிறப்பு ஆராதனை & குடும்பப் பிரார்த்தனை",
    descriptionEn: "Families seeking special prayers for family peace, child well-being, or express gratitude to Sri Sudalaimada Swamy and Mutharamman.",
    descriptionTa: "குடும்ப நலம், குழவிகள் நல்வாழ்வு மற்றும் சுடலைமாட சுவாமி - முத்தாரம்மன் அருள் பெறச் செய்யப்படும் சிறப்பு வழிபாடு.",
    processEn: [
      "Visitor contacts temple family with request details",
      "Family discusses ritual schedule and dates",
      "Family confirms arrangements and guides worship"
    ],
    processTa: [
      "பக்தர்கள் தங்கள் வழிபாட்டுக் கோரிக்கையைத் தெரிவித்துத் தொடர்பு கொள்ளவும்",
      "குடும்பத்தினர் உகந்த நாள் மற்றும் ஆராதனை நேரத்தைக் கலந்தாலோசிப்பர்",
      "குடும்பத்தினர் வழிபாட்டை உறுதிசெய்து நேரில் வழிநடத்துவர்"
    ]
  }
];

export const visitInfo = {
  addressEn: "Thattanvillai, Keezha Ramanputhur, Kanyakumari District, Tamil Nadu, India - 629004",
  addressTa: "தட்டான்விளை, கீழ இராமன்புதூர், கன்னியாகுமரி மாவட்டம், தமிழ்நாடு - 629004",
  mapsUrl: "https://maps.app.goo.gl/g9VJVNf7TCT2we7z6",
  openingHoursEn: "Every Friday & Festival Days: 6:00 PM – 10:00 PM",
  openingHoursTa: "ஒவ்வொரு வெள்ளிக்கிழமை & திருவிழா நாட்களில்: மாலை 6:00 - இரவு 10:00",
  morningWorship: false,
  morningWorshipNoticeEn: "Please note: No regular morning worship hours on standard weekdays. Temple opens in the evening.",
  morningWorshipNoticeTa: "குறிப்பு: சாதாரண நாட்களில் காலை நேர வழிபாடு கிடையாது. கோவில் மாலை வேளையில் மட்டுமே திறக்கப்படும்.",
  dressGuidanceEn: "Visitors are welcome to wear comfortable clothing suitable for a temple visit. We kindly request everyone to avoid clothing that is excessively revealing or overly casual, helping maintain the peaceful and respectful atmosphere of the temple.",
  dressGuidanceTa: "கோவிலின் அமைதியான மற்றும் தெய்வ சாந்நித்யம் நிறைந்த சூழலைப் பேண, பக்தர்கள் பாரம்பரிய அல்லது கண்ணியமான ஆடை அணிந்து வர அன்புடன் வேண்டப்படுகிறார்கள்.",
  transportEn: [
    { mode: "Local Bus", detail: "Ramanputhur Junction Bus Stop / Hindu College Bus Stop (Walking distance)" },
    { mode: "Train", detail: "Nagercoil Junction Railway Station (~4-5 km away)" },
    { mode: "Airport", detail: "Trivandrum International Airport (TRV) (~70 km away)" }
  ],
  transportTa: [
    { mode: "பேருந்து", detail: "இராமன்புதூர் சந்திப்பு / ஹிந்து கல்லூரி பேருந்து நிறுத்தம் (நடக்கும் தொலைவு)" },
    { mode: "ரயில்வே", detail: "நாகர்கோவில் ஜங்ஷன் ரயில் நிலையம் (~4-5 கி.மீ)" },
    { mode: "விமானம்", detail: "திருவனந்தபுரம் சர்வதேச விமான நிலையம் (~70 கி.மீ)" }
  ],
  facilitiesEn: {
    parking: "No dedicated temple parking lot. Nearby normal roadside parking spaces are available.",
    restrooms: "No public restroom facility available inside the temple compound.",
    pets: "Pets are not permitted inside the temple grounds.",
    offerings: "Personal worship offerings can be brought directly inside."
  },
  facilitiesTa: {
    parking: "தனியாகத் தனியுரிமை வாகனம் நிறுத்துமிடம் இல்லை. அருகில் சாதாரண வீதி வாகன நிறுத்துமிடங்கள் உள்ளன.",
    restrooms: "கோவில் வளாகத்தினுள் பொதுக் கழிப்பறை வசதி இல்லை.",
    pets: "கோவிலுக்குள் செல்லப் பிராணிகளுக்கு அனுமதி இல்லை.",
    offerings: "வழிபாட்டுப் பொருட்களை நேரடியாகக் கொண்டு வரலாம்."
  }
};
