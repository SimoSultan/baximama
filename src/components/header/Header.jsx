import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="w-100 flex h-14 items-center justify-center bg-blue-400 shadow-lg">
      <img
        src={logo}
        className="absolute left-5 top-2 w-10"
        alt="Baxi Mama logo"
      />
      <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
    </header>
  );
};
