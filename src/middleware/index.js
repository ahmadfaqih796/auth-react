import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const isAuthorized =
    auth &&
    Array.isArray(auth.roles) &&
    auth.roles.some((role) => allowedRoles.includes(role));

  // const cek = auth?.roles?.find((role) => allowedRoles?.includes(role));

  return isAuthorized ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
