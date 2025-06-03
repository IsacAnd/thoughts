import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
