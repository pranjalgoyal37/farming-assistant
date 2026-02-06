import { createContext, useContext, useState } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
      const [language, setLanguage] = useState(
            localStorage.getItem("language") || "en"
      );

      const changeLanguage = (lang) => {
            setLanguage(lang);
            localStorage.setItem("language", lang);
      };

      const t = (key) => {
            return translations[language]?.[key] || translations.en[key] || key;
      };

      return (
            <LanguageContext.Provider value={{ language, changeLanguage, t }}>
                  {children}
            </LanguageContext.Provider>
      );
};

export default LanguageProvider;
export const useLanguage = () => useContext(LanguageContext);
