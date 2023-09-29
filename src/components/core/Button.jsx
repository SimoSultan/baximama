import { string, func, node } from "prop-types";

const BUTTON_VARIANTS = {
  PRIMARY:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  SECONDARY:
    "h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800",
};

export const Button = ({
  children,
  variant = "primary",
  onClick = () => null,
  value = "",
  className = "",
}) => {
  const classes = ((variant) => {
    switch (variant) {
      case "primary":
        return BUTTON_VARIANTS.PRIMARY;
      case "secondary":
        return BUTTON_VARIANTS.SECONDARY;

      default:
        return BUTTON_VARIANTS.PRIMARY;
    }
  })(variant);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button
      className={`${classes} ${className}`}
      onClick={handleClick}
      value={value}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node.isRequired,
  variant: string,
  onClick: func,
  value: string,
  className: string,
};
