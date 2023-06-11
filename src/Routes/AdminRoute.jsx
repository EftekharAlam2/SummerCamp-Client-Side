import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../AuthProviders/Providers";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  const [value, setValue] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-eftekhar-alam2.vercel.app/classes/role/${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data1) => {
        const userRole = data1.find((u) => u.email === user?.email);
        setValue(userRole); // Set userRole directly as the value
      });
  }, [user]);

  console.log(value?.role);

  if (value?.role === "admin") {
    return children;
  }

  if (!loading) {
    if (value?.role === undefined) {
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-56">
        <progress className="progress mx-auto"></progress>
      </div>
    </div>
  );
};

export default AdminRoute;
