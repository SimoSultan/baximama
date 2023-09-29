import { string } from "prop-types";
import { Button } from "../core";

export const OrderButton = ({ className }) => {
  return (
    <Button variant="primary" className={className}>
      ORDER
    </Button>
  );
};

OrderButton.propTypes = {
  className: string,
};
