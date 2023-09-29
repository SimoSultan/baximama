import { func, string } from "prop-types";
import { Card, Text } from "../core";
import { OrderButton } from "../order";
import { openLine } from "../../utils/contants";

export const ProductInfo = ({
  title = "Title",
  description = "description",
  onClose = () => null,
}) => {
  return (
    <Card className="bg-white">
      <button onClick={onClose} className="absolute right-5 top-3">
        Close
      </button>
      <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
        {title}
      </h4>
      <Text>{description}</Text>
      <OrderButton className="mt-3" onClick={openLine} />
    </Card>
  );
};

ProductInfo.propTypes = {
  title: string,
  description: string,
  onClose: func,
};
