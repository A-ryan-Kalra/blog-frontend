import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  // const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.user);

  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
}

export default PrivateRoute;
