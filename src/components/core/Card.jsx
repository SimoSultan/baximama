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
      className={`overflow-hidden rounded-lg shadow-lg w-full min-h-[275px] ${
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
