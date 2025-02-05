import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user, setLoading } = useAuth();
  const location = useLocation();
 

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
