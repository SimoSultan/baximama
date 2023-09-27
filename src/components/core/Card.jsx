import { node } from "prop-types";

export const Card = ({ children }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: node.isRequired,
};
