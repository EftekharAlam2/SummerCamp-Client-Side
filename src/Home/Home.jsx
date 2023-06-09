import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import ClassesSection from "./ClassesSection";
import InstructorSection from "./InstructorSection";
import EnrollSection from "./EnrollSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <Slider></Slider>
      <ClassesSection></ClassesSection>
      <InstructorSection></InstructorSection>
      <EnrollSection></EnrollSection>
    </div>
  );
};

export default Home;
