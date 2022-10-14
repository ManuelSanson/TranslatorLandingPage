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
            "Home" : 'Home',
            "About me" : "About Me",
            "Services" : "Services",
            "Contact" : "Contact",
            "BannerTitle" : 'Certified Translator',
            "BannerSubtitle" : 'Fast and high-quality translations',
            "Welcome" : "Welcome!",
            "IntroductionText" : 'My name is Manuel Sanson Prado and I am a Certified Translator (English-Spanish) graduated from the Universidad de Montevideo with more than five years of experience in the field.',
            "ReadMore" : "Read more",
            "ServicesIntroductionText" : "I offer translations from English to Spanish and viceversa. I specialize in the translation of legal documents; however, I can help you with a wide range of texts. If you need official or non-official translations, please contact me to see how can I help you.",
            "ContactMe" : "Contact me",
            "Quality" : "Quality",
            "QualityText" : "As a Certified Translator, I am trained to deliver top quality translations, transferring the meaning of the source text with no loss of original expression and using specific terminology as appropriate. Furthermore, the contents are adapted to the structure of the reader’s target language, so that it seems written in reader’s language.",
            "Speed" : "Prompt results",
            "SpeedText" : "Translations are usually required for diverse proceedings, for which terms tend to be tight. In addition to delivering top quality services, I finish my work within the shortest term possible, expediting the process for clients.",
            "FollowMe" : "FOLLOW ME ON",
            "ReservedRights" : "MANUEL SANSON TRADUCCIONES - ALL RIGHTS RESERVED",
        }
        },
        esp: {
        translations: {
            "Home" : 'Inicio',
            "About me" : "Sobre mí",
            "Services" : "Servicios",
            "Contact" : "Contacto",
            "BannerTitle" : 'Traductor Público',
            "BannerSubtitle" : 'Traducciones rápido y de gran calidad',
            "Welcome" : "Bienvenidos!",
            "IntroductionText" : 'Mi nombre es Manuel Sanson Prado y soy Licenciado en Traducción Púlica (Inglés-Español), graduado de la Universidad de Montevideo. Cuento con más de cinco años de experiencia en la industria.',
            "ReadMore" : "Leer más",
            "ServicesIntroductionText" : "Realizo traducciones del idioma inglés al español y viceversa. Me especializo en la traducción de documentos legales, pero puedo ayudarte con una amplia gama de textos. Si necesitas traducciones oficiales o no oficiales, puedes contactarme y te ayudaré.",
            "ContactMe" : "Contáctame",
            "Quality" : "Calidad",
            "QualityText" : "Como Traductor Público, estoy formado para entregar traducciones de gran calidad, trasladando el sentido del texto de origen sin que se pierda su significado y utilizando terminología específica según corresponda. Asimismo, el contenido se adapta a las estructuras del idioma meta para que el lector del texto traducido sea capaz de leerlo de una forma más natural.",
            "Speed" : "Resultados rápidos",
            "SpeedText" : "Las traducciones suelen ser necesarias para realizar distintos trámites, para los cuales los plazo suelen ser ajustados. Además de entregar un trabajo de alta calidad, lo hago en el menor plazo posible, acelerando los tiempos para el cliente.",
            "FollowMe" : "SEGUIME EN",
            "ReservedRights" : "MANUEL SANSON TRADUCCIONES - TODOS LOS DERECHOS RESERVADOS",
        }
        }
    },
    fallbackLng: 'en',
    lng: 'esp',
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