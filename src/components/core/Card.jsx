import { bool, node, string } from "prop-types";

export const Card = ({
  children,
  className = "",
  noPadding = false,
  id = "",
}) => {
  return (
    <div
      id={id}
      className={`min-h-[275px] w-full overflow-hidden rounded-lg shadow-lg ${
        noPadding ? "" : "p-3"
      } ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: node.isRequired,
  className: string,
  noPadding: bool,
  id: string,
};
