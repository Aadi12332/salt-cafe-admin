import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuth = localStorage.getItem("auth");

  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" replace />;
}