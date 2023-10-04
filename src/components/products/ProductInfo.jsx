import { func, string } from "prop-types";
import { Card, Text } from "../core";
import { OrderButton } from "../order";
import { LINE_URL, openLink } from "../../utils/contants";
import { useTranslation } from "react-i18next";
import { UilMultiply } from "@iconscout/react-unicons";
export const ProductInfo = ({ id = "id", onClose = () => null }) => {
  const { t } = useTranslation();
  const openLine = () => openLink(LINE_URL);

  return (
    <Card className="bg-white">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center"
      >
        <UilMultiply />
      </button>
      <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
        {t(`products.${id}.heading`)}
      </h4>
      <Text>{t(`products.${id}.description`)}</Text>
      <OrderButton className="mt-3" onClick={openLine} />
    </Card>
  );
};

ProductInfo.propTypes = {
  id: string.isRequired,
  onClose: func,
};
