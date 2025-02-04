import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggenId = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />

      {isLoggenId ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
