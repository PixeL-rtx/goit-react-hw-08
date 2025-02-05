import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggenId = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.homeLink} to="/">
        Home
      </NavLink>
      {isLoggenId && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
