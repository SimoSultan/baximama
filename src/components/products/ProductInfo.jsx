import { string } from "prop-types";
import { Text } from "../core";

export const ProductInfo = ({ title, description }) => {
  return (
    <div>
      <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
        {title}
      </h4>
      <Text>{description}</Text>
    </div>
  );
};

ProductInfo.propTypes = {
  title: string,
  description: string,
};
