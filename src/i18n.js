import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Define translations directly in the code
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      selectLanguage: "Select language",
      ourServices: "Our Services",
      companyName: "D-OUIRI",
      companySubtitle: "LABS",
      qualities: {
        quality: "Quality",
        innovation: "Innovation",
        excellence: "Excellence",
        precision: "Precision",
        adaptability: "Adaptability",
        transparency: "Transparency",
        efficiency: "Efficiency",
        expertise: "Expertise",
      },
      // ContactEmailModal translations
      contactModal: {
        title: "Contact Me ",
        name: "Your Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        phone: "Phone Number",
        phonePlaceholder: "+1 (123) 456-7890",
        preferredDate: "Preferred Date",
        message: "Message (Optional)",
        messagePlaceholder: "Tell us about your project...",
        submitButton: "Submit Request",
        confirmation: "We'll contact you shortly to confirm your session",
      },
      // ServicesSection translations
      services: {
        title:
          "We provide a wide range of services to meet your specific needs",
        webDevelopment: "Web Development",
        uiUxDesign: "UI/UX Design",
        databaseSolutions: "Database Solutions",
        //dataAnalytics: "Data Analytics",
        //cyberSecurity: "Cyber Security & Anomaly Detection",
        //crmSolutions: "CRM Solutions",
        cloudSolutions: "Cloud Solutions",
        posSolutions: {
          title: "Advanced POS Solutions",
          description: "Optimize your sales process with an all-in-one, ",
        },
        /*contactlessPayment: {
          title: "Contactless Payment Solutions",
          description:
            "Enable fast, secure, and seamless payments with cutting-edge contactless payment systems. ",
        },*/
        callToAction: {
          text1: "You have a project in mind?",
          text2: "Let's bring your ideas to life!",
          text3: "Need professional IT solutions?",
          text4: "Ready to transform your business?",
          text5: "Looking for a reliable partner?",
          text6: "Want to enhance your digital presence?",
        },
        button: "Contact Me",
        freeSession: "Its free and no strings attached 😉",
      },
    },
  },
  it: {
    translation: {
      welcome: "Benvenuto",
      selectLanguage: "Seleziona la lingua",
      ourServices: "I Nostri Servizi",
      companyName: "D-OUIRI",
      companySubtitle: "LABS",
      qualities: {
        quality: "Qualità",
        innovation: "Innovazione",
        excellence: "Eccellenza",
        precision: "Precisione",
        adaptability: "Adattabilità",
        transparency: "Trasparenza",
        efficiency: "Efficienza",
        expertise: "Competenza",
      },
      // ContactEmailModal translations
      contactModal: {
        title: "Contattami",
        name: "Il Tuo Nome",
        namePlaceholder: "Mario Rossi",
        email: "Indirizzo Email",
        emailPlaceholder: "mario@esempio.com",
        phone: "Numero di Telefono",
        phonePlaceholder: "+39 123 456 7890",
        preferredDate: "Data Preferita",
        message: "Messaggio (Opzionale)",
        messagePlaceholder: "Parlaci del tuo progetto...",
        submitButton: "Invia Richiesta",
        confirmation: "Ti contatteremo a breve per confermare la tua sessione",
      },
      // ServicesSection translations
      services: {
        title:
          "Offriamo una vasta gamma di servizi per soddisfare le tue esigenze specifiche",
        webDevelopment: "Sviluppo Web",
        uiUxDesign: "Design UI/UX",
        databaseSolutions: "Soluzioni Database",
        dataAnalytics: "Analisi dei Dati",
        cyberSecurity: "Sicurezza Informatica e Rilevamento Anomalie",
        crmSolutions: "Soluzioni CRM",
        cloudSolutions: "Soluzioni Cloud",
        posSolutions: {
          title: "Soluzioni POS Avanzate",
          description:
            "Ottimizza il tuo processo di vendita con un sistema tutto in uno, ",
        },
        contactlessPayment: {
          title: "Soluzioni di Pagamento Contactless",
          description:
            "Abilita pagamenti veloci, sicuri e senza interruzioni con sistemi di pagamento contactless all'avanguardia. ",
        },
        callToAction: {
          text1: "Hai un progetto in mente?",
          text2: "Diamo vita alle tue idee!",
          text3: "Hai bisogno di soluzioni IT professionali?",
          text4: "Pronto a trasformare la tua attività?",
          text5: "Cerchi un partner affidabile?",
          text6: "Vuoi migliorare la tua presenza digitale?",
        },
        button: "Contattmmi",
        freeSession: "È gratuita e senza impegno 😉",
      },
    },
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    resources,
    fallbackLng: "en",
    debug: true, // Set to false in production

    interpolation: {
      escapeValue: false, // Not needed for React
    },

    // Language detection options
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
