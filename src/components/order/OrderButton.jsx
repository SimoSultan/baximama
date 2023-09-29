import { func, string } from "prop-types";
import { Button } from "../core";

export const OrderButton = ({ className = "", onClick = () => null }) => {
  return (
    <Button
      variant="primary"
      className={`flex justify-center items-center mx-auto ${className}`}
      onClick={onClick}
    >
      ORDER
    </Button>
  );
};

OrderButton.propTypes = {
  className: string,
  onClick: func,
};
