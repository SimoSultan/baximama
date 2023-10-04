import { func } from "prop-types";
import { Z_INDEXES } from "../../utils/contants";
import { UilBars } from "@iconscout/react-unicons";
export const FAB = ({ onClick = () => null }) => {
  return (
    <div
      className={`fixed bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-400 shadow-xl ${Z_INDEXES.MENU}`}
      onClick={onClick}
    >
      <UilBars size="40" />
    </div>
  );
};

FAB.propTypes = {
  onClick: func,
};
