import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);

  const handleApprove = (index) => {
    // Update the status to "approved" for the class at the given index
    const updatedData = [...data];
    updatedData[index].status = "approved";
    setData(updatedData);
  };

  const handleDeny = (index) => {
    // Update the status to "denied" for the class at the given index
    const updatedData = [...data];
    updatedData[index].status = "denied";
    setData(updatedData);
  };

  const handleMakeInstructor = () => {
    // Add logic to handle making the user at the given index an instructor
    // Disable the button after it's clicked
  };

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportCamp | Admin Dashboard</title>
      </Helmet>
      <div className="container mx-auto mb-5">
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
                <button
                  onClick={() => handleMakeInstructor(index)}
                  // disabled={/* Logic to check if user is already an instructor */}
                  className="btn btn-accent me-2"
                >
                  Make Instructor
                </button>
                <button
                  onClick={() => handleMakeAdmin(item)}
                  // disabled={/* Logic to check if user is already an admin */}
                  className="btn btn-accent me-2"
                >
                  Make Admin
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
