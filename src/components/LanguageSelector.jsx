import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        onClick={() => changeLanguage("en")}
        className={`w-8 h-6 rounded overflow-hidden flex items-center justify-center transition-all duration-200 ${
          i18n.language === "en"
            ? "ring-2 ring-[#3385c6] scale-110"
            : "opacity-70 hover:opacity-100"
        }`}
        title="English"
      >
        <img
          src="https://flagcdn.com/gb.svg"
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>

      <button
        onClick={() => changeLanguage("it")}
        className={`w-8 h-6 rounded overflow-hidden flex items-center justify-center transition-all duration-200 ${
          i18n.language === "it"
            ? "ring-2 ring-[#3385c6] scale-110"
            : "opacity-70 hover:opacity-100"
        }`}
        title="Italiano"
      >
        <img
          src="https://flagcdn.com/it.svg"
          alt="Italian"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
