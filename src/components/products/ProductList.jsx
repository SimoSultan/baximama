import { Fragment } from "react";
import { Space } from "../core";
import { ProductItem } from "./ProductItem";
import { PRODUCTS, SECTIONS } from "../../utils/contants";

export const ProductList = () => {
  return (
    <div id={SECTIONS.PRODUCTS}>
      {PRODUCTS.map((product, index) => (
        <Fragment key={`product-list-item-${product.id}`}>
          <ProductItem {...product} />
          {index !== PRODUCTS.length - 1 ? <Space height={5} /> : null}
        </Fragment>
      ))}
    </div>
  );
};
