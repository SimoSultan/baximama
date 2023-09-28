import { SITE_GAP } from "../../utils/contants";
import { About } from "../about/About";
import { Space } from "../core";
import { Order } from "../order/Order";
import { ProductList } from "../products/ProductList";

export const Content = () => {
  return (
    <main className={`${SITE_GAP} bg-slate-500`}>
      <About />
      <Space height={5} />
      <ProductList />
      <Space height={5} />
      <Order />
    </main>
  );
};
