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
            "Quality" : "Quality",
            "QualityText" : "As a Certified Translator, I am trained to deliver top quality translations, transferring the meaning of the source text with no loss of original expression and using specific terminology as appropriate. Furthermore, the contents are adapted to the structure of the reader’s target language, so that it seems written in reader’s language.",
            "Speed" : "Prompt results",
            "SpeedText" : "Translations are usually required for diverse proceedings, for which terms tend to be tight. In addition to delivering top quality services, I finish my work within the shortest term possible, expediting the process for clients.",
            "FollowMe" : "FOLLOW ME ON",
            "ReservedRights" : "MANUEL SANSON TRADUCCIONES - ALL RIGHTS RESERVED",
            "DownloadResume" : "Download resume",
            "Degree" : "Certified Public Translator",
            "BriefPresentation" : "My name is Manuel Sanson and I have a Bachelor’s Degree in Public Translation from the University of Montevideo, awarded in 2017. My language pair is Spanish-English, I translate from Spanish into English and vice versa. As you can see in my resume, which you can download by clicking the button at the bottom of the page, I have considerable expertise in a wide range of areas. Even though I focus my practice on the translation of different legal documents, I also work with economic, scientific and academic texts and audiovisual translation, among others. ",
            "LearnAboutServices" : "You can learn more about my services here:",
            "FreelanceExperience" : "Since 2017 I work as freelance Translator. Some of my most prominent works include different translations of legal documents for MVS Abogados, a Uruguayan law firm, contracts, handbooks, protocols for the software development company Moove It, subtitling of films and short films for several film festivals held in Uruguay, as well as translations of different nature for numerous clients, including contracts, academic transcripts, resumes, certificates, certifications, subtitling of videos, and others.",
            "TPAExperience" : "In March 2019 I started working at Traductores Públicos Asociados, where I worked as in-house Translator until June 2022. Since then, I work with them as part-time Translator. I have collaborated in a large number of translations, among which the following are noteworthy: Convention for the Protection of Individuals with regard to the Processing of Personal Data, miscellaneous documents for UPM S.A., Simplified Joint-Stock Company (SAS) Act (Law No. 19,820), Regulatory Project of the Central Bank of Uruguay, miscellaneous documents for renowned legal, accounting and notarial firms, as well as many translations for other clients, including texts of legal (contracts, bylaws, powers of attorney, certifications and legalizations, etc.), economic (financial statements and notes), civil (certificates of birth, death, marriage, identity card documents, passports, etc.), academic (official transcripts, degrees, certificates, etc.) and scientific (patents, computer science-related texts, medical documents, etc.) nature, among others.",
            "OfferService" : "As you can observe, I have significant experience in my profession, and I have worked with all types of documents. If you need my help to translate your documents, please get in touch with me.",
            "ContactMe" : "Contact me",
            "WAppText" : "Talk to me on WhatsApp",
            "OfficialTranslations" : "Official translations",
            "OfficialTranslations1" : "An official translation is a translation signed and sealed by a Certified Translator, complying with certain formalities, of a document written in a foreign language that must be submitted to national authorities or document written in local language that must be submitted to foreign authorities.",
            "OfficialTranslations2" : "As a Certified Public Translator, I am commissioned to provide this kind of translations, and I have significant experience in this field.",
            "OfficialTranslations3" : "The following are some examples official translations I usually deliver: contracts, bylaws, powers of attorney, certifications and legalizations, certificates and civil registry documents and academic documents, such as degrees and academic transcripts.",
            "NonOfficialTranslations" : "Non-Official translations",
            "NonOfficialTranslations1" : "A non-official translation does not require a Certified Translator’s signature and seal. However, you should always resort to a trained Translator expert in the field to make sure the Translation is made using all tools necessary to obtain a high-quality product.",
            "NonOfficialTranslations2" : "The following are some examples non-official translations I usually deliver: contacts, financial statements, patents, different manuals and protocols, among others.",
            "AudiovisualTranslations" : "Audiovisual translations",
            "AudiovisualTranslations1" : "This area does not only require all skills necessary to translate, but also knowledge on rules applicable to subtitling and software used to add and synchronize subtitles, if required.",
            "AudiovisualTranslations2" : "I have considerable experience in this field, since I have translated several films and short films for domestic film festivals, as well as numerous videos, for instance, a talk for the World Bank and a commercial spot of the facial recognition system implemented in Estadio Centenario, the most famous football stadium in Uruguay.",
            "GetInTouch" : "If you need my help to translate your documents, whether official or non-official, or audiovisual content, please get in touch with me.",

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
            "Quality" : "Calidad",
            "QualityText" : "Como Traductor Público, estoy formado para entregar traducciones de gran calidad, trasladando el sentido del texto de origen sin que se pierda su significado y utilizando terminología específica según corresponda. Asimismo, el contenido se adapta a las estructuras del idioma meta para que el lector del texto traducido sea capaz de leerlo de una forma más natural.",
            "Speed" : "Resultados rápidos",
            "SpeedText" : "Las traducciones suelen ser necesarias para realizar distintos trámites, para los cuales los plazo suelen ser ajustados. Además de entregar un trabajo de alta calidad, lo hago en el menor plazo posible, acelerando los tiempos para el cliente.",
            "FollowMe" : "SEGUIME EN",
            "ReservedRights" : "MANUEL SANSON TRADUCCIONES - TODOS LOS DERECHOS RESERVADOS",
            "DownloadResume" : "Descargar CV",
            "Degree" : "Licenciado en Traducción Pública",
            "BriefPresentation" : "Mi nombre es Manuel Sanson y soy Licenciado en Traducción Pública, egresado de la Universidad de Montevideo en 2017. Trabajo con el par español-inglés, traduzco tanto del español al inglés como viceversa. Como podrás ver en mi CV, el cual podrás descargar haciendo click en el botón que luce al pie de la página, cuento con considerable experiencia en una amplia variedad de áreas. Si bien me especializo en la traducción de diversos documentos de índole legal, también trabajo con textos económicos, científicos y académicos y traducción audiovisual, entre otros.",
            "LearnAboutServices" : "Puedes ver más sobre mis servicios aquí:",
            "FreelanceExperience" : "Desde el año 2017 me desempeño como traductor independiente. Entre los trabajos que he realizado se destacan diversas traducciones de documentos jurídicos para el Estudio MVS Abogados, contratos, manuales y protocolos para la empresa de desarrollo de software Moove It, subtitulado de películas y cortos para varios festivales de cine celebrados en Uruguay, así como traducciones de diversa índole para diferentes clientes, incluyendo contratos, escolaridades,  CV, partidas, certificados, subtitulado de videos, etc.",
            "TPAExperience" : "En marzo de 2019 comencé a trabajar en Traductores Públicos Asociados, donde me desempeñé como Traductor in-house hasta junio de 2022. Desde entonces, trabajo con ellos part-time. Cabe destacar las siguientes traducciones en las que he colaborado: Convenio para  la Protección de  las Personas con respecto al Tratamiento de Datos Personales, documentos varios para UPM S.A., Ley SAS Número 19.820, Proyecto Regulatorio del Banco Central del Uruguay, documentos varios para importantes estudios jurídicos, contables y notariales, así como otra considerable cantidad de diferentes traducciones para otros clientes, incluyendo documentos de índole jurídica (contratos, estatutos, poderes, certificaciones y legalizaciones, etc.), económica (estados financieros y notas), civil (partidas de nacimiento, defunción, matrimonio, documentos de identidad, pasaportes, etc.), académica (escolaridades, títulos, certificados, etc.) y científica (patentes, textos de informática, documentos médicos, etc.).",
            "OfferService" : "Como podrás observar cuento con vasta experiencia en la profesión y he trabajado con todo tipo de documentos. Si precisas mi ayuda para traducir tus documentos, no dudes en consultarme.",
            "ContactMe" : "Contáctame",
            "WAppText" : "Háblame por WhatsApp",
            "OfficialTranslations" : "Traducciones oficiales",
            "OfficialTranslations1" : "Las traducciones públicas son aquellas traducciones firmadas y selladas por un Traductor Público, cumpliendo con ciertas formalidades, de documentos redactados en un idioma extranjero que debe presentarse ante autoridades locales o documentos redactados en nuestro idioma nacional que deben presentarse en el extranjero.",
            "OfficialTranslations2" : "Al ser Licenciado en Traducción Pública me encuentro habilitado para realizar este tipo de traducciones y cuento con considerable experiencia en el rubro.",
            "OfficialTranslations3" : "Dentro de las traducciones oficiales más habituales con las que he trabajado se encuentran: contratos, estatutos, poderes, certificaciones y legalizaciones, partidas y documentos del registro civil y documentos académicos, tales como títulos y escolaridades.",
            "NonOfficialTranslations" : "Traducciones no oficiales",
            "NonOfficialTranslations1" : "Las traducciones no oficiales son aquellas que no requieren la firma y el sello del Traductor Público. Sin embargo, siempre es recomendable acudir a un Traductor formado en la materia ya que cuenta con todas las herramientas necesarias para realizar este trabajo.",
            "NonOfficialTranslations2" : "Dentro de las traducciones no oficiales más habituales con las que he trabajado se encuentran: contratos, estados financieros, patentes, diversos manuales y protocolos, entre otros.",
            "AudiovisualTranslations" : "Traducciones Audiovisuales",
            "AudiovisualTranslations1" : "En este rubro es necesario no solo contar con los conocimientos necesarios para traducir, sino que también es necesario conocer las normas aplicables al subtitulado y el software utilizado para insertar y sincronizar los subtítulos, en caso de ser necesario.",
            "AudiovisualTranslations2" : "Es un área en la que poseo vasta experiencia ya que he subtitulado varios cortos y películas para festivales de cine locales, así como diversos videos, por ejemplo, una charla para el Banco Mundial y una publicidad del sistema de reconocimiento fácil implementado en el Estadio Centenario.",
            "GetInTouch" : "Si precisas mi ayuda para traducir tus documentos, ya sean oficiales o no oficiales, o necesitas traducir contenido audiovisual, no dudes en consultarme.",
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