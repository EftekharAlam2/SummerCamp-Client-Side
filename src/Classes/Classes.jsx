import { useEffect, useState } from "react";

const Classes = () => {
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

  return (
    <div className="classes-section">
      <h2 className="text-4xl font-bold mb-4 my-8 text-center">Classes</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((classData) => (
          <div
            key={classData._id}
            className="class-card bg-white rounded-lg shadow-md"
          >
            <img
              src={classData.image}
              alt={classData.name}
              className="class-image w-full rounded-t-lg"
            />
            <div className="class-details p-4">
              <h3 className="class-name text-xl font-bold mb-2">
                {classData.name}
              </h3>
              <p className="instructor-name text-gray-700 mb-2">
                Instructor: {classData.instructor}
              </p>
              <p className="available-seats text-gray-700 mb-2">
                Available Seats: {classData.availableSeats}
              </p>
              <p className="price text-gray-700 mb-2">
                Price: {classData.price}
              </p>
              <button
                className={`enroll-btn py-2 px-4 ${
                  classData.availableSeats === 0
                    ? "bg-red-500 cursor-not-allowed"
                    : "bg-blue-500"
                }`}
                disabled={classData.availableSeats === 0}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
