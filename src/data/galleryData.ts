export interface GalleryItem {
  id: string;
  titleEn: string;
  titleTa: string;
  category: 'Temple' | 'Sacred Vilvam' | 'Deities' | 'Kovil Kodai' | 'Kumbabishekam 2016' | 'Family Heritage';
  categoryTa: 'திருக்கோவில்' | 'புனித வில்வம்' | 'தெய்வங்கள்' | 'கோவில் கொடை' | 'கும்பாபிஷேகம் 2016' | 'குடும்ப பாரம்பரியம்';
  year: string;
  image: string;
  captionEn: string;
  captionTa: string;
  isPlaceholder: boolean;
  isPrivate?: boolean;
}

export const galleryCategories = [
  "All",
  "Temple",
  "Sacred Vilvam",
  "Deities",
  "Kovil Kodai",
  "Kumbabishekam 2016",
  "Family Heritage"
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    titleEn: "Sanctum Gopuram at Dusk",
    titleTa: "அந்தி வேளையில் கோவில் கோபுரம்",
    category: "Temple",
    categoryTa: "திருக்கோவில்",
    year: "2016",
    image: "/images/hero-temple.jpg",
    captionEn: "The sacred stone gopuram illuminated with traditional oil lamps during evening worship.",
    captionTa: "மாலை நேர வழிபாட்டின் போது விளக்கு ஒளியில் மிளிரும் திருக்கோவில் கோபுரம்.",
    isPlaceholder: true
  },
  {
    id: "gal-2",
    titleEn: "Sacred 150+ Year Old Vilvam Tree",
    titleTa: "150+ ஆண்டுகள் தொன்மையான புனித வில்வ மரம்",
    category: "Sacred Vilvam",
    categoryTa: "புனித வில்வம்",
    year: "Living Heritage",
    image: "/images/sacred-vilvam-tree.jpg",
    captionEn: "The ancient Vilvam tree growing directly from sand in the temple compound, decorated for Kovil Kodai.",
    captionTa: "கோவில் வளாகத்தினுள்ளே மணலிலிருந்து நேரடியாக வளர்ந்து நிற்கும் புனித வில்வ மரம்.",
    isPlaceholder: true
  },
  {
    id: "gal-3",
    titleEn: "Sri Sudalaimada Swamy Sanctum",
    titleTa: "ஸ்ரீ சுடலைமாட சுவாமி கருவறை",
    category: "Deities",
    categoryTa: "தெய்வங்கள்",
    year: "2016",
    image: "/images/sudalaimada-swamy.jpg",
    captionEn: "The main deity Sri Sudalaimada Swamy draped in pure white dhoti and adorned with sacred angi.",
    captionTa: "வெள்ளாடை உடுத்தி, அங்கி அலங்காரத்துடன் அருள்பாலிக்கும் பிரதான மூர்த்தி சுடலைமாட சுவாமி.",
    isPlaceholder: true
  },
  {
    id: "gal-4",
    titleEn: "Mutharamman Sacred Arrangement",
    titleTa: "அன்னை முத்தாரம்மன் வழிபாட்டுத் தலம்",
    category: "Deities",
    categoryTa: "தெய்வங்கள்",
    year: "2016",
    image: "/images/mutharamman-sanctum.jpg",
    captionEn: "Sacred Trishulam trident and ceremonial sword adorned with red Arali flowers and oil lamps.",
    captionTa: "சிவப்பு அரளி மலர்கள் மற்றும் நெய் விளக்குகளால் அலங்கரிக்கப்பட்ட புனித திரிசூலப் பீடம்.",
    isPlaceholder: true
  },
  {
    id: "gal-5",
    titleEn: "Sri Sastha / Ayyanar Rounded Form",
    titleTa: "ஸ்ரீ சாஸ்தா / அய்யனார் அருள் திருமேனி",
    category: "Deities",
    categoryTa: "தெய்வங்கள்",
    year: "2016",
    image: "/images/sastha-ayyanar.jpg",
    captionEn: "The elder guardian deity Sri Sastha in rounded stone form decorated with sandalwood and kumkum.",
    captionTa: "சந்தனக் காப்பு அலங்காரத்தில் அருள்மிகு சாஸ்தா அய்யனார்.",
    isPlaceholder: true
  },
  {
    id: "gal-6",
    titleEn: "Thiru Vilakku Pooja during Kovil Kodai",
    titleTa: "கோவில் கொடையில் திருவிளக்கு பூஜை",
    category: "Kovil Kodai",
    categoryTa: "கோவில் கொடை",
    year: "Annual Tradition",
    image: "/images/kovil-kodai-festival.jpg",
    captionEn: "Devotional atmosphere during Day 1 evening Thiru Vilakku Pooja with glowing brass oil lamps.",
    captionTa: "கொடை முதல் நாள் மாலையில் ஆயிரக்கணக்கான விளக்குகளின் ஒளியில் நடைபெறும் திருவிளக்கு பூஜை.",
    isPlaceholder: true
  },
  {
    id: "gal-7",
    titleEn: "Grand Kumbabishekam Consecration",
    titleTa: "மகா கும்பாபிஷேக நன்னாள்",
    category: "Kumbabishekam 2016",
    categoryTa: "கும்பாபிஷேகம் 2016",
    year: "2016",
    image: "/images/hero-temple.jpg",
    captionEn: "Historical consecration ceremony performed with holy kalasa waters in 2016.",
    captionTa: "2016 ஆம் ஆண்டு நடைபெற்ற மகா கும்பாபிஷேகப் பெருவிழாவின் புனித நிகழ்வு.",
    isPlaceholder: true
  },
  {
    id: "gal-8",
    titleEn: "Poo Padappu Midnight Ritual",
    titleTa: "நள்ளிரவு பூ படைப்புச் சடங்கு",
    category: "Kovil Kodai",
    categoryTa: "கோவில் கொடை",
    year: "Annual Tradition",
    image: "/images/kovil-kodai-festival.jpg",
    captionEn: "Traditional Poo Padappu flower offering ceremony performed during Day 3 midnight.",
    captionTa: "கொடை மூன்றாம் நாள் நள்ளிரவில் சுவாமிக்குச் செய்யப்படும் பூ படைப்பு வழிபாடு.",
    isPlaceholder: true
  },
  {
    id: "gal-9",
    titleEn: "Seven Generations Family Heritage Archives",
    titleTa: "ஏழு தலைமுறை குடும்ப வரலாற்று ஆவணங்கள்",
    category: "Family Heritage",
    categoryTa: "குடும்ப பாரம்பரியம்",
    year: "1600s – Present",
    image: "/images/hero-temple.jpg",
    captionEn: "Family lineage records and historical oral tradition archives. Restricted for private family access in V1.",
    captionTa: "குடும்ப வம்சாவழி பதிவுகள். V1 பதிப்பில் குடும்ப உறுப்பினர்களின் தனிப்பட்ட பார்வைக்கு ஒதுக்கப்பட்டுள்ளது.",
    isPlaceholder: true,
    isPrivate: true
  }
];
