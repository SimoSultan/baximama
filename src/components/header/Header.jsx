import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex w-100 justify-center h-14 items-center bg-blue-400 shadow-lg">
      <img
        src={logo}
        className="absolute w-10 left-5 top-2"
        alt="Baxi Mama logo"
      />
      <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
    </header>
  );
}
