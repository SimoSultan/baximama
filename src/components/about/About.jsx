import { useTranslation } from "react-i18next";
import { SECTIONS } from "../../utils/contants";
import { Card, CardTitle, Text } from "../core";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Card id={SECTIONS.ABOUT} className="bg-white">
      <CardTitle>{t("about.heading")}</CardTitle>
      <Text>{t("about.description")}</Text>
    </Card>
  );
};
