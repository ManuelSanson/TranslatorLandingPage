import i18n from 'i18next';
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
   // we init with resources
    resources: {
        en: {
        translations: {
            "Home" : 'HOME',
            "About me" : "ABOUT ME",
            "Services" : "SERVICES",
            "Contact" : "CONTACT",
            
            "salutation" : "I am Manuel.",
            
        }
        },
        esp: {
        translations: {
            "Home" : 'INICIO',
            "About me" : "SOBRE MÍ",
            "Services" : "SERVICIOS",
            "Contact" : "CONTACTO",
            "salutation" : "Soy Manuel.",
            
        }
        }
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
    });

export default i18n;