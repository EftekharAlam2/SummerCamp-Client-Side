import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import ClassesSection from "./ClassesSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SportCamp | Home</title>
      </Helmet>
      <Slider></Slider>
      <ClassesSection></ClassesSection>
    </div>
  );
};

export default Home;
