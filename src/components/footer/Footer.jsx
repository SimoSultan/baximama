import LanguageSelector from "./LanguageSelector";
import logo from "../../assets/logo.png";
import { MAX_DESKTOP_WIDTH } from "../../utils/contants";

export const Footer = () => {
  return (
    <footer className={`sticky left-0 right-0 px-5 bg-gray-400`}>
      <div
        className={`flex flex-col justify-center items-center p-5 ${MAX_DESKTOP_WIDTH}`}
      >
        <img
          src={logo}
          className="flex justify-center items-start w-20"
          alt="Baxi Mama logo"
        />
        <h2 className="text-3xl font-bold text-center">
          Enjoy Some Delicious Cheese Bread By Ordering With Us On Line
        </h2>
        <h6>Follow Us On Social Media</h6>
        <LanguageSelector />
        <p>© {new Date().getFullYear()} Baxi Mama</p>
      </div>
    </footer>
  );
};
