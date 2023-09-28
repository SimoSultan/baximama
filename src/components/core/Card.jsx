import { bool, node, string } from "prop-types";

export const Card = ({ children, className, noPadding }) => {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-lg w-full ${
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
};
