import { func, string } from "prop-types";
import { captialise } from "../../utils/contants";
import { useTranslation } from "react-i18next";

export const MenuItem = ({ heading = "", onClick = () => null }) => {
  const { t } = useTranslation();

  return (
    <li
      className="flex justify-center items-center h-14 w-full bg-white text-black"
      onClick={onClick}
    >
      {captialise(t(`menu.${heading}`))}
    </li>
  );
};

MenuItem.propTypes = {
  heading: string,
  onClick: func,
};
