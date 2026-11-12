export type Language = "en" | "hi";

const en = {
  appName: "The Himalayan Horizon",
  tagline: "Discover the Hidden Himalayas",
  supporting: {
    stay: "Stay Local. Live Deeper.",
    explore: "Explore Beyond the Ordinary.",
    work: "Work From the Mountains.",
    discover: "Discover Authentic Himalayan Life.",
  },
  common: {
    skip: "Skip to content",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    loading: "Loading…",
    retry: "Try again",
    loadError: "Something went wrong while loading this page.",
  },
  nav: {
    home: "Home",
    explore: "Hidden places",
    homestays: "Homestays",
    workations: "Workations",
    plan: "Plan trip",
    contact: "Contact",
  },
  language: {
    toggleLabel: "Language",
    english: "English",
    hindi: "हिन्दी",
  },
  home: {
    intro:
      "Plan a journey to Uttarakhand's hidden villages, local homestays and mountain workspaces, beyond the famous destinations.",
    ctaExplore: "Explore hidden places",
    ctaPlan: "Plan a trip",
    cards: {
      explore: { title: "Hidden places", text: "Quiet villages and places off the usual routes." },
      homestays: {
        title: "Village homestays",
        text: "Stay with local families and see village life up close.",
      },
      workations: {
        title: "Mountain workations",
        text: "Work remotely from peaceful places in the hills.",
      },
      plan: { title: "Trip planner", text: "Build a day-by-day plan with an estimated budget." },
    },
  },
  place: {
    backToList: "All hidden places",
    notYetConfirmed: "Not yet confirmed",
    estimateNote: "This is an estimate, not a live price.",
    locationNotConfirmed: "Location not yet confirmed",
    openMap: "Open in Google Maps",
    about: "About this place",
    practical: "Practical information",
    difficulty: { easy: "Easy", moderate: "Moderate", difficult: "Difficult" },
    labels: {
      district: "District",
      village: "Village",
      state: "State",
      categories: "Categories",
      bestTime: "Best time to visit",
      roadAccess: "Road access",
      railway: "Nearest railway station",
      airport: "Nearest airport",
      distances: "Distance from major cities",
      attractions: "Nearby attractions",
      trekking: "Trekking",
      culture: "Local culture",
      food: "Food experiences",
      connectivity: "Network connectivity",
      facilities: "Facilities",
      difficultyLabel: "Travel difficulty",
      budget: "Estimated travel budget",
    },
    allCategories: "All places",
    filterLabel: "Filter by category",
    perPerson: "per person",
  },
  footer: {
    explore: "Explore",
    visit: "Visit us",
    rights: "All rights reserved.",
  },
  pages: {
    destinations: {
      title: "Hidden places",
      text: "Villages and places in Uttarakhand that few travelers have reached yet.",
    },
    homestays: {
      title: "Village homestays",
      text: "Stay with local families. We list only homestays we have verified.",
    },
    workations: {
      title: "Mountain workations",
      text: "Peaceful places in Uttarakhand to work remotely from, with workspace and internet details where they have been verified.",
    },
    plan: {
      title: "Plan your trip",
      text: "Route, day-by-day plan and estimated budget, in one place.",
    },
    contact: {
      title: "Contact us",
      text: "Our office is in Almora district, Uttarakhand.",
    },
    notFound: {
      title: "Page not found",
      text: "This page does not exist or has moved.",
      back: "Go to the home page",
    },
  },
  empty: {
    destinations:
      "No places have been published yet. They will appear here once they are approved.",
    homestays:
      "No homestays are listed yet. A homestay appears here only after our team has verified it.",
    workations: "No workation places are listed yet. Listings appear once they are verified.",
    plan: "The trip planner is being built and will open soon.",
  },
};

export type Messages = typeof en;

const hi: Messages = {
  appName: "The Himalayan Horizon",
  tagline: "छिपे हुए हिमालय को खोजें",
  supporting: {
    stay: "स्थानीय रहें। गहराई से जिएँ।",
    explore: "आम रास्तों से आगे देखें।",
    work: "पहाड़ों से काम करें।",
    discover: "प्रामाणिक हिमालयी जीवन को जानें।",
  },
  common: {
    skip: "मुख्य सामग्री पर जाएँ",
    mainNav: "मुख्य मेनू",
    mobileNav: "मोबाइल मेनू",
    loading: "लोड हो रहा है…",
    retry: "दोबारा कोशिश करें",
    loadError: "इस पेज को लोड करते समय कुछ गड़बड़ हो गई।",
  },
  nav: {
    home: "होम",
    explore: "छिपी जगहें",
    homestays: "होमस्टे",
    workations: "वर्केशन",
    plan: "यात्रा योजना",
    contact: "संपर्क",
  },
  language: {
    toggleLabel: "भाषा",
    english: "English",
    hindi: "हिन्दी",
  },
  home: {
    intro:
      "उत्तराखंड के छिपे हुए गाँवों, स्थानीय होमस्टे और पहाड़ी कार्यस्थलों की यात्रा की योजना बनाएँ, मशहूर जगहों से आगे।",
    ctaExplore: "छिपी जगहें देखें",
    ctaPlan: "यात्रा की योजना बनाएँ",
    cards: {
      explore: { title: "छिपी जगहें", text: "शांत गाँव और ऐसी जगहें जो आम रास्तों से हटकर हैं।" },
      homestays: {
        title: "गाँव के होमस्टे",
        text: "स्थानीय परिवारों के साथ रुकें और गाँव का जीवन करीब से देखें।",
      },
      workations: {
        title: "पहाड़ी वर्केशन",
        text: "पहाड़ों की शांत जगहों से दूर रहकर काम करें।",
      },
      plan: { title: "यात्रा योजनाकार", text: "अनुमानित बजट के साथ दिन-वार यात्रा योजना बनाएँ।" },
    },
  },
  place: {
    backToList: "सभी छिपी जगहें",
    notYetConfirmed: "अभी पुष्टि नहीं हुई है",
    estimateNote: "यह अनुमान है, लाइव कीमत नहीं।",
    locationNotConfirmed: "स्थान की पुष्टि नहीं हुई है",
    openMap: "गूगल मैप्स में खोलें",
    about: "इस जगह के बारे में",
    practical: "उपयोगी जानकारी",
    difficulty: { easy: "आसान", moderate: "मध्यम", difficult: "कठिन" },
    labels: {
      district: "ज़िला",
      village: "गाँव",
      state: "राज्य",
      categories: "श्रेणियाँ",
      bestTime: "घूमने का सबसे अच्छा समय",
      roadAccess: "सड़क मार्ग",
      railway: "निकटतम रेलवे स्टेशन",
      airport: "निकटतम हवाई अड्डा",
      distances: "प्रमुख शहरों से दूरी",
      attractions: "आसपास के आकर्षण",
      trekking: "ट्रेकिंग",
      culture: "स्थानीय संस्कृति",
      food: "भोजन के अनुभव",
      connectivity: "नेटवर्क और इंटरनेट",
      facilities: "सुविधाएँ",
      difficultyLabel: "यात्रा की कठिनाई",
      budget: "अनुमानित यात्रा खर्च",
    },
    allCategories: "सभी जगहें",
    filterLabel: "श्रेणी के अनुसार छाँटें",
    perPerson: "प्रति व्यक्ति",
  },
  footer: {
    explore: "खोजें",
    visit: "हमारा पता",
    rights: "सर्वाधिकार सुरक्षित।",
  },
  pages: {
    destinations: {
      title: "छिपी जगहें",
      text: "उत्तराखंड के गाँव और स्थान जहाँ अभी कम यात्री पहुँचे हैं।",
    },
    homestays: {
      title: "गाँव के होमस्टे",
      text: "स्थानीय परिवारों के साथ रुकें। हम सिर्फ़ वही होमस्टे दिखाते हैं जिनकी हमने जाँच की है।",
    },
    workations: {
      title: "पहाड़ी वर्केशन",
      text: "उत्तराखंड की शांत जगहें जहाँ से दूर रहकर काम किया जा सके, जाँची गई कार्यस्थल और इंटरनेट की जानकारी के साथ।",
    },
    plan: {
      title: "अपनी यात्रा की योजना बनाएँ",
      text: "रूट, दिन-वार कार्यक्रम और अनुमानित बजट, एक ही जगह।",
    },
    contact: {
      title: "संपर्क करें",
      text: "हमारा कार्यालय उत्तराखंड के अल्मोड़ा ज़िले में है।",
    },
    notFound: {
      title: "पेज नहीं मिला",
      text: "यह पेज मौजूद नहीं है या इसे कहीं और ले जाया गया है।",
      back: "होम पेज पर जाएँ",
    },
  },
  empty: {
    destinations: "अभी कोई जगह प्रकाशित नहीं हुई है। स्वीकृत होते ही वह यहाँ दिखेगी।",
    homestays:
      "अभी कोई होमस्टे सूचीबद्ध नहीं है। हमारी टीम जाँच करने के बाद ही होमस्टे यहाँ दिखाया जाता है।",
    workations:
      "अभी कोई वर्केशन स्थान सूचीबद्ध नहीं है। जाँच पूरी होते ही सूचियाँ यहाँ दिखेंगी।",
    plan: "यात्रा योजनाकार तैयार किया जा रहा है और जल्द खुलेगा।",
  },
};

export const messages: Record<Language, Messages> = { en, hi };
