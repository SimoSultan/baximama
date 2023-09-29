import { func, string } from "prop-types";
import { captialise } from "../../utils/contants";

export const MenuItem = ({ heading = "", onClick = () => null }) => {
  return (
    <li
      className="flex justify-center items-center h-14 w-full bg-white text-black"
      onClick={onClick}
    >
      {captialise(heading)}
    </li>
  );
};

MenuItem.propTypes = {
  heading: string,
  onClick: func,
};
