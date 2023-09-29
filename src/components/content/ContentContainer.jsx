import { SITE_GAP, MAX_DESKTOP_WIDTH } from "../../utils/contants";
import { About } from "../about/About";
import { Space } from "../core";
import { Order, OrderButton } from "../order";
import { ProductList } from "../products/ProductList";

export const ContentContainer = () => {
  const scrollToOrderSection = () => {
    const orderSection = document.getElementById("order-card");
    orderSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full bg-orange-400">
      <div className={`${SITE_GAP} ${MAX_DESKTOP_WIDTH}`}>
        <About />
        <Space height={5} />
        <OrderButton onClick={scrollToOrderSection} />
        <Space height={5} />
        <ProductList />
        <Space height={5} />
        <Order />
      </div>
    </main>
  );
};
