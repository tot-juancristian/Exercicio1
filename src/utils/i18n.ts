import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";

// O espanhol deve ser o LATAM, e o inglês americano.

const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // <-- TROCAR O IDIOMA AQUI, DEPOIS DISSO É SO DAR npm run build, EM CADA IDIOMA PARA SALVAR O SCORM.
  fallbackLng: ["pt", "en"],
  supportedLngs: ["pt", "en", "es"],
  load: "languageOnly",
  interpolation: { escapeValue: false },
  defaultNS: "translation",
  debug: true,
});

export default i18n;

// Se utiliza o i18n para evitar retrabalho, vai que é encontrado algum ajuste no curso que ja está traduzido para os 3 idiomas,
// ai você teria que alterar nos 3 scorms, assim vocês só altera em 1
