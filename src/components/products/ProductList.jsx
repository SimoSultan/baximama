import { Fragment } from "react";
import { Space } from "../core";
import { ProductItem } from "./ProductItem";
import { SECTIONS } from "../../utils/contants";

const products = [1, 2];

export const ProductList = () => {
  return (
    <div id={SECTIONS.PRODUCTS}>
      {products.map((id, index) => (
        <Fragment key={`product-list-item-${id}`}>
          <ProductItem />
          {index !== products.length - 1 ? <Space height={5} /> : null}
        </Fragment>
      ))}
    </div>
  );
};
