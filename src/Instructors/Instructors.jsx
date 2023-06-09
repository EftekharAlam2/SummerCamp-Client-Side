import { useEffect, useState } from "react";

const Instructors = () => {
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
    <div className="instructors-section mb-5">
      <h2 className="text-4xl font-bold mb-4 my-8 text-center">Instructors</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((instructor) => (
          <div
            key={instructor._id}
            className="instructor-card bg-white rounded-lg shadow-md"
          >
            <img
              src={instructor.instructor_img}
              alt={instructor.instructor}
              className="instructor-image w-full rounded-t-lg"
            />
            <div className="instructor-details p-4">
              <h3 className="instructor-name text-xl font-bold mb-2 text-center">
                {instructor.instructor}
              </h3>
              <p className="instructor-email text-gray-700 mb-2 text-center">
                {instructor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
