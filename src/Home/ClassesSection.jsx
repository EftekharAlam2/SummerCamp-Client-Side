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
    <div>
      <h1>Classes</h1>
    </div>
  );
};

export default ClassesSection;
