import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggenId = useSelector(selectIsLoggedIn);

  return isLoggenId ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
