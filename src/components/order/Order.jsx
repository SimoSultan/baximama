import { useTranslation } from "react-i18next";
import { SECTIONS, openLine } from "../../utils/contants";
import { Card, CardTitle, Text } from "../core";
import { OrderButton } from "./OrderButton";

export const Order = () => {
  const { t } = useTranslation();
  return (
    <Card id={SECTIONS.ORDER} className="bg-white w-full">
      <CardTitle>{t("order.heading")}</CardTitle>
      <Text>{t("order.description")}</Text>
      <OrderButton onClick={openLine} className="mt-3" />
    </Card>
  );
};
