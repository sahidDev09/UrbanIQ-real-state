import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if(loading){
    return <span className="loading loading-spinner loading-2xl flex justify-center items-center mx-auto"></span>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname }  ></Navigate>;
};

export default PrivateRoute;
