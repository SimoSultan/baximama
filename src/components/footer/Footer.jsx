import LanguageSelector from "./LanguageSelector";
import logo from "../../assets/logo.png";
import {
  INSAGRAM_URL,
  LINE_URL,
  MAX_DESKTOP_WIDTH,
  SECTIONS,
  Z_INDEXES,
  openLink,
} from "../../utils/contants";
import { useTranslation } from "react-i18next";
import { UilLine } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import QrCode from "../../assets/qr-code.png";

export const Footer = () => {
  const { t } = useTranslation();
  const openLine = () => openLink(LINE_URL);
  const openInstagram = () => openLink(INSAGRAM_URL);

  return (
    <footer
      id={SECTIONS.CONTACT}
      className={`sticky left-0 right-0 p-5 bg-gray-400 ${Z_INDEXES.FOOTER}`}
    >
      <div
        className={`flex flex-col justify-center items-center ${MAX_DESKTOP_WIDTH}`}
      >
        <img
          src={logo}
          className="flex justify-center items-start w-20 mb-5"
          alt="Baxi Mama logo"
        />
        <h2 className="text-3xl font-bold text-center">
          {t("footer.tagline")}
        </h2>
        <img
          src={QrCode}
          alt="Baxi Mama Line QR code"
          className="w-36 h-36 my-5"
          onClick={openLine}
        />
        <h6 className="mt-5">{t("footer.follow-us")}</h6>
        <div className="flex gap-3 my-2">
          <button onClick={openLine}>
            <UilLine size="40" />
          </button>
          <button onClick={openInstagram}>
            <UilInstagramAlt size="40" />
          </button>
        </div>
        <h6 className="mt-5">{t("footer.language")}</h6>
        <LanguageSelector />
        <p className="mt-5">© {new Date().getFullYear()} Baxi Mama</p>
      </div>
    </footer>
  );
};
