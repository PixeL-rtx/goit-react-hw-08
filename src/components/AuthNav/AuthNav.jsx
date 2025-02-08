import { NavLink } from "react-router-dom";
import css from "./Authnav.module.css";
import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
