export interface TimelineEvent {
  id: string;
  periodEn: string;
  periodTa: string;
  titleEn: string;
  titleTa: string;
  category: 'family_tradition' | 'approximate' | 'confirmed' | 'living_heritage';
  categoryLabelEn: string;
  categoryLabelTa: string;
  descriptionEn: string;
  descriptionTa: string;
  iconName: string;
  highlight?: boolean;
}

export const timelineData: TimelineEvent[] = [
  {
    id: "origin-400-years",
    periodEn: "400+ Years Ago",
    periodTa: "400+ ஆண்டுகளுக்கு முன்",
    titleEn: "Ancient Roots & Periyavar Tradition",
    titleTa: "பண்டைய தோற்றமும் பெரியவர் பாரம்பரியமும்",
    category: "family_tradition",
    categoryLabelEn: "Family Tradition",
    categoryLabelTa: "குடும்பப் பாரம்பரிய நம்பிக்கை",
    descriptionEn: "According to family tradition, the Kula Deivam heritage was established over four centuries ago by Periyavar, laying the spiritual foundation for generations to come in Thattanvillai, Keezha Ramanputhur.",
    descriptionTa: "குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, நான்கு நூற்றாண்டுகளுக்கு முன்னர் பெரியவரால் குலதெய்வ பாரம்பரியம் நிறுவப்பட்டு ஆன்மீக அடித்தளம் அமைக்கப்பட்டது.",
    iconName: "Flame"
  },
  {
    id: "seven-generations",
    periodEn: "Seven Generations",
    periodTa: "ஏழு தலைமுறைகள்",
    titleEn: "Continuous Family Stewardship",
    titleTa: "தலைமுறை வழிக் குடும்பக் காவல்",
    category: "living_heritage",
    categoryLabelEn: "Living Heritage",
    categoryLabelTa: "வாழும் பாரம்பரியம்",
    descriptionEn: "The temple and its sacred customs have been inherited and maintained across approximately seven generations of family devotion. Family members from distant districts gather regularly to uphold this sacred duty.",
    descriptionTa: "சுமார் ஏழு தலைமுறைகளாகக் குடும்பத்தாரின் பக்தியாலும் அர்ப்பணிப்பாலும் திருக்கோவிலும் அதன் வழிபாட்டு மரபுகளும் தொடர்ச்சியாகப் பேணப்பட்டு வருகின்றன.",
    iconName: "Users"
  },
  {
    id: "sacred-vilvam-150",
    periodEn: "150+ Years Ago",
    periodTa: "150+ ஆண்டுகளுக்கு முன்",
    titleEn: "Growth of the Sacred Vilvam Tree",
    titleTa: "புனித வில்வ மரத்தின் அவதாரம்",
    category: "approximate",
    categoryLabelEn: "Approximate Period",
    categoryLabelTa: "தோராயமான காலம்",
    descriptionEn: "The Sacred Vilvam tree took root naturally directly from the sand inside the temple compound. Older than the current temple building, it continues to produce sacred leaves used daily for deity worship.",
    descriptionTa: "கோவில் வளாகத்தினுள்ளே மணலிலிருந்து நேரடியாக இயற்கையாக வளர்ந்து தோன்றிய புனித வில்வ மரம், 150 ஆண்டுகளுக்கும் மேலாக வழிபாட்டிற்குரிய இலைகளைத் தொடர்ந்து வழங்கி வருகிறது.",
    iconName: "TreeTree"
  },
  {
    id: "temple-rebuild",
    periodEn: "Pre-2016",
    periodTa: "2016-க்கு முன்",
    titleEn: "Reconstruction of the Sacred Gopuram & Sanctum",
    titleTa: "திருக்கோவில் புனரமைப்பு",
    category: "approximate",
    categoryLabelEn: "Approximate Period",
    categoryLabelTa: "தோராயமான காலம்",
    descriptionEn: "To preserve the sacred sanctuary for future generations, the temple structure and Karuvarai Gopuram were comprehensively rebuilt with traditional stone masonry and architectural reverence.",
    descriptionTa: "எதிர்காலத் தலைமுறைகளுக்காகத் திருக்கோவில் கட்டிடமும் கருவறை கோபுரமும் பாரம்பரியக் கட்டடக்கலை நுட்பங்களுடன் புனரமைக்கப்பட்டன.",
    iconName: "Hammer"
  },
  {
    id: "kumbabishekam-2016",
    periodEn: "2016",
    periodTa: "2016",
    titleEn: "Grand Maha Kumbabishekam",
    titleTa: "மகா கும்பாபிஷேகப் பெருவிழா",
    category: "confirmed",
    categoryLabelEn: "Confirmed Date",
    categoryLabelTa: "உறுதிசெய்யப்பட்ட தேதி",
    descriptionEn: "The formal Maha Kumbabishekam consecration ceremony was grandly performed in 2016 with holy kalasa waters, Vedic chants, and multi-day family celebrations, recorded in temple archives.",
    descriptionTa: "2016 ஆம் ஆண்டு புனித கலச தீர்த்தங்கள், வேத மந்திரங்கள் மற்றும் குடும்பத்தினரின் பக்திக் கொண்டாட்டங்களுடன் மகா கும்பாபிஷேகம் விமரிசையாக நடத்தப்பட்டது.",
    iconName: "Sparkles",
    highlight: true
  },
  {
    id: "present-stewardship",
    periodEn: "Present Day",
    periodTa: "தற்போதைய காலம்",
    titleEn: "Active Devotion & Annual Kovil Kodai",
    titleTa: "தொடரும் பக்தித் தொண்டும் ஆண்டு விழாக்கள்",
    category: "living_heritage",
    categoryLabelEn: "Living Heritage",
    categoryLabelTa: "வாழும் பாரம்பரியம்",
    descriptionEn: "Family members continue active weekly Friday worship, annual Thai Kovil Kodai, Aani Varushabishekam, and Annadhanam feeds for hundreds of visitors and community devotees.",
    descriptionTa: "வெள்ளிக்கிழமை வழிபாடுகள், தை மாதம் கோவில் கொடை, ஆனி வருஷாபிஷேகம் மற்றும் நூற்றுக்கணக்கான பக்தர்களுக்கான அன்னதானத்துடன் குடும்ப வழிபாட்டு அறப்பணி தொடர்கிறது.",
    iconName: "Heart"
  },
  {
    id: "future-generations",
    periodEn: "Future Generations",
    periodTa: "எதிர்கால தலைமுறைகள்",
    titleEn: "Preserving Eternal Kula Deivam Faith",
    titleTa: "என்றுமுள குலதெய்வ நம்பிக்கை",
    category: "living_heritage",
    categoryLabelEn: "Living Heritage",
    categoryLabelTa: "வாழும் பாரம்பரியம்",
    descriptionEn: "Newborn family members are introduced to Sri Sudalaimada Swamy and the Sacred Vilvam, ensuring the Kula Deivam heritage remains vibrant across the decades to come.",
    descriptionTa: "குடும்பத்தில் பிறக்கும் குழந்தைகள் குலதெய்வ சன்னதிக்கு அழைத்து வரப்பட்டு, இந்த தெய்வீகப் பாரம்பரியம் தலைமுறை கடந்து பாதுகாக்கப்படுகிறது.",
    iconName: "ShieldCheck"
  }
];
