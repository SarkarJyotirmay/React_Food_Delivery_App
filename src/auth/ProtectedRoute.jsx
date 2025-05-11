// src/components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, loading } = useSelector((state) => state.authReducers);

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
