export type Language = "en" | "hi";

const en = {
  appName: "DevBhoomi Himalayan Horizons",
  tagline: "Live a little deeper.",
  nav: {
    home: "Home",
    villages: "Hidden villages",
    homestays: "Homestays",
    plan: "Plan trip",
    contact: "Contact",
  },
  home: {
    intro:
      "Plan trips to Uttarakhand's hidden villages, village life and village tourism, not just the famous destinations.",
    exploreVillages: "Explore hidden villages",
    exploreVillagesText: "Discover quiet villages off the usual routes.",
    homestays: "Village homestays",
    homestaysText: "Stay with local families and experience village life.",
    planner: "Trip planner",
    plannerText: "Build an itinerary with an estimated budget.",
  },
  placeholder: {
    comingSoon: "Coming in a later stage",
    comingSoonText: "This page is on the roadmap and isn't built yet.",
  },
  language: {
    toggleLabel: "Language",
    english: "English",
    hindi: "हिन्दी",
  },
};

export type Messages = typeof en;

const hi: Messages = {
  appName: "देवभूमि हिमालयन होराइजन्स",
  tagline: "थोड़ा और गहराई से जिएँ।",
  nav: {
    home: "होम",
    villages: "छिपे हुए गाँव",
    homestays: "होमस्टे",
    plan: "यात्रा योजना",
    contact: "संपर्क",
  },
  home: {
    intro:
      "उत्तराखंड के छिपे हुए गाँव, ग्राम्य जीवन और ग्राम पर्यटन की यात्रा की योजना बनाएँ, सिर्फ़ मशहूर जगहों की नहीं।",
    exploreVillages: "छिपे हुए गाँव देखें",
    exploreVillagesText: "आम रास्तों से हटकर शांत गाँव खोजें।",
    homestays: "गाँव के होमस्टे",
    homestaysText: "स्थानीय परिवारों के साथ रुकें और गाँव का जीवन अनुभव करें।",
    planner: "यात्रा योजनाकार",
    plannerText: "अनुमानित बजट के साथ अपना यात्रा कार्यक्रम बनाएँ।",
  },
  placeholder: {
    comingSoon: "अगले चरण में आएगा",
    comingSoonText: "यह पेज रोडमैप में है और अभी बना नहीं है।",
  },
  language: {
    toggleLabel: "भाषा",
    english: "English",
    hindi: "हिन्दी",
  },
};

export const messages: Record<Language, Messages> = { en, hi };
