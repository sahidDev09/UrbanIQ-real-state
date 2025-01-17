/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

//   loading code

  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl h-[600px] flex mx-auto scale-150"></span>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
