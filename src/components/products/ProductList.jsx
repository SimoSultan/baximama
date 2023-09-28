import { Fragment } from "react";
import { Space } from "../core";
import { ProductItem } from "./ProductItem";

const products = [1, 2];

export const ProductList = () => {
  return (
    <div>
      {products.map((id, index) => (
        <Fragment key={`product-list-item-${id}`}>
          <ProductItem />
          {index !== products.length - 1 ? <Space height={5} /> : null}
        </Fragment>
      ))}
    </div>
  );
};
