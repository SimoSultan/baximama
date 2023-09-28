import { number } from "prop-types";

export const Space = ({ height = 0 }) => {
  return <div className={`mt-${height}`}></div>;
};

Space.propTypes = {
  height: number,
  width: number,
};
