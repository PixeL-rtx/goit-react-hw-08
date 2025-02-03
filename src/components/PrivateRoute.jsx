import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const PrivateRoute = ({ components: Component, redirectTo = "/" }) => {
  const isLoggenId = useSelector(selectIsLoggedIn);

  return isLoggenId ? Component : <Navigate to={redirectTo} />;
};
