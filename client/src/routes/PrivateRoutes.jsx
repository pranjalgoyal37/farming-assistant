import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoutes = ({ allowedRoles }) => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
