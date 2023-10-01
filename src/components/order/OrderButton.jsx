import { func, string } from "prop-types";
import { Button } from "../core";
import { useTranslation } from "react-i18next";

export const OrderButton = ({ className = "", onClick = () => null }) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="primary"
      className={`flex justify-center items-center mx-auto ${className}`}
      onClick={onClick}
    >
      {t("order.button")}
    </Button>
  );
};

OrderButton.propTypes = {
  className: string,
  onClick: func,
};
