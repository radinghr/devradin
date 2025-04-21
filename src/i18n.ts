import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJson from "./translations/en.json";
import deJson from "./translations/de.json";

export const languages: { code: string; name: string; translation: object }[] = [
  { code: "en", name: "English", translation: enJson },
  { code: "de", name: "Deutsch", translation: deJson }
];

const resources: Resource = {};

languages.forEach((lang) => {
  resources[lang.code] = {
    translation: lang.translation
  };
});

i18next
  // Pass the i18n instance to react-i18next.
  // This is required for react-i18next to work properly.
  // Without this, the translation will not work.
  .use(initReactI18next)
  // detects user language by looking at below detection order
  .use(LanguageDetector)
  .init({
    resources: resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export default i18next;
