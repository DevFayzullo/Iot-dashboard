import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const authed = !!localStorage.getItem("token"); // hozircha demo
  return authed ? <Outlet /> : <Navigate to="/" replace />;
}
