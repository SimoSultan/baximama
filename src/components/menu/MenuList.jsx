import { func } from "prop-types";
import { MenuItem } from "./MenuItem";
import { SECTIONS, Z_INDEXES } from "../../utils/contants";
import LanguageSelector from "../footer/LanguageSelector";

export const MenuList = ({ onClose }) => {
  const handleMenuItemClick = (heading) => {
    const section = document.getElementById(SECTIONS[heading.toUpperCase()]);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        alignToTop: false,
      });
      onClose();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 h-screen ${Z_INDEXES.BACKDROP}`}
        onClick={onClose}
      />
      <nav
        className={`fixed bottom-0 w-full flex flex-col items-center justify-center ${Z_INDEXES.MENU}`}
      >
        {Object.values(SECTIONS).map((heading, index) => {
          return (
            <MenuItem
              key={`${heading}-${index}`}
              heading={heading}
              onClick={() => handleMenuItemClick(heading)}
            />
          );
        })}
        <li className="flex justify-center items-center h-14 w-full bg-white text-black">
          <LanguageSelector />
        </li>
      </nav>
    </>
  );
};

MenuList.propTypes = {
  onClose: func,
};
