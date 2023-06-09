import { Helmet } from "react-helmet-async";
import AllUsers from "./AllUsers";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>SportCamp | Dashboard</title>
      </Helmet>
      <AllUsers></AllUsers>
    </div>
  );
};

export default Dashboard;
