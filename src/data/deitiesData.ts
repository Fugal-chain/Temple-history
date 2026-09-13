export interface Deity {
  id: string;
  nameEn: string;
  nameTa: string;
  aliases?: string[];
  roleEn: string;
  roleTa: string;
  isMajor: boolean;
  formEn?: string;
  formTa?: string;
  traditionStatus?: 'confirmed' | 'family_tradition' | 'sacred_arrangement';
  attributesEn?: string[];
  attributesTa?: string[];
  offeringsEn?: string[];
  offeringsTa?: string[];
  specialAssociationEn?: string;
  specialAssociationTa?: string;
  worshipDetailsEn?: string;
  worshipDetailsTa?: string;
  sanctumLocationEn?: string;
  sanctumLocationTa?: string;
  image: string;
  isPlaceholder: boolean;
}

export const deitiesData: Deity[] = [
  {
    id: "sudalaimadan",
    nameEn: "Sri Sudalaimada Swamy",
    nameTa: "ஸ்ரீ சுடலைமாட சுவாமி",
    aliases: ["Sudalaimadan", "Sudalai Swamy"],
    roleEn: "Main Deity & Family Guardian",
    roleTa: "பிரதான மூர்த்தி & குடும்ப காவல் தெய்வம்",
    isMajor: true,
    formEn: "Standing stone idol (No Shiva Lingam)",
    formTa: "நின்ற கோலக் கல் சிலை (சிவ லிங்கம் இல்லை)",
    traditionStatus: "confirmed",
    attributesEn: [
      "Wears white dhoti",
      "Adorned with sacred metallic angi covering",
      "Holds traditional Ponthanthadi staff",
      "Holds traditional protective Aruval (sickle-sword)"
    ],
    attributesTa: [
      "வெள்ளை வேட்டி அணிவிப்பு",
      "அங்கி அலங்காரம்",
      "பொந்தந்தடி தாங்குதல்",
      "பாதுகாப்பின் குறியீடான பாரம்பரிய அருவாள் ஏந்துதல்"
    ],
    offeringsEn: [
      "Special Abishekam",
      "Pongal Vazhipaadu",
      "Poo Padappu",
      "White cloth offerings"
    ],
    offeringsTa: [
      "சிறப்பு அபிஷேகம்",
      "பொங்கல் வழிபாடு",
      "பூ படைப்பு",
      "வெண்வஸ்திரச் சாத்துப்படி"
    ],
    specialAssociationEn: "Main guardian of the family and all devotees. Peace, well-being, and growth of children and families are associated with prayers to him.",
    specialAssociationTa: "குடும்பம் மற்றும் பக்தர்களின் முதன்மைக் காவலர். குடும்ப அமைதி, சுபிட்சம் மற்றும் குழந்தைகளின் நல்வாழ்விற்குரிய அருள் தருபவர்.",
    worshipDetailsEn: "Worshipped during major festivals including Kovil Kodai, Varushabishekam, and weekly Friday poojas. Deeply revered across generations as the primary protector.",
    worshipDetailsTa: "கோவில் கொடை, வருஷாபிஷேகம் மற்றும் வெள்ளிக்கிழமை வழிபாடுகளில் முதன்மையாக ஆராதிக்கப்படும் அருள்மூர்த்தி.",
    sanctumLocationEn: "Inside the Gopuram Karuvarai (Sanctum Sanctorum)",
    sanctumLocationTa: "கோபுரக் கருவரையினுள் மையம்",
    image: "/images/sudalaimada-swamy.jpg",
    isPlaceholder: true
  },
  {
    id: "mutharamman",
    nameEn: "Mutharamman",
    nameTa: "முத்தாரம்மன்",
    aliases: ["Mutharamman Devi"],
    roleEn: "Second Major Deity & Divine Mother",
    roleTa: "இரண்டாம் பிரதான மூர்த்தி & அருள்மிகு அன்னை",
    isMajor: true,
    formEn: "Sacred worship arrangement (No conventional human-sculpted idol)",
    formTa: "புனித வழிபாட்டு அமைப்பு (மனித வடிவச் சிலை இல்லை)",
    traditionStatus: "sacred_arrangement",
    attributesEn: [
      "Sacred Trishulam (Trident)",
      "Ceremonial Sword",
      "Adorned with Red Saree",
      "Decorated with red Arali flowers and glowing brass lamps"
    ],
    attributesTa: [
      "புனித திரிசூலம்",
      "வாள் உருவம்",
      "சிவப்புப் புடவை சாத்துப்படி",
      "சிவப்பு அரளி மலர்கள் மற்றும் நெய் விளக்குகள்"
    ],
    offeringsEn: [
      "Red Arali flower garlands",
      "Thiru Vilakku lamps",
      "Special Archanai on Tuesdays & Saraswathi Pooja"
    ],
    offeringsTa: [
      "சிவப்பு அரளி மாலைகள்",
      "திருவிளக்கு வழிபாடு",
      "செவ்வாய்க்கிழமை & சரஸ்வதி பூஜை சிறப்பு அர்ச்சனை"
    ],
    specialAssociationEn: "Special significance during Saraswathi Pooja. Worship is especially associated with Tuesdays and festival celebrations for family well-being.",
    specialAssociationTa: "சரஸ்வதி பூஜையில் சிறப்பு முக்கியத்துவம் வாய்ந்தது. குடும்ப நலனுக்காகச் செவ்வாய்க்கிழமைகளில் அம்மன் வழிபாடு சிறப்பானது.",
    worshipDetailsEn: "Revered as a deeply powerful and benevolent mother goddess who nurtures family harmony and safeguards future generations.",
    worshipDetailsTa: "குடும்ப ஒற்றுமை மற்றும் தலைமுறைகளின் நல்வாழ்வைக் காக்கும் அருள்மிகு அன்னையாகப் போற்றப்படுகிறார்.",
    sanctumLocationEn: "Near Gopuram",
    sanctumLocationTa: "கோபுரத்தின் அருகே",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "sastha",
    nameEn: "Sri Sastha / Ayyanar",
    nameTa: "ஸ்ரீ சாஸ்தா / அய்யனார்",
    aliases: ["Ayyanar", "Karkuvel Ayyanar Tradition"],
    roleEn: "Elder Guardian & Divine Guide of Celebrations",
    roleTa: "மூத்த காவல் தெய்வம் & திருவிழாக் வழிகாட்டி",
    isMajor: true,
    formEn: "Sacred Rounded Stone Form",
    formTa: "புனித உருண்டை வடிவக் கல் வடிவம்",
    traditionStatus: "confirmed",
    attributesEn: [
      "Elder guardian deity in temple tradition",
      "Form associated by family tradition with Karkuvel Ayyanar",
      "Guides and protects all temple rituals and celebrations"
    ],
    attributesTa: [
      "பாரம்பரியத்தின் மூத்த காவல் தெய்வம்",
      "கார்க்குவேல் அய்யனார் வழிமரபோடு தொடர்புடைய வடிவம்",
      "அனைத்து வழிபாடுகளையும் வழிகாட்டி நடத்தும் தெய்வம்"
    ],
    offeringsEn: [
      "First worship during Kovil Kodai & Varushabishekam",
      "Chocolate offerings on Panguni Uthiram birthday at 12:00 PM"
    ],
    offeringsTa: [
      "கொடை மற்றும் வருஷாபிஷேகத்தின் முதல் வழிபாடு",
      "பங்குனி உத்திர பிறந்தநாளன்று நண்பகல் 12 மணிக்கு இனிப்பு/சாக்கலேட் படைப்பு"
    ],
    specialAssociationEn: "Panguni Uthiram is celebrated as Sastha's birthday. Devotees lovingly offer chocolates during the noon worship.",
    specialAssociationTa: "பங்குனி உத்திரம் சாஸ்தாவின் அவதார நாளாகக் கொண்டாடப்படுகிறது. நண்பகல் வழிபாட்டின் போது பக்தர்கள் இனிப்புகளைக் காணிக்கையாக அளிக்கின்றனர்.",
    worshipDetailsEn: "Every major festival ritual begins with the first pooja offered to Sri Sastha to ensure divine guidance and smooth conduct.",
    worshipDetailsTa: "எல்லா முக்கியத் திருவிழாக்களின் முதல் வழிபாடும் சாஸ்தாவுக்குச் செய்யப்பட்ட பின்னரே ஏனைய பூசைகள் தொடங்கும்.",
    sanctumLocationEn: "Near Gopuram Entrance",
    sanctumLocationTa: "கோபுர நுழைவுப் பகுதி அருகே",
    image: "/images/sastha-ayyanar.jpg",
    isPlaceholder: true
  },
  {
    id: "periyavar",
    nameEn: "Periyavar",
    nameTa: "பெரியவர்",
    roleEn: "Founder Spirit of the Temple",
    roleTa: "திருக்கோவில் ஸ்தாபகர் (பாரம்பரிய நம்பிக்கை)",
    isMajor: true,
    formEn: "Sacred Stone Sanctuary at Main Entrance",
    formTa: "பிரதான நுழைவாயிலில் அமைந்துள்ள புனிதக் கல் பீடம்",
    traditionStatus: "family_tradition",
    attributesEn: [
      "Regarded by family tradition as the founder of the temple",
      "First sacred point of reverence upon entering the temple compound"
    ],
    attributesTa: [
      "குடும்பப் பாரம்பரிய நம்பிக்கையின்படி திருக்கோவிலை உருவாக்கிய பெரியவராகக் கருதப்படுபவர்",
      "கோவிலுக்குள் நுழையும் போது வணங்கப்படும் முதல் வழிபாட்டு தலம்"
    ],
    offeringsEn: [
      "Initial bowing & lamp lighting upon entering"
    ],
    offeringsTa: [
      "கோவில் நுழைவின் போது முதன்மை வணக்கமும் தீப வழிபாடும்"
    ],
    specialAssociationEn: "According to family tradition, Periyavar is regarded as the founder of the temple, establishing the Kula Deivam heritage 400+ years ago.",
    specialAssociationTa: "குடும்பப் பாரம்பரிய நம்பிக்கையின்படி, பெரியவர் திருக்கோவிலின் ஸ்தாபகராகப் போற்றப்படுகிறார்.",
    worshipDetailsEn: "In accordance with traditional worship order, all devotees pay homage to Periyavar first before moving towards the Gopuram.",
    worshipDetailsTa: "பாரம்பரிய வழிபாட்டு முறையின்படி, கோபுரத்தை நோக்கிச் செல்வதற்கு முன் பெரியவரை முதலில் வணங்குவது வழக்கம்.",
    sanctumLocationEn: "Main Entrance of Temple Compound",
    sanctumLocationTa: "கோவில் வளாகத்தின் பிரதான நுழைவாயில்",
    image: "/images/hero-temple.jpg",
    isPlaceholder: true
  },
  {
    id: "muthishvarar",
    nameEn: "Muthishvarar",
    nameTa: "முத்தீஸ்வரர்",
    roleEn: "Guardian Deity",
    roleTa: "காவல் மூர்த்தி",
    isMajor: false,
    formEn: "Sacred Stone Idol",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Near Gopuram",
    sanctumLocationTa: "கோபுரத்தின் அருகே",
    image: "/images/hero-temple.jpg",
    isPlaceholder: true
  },
  {
    id: "bathirakali",
    nameEn: "Bathirakali",
    nameTa: "பத்ரகாளி",
    roleEn: "Protective Mother Deity",
    roleTa: "பாதுகாவல் சக்தி தெய்வம்",
    isMajor: false,
    formEn: "Sacred Stone Idol",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Near Gopuram",
    sanctumLocationTa: "கோபுரத்தின் அருகே",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "uchinimakali",
    nameEn: "Uchinimakali",
    nameTa: "உச்சினிமாகாளி",
    roleEn: "Fierce Guardian Mother",
    roleTa: "அருள்மிகு உச்சினிமாகாளி அம்மன்",
    isMajor: false,
    formEn: "Sacred Stone Idol",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Near Gopuram",
    sanctumLocationTa: "கோபுரத்தின் அருகே",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "mariamman",
    nameEn: "Mariamman",
    nameTa: "மாரியம்மன்",
    roleEn: "Goddess of Rain & Health",
    roleTa: "மாரி அம்மன்",
    isMajor: false,
    formEn: "Sacred Stone Idol",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Near Gopuram",
    sanctumLocationTa: "கோபுரத்தின் அருகே",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "brahmasakthi",
    nameEn: "Brahmasakthi",
    nameTa: "பிரம்மசக்தி",
    roleEn: "Divine Energy & Protector",
    roleTa: "பிரம்மசக்தி அம்மன்",
    isMajor: false,
    formEn: "Sacred Idol in Karuvarai",
    formTa: "கருவரையினுள் உள்ள புனித மூர்த்தி",
    sanctumLocationEn: "Inside Gopuram Karuvarai",
    sanctumLocationTa: "கோபுரக் கருவரையினுள்",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "pechiamman",
    nameEn: "Pechiamman",
    nameTa: "பேச்சியம்மன்",
    roleEn: "Guardian Mother Deity",
    roleTa: "பேச்சியம்மன்",
    isMajor: false,
    formEn: "Sacred Idol in Karuvarai",
    formTa: "கருவரையினுள் உள்ள புனித மூர்த்தி",
    sanctumLocationEn: "Inside Gopuram Karuvarai",
    sanctumLocationTa: "கோபுரக் கருவரையினுள்",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "palavesakarar",
    nameEn: "Palavesakarar",
    nameTa: "தளவாய்பட மாடசாமி / தளவாய் பலவேசக்காரர்",
    aliases: ["Palavesam"],
    roleEn: "Guardian Deity",
    roleTa: "தளவாய் காவல் மூர்த்தி",
    isMajor: false,
    formEn: "Sacred Idol in Karuvarai",
    formTa: "கருவரையினுள் உள்ள புனித மூர்த்தி",
    sanctumLocationEn: "Inside Gopuram Karuvarai",
    sanctumLocationTa: "கோபுரக் கருவரையினுள்",
    image: "/images/sudalaimada-swamy.jpg",
    isPlaceholder: true
  },
  {
    id: "mundan",
    nameEn: "Mundan",
    nameTa: "முண்டன் சுவாமி",
    roleEn: "Guardian Deity",
    roleTa: "காவல் தெய்வம்",
    isMajor: false,
    formEn: "Sacred Stone Form",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Opposite Gopuram",
    sanctumLocationTa: "கோபுரத்திற்கு எதிரே",
    image: "/images/sudalaimada-swamy.jpg",
    isPlaceholder: true
  },
  {
    id: "neelan",
    nameEn: "Neelan",
    nameTa: "நீலன் சுவாமி",
    roleEn: "Guardian Deity",
    roleTa: "காவல் தெய்வம்",
    isMajor: false,
    formEn: "Sacred Stone Form",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Right side of Gopuram",
    sanctumLocationTa: "கோபுரத்தின் வலது புறம்",
    image: "/images/sudalaimada-swamy.jpg",
    isPlaceholder: true
  },
  {
    id: "esakkiamman",
    nameEn: "Esakki Amman",
    nameTa: "இசக்கி அம்மன்",
    roleEn: "Protective Mother Deity",
    roleTa: "பாதுகாவல் அன்னை இசக்கி அம்மன்",
    isMajor: false,
    formEn: "Sacred Stone Idol",
    formTa: "புனிதக் கல் வடிவம்",
    sanctumLocationEn: "Right side of Gopuram",
    sanctumLocationTa: "கோபுரத்தின் வலது புறம்",
    image: "/images/mutharamman-sanctum.jpg",
    isPlaceholder: true
  },
  {
    id: "kaalan",
    nameEn: "Kaalan",
    nameTa: "காலன் சுவாமி",
    roleEn: "Guardian Deity associated with Manjal Kidaram",
    roleTa: "மஞ்சள் கிடாரம் வழிபாட்டிற்குரிய காவல் தெய்வம்",
    isMajor: false,
    formEn: "Sacred Stone Form",
    formTa: "புனிதக் கல் வடிவம்",
    specialAssociationEn: "Special worship on Kovil Kodai Day 2 at 6:00 PM with Manjal Kidaram",
    specialAssociationTa: "கொடை இரண்டாம் நாள் மாலை 6 மணிக்கு மஞ்சள் கிடாரத்துடன் சிறப்பு வழிபாடு நடைபெறும்",
    sanctumLocationEn: "Left side of Gopuram",
    sanctumLocationTa: "கோபுரத்தின் இடது புறம்",
    image: "/images/sudalaimada-swamy.jpg",
    isPlaceholder: true
  }
];
