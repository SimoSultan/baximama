import { func } from "prop-types";
import { Z_INDEXES } from "../../utils/contants";
import { UilBars } from "@iconscout/react-unicons";
export const FAB = ({ onClick = () => null }) => {
  return (
    <div
      className={`fixed bottom-10 right-10 rounded-full w-16 h-16 bg-green-400 shadow-xl flex justify-center items-center ${Z_INDEXES.MENU}`}
      onClick={onClick}
    >
      <UilBars size="40" />
    </div>
  );
};

FAB.propTypes = {
  onClick: func,
};
