import { useState } from "react";
import i18n from "../i18n";
import { Button } from "./core";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value ?? "en"); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="w-full flex justify-around my-2">
      <Button
        label="English"
        variant="primary"
        value="en"
        onClick={chooseLanguage}
      />
      <Button
        label="Brasileiro"
        variant="primary"
        value="br"
        onClick={chooseLanguage}
      />
      <Button
        label="Zhōngwén"
        variant="primary"
        value="tw"
        onClick={chooseLanguage}
      />
    </div>
  );
};

export default LanguageSelector;
