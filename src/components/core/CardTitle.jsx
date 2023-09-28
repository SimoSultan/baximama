import { node } from "prop-types";

export const CardTitle = ({ children }) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

CardTitle.propTypes = {
  children: node,
};
