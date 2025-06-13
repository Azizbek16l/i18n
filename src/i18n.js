import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN from "./locales/en.json";
import UZ from "./locales/uz.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: EN },
      uz: { translation: UZ },
    },
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

export default i18n;
