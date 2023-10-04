import { useState } from "react";
import i18n from "../../i18n";
import AuFlagIcon from "../../assets/australian-flag.png";
import BrFlagIcon from "../../assets/brazilian-flag.png";
import TwFlagIcon from "../../assets/taiwanese-flag.png";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    const val = e.target.parentNode.getAttribute("value");
    i18n.changeLanguage(val ?? "en"); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(val);
    localStorage.setItem("lang", val);
  };

  const imageClasses = "w-10 h-10 rounded-full";

  return (
    <div className="my-2 flex w-full justify-center gap-5">
      <button value="en" onClick={chooseLanguage}>
        <img
          src={AuFlagIcon}
          alt="Australian Language Selectector"
          className={imageClasses}
        />
      </button>
      <button value="br" onClick={chooseLanguage}>
        <img
          src={BrFlagIcon}
          alt="Brazilian Language Selectector"
          className={imageClasses}
        />
      </button>
      <button value="tw" onClick={chooseLanguage}>
        <img
          src={TwFlagIcon}
          alt="Taiwanese Language Selectector"
          className={imageClasses}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
