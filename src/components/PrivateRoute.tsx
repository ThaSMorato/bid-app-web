import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
