import { useTranslation } from "react-i18next";
import { LINE_URL, SECTIONS, openLink } from "../../utils/contants";
import { Card, CardTitle, Text } from "../core";
import { OrderButton } from "./OrderButton";

export const Order = () => {
  const { t } = useTranslation();
  const openLine = () => openLink(LINE_URL);

  return (
    <Card id={SECTIONS.ORDER} className="w-full bg-white">
      <CardTitle>{t("order.heading")}</CardTitle>
      <Text>{t("order.description")}</Text>
      <OrderButton onClick={openLine} className="mt-3" />
    </Card>
  );
};
