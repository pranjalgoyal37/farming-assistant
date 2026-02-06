import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageProvider";
import { languages } from "../translations";

const LanguageSelector = () => {
      const { language, changeLanguage } = useLanguage();

      return (
            <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-gray-200 hover:bg-white hover:border-green-400 transition-all">
                        <Globe className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">
                              {languages.find((l) => l.code === language)?.nativeName}
                        </span>
                  </button>

                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {languages.map((lang) => (
                              <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full text-left px-4 py-3 hover:bg-green-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${language === lang.code ? "bg-green-100 text-green-700 font-semibold" : "text-gray-700"
                                          }`}
                              >
                                    <div className="flex items-center justify-between">
                                          <span>{lang.nativeName}</span>
                                          {language === lang.code && (
                                                <span className="text-green-600">✓</span>
                                          )}
                                    </div>
                                    <span className="text-xs text-gray-500">{lang.name}</span>
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default LanguageSelector;
