import { node, string } from "prop-types";

export const Text = ({ children, className }) => {
  return (
    <span className={`${className} leading-normal text-gray-700`}>
      {children}
    </span>
  );
};

Text.propTypes = {
  children: node,
  className: string,
};
