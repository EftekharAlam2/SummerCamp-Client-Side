import { Link } from "react-router-dom";
import err from "/error.png";

export default function ErrorPage() {
  return (
    <div id="error-page" className="text-center text-4xl my-52">
      <div className=" flex justify-center">
        <div className="w-3/4 md:w-1/5 mt-10 md:mt-28">
          <img src={err} alt="" />
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-outline btn-accent mt-10">
          Going to Home Page
        </button>
      </Link>
    </div>
  );
}
