import { func } from "prop-types";
import { MenuItem } from "./MenuItem";
import { SECTIONS, Z_INDEXES } from "../../utils/contants";

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
        className="fixed inset-0 bg-black opacity-50 flex-1"
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
      </nav>
    </>
  );
};

MenuList.propTypes = {
  onClose: func,
};
