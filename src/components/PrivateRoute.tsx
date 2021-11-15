import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = () => {
  const { getToken } = useAuth();

  const isAuthenticated = getToken() !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
