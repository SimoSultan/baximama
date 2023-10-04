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
      className={`sticky left-0 right-0 bg-gray-400 p-5 ${Z_INDEXES.FOOTER}`}
    >
      <div
        className={`flex flex-col items-center justify-center ${MAX_DESKTOP_WIDTH}`}
      >
        <img
          src={logo}
          className="mb-5 flex w-20 items-start justify-center"
          alt="Baxi Mama logo"
        />
        <h2 className="text-center text-3xl font-bold">
          {t("footer.tagline")}
        </h2>
        <img
          src={QrCode}
          alt="Baxi Mama Line QR code"
          className="my-5 h-36 w-36"
          onClick={openLine}
        />
        <h6 className="mt-5">{t("footer.follow-us")}</h6>
        <div className="my-2 flex gap-3">
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
