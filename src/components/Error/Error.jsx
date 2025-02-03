import { BiSolidErrorAlt } from "react-icons/bi";
import css from "./Error.module.css";

const Error = () => {
  return (
    <div className={css.errorContainer}>
      <BiSolidErrorAlt className={css.errorIcon} />
      <p className={css.errorText}>
        Something went wrong, please reload you page!
      </p>
    </div>
  );
};

export default Error;
