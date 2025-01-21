import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Home: "Home",
          "About me": "About Me",
          Services: "Services",
          Contact: "Contact",
          BannerLink:
            "https://res.cloudinary.com/diqry3ihg/image/upload/v1725393593/TranslatorLandingPage/Banner.ENG_c44qw4.png",
          Welcome: "Welcome!",
          IntroductionText:
            "My name is Manuel Sanson and I have a Bachelor’s Degree in Public Translation with more than six years of experience in the field of legal translation. I provide highly specialized and reliable legal translation services to legal firms, lawyers, notaries and different companies.",
          ReadMore: "Read more",
          ServicesIntroductionText:
            "With a solid academic background from the University of Montevideo and a deep knowledge of legal terminology, I offer accurate and high-quality translations of legal documents such as contracts, powers of attorney, bylaws and other corporate documents, certifications and legalizations. I am aware of the importance of deadlines within the legal scope and I am committed to delivering my translations in a timely manner, meeting the requirements of my clients. If you need official or non-official translations, please do not hesitate to contact me.",
          SeeServices: "See my services",
          Quality: "Quality",
          QualityText:
            "As a Certified Translator, I am trained to deliver top quality translations, transferring the meaning of the source text with no loss of original expression and using specific terminology as appropriate. Furthermore, the contents are adapted to the structure of the reader’s target language, so that it seems written in reader’s language.",
          Speed: "Prompt results",
          SpeedText:
            "Translations are usually required for diverse proceedings, for which terms tend to be tight. In addition to delivering top quality services, I finish my work within the shortest term possible, expediting the process for clients.",
          ProblemsSolutions: "Usual problems and my solution",
          ProblemsText:
            "Having worked for more than 6 years in this area, I have detected CERTAIN PROBLEMS that you have surely suffered: delivery times, lack of specialized knowledge of the specific jargon, lack of quality and precision of the translation.",
          SolutionsText:
            "With my service YOU WILL RECEIVE: speed and on-time delivery so you can meet your deadlines, in-depth knowledge of specific legal terminology and linguistic conventions used in the legal field, accurate and high-quality translation that faithfully reflects the content and the purpose of the original document.",
          MyClients: "Some of the firms that trust me...",
          Opinions: "Opinions",
          PositionTorres: "Gerardo Torres, J.D., Partner at MVS Abogados",
          PositionBonaudi: "Joaquín Bonaudi, J.D., Independent Professional",
          PositionFerragut: "Bruno Ferragut, J.D., Independent Professional",
          PositionMooveit: "",
          PositionDisprofarma: "",
          PositionAtGen: "",
          OpinionTorres: "Very good job, done promptly and professionally.",
          OpinionBonaudi:
            "I needed speed. In my case, I needed to work against the clock and it turned out excellent.",
          OpinionFerragut:
            "His service was excellent. He did the job quickly, seriously and thoroughly.",
          OpinionMooveit: "",
          OpinionDisprofarma: "",
          OpinionAtGen: "",
          LinkedInMessage: "FIND ME ON",
          LinkedInURL:
            "https://www.linkedin.com/in/manuel-sanson-trans-dev/?locale=en_US",
          ReservedRights: "MANUEL SANSON TRADUCCIONES - ALL RIGHTS RESERVED",
          DownloadResume: "Download resume",
          Degree: "Certified Public Translator",
          BriefPresentation:
            "My name is Manuel Sanson and I have a Bachelor’s Degree in Public Translation from the University of Montevideo, awarded in 2017. With more than six years of experience in the field of legal translation, I offer accurate and high-quality translations of legal documents such as contracts, powers of attorney, bylaws and other corporate documents, certifications and legalizations. In addition to focusing my practice on the translation of legal documents, I have also worked with academic, scientific and economic texts, among others. If you wish to know even more about me, please download my resume by clicking the button at the bottom of the page.",
          LearnAboutServices: "You can learn more about my services here:",
          FreelanceExperience:
            "Since 2017 I work as an independent Translator. Some of my most prominent works include translations of different legal documents for various law firms; documentation for companies importing medical devices; contracts, handbooks, protocols for different software companies; subtitling of films and short films for several film festivals held in Uruguay, as well as translations of different nature for numerous clients, including contracts, academic transcripts, resumes, certificates, certifications, subtitling of videos, and others.",
          TPAExperience:
            "In March 2019 I started working at Traductores Públicos Asociados, where I worked as in-house Translator until June 2022. Since then, I work with them on a collaborative basis. I have worked in a large number of translations, among which the following are noteworthy: Convention for the Protection of Individuals with regard to the Processing of Personal Data, Simplified Joint-Stock Company (SAS) Act (Law No. 19,820), Regulatory Project of the Central Bank of Uruguay, miscellaneous documents for renowned companies, miscellaneous documents for renowned legal, accounting and notarial firms, as well as many translations for other clients, including texts of legal (contracts, bylaws, powers of attorney, certifications and legalizations, etc.), economic (financial statements and notes), civil (certificates of birth, death, marriage, identity card documents, passports, etc.), academic (official transcripts, degrees, certificates, etc.) and scientific (patents, computer science-related texts, medical documents, etc.) nature, among others. It was during these years that I was able to gain more experience in the area of legal translation due to the large number of documents of this nature that I worked with and that led me to choose this niche to specialize in.",
          OfferService:
            "As you can observe, I have significant experience in my profession. With a proven track record in the realm of legal translation, I am your trusted partner in overcoming language barriers. Reach out to me, and I will attend all your needs related to your international clients to conduct any proceeding necessary.",
          ContactMe: "Contact me",
          WAppText: "Talk to me on WhatsApp",
          TelegramText: "Talk to me on Telegram",
          OfficialTranslations: "Official translations",
          OfficialTranslations1:
            "An official translation is a translation signed and sealed by a Certified Translator, complying with certain formalities, of a document written in a foreign language that must be submitted to national authorities or a document written in local language that must be submitted to foreign authorities.",
          OfficialTranslations2:
            "As a Certified Public Translator, I am commissioned to provide this kind of translations, and I have significant experience in this field. In addition, in the case of translations in languages for which there are no Certified Public Translators (in Uruguay there are only English, French, German, Portuguese and Italian Certified Public Translators), you will require the involvement of an expert in the corresponding language together with the Certified Public Translator.",
          OfficialTranslations3:
            "The following are some examples of official translations I usually deliver: contracts, bylaws, powers of attorney, certifications and legalizations, certificates and civil registry documents and academic documents, such as degrees and academic transcripts.",
          NonOfficialTranslations: "Non-Official translations",
          NonOfficialTranslations1:
            "A non-official translation does not require a Certified Translator’s signature and seal. However, you should always resort to a trained Translator expert in the field to make sure the translation is made using all tools necessary to obtain a high-quality product.",
          NonOfficialTranslations2:
            "The following are some examples of non-official translations I usually deliver: contracts, financial statements, patents, different manuals and protocols, websites content, resumes, among others.",
          AudiovisualTranslations: "Audiovisual translations",
          AudiovisualTranslations1:
            "This area does not only require all skills necessary to translate, but also knowledge on rules applicable to subtitling and software used to add and synchronize subtitles, if required.",
          AudiovisualTranslations2:
            "I have considerable experience in this field, since I have translated several films and short films for domestic film festivals, as well as numerous videos, for instance, a talk for the World Bank and a commercial spot of the facial recognition system implemented in Estadio Centenario, the most famous football stadium in Uruguay.",
          LegalTranslation: "Legal documents",
          LegalTranslationDescription:
            "I offer highly specialized and reliable legal translation services to legal firms, lawyers, notaries and different companies. My practice is focused on providing accurate and high-quality translations of contracts, powers of attorney, bylaws, certifications and legalizations.",
          CLVTranslation: "Free Sale Certificates and similar documents",
          CLVTranslationDescription:
            "I also assist importers so that they can comply with their product authorization procedures, which requires the translation of Free Sale Certificates and similar documents.",
          PrivateDocumentTranslation: "Private documents",
          Advantage: "What you will receive purchasing my services",
          Advantage1:
            "You won't have to worry about deadlines. My work will be delivered as quickly as possible so that you can complete any type of procedure on time.",
          Advantage2:
            "Specific knowledge on the matter. With a proven track record of more than six years of experience in the field of legal translation and my solid academic background, you will receive a highly specialized and reliable legal translation service.",
          Advantage3:
            "Accuracy and quality. My approach is focused on providing legal translations that faithfully reflect the original content and purpose, ensuring accuracy and consistency.",
          Advantage4:
            "Calmness. The most important thing about all this process is that you can rest assured that you will receive a high-quality service, specialized in the area of legal translation and with a very fast delivery.",
          GetInTouch:
            "I would love to help you achieve your goals overcoming any language barriers. If you need my help to translate your documents, whether official or non-official, of a legal nature or documents such as FSCs, do not hesitate to contact me.",
          Question1: "What is your experience in translating legal documents?",
          Answer1:
            "I have a degree in Public Translation and thanks to my solid academic training at the University of Montevideo I have a deep knowledge of legal terminology. I also have more than 6 years of experience in the field of legal translation. I have been working as a freelance translator since 2017 and since 2019 I have been working with an important translation studio in Montevideo.",
          Question2: "What types of legal documents can you translate?",
          Answer2:
            "I specialize in the translation of various documents such as contracts, bylaws and other corporate documents, powers of attorney, certifications and legalizations. In addition, I have expertise in the translation of Free Sale Certificates and documents of similar nature. I am a Certified Public Translator, thus I have a signature and seal which enables translations to be submitted to the competent authorities.",
          Question3: "How is a translation priced?",
          Answer3:
            "It depends on the type of document and its length. In general, it is quoted per page, that is, for each page of translation. In order to give you a more exact idea of how much the translation of the document you need may cost, contact me.",
          Question4: "How long does a translation take?",
          Answer4:
            "This point also depends on the type of document and its extension, but I can assure you that I will have it soon in time so that you can carry out the corresponding procedure. In order to give you a more exact idea of how long the translation of the document you need may take, contact me.",
          Question5: "What is a public or official translation?",
          Answer5:
            "An official translation is a translation signed and sealed by a Certified Translator, complying with certain formalities, of a document written in a foreign language that must be submitted to national authorities or a document written in local language that must be submitted to foreign authorities.",
          Question6: "What is a non-official translation?",
          Answer6:
            "A non-official translation does not require a Certified Translator’s signature and seal. However, you should always resort to a trained Translator expert in the field to make sure the translation is made using all tools necessary to obtain a high-quality product.",
          Question7:
            "What is your experience in translating documents to register medical devices?",
          Answer7:
            "Since 2023, the Ministry of Public Health requires the translation of documentation for the registration of medical devices, and I have been helping many companies with these proceedings.",
          Help: "How can I help you?",
          LegalDocumentsTranslation: "Legal Documents Translation",
          ProductRegistrationDocumentsTranslation:
            "Product Registration Documents Translation",
          PrivateDocumentsTranslation: "Private Documents Translation",
          LegalDocumentsTranslationDescription:
            "I provide highly specialized and reliable legal translation services to legal firms, lawyers, notaries and different companies. With a solid academic background from the University of Montevideo and a deep knowledge of legal terminology, I offer accurate and high-quality translations of legal documents such as contracts, powers of attorney, bylaws and other corporate documents, certifications and legalizations.",
          ProductRegistrationDocumentsTranslationDescription:
            "I help companies importing medical devices with the translation of documents required to register their products: Free sale certificates, letters of authorization and power of attorney, good manufacturing practices certificates, and others.",
          PrivateDocumentsTranslationDescription:
            "I may also help you with the translation of your private documents, such as civil (certificates of birth, death, marriage, identity card documents, passports, etc.), academic (official transcripts, degrees, certificates, etc.) and economic (financial statements and notes) documentation.",
          SendMessage: "Send me a message",
          Name: "Name",
          EmailAddress: "Email address",
          ConfirmationEmailAddress: "Reenter you email address",
          EmailMatch: "Your email does not match",
          Subject: "Subject",
          Message: "Message",
          MessageSent: "Your message has been sent",
          FillAll: "Please fill out all fields",
          Submit: "Submit",
          Development: "Developed by ",
          OR: "OR",
        },
      },
      esp: {
        translations: {
          Home: "Inicio",
          "About me": "Sobre mí",
          Services: "Servicios",
          Contact: "Contacto",
          BannerLink:
            "https://res.cloudinary.com/diqry3ihg/image/upload/v1725393252/TranslatorLandingPage/Banner.ESP_m1rx8i.png",
          Welcome: "Bienvenidos!",
          IntroductionText:
            "Mi nombre es Manuel Sanson y soy Licenciado en Traducción Pública con más de seis años de experiencia. Ofrezco traducciones precisas y de calidad de documentos legales tales como contratos, poderes, estatutos y otros documentos societarios, certificaciones y legalizaciones. También trabajo con certificados de libre venta, cartas de autorización, certificados de buenas prácticas de fabricación, entre otros.",
          ReadMore: "Leer más",
          ServicesIntroductionText:
            "Con una sólida formación académica en la Universidad de Montevideo y un profundo conocimiento de la terminología legal, brindo servicios de traducción legal altamente especializados y confiables a estudios jurídicos, abogados, escribanos y distintas empresas. Asimismo, también ayudo a importadoras traduciendo documentación necesaria para el registro de sus productos sanitarios. Reconozco la importancia de los plazos en el ámbito legal y me comprometo a entregar mis traducciones de manera puntual, cumpliendo con los requerimientos de mis clientes. Si necesitas traducciones oficiales o no oficiales, puedes contactarme y te ayudaré.",
          SeeServices: "Ver mis servicios",
          Quality: "Calidad",
          QualityText:
            "Como Traductor Público, estoy formado para entregar traducciones de gran calidad, trasladando el sentido del texto de origen sin que se pierda su significado y utilizando terminología específica según corresponda. Asimismo, el contenido se adapta a las estructuras del idioma meta para que el lector del texto traducido sea capaz de leerlo de una forma más natural.",
          Speed: "Resultados rápidos",
          SpeedText:
            "Las traducciones suelen ser necesarias para realizar distintos trámites, para los cuales los plazo suelen ser ajustados. Además de entregar un trabajo de alta calidad, lo hago en el menor plazo posible, acelerando los tiempos para el cliente.",
          ProblemsSolutions: "Problemas habituales y mi solución",
          ProblemsText:
            "En mi trayectoria de más de 6 años en este rubro, he detectado que se repiten CIERTOS PROBLEMAS que seguramente hayas sufrido: tiempos de entrega, falta de conocimiento especializado del lenguaje específico, falta de calidad y precisión de la traducción.",
          SolutionsText:
            "Con mi servicio VAS A CONSEGUIR: celeridad y entrega a tiempo para que puedas cumplir con tus plazos, un profundo conocimiento de la terminología legal específica y las convenciones lingüísticas utilizadas en el ámbito jurídico, traducción precisa y de alta calidad que refleje fielmente el contenido y el propósito del documento original.",
          MyClients: "Algunas de las firmas que confían en mí...",
          Opinions: "Testimonios",
          PositionTorres: "Dr. Gerardo Torres, Socio en MVS Abogados",
          PositionBonaudi: "Dr. Joaquín Bonaudi, Profesional Independiente",
          PositionFerragut: "Dr. Bruno Ferragut, Profesional Independiente",
          PositionMooveit: "",
          PositionDisprofarma: "",
          PositionAtGen: "",
          OpinionTorres:
            "Muy buen trabajo, hecho con prontitud y profesionalidad.",
          OpinionBonaudi:
            "Necesitaba celeridad. En mi caso precisaba el trabajo contrarreloj y salió excelente.",
          OpinionFerragut:
            "El servicio fue excelente. Realizó el trabajo rápido, con seriedad y de forma minuciosa.",
          OpinionMooveit: "",
          OpinionDisprofarma: "",
          OpinionAtGen: "",
          LinkedInMessage: "ENCUÉNTRAME EN",
          LinkedInURL: "https://www.linkedin.com/in/manuel-sanson-trans-dev/",
          ReservedRights:
            "MANUEL SANSON TRADUCCIONES - TODOS LOS DERECHOS RESERVADOS",
          DownloadResume: "Descargar CV",
          Degree: "Licenciado en Traducción Pública",
          BriefPresentation:
            "Mi nombre es Manuel Sanson y soy Licenciado en Traducción Pública, egresado de la Universidad de Montevideo en 2017. Con más de seis años de experiencia, ofrezco traducciones precisas y de calidad de documentos legales tales como contratos, poderes, estatutos y otros documentos societarios, certificaciones y legalizaciones. También me enfoco en la traducción de certificados de libre venta, cartas de autorización, certificados de buenas prácticas de fabricación, entre otros. Además de mi especialización en la traducción de este tipo de documentos, también trabajo con textos académicos, económicos, de estado civil, etc. Si quieres saber aún más acerca de mí, descarga mi CV haciendo click en el botón que luce al pie de la página.",
          LearnAboutServices: "Puedes ver más sobre mis servicios aquí:",
          FreelanceExperience:
            "Desde el año 2017 me desempeño como traductor independiente. Entre los trabajos que he realizado se destacan diversas traducciones de documentos jurídicos para diversos estudios de abogados y escribanos; documentación para empresas importadoras de productos sanitarios; diversos documentos para empresas de software tales como contratos, manuales y protocolos; subtitulado de películas y cortos para varios festivales de cine celebrados en Uruguay, así como traducciones de diversa índole para diferentes clientes, incluyendo contratos, escolaridades,  CV, partidas, certificados, subtitulado de videos, etc.",
          TPAExperience:
            "En marzo de 2019 comencé a trabajar en Traductores Públicos Asociados, donde me desempeñé como Traductor in-house hasta junio de 2022. Desde entonces, trabajo con ellos de forma colaborativa. Cabe destacar las siguientes traducciones en las que he colaborado: Convenio para  la Protección de  las Personas con respecto al Tratamiento de Datos Personales, Ley SAS Número 19.820, Proyecto Regulatorio del Banco Central del Uruguay, documentos varios para prominentes empresas, documentos varios para importantes estudios jurídicos, contables y notariales, así como una considerable cantidad de diferentes traducciones para otros clientes, incluyendo documentos de índole jurídica (contratos, estatutos, poderes, certificaciones y legalizaciones, etc.), económica (estados financieros y notas), civil (partidas de nacimiento, defunción, matrimonio, documentos de identidad, pasaportes, etc.), académica (escolaridades, títulos, certificados, etc.) y científica (patentes, textos de informática, documentos médicos, etc.). Fue durante estos años donde pude obtener mayor experiencia en el área de la traducción legal debido a la gran cantidad de documentos de esta índole con los cuales trabajé y que me llevó a elegir este nicho para especializarme.",
          OfferService:
            "Como podrás observar cuento con vasta experiencia en la profesión. Con una reconocida trayectoria en el mundo de la traducción, puedes confiar en mí para superar las barreras del idioma. Contáctame y atenderé todas tus necesidades relacionadas con tus clientes internacionales para realizar cualquier trámite necesario.",
          ContactMe: "Contáctame",
          WAppText: "Háblame por WhatsApp",
          TelegramText: "Háblame por Telegram",
          OfficialTranslations: "Traducciones oficiales",
          OfficialTranslations1:
            "Las traducciones públicas son aquellas traducciones firmadas y selladas por un Traductor Público, cumpliendo con ciertas formalidades, de documentos redactados en un idioma extranjero que debe presentarse ante autoridades locales o documentos redactados en nuestro idioma nacional que deben presentarse en el extranjero.",
          OfficialTranslations2:
            "Al ser Licenciado en Traducción Pública me encuentro habilitado para realizar este tipo de traducciones y cuento con considerable experiencia en el rubro. Además, en caso de necesitar traducciones en idiomas en los cuales no existe Traductor Público (en Uruguay solo existen Traductores Públicos de inglés, francés, alemán, italiano y portugués), necesitarás la participación de un idóneo en el idioma correspondiente junto con el Traductor Público.",
          OfficialTranslations3:
            "Dentro de las traducciones oficiales más habituales con las que he trabajado se encuentran: contratos, estatutos, poderes, certificaciones y legalizaciones, partidas y documentos del registro civil y documentos académicos, tales como títulos y escolaridades.",
          NonOfficialTranslations: "Traducciones no oficiales",
          NonOfficialTranslations1:
            "Las traducciones no oficiales son aquellas que no requieren la firma y el sello del Traductor Público. Sin embargo, siempre es recomendable acudir a un Traductor formado en la materia ya que cuenta con todas las herramientas necesarias para realizar este trabajo.",
          NonOfficialTranslations2:
            "Dentro de las traducciones no oficiales más habituales con las que he trabajado se encuentran: contratos, estados financieros, patentes, diversos manuales y protocolos, contenido para sitios web, currículums, entre otros.",
          AudiovisualTranslations: "Traducciones Audiovisuales",
          AudiovisualTranslations1:
            "En este rubro es necesario no solo contar con los conocimientos necesarios para traducir, sino que también es necesario conocer las normas aplicables al subtitulado y el software utilizado para insertar y sincronizar los subtítulos, en caso de ser necesario.",
          AudiovisualTranslations2:
            "Es un área en la que poseo vasta experiencia ya que he subtitulado varios cortos y películas para festivales de cine locales, así como diversos videos, por ejemplo, una charla para el Banco Mundial y una publicidad del sistema de reconocimiento fácil implementado en el Estadio Centenario.",
          LegalTranslation: "Documentos legales",
          LegalTranslationDescription:
            "Mi servicio consiste en ofrecer servicios de traducción legal altamente especializados y confiables a estudios jurídicos, abogados, escribanos y distintas empresas. Me enfoco en proporcionar traducciones precisas y de calidad de contratos, poderes, estatutos, certificaciones y legalizaciones.",
          CLVTranslation: "Registro de productos sanitarios",
          CLVTranslationDescription:
            "También asisto a importadores para que puedan cumplir con sus trámites de habilitación de productos, para los cuales es necesaria la traducción de Certificados de Libre Venta y documentos como cartas de autorización y poderes, certificados de buenas prácticas de fabricación, etc.",
          PrivateDocumentTranslation: "Documentos particulares",
          Advantage: "Lo que obtienes contratando mis servicios",
          Advantage1:
            "No tendrás que preocuparte por los plazos. El trabajo se entregará con la mayor celeridad posible para que puedas cumplir a tiempo con cualquier tipo de trámite.",
          Advantage2:
            "Conocimiento específico en la materia. Gracias a mis más de seis años de experiencia en el campo de la traducción legal y mi sólida formación académica, recibirás un servicio de traducción legal altamente especializado y confiable.",
          Advantage3:
            "Precisión y calidad. Mi enfoque se centra en brindar traducciones legales que reflejen fielmente el contenido y propósito original, asegurando la precisión y coherencia.",
          Advantage4:
            "Tranquilidad. Lo más importante de todo esto proceso es que puedas quedarte tranquilo de que recibirás un servicio de alta calidad, especializado en el área de la traducción legal y con una muy rápida entrega.",
          GetInTouch:
            "Me encantaría poder ayudarlos  a alcanzar sus objetivos superando las barreras del idioma. Si precisas mi ayuda para traducir tus documentos, ya sean oficiales o no oficiales, de índole jurídica o documentos tales como CLV, no dudes en consultarme.",
          Question1:
            "¿Cuál es tu experiencia en la traducción de documentos legales?",
          Answer1:
            "Soy Licenciado en Traducción Pública y gracias a mi sólida formación académica en la Universidad de Montevideo poseo un profundo conocimiento de la terminología legal. Asimismo, cuento con más de 6 años de experiencia en el campo de la traducción legal. Me desempeño como traductor independiente desde el año 2017 y desde 2019 trabajo con un importante estudio de traducción de Montevideo.",
          Question2: "¿Qué tipos de documentos legales puedes traducir?",
          Answer2:
            "Me especializo en la traducción de diversos documentos tales como contratos, estatutos y otros documentos societarios, poderes, certificaciones y legalizaciones. Asimismo, cuento con experiencia en la traducción de Certificados de Libre Venta y documentos similares. Soy Traductor Público, por lo cual cuento con firma y sello que habilita las traducciones para su presentación ante las autoridades competentes.",
          Question3: "¿Cómo se cotiza una traducción?",
          Answer3:
            "Depende del tipo de documento y su extensión. En general, se cotiza por foja, es decir, por cada hoja de traducción. Para poder brindarte una idea más exacta de cuánto puede costar la traducción del documento que necesitas, contáctame.",
          Question4: "¿Cuánto demora la traducción?",
          Answer4:
            "Este punto también depende del tipo de documento y su extensión, pero sí te puedo asegurar que lo tendré pronto a tiempo para que puedas realizar el trámite que corresponda. Para poder brindarte una idea más exacta de cuánto puede demorar la traducción del documento que necesitas, contáctame.",
          Question5: "¿Qué es una traducción pública u oficial?",
          Answer5:
            "Las traducciones públicas son aquellas traducciones firmadas y selladas por un Traductor Público, cumpliendo con ciertas formalidades, de documentos redactados en un idioma extranjero que debe presentarse ante autoridades locales o documentos redactados en nuestro idioma nacional que deben presentarse en el extranjero.",
          Question6: "¿Qué es una traducción no oficial?",
          Answer6:
            "Las traducciones no oficiales son aquellas que no requieren la firma y el sello del Traductor Público. Sin embargo, siempre es recomendable acudir a un Traductor formado en la materia ya que cuenta con todas las herramientas necesarias para realizar este trabajo.",
          Question7:
            "¿Cuál es tu experiencia en la traducción de documentos para el registro de productos?",
          Answer7:
            "Desde el año 2023, el Ministerio de Salud Pública requiere la traducción de documentación del extranjero para el registro de productos sanitarios, y he ayudado a numerosas empresas a realizar este trámite.",
          Help: "¿Cómo puedo ayudarte?",
          LegalDocumentsTranslation: "Traducción de documentos legales",
          ProductRegistrationDocumentsTranslation:
            "Traducción de documentos para el registro de productos",
          PrivateDocumentsTranslation: "Traducción de documentos particulares",
          LegalDocumentsTranslationDescription:
            "Brindo un servicio especializado en la traducción de documentos legales a estudios jurídicos, abogados, escribanos y distintas empresas. Con una sólida formación académica en la Universidad de Montevideo y un profundo conocimiento de la terminología legal, ofrezco traducciones precisas y de alta calidad de documentos legales tales como contratos, poderes, estatutos y otros documentos societarios, certificaciones y legalizaciones.",
          ProductRegistrationDocumentsTranslationDescription:
            "Ayudo a empresas importadoras de productos sanitarios con la traducción de la documentación necesaria para el registro de sus productos: Certificados de libre venta, cartas de autorización y poderes, certificados de buenas prácticas de fabricación, etc.",
          PrivateDocumentsTranslationDescription:
            "Puedo ayudarte con la traducción de documentos particulares, como documentos de estado civil (partidas de nacimiento, defunción, matrimonio, documentos de identidad, pasaportes, etc.), académicos (escolaridades, títulos, certificados, etc.) o económicos (estados financieros y notas).",
          SendMessage: "Envíame un mensaje",
          Name: "Nombre",
          EmailAddress: "Correo electrónico",
          ConfirmationEmailAddress: "Reingresa tu correo electrónico",
          EmailMatch: "Tu correo electrónico no coincide",
          Subject: "Asunto",
          Message: "Mensaje",
          MessageSent: "Tu mensaje fue enviado",
          FillAll: "Por favor, llena todos los campos",
          Submit: "Enviar",
          Development: "Desarrollado por ",
          OR: "O",
        },
      },
    },
    fallbackLng: "esp",
    lng: "esp",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
