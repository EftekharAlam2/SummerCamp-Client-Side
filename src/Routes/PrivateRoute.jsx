import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../AuthProviders/Providers";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const location = useLocation();

  if (!user && !loading) {
    Swal.fire({
      title: "You have to log in first to Process",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff",
      backdrop: `
        rgba(0,0,123,0.4)
      `,
    });
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="w-56">
          <progress className="progress mx-auto"></progress>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
