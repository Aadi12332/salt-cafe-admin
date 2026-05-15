import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}