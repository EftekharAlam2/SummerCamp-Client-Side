import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-eftekhar-alam2.vercel.app/classes",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);

  const handleApprove = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "approved";
    setData(updatedData);
  };

  const handleDeny = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "denied";
    setData(updatedData);
  };

  const handleMakeRole = (user, role) => {
    console.log(role);
    fetch(
      `https://b7a12-summer-camp-server-side-eftekhar-alam2.vercel.app/classes/role/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Role Enabled Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportCamp | Admin Dashboard</title>
      </Helmet>
      <div className="container mx-auto mb-5">
        <Zoom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <img src={item.image} alt="Class" className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">
                  Instructor: {item.instructor}
                </p>
                <p className="text-gray-700 mb-4">
                  Instructor Email: {item.email}
                </p>
                <p className="text-gray-700 mb-2">
                  Available Seats: {item.availableSeats}
                </p>
                <p className="text-gray-700 mb-4">Price: {item.price}</p>
                <p className="text-gray-700 mb-2">Status: {item.status}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleApprove(index)}
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    className="btn btn-primary me-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(index)}
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    className="btn btn-danger me-2"
                  >
                    Deny
                  </button>
                  {item.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeRole(item, "admin")}
                      className="btn btn-accent me-2"
                    >
                      Make Admin
                    </button>
                  )}
                  {item.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeRole(item, "instructor")}
                      className="btn btn-accent me-2"
                    >
                      Make Instructor
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AllUsers;
