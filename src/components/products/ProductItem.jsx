import { useState } from "react";
import { Button, Card } from "../core";
import ReactCardFlip from "react-card-flip";
import { ProductInfo } from "./ProductInfo";
import { string } from "prop-types";
import { useTranslation } from "react-i18next";

export const ProductItem = ({ id, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { t } = useTranslation();

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const headingKey = `products.${id}.heading`;

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card
        noPadding
        className="w-full overflow-hidden rounded-lg shadow-lg bg-white"
      >
        <img
          className="object-cover w-full h-40"
          src={image}
          alt={headingKey}
        />
        <div className="px-6 py-4">
          <h4 className="text-xl font-semibold tracking-tight text-gray-800">
            {t(headingKey)}
          </h4>
          <Button variant="primary" className="mt-3" onClick={handleClick}>
            {t("products.button")}
          </Button>
        </div>
      </Card>
      <ProductInfo id={id} onClose={handleClick} />
    </ReactCardFlip>
  );
};

ProductItem.propTypes = {
  id: string.isRequired,
  image: string.isRequired,
};
