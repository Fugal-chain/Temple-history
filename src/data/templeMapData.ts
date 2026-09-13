export interface MapNode {
  id: string;
  deityId: string;
  nameEn: string;
  nameTa: string;
  worshipOrder: number;
  sectionEn: 'Entrance' | 'Gopuram Outer' | 'Karuvarai Sanctum' | 'Opposite' | 'Right Wing' | 'Left Wing' | 'Vilvam Courtyard';
  sectionTa: 'நுழைவாயில்' | 'கோபுர வெளிப் பிரகாரம்' | 'கருவறை' | 'எதிர்ப்புறம்' | 'வலதுப் பிரகாரம்' | 'இடதுப் பிரகாரம்' | 'வில்வப் பிரகாரம்';
  coordinates: { x: number; y: number }; // percentage position on map canvas
  descriptionEn: string;
  descriptionTa: string;
  templeInfoEn: string;
  templeInfoTa: string;
  image: string;
}

export const worshipOrderList = [
  "periyavar",
  "sastha",
  "mutharamman",
  "muthishvarar",
  "bathirakali",
  "uchinimakali",
  "mariamman",
  "sudalaimadan",
  "brahmasakthi",
  "pechiamman",
  "palavesakarar",
  "mundan",
  "neelan",
  "esakkiamman",
  "kaalan"
];

export const templeMapNodes: MapNode[] = [
  {
    id: "node-periyavar",
    deityId: "periyavar",
    nameEn: "Periyavar Sanctuary",
    nameTa: "பெரியவர் பீடம்",
    worshipOrder: 1,
    sectionEn: "Entrance",
    sectionTa: "நுழைவாயில்",
    coordinates: { x: 50, y: 88 },
    descriptionEn: "Located right at the main entrance compound. According to family tradition, Periyavar is regarded as the founder of the temple.",
    descriptionTa: "பிரதான நுழைவாயிலின் அருகே அமைந்துள்ளது. குடும்பப் பாரம்பரிய நம்பிக்கையின்படி திருக்கோவில் ஸ்தாபகராகப் போற்றப்படுகிறார்.",
    templeInfoEn: "Devotees pay initial respect here before stepping into the sacred inner precinct.",
    templeInfoTa: "கோவிலினுள் நுழையும் அனைத்து பக்தர்களும் முதன்முதலில் இங்கு வணங்கி அருள்பெறுகின்றனர்.",
    image: "/images/hero-temple.jpg"
  },
  {
    id: "node-sastha",
    deityId: "sastha",
    nameEn: "Sri Sastha / Ayyanar",
    nameTa: "ஸ்ரீ சாஸ்தா / அய்யனார்",
    worshipOrder: 2,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 38, y: 62 },
    descriptionEn: "Elder guardian deity worshipped as a sacred rounded stone form. Guides and protects temple celebrations.",
    descriptionTa: "மூத்த காவல் தெய்வம். உருண்டை வடிவக் கல் திருமேனியாக எழுந்தருளியுள்ளார்.",
    templeInfoEn: "First pooja during Kovil Kodai and Varushabishekam is offered here. Panguni Uthiram birthday features chocolate offerings.",
    templeInfoTa: "கொடை மற்றும் வருஷாபிஷேகத்தில் முதன்மைப் பூஜை இங்கு செய்யப்படுகிறது. பங்குனி உத்திரத்தன்று சாக்கலேட் நைவேத்தியம் படைக்கப்படுகிறது.",
    image: "/images/sastha-ayyanar.jpg"
  },
  {
    id: "node-mutharamman",
    deityId: "mutharamman",
    nameEn: "Mutharamman Sanctum",
    nameTa: "முத்தாரம்மன் சன்னதி",
    worshipOrder: 3,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 45, y: 55 },
    descriptionEn: "Second major deity of the temple. Worshipped through a sacred arrangement with Trishulam, sword, red saree, and red Arali flowers.",
    descriptionTa: "இரண்டாம் பிரதான மூர்த்தி. திரிசூலம், வாள், சிவப்பு ஆடை, அரளி மலர் கொண்டு போற்றப்படும் புனித வழிபாடு.",
    templeInfoEn: "Revered for family well-being. Special significance during Saraswathi Pooja and Tuesday worship.",
    templeInfoTa: "குடும்பச் சுபிட்ச அருள் தருபவர். சரஸ்வதி பூஜை மற்றும் செவ்வாய் கிழமைகளில் மிகச் சிறப்பு வாய்ந்தது.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-muthishvarar",
    deityId: "muthishvarar",
    nameEn: "Muthishvarar",
    nameTa: "முத்தீஸ்வரர்",
    worshipOrder: 4,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 55, y: 55 },
    descriptionEn: "Guardian deity positioned near the Gopuram outer precinct.",
    descriptionTa: "கோபுர வெளிப் பிரகாரத்தில் எழுந்தருளியுள்ள அருள்மிகு முத்தீஸ்வரர்.",
    templeInfoEn: "Worshipped following Mutharamman in the traditional sequence.",
    templeInfoTa: "பாரம்பரிய வரிசைப்படி முத்தாரம்மனுக்கு அடுத்து வணங்கப்படுகிறார்.",
    image: "/images/hero-temple.jpg"
  },
  {
    id: "node-bathirakali",
    deityId: "bathirakali",
    nameEn: "Bathirakali",
    nameTa: "பத்ரகாளி அம்மன்",
    worshipOrder: 5,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 62, y: 62 },
    descriptionEn: "Protective mother goddess protecting the inner temple perimeter.",
    descriptionTa: "கோவில் பிரகாரத்தைப் பாதுகாக்கும் அருள்மிகு பத்ரகாளி அம்மன்.",
    templeInfoEn: "Worshipped during late night Kovil Kodai midnight rituals.",
    templeInfoTa: "கொடை நள்ளிரவுப் பூஜைகளில் சிறப்பு ஆராதனை செய்யப்படுகிறது.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-uchinimakali",
    deityId: "uchinimakali",
    nameEn: "Uchinimakali",
    nameTa: "உச்சினிமாகாளி அம்மன்",
    worshipOrder: 6,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 60, y: 50 },
    descriptionEn: "Powerful mother deity guardian enshrined near the Gopuram.",
    descriptionTa: "கோபுரத்திற்கு அருகே வீற்றிருக்கும் அருள்மிகு உச்சினிமாகாளி.",
    templeInfoEn: "Participates in the midnight Amman deity pujas during Kovil Kodai.",
    templeInfoTa: "கொடையின் இரண்டாம் நாள் நள்ளிரவு ஆராதனையில் போற்றப்படுகிறார்.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-mariamman",
    deityId: "mariamman",
    nameEn: "Mariamman",
    nameTa: "மாரியம்மன்",
    worshipOrder: 7,
    sectionEn: "Gopuram Outer",
    sectionTa: "கோபுர வெளிப் பிரகாரம்",
    coordinates: { x: 38, y: 50 },
    descriptionEn: "Benignant mother deity bestowing rain, health, and peace.",
    descriptionTa: "மழை, ஆரோக்யம் மற்றும் அமைதி அருளும் அருள்மிகு மாரியம்மன்.",
    templeInfoEn: "Final deity in the outer Gopuram sequence before stepping into the Karuvarai.",
    templeInfoTa: "கருவறைக்குள் நுழையும் முன் வெளிப்பிரகாரத்தின் நிறைவுப் புள்ளி.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-sudalaimadan",
    deityId: "sudalaimadan",
    nameEn: "Sri Sudalaimada Swamy (Karuvarai Center)",
    nameTa: "ஸ்ரீ சுடலைமாட சுவாமி (கருவறை மையம்)",
    worshipOrder: 8,
    sectionEn: "Karuvarai Sanctum",
    sectionTa: "கருவறை",
    coordinates: { x: 50, y: 35 },
    descriptionEn: "Main Deity of the temple inside Gopuram Karuvarai. Standing stone idol wearing white dhoti and angi, holding ponthanthadi staff and protective aruval sword.",
    descriptionTa: "கோபுரக் கருவறையில் வீற்றிருக்கும் முதன்மை மூர்த்தி. வெண்வஸ்திரமும் அங்கியும் அணிந்து பொந்தந்தடியும் அருவாளும் ஏந்திய நின்ற திருக்கோலம்.",
    templeInfoEn: "Primary guardian of the family across 7 generations. Heart of all major festivals and prayers.",
    templeInfoTa: "ஏழு தலைமுறைகளாகக் குடும்பத்தைக் காக்கும் முதன்மை அண்ணல்.",
    image: "/images/sudalaimada-swamy.jpg"
  },
  {
    id: "node-brahmasakthi",
    deityId: "brahmasakthi",
    nameEn: "Brahmasakthi",
    nameTa: "பிரம்மசக்தி அம்மன்",
    worshipOrder: 9,
    sectionEn: "Karuvarai Sanctum",
    sectionTa: "கருவறை",
    coordinates: { x: 44, y: 30 },
    descriptionEn: "Enshrined within the Karuvarai beside Sri Sudalaimada Swamy.",
    descriptionTa: "கருவரையினுள் ஸ்ரீ சுடலைமாட சுவாமியின் அருகே வீற்றிருப்பவர்.",
    templeInfoEn: "Receives Ootu Padappu during Varushabishekam.",
    templeInfoTa: "வருஷாபிஷேகத்தில் ஊட்டுப் படைப்பு நைவேத்தியம் பெறுகிறார்.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-pechiamman",
    deityId: "pechiamman",
    nameEn: "Pechiamman",
    nameTa: "பேச்சியம்மன்",
    worshipOrder: 10,
    sectionEn: "Karuvarai Sanctum",
    sectionTa: "கருவறை",
    coordinates: { x: 56, y: 30 },
    descriptionEn: "Divine mother protector residing in the inner Karuvarai.",
    descriptionTa: "கருவறையினுள் அருள்பாலிக்கும் தாய் தெய்வம்.",
    templeInfoEn: "Honored in the midnight and noon festival rituals.",
    templeInfoTa: "திருவிழா உச்சிப் பூஜைகளில் சிறப்பு ஆராதனை பெறுகிறார்.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-palavesakarar",
    deityId: "palavesakarar",
    nameEn: "Palavesakarar",
    nameTa: "தளவாய் பலவேசக்காரர்",
    worshipOrder: 11,
    sectionEn: "Karuvarai Sanctum",
    sectionTa: "கருவறை",
    coordinates: { x: 50, y: 22 },
    descriptionEn: "Courageous guardian deity in the Karuvarai inner realm.",
    descriptionTa: "கருவறையின் உட்பகுதியில் வீற்றிருக்கும் தளவாய் காவல் மூர்த்தி.",
    templeInfoEn: "Participates in Poo Padappu and Varushabishekam Ootu Padappu.",
    templeInfoTa: "பூ படைப்பு மற்றும் ஊட்டுப் படைப்பில் நைவேத்தியம் பெறுபவர்.",
    image: "/images/sudalaimada-swamy.jpg"
  },
  {
    id: "node-mundan",
    deityId: "mundan",
    nameEn: "Mundan Swamy",
    nameTa: "முண்டன் சுவாமி",
    worshipOrder: 12,
    sectionEn: "Opposite",
    sectionTa: "எதிர்ப்புறம்",
    coordinates: { x: 50, y: 68 },
    descriptionEn: "Positioned directly opposite the Gopuram facing the Karuvarai.",
    descriptionTa: "கோபுரத்திற்கு நேர் எதிரே கருவறையை நோக்கிய வண்ணம் வீற்றிருப்பவர்.",
    templeInfoEn: "Key guardian deity receiving Ootu Padappu during Aani Varushabishekam.",
    templeInfoTa: "வருஷாபிஷேகத்தில் ஊட்டுப் படைப்பு பெறக்கூடிய முக்கியக் காவல் தெய்வம்.",
    image: "/images/sudalaimada-swamy.jpg"
  },
  {
    id: "node-neelan",
    deityId: "neelan",
    nameEn: "Neelan Swamy",
    nameTa: "நீலன் சுவாமி",
    worshipOrder: 13,
    sectionEn: "Right Wing",
    sectionTa: "வலதுப் பிரகாரம்",
    coordinates: { x: 75, y: 45 },
    descriptionEn: "Enshrined on the right wing side of the Gopuram structure.",
    descriptionTa: "கோபுரத்தின் வலது புறப் பிரகாரத்தில் எழுந்தருளியுள்ளார்.",
    templeInfoEn: "First deity worshipped in the right wing precinct.",
    templeInfoTa: "வலதுப் பிரகார வழிபாட்டின் முதன்மை மூர்த்தி.",
    image: "/images/sudalaimada-swamy.jpg"
  },
  {
    id: "node-esakkiamman",
    deityId: "esakkiamman",
    nameEn: "Esakki Amman",
    nameTa: "இசக்கி அம்மன்",
    worshipOrder: 14,
    sectionEn: "Right Wing",
    sectionTa: "வலதுப் பிரகாரம்",
    coordinates: { x: 82, y: 52 },
    descriptionEn: "Protective mother goddess situated on the right side of the Gopuram.",
    descriptionTa: "கோபுரத்தின் வலது புறத்தில் அருள்பாலிக்கும் இசக்கி அம்மன்.",
    templeInfoEn: "Receives traditional lamp lighting and flower garlands.",
    templeInfoTa: "தீப வழிபாடும் மலர் மாலைகளும் சாத்தப்படும் தலம்.",
    image: "/images/mutharamman-sanctum.jpg"
  },
  {
    id: "node-kaalan",
    deityId: "kaalan",
    nameEn: "Kaalan Swamy",
    nameTa: "காலன் சுவாமி",
    worshipOrder: 15,
    sectionEn: "Left Wing",
    sectionTa: "இடதுப் பிரகாரம்",
    coordinates: { x: 22, y: 45 },
    descriptionEn: "Enshrined on the left side of the Gopuram.",
    descriptionTa: "கோபுரத்தின் இடது புறத்தில் வீற்றிருக்கும் காவல் தெய்வம்.",
    templeInfoEn: "Special worship with Manjal Kidaram takes place here on Kovil Kodai Day 2 at 6:00 PM. Completes the traditional worship order sequence.",
    templeInfoTa: "கொடை இரண்டாம் நாள் மாலை 6 மணிக்கு மஞ்சள் கிடாரம் சடங்குடன் சிறப்பு ஆராதனை. பாரம்பரிய வழிபாட்டு வரிசையின் நிறைவுத் தலம்.",
    image: "/images/sudalaimada-swamy.jpg"
  },
  {
    id: "node-vilvam-tree",
    deityId: "sacred-vilvam",
    nameEn: "Sacred Vilvam Tree (150+ Years Old)",
    nameTa: "புனித வில்வ மரம் (150+ ஆண்டுகள்)",
    worshipOrder: 0,
    sectionEn: "Vilvam Courtyard",
    sectionTa: "வில்வப் பிரகாரம்",
    coordinates: { x: 78, y: 32 },
    descriptionEn: "Positioned on the right side of the Gopuram when viewed from the main entrance. Naturally grown from sand over 150+ years ago.",
    descriptionTa: "பிரதான நுழைவாயிலில் இருந்து பார்க்கும் போது கோபுரத்தின் வலது புறத்தில் 150+ ஆண்டுகளாக மணலில் வளர்ந்து நிற்கும் புனித மரம்.",
    templeInfoEn: "Boon from Lord Shiva. Leaves are used in daily worship. Decorated with lights and garlands during Kovil Kodai.",
    templeInfoTa: "சிவபெருமான் அருளிய பாக்கியம். இதன் இலைகள் வழிபாட்டிற்குப் பயன்படுகின்றன.",
    image: "/images/sacred-vilvam-tree.jpg"
  }
];
