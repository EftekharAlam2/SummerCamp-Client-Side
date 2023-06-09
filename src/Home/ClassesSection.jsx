import { useEffect, useState } from "react";

const ClassesSection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/classes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        //After descending on order of students, the first 6 data is selected
        const filteredData = data.slice(0, 6);
        setData(filteredData);
      });
  }, []);

  console.log(data);

  return (
    <div className="class-section my-5">
      <h2 className="text-4xl font-bold mb-4 my-8 text-center">
        Popular Classes
      </h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map((classData) => (
          <div
            key={classData.id}
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
              <p className="student-count text-gray-700">
                Students: {classData.students}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
