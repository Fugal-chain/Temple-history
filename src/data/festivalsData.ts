export interface FestivalEvent {
  id: string;
  nameEn: string;
  nameTa: string;
  dateRuleEn: string;
  dateRuleTa: string;
  monthEn: string;
  monthTa: string;
  isMajor: boolean;
  durationEn?: string;
  durationTa?: string;
  descriptionEn: string;
  descriptionTa: string;
  traditionsEn: string[];
  traditionsTa: string[];
  image: string;
  isPlaceholder: boolean;
  estimatedNextDate: string; // ISO string YYYY-MM-DD
}

export interface KovilKodaiSchedule {
  day1: {
    morningEn: string[];
    morningTa: string[];
    eveningEn: string[];
    eveningTa: string[];
    timeEvents: { time: string; eventEn: string; eventTa: string }[];
  };
  day2: { time: string; eventEn: string; eventTa: string }[];
  day3: { time: string; eventEn: string; eventTa: string }[];
  annadhanamInfo: {
    foodTypeEn: string;
    foodTypeTa: string;
    participantsEn: string;
    participantsTa: string;
    dishesEn: string[];
    dishesTa: string[];
  };
}

export interface VarushabishekamDetails {
  monthEn: string;
  monthTa: string;
  startTime: string;
  firstWorshipEn: string;
  firstWorshipTa: string;
  performancesEn: string[];
  performancesTa: string[];
  oottuPadappu: {
    preparedByEn: string;
    preparedByTa: string;
    timingEn: string;
    timingTa: string;
    foodsEn: string[];
    foodsTa: string[];
    offeredToEn: string[];
    offeredToTa: string[];
  };
}

export const kovilKodaiData: KovilKodaiSchedule = {
  day1: {
    morningEn: ["Ganapathi Homam", "Abishekam"],
    morningTa: ["கணபதி ஹோமம்", "சிறப்பு அபிஷேகம்"],
    eveningEn: ["Thiru Vilakku Pooja"],
    eveningTa: ["திருவிளக்கு பூஜை"],
    timeEvents: [
      { time: "8:00 PM", eventEn: "Annadhanam / Night Tiffin", eventTa: "அன்னதானம் / சிற்றுண்டி" },
      { time: "9:00 PM", eventEn: "Naiyandi Melam Performance", eventTa: "நையாண்டி மேளம் கலை நிகழ்ச்சி" },
      { time: "10:00 PM", eventEn: "Villupattu Traditional Storytelling", eventTa: "வில்லுப்பாட்டு இசை நிகழ்ச்சி" }
    ]
  },
  day2: [
    { time: "12:00 AM", eventEn: "First Pooja to Sri Sastha / Ayyanar", eventTa: "ஸ்ரீ சாஸ்தா / அய்யனார் முதல் வழிபாடு" },
    { time: "2:00 AM", eventEn: "Worship of Mutharamman, Muthishvarar, Bathirakali & Uchinimakali", eventTa: "முத்தாரம்மன், முத்தீஸ்வரர், பத்ரகாளி, உச்சினிமாகாளி வழிபாடு" },
    { time: "12:00 PM", eventEn: "Grand Worship of Sudalaimada Swamy, Brothers & All Amman Deities", eventTa: "சுடலைமாட சுவாமி, சகோதரர்கள் & அம்மன் தெய்வங்கள் மகா உச்சி பூஜை" },
    { time: "1:00 PM", eventEn: "Grand Annadhanam Feast (500–700 Devotees)", eventTa: "பெருந்திரள் அன்னதானம் (500–700 பக்தர்கள்)" },
    { time: "6:00 PM", eventEn: "Kaalan Worship with Manjal Kidaram Ritual", eventTa: "காலன் சுவாமி வழிபாடு & மஞ்சள் கிடாரம் சடங்கு" },
    { time: "After 8:00 PM", eventEn: "Evening Annadhanam & Continuing Villupattu", eventTa: "இரவு அன்னதானம் & வில்லுப்பாட்டு தொடர்ச்சி" }
  ],
  day3: [
    { time: "12:00 AM", eventEn: "Sudalaimada Swamy & Brother Worship with Poo Padappu (Flower Offering)", eventTa: "சுடலைமாட சுவாமி & சகோதரர்கள் பூ படைப்பு வழிபாடு" },
    { time: "4:00 AM", eventEn: "Sudalaimadan Worship with Pongal Vazhipaadu (Morning Sacraments)", eventTa: "சுடலைமாடன் பொங்கல் வழிபாடு (அதிகாலை நிறைவுப் பூஜை)" }
  ],
  annadhanamInfo: {
    foodTypeEn: "Pure Vegetarian Traditional Feast",
    foodTypeTa: "பாரம்பரிய தூய சைவ விருந்து",
    participantsEn: "Approximately 500–700 devotees and community members",
    participantsTa: "சுமார் 500–700 பக்தர்கள் மற்றும் ஊர் மக்கள்",
    dishesEn: ["Rice", "Sambar", "Rasam", "Aviyal", "Vazhaikai", "Pickle", "Payasam"],
    dishesTa: ["சாதம்", "சாம்பார்", "ரசம்", "அவியல்", "வாழைக்காய் கூட்டு", "ஊறுகாய்", "பாயாசம்"]
  }
};

export const varushabishekamData: VarushabishekamDetails = {
  monthEn: "Aani (June – July)",
  monthTa: "ஆனி மாதம்",
  startTime: "12:00 PM",
  firstWorshipEn: "First worship begins at Sri Sastha",
  firstWorshipTa: "முதல் வழிபாடு ஸ்ரீ சாஸ்தாவிடம் தொடங்குகிறது",
  performancesEn: ["Kaniyan Koothu", "Thappattai Traditional Folk Music"],
  performancesTa: ["கணியான் கூத்து", "தப்பாட்டம் நாட்டுப்புற இசை"],
  oottuPadappu: {
    preparedByEn: "Prepared immediately before worship by the temple chef",
    preparedByTa: "வழிபாட்டிற்குத் தொட்டுமுன் கோவில் சமையல் கலைஞரால் தயாரிக்கப்படுகிறது",
    timingEn: "Prepared fresh right before 12:00 PM noon worship",
    timingTa: "நண்பகல் 12 மணி வழிபாட்டிற்குச் சற்று முன் புதியதாகப் படைக்கப்படுகிறது",
    foodsEn: ["Rice", "Sambar", "Papadam", "Sundai Vathal", "Aviyal", "Pickle", "Other traditional preparations"],
    foodsTa: ["சாதம்", "சாம்பார்", "அப்பளம்", "சுண்டை வத்தல்", "அவியல்", "ஊறுகாய்", "பாரம்பரியப் பதார்த்தங்கள்"],
    offeredToEn: ["Sudalaimadan", "Mundan", "Brahmasakthi", "Pechiamman", "Palavesakarar"],
    offeredToTa: ["சுடலைமாடன்", "முண்டன்", "பிரம்மசக்தி", "பேச்சியம்மன்", "தளவாய் பலவேசக்காரர்"]
  }
};

export const festivalsData: FestivalEvent[] = [
  {
    id: "kovil-kodai",
    nameEn: "Kovil Kodai Annual Festival",
    nameTa: "கோவில் கொடை மகா திருவிழா",
    dateRuleEn: "Last Friday of Thai month (January / February)",
    dateRuleTa: "தை மாதம் கடைசி வெள்ளிக்கிழமை",
    monthEn: "Thai (January – February)",
    monthTa: "தை மாதம்",
    isMajor: true,
    durationEn: "3 Days & 2 Nights",
    durationTa: "3 நாட்கள் & 2 இரவுகள்",
    descriptionEn: "The principal annual festival of the temple. Family members gather from across Tamil Nadu and other states. Features traditional Villupattu storytelling, Naiyandi Melam, Thiru Vilakku Pooja, Poo Padappu, Manjal Kidaram, and Grand Annadhanam feeding over 500-700 people.",
    descriptionTa: "திருக்கோவிலின் மிக முக்கிய ஆண்டுக் திருவிழா. குடும்ப உறுப்பினர்கள் அனைவரும் ஒன்று கூடி, வில்லுப்பாட்டு, நையாண்டி மேளம், திருவிளக்கு பூஜை, பூ படைப்பு, மஞ்சள் கிடாரம் மற்றும் 500-700 பேருக்குப் பெருந்திரள் அன்னதானத்துடன் சிறப்பிக்கப்படும் தெய்வீக விழா.",
    traditionsEn: ["Villupattu Storytelling", "Naiyandi Melam", "Thiru Vilakku Pooja", "Poo Padappu", "Manjal Kidaram", "Grand Annadhanam"],
    traditionsTa: ["வில்லுப்பாட்டு", "நையாண்டி மேளம்", "திருவிளக்கு பூஜை", "பூ படைப்பு", "மஞ்சள் கிடாரம்", "பெருந்திரள் அன்னதானம்"],
    image: "/images/kovil-kodai-festival.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextThaiLastFriday()
  },
  {
    id: "pongal",
    nameEn: "Thai Pongal",
    nameTa: "தை பொங்கல் திருநாள்",
    dateRuleEn: "Thai 1 (January 14 / 15)",
    dateRuleTa: "தை மாதம் 1-ம் நாள்",
    monthEn: "Thai (January)",
    monthTa: "தை மாதம்",
    isMajor: true,
    descriptionEn: "The temple compound is beautifully decorated with sugarcane so that it visually resembles a vibrant sugarcane field. Sweet Pongal is cooked inside the temple with family participation and fresh seasonal vegetables offered in worship.",
    descriptionTa: "கோவில் வளாகம் கரும்புகளால் அலங்கரிக்கப்பட்டு, கரும்புக்காடு போலக் காட்சியளிக்கும். கோவில் வளாகத்தினுள்ளேயே சர்க்கரைப் பொங்கல் பொங்கப்பட்டு, காய்கறிகளுடன் சுவாமிக்குச் சிறப்பு வழிபாடு நடைபெறும்.",
    traditionsEn: ["Sugarcane Temple Decoration", "Temple Pongal Cooking", "Family Gathering", "Fresh Vegetable Offerings"],
    traditionsTa: ["கரும்பு அலங்காரம்", "கோவில் பொங்கல் தயாரிப்பு", "குடும்ப வழிபாட்டுச் சங்கமம்", "காய்கறி நைவேத்தியம்"],
    image: "/images/hero-temple.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextThai1Date()
  },
  {
    id: "varushabishekam",
    nameEn: "Varushabishekam",
    nameTa: "வருஷாபிஷேகம்",
    dateRuleEn: "Annual date in Aani month (June / July)",
    dateRuleTa: "ஆனி மாதம் நியமிக்கப்படும் நாள்",
    monthEn: "Aani (June – July)",
    monthTa: "ஆனி மாதம்",
    isMajor: true,
    descriptionEn: "Commemorating the consecration of the rebuilt sanctuary. Begins at 12:00 PM starting with worship at Sri Sastha. Features the unique 'Ootu Padappu' freshly prepared by the temple chef and offered to Sudalaimadan and guardian deities, accompanied by Kaniyan Koothu and Thappattai traditional music.",
    descriptionTa: "மகா கும்பாபிஷேக நினைவு நாள் சிறப்பு வழிபாடு. நண்பகல் 12 மணிக்குச் சாஸ்தா வழிபாட்டுடன் தொடங்கி, கோவில் சமையல் கலைஞரால் உடனுக்குடன் தயாரிக்கப்படும் 'ஊட்டுப் படைப்பு' நைவேத்தியத்துடன், கணியான் கூத்து மற்றும் தப்பாட்ட இசையுடன் விமரிசையாக நடைபெறும்.",
    traditionsEn: ["Ootu Padappu Feast", "Kaniyan Koothu Performance", "Thappattai Music", "Sastha First Worship"],
    traditionsTa: ["ஊட்டுப் படைப்பு", "கணியான் கூத்து", "தப்பாட்டம் இசை", "சாஸ்தா முதல் வழிபாடு"],
    image: "/images/sastha-ayyanar.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextAaniDate()
  },
  {
    id: "panguni-uthiram",
    nameEn: "Panguni Uthiram (Sastha Jayanthi)",
    nameTa: "பங்குனி உத்திரம் (சாஸ்தா அவதார நாள்)",
    dateRuleEn: "Panguni Uthiram Day (March / April)",
    dateRuleTa: "பங்குனி உத்திர நன்னாள்",
    monthEn: "Panguni (March – April)",
    monthTa: "பங்குனி மாதம்",
    isMajor: false,
    descriptionEn: "Celebrated as the birthday of Sri Sastha / Ayyanar. Special worship takes place at 12:00 PM noon. Devotees and young family members lovingly offer chocolates to Sri Sastha.",
    descriptionTa: "ஸ்ரீ சாஸ்தா / அய்யனாரின் அவதாரத் திருநாளாகக் கொண்டாடப்படுகிறது. நண்பகல் 12 மணிக்குச் சிறப்புப் பூஜையும், சாஸ்தாவுக்குப் பக்தர்கள் சாக்கலேட் மற்றும் இனிப்புகளைக் காணிக்கையாக வழங்குவதும் சிறப்பம்சமாகும்.",
    traditionsEn: ["12 PM Noon Worship", "Chocolate Offerings to Sastha", "Sandalwood Paste Alankaram"],
    traditionsTa: ["நண்பகல் 12 மணி உச்சிப் பூஜை", "சாஸ்தாவுக்குச் சாக்கலேட் நிவேதனம்", "சந்தனக் காப்பு அலங்காரம்"],
    image: "/images/sastha-ayyanar.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextPanguniUthiramDate()
  },
  {
    id: "tamil-new-year",
    nameEn: "Tamil New Year (Puthandu)",
    nameTa: "தமிழ் வருடப் பிறப்பு",
    dateRuleEn: "April 14",
    dateRuleTa: "சித்திரை 1 (ஏப்ரல் 14)",
    monthEn: "Chithirai (April)",
    monthTa: "சித்திரை மாதம்",
    isMajor: false,
    descriptionEn: "New Year worship with elaborate arrangements of fresh seasonal fruits, traditional vegetables, flowers, and special lamps.",
    descriptionTa: "புதிய தமிழாண்டின் தொடக்கத்தில் முக்கனிகள், காய்கறிகள், புதிய பூக்கள் மற்றும் நெய் விளக்குகளுடன் சிறப்பு வழிபாடு நடைபெறும்.",
    traditionsEn: ["Fruit & Vegetable Decor", "Special Morning Pooja", "Family Blessings"],
    traditionsTa: ["கனி காய்கறி நைவேத்தியம்", "காலை சிறப்புப் பூஜை", "குடும்ப நல்வாழ்த்து வழிபாடு"],
    image: "/images/hero-temple.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextApril14Date()
  },
  {
    id: "saraswathi-pooja",
    nameEn: "Saraswathi Pooja & Vijayadasami",
    nameTa: "சரஸ்வதி பூஜை & விஜயதசமி",
    dateRuleEn: "Purattasi / Aippasi (September / October)",
    dateRuleTa: "புரட்டாசி / ஐப்பசி மாதம்",
    monthEn: "Purattasi / Aippasi",
    monthTa: "புரட்டாசி / ஐப்பசி",
    isMajor: false,
    descriptionEn: "Special worship with deep spiritual significance for Mutharamman Devi. Books, tools, and traditional implements are placed for divine blessings.",
    descriptionTa: "அன்னை முத்தாரம்மனுக்குச் சிறப்பு முக்கியத்துவம் வாய்ந்த வழிபாடு. ஏடுகள், கருவிகள் மற்றும் தொழிற்கருவிகள் வைக்கப்பட்டு அருள் பெறப்படும் நாள்.",
    traditionsEn: ["Mutharamman Special Alankaram", "Book & Tool Worship", "Thiru Vilakku Lighting"],
    traditionsTa: ["முத்தாரம்மன் சிறப்பு அலங்காரம்", "ஏடு & கருவி பூஜை", "திருவிளக்கு ஏற்றுதல்"],
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true,
    estimatedNextDate: getNextSaraswathiPoojaDate()
  }
];

// Helper functions for dynamic countdown dates based on real current date
function getNextThaiLastFriday(): string {
  const now = new Date();
  let year = now.getFullYear();
  // Thai last Friday is roughly late January or early February
  let target = new Date(year, 1, 10); // Feb 10 reference
  if (target < now) {
    target = new Date(year + 1, 1, 10);
  }
  return target.toISOString().split('T')[0];
}

function getNextThai1Date(): string {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 0, 15);
  if (target < now) {
    target = new Date(year + 1, 0, 15);
  }
  return target.toISOString().split('T')[0];
}

function getNextAaniDate(): string {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 5, 25); // Late June
  if (target < now) {
    target = new Date(year + 1, 5, 25);
  }
  return target.toISOString().split('T')[0];
}

function getNextPanguniUthiramDate(): string {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 2, 28); // Late March
  if (target < now) {
    target = new Date(year + 1, 2, 28);
  }
  return target.toISOString().split('T')[0];
}

function getNextApril14Date(): string {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 3, 14);
  if (target < now) {
    target = new Date(year + 1, 3, 14);
  }
  return target.toISOString().split('T')[0];
}

function getNextSaraswathiPoojaDate(): string {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 9, 12); // October 12 reference
  if (target < now) {
    target = new Date(year + 1, 9, 12);
  }
  return target.toISOString().split('T')[0];
}
