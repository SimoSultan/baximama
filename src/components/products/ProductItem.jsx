import { useState } from "react";
import { Button, Card } from "../core";
import ReactCardFlip from "react-card-flip";
import { ProductInfo } from "./ProductInfo";

const CARD_HEIGHT = "h-70";

export const ProductItem = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card
        noPadding
        className="w-full overflow-hidden rounded-lg shadow-lg bg-white"
      >
        <img
          className="object-cover w-full h-40"
          src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Flower and sky"
        />
        <div className="px-6 py-4">
          <h4 className="text-xl font-semibold tracking-tight text-gray-800">
            This is the title
          </h4>
          <Button variant="primary" className="mt-3" onClick={handleClick}>
            MORE INFO
          </Button>
        </div>
      </Card>
      <ProductInfo
        title={"This is the title"}
        description={"This is the description"}
        onClose={handleClick}
      />
    </ReactCardFlip>
  );
};
