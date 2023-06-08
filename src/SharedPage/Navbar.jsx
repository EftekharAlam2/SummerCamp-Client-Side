import { Link } from "react-router-dom";
import logo from "/logo.png";
import { useContext, useState } from "react";
// import { Context } from "../AuthProviders/Providers";

const Navbar = () => {
  const { user, logOut } = useContext(Context);

  const [showName, setShowName] = useState(false);

  const navItems = (
    <>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li>
        <Link to="/alltoys" className="nav-link">
          All Toys
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/mytoys" className="nav-link">
            My Toys
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/addtoy" className="nav-link">
            Add A Toy
          </Link>
        </li>
      )}
      <li>
        <Link to="/blogs" className="nav-link">
          Blogs
        </Link>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-primary h-16 mb-4">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img src={logo} alt="Website Logo" className="h-12 w-auto ml-4" />
        <a className="btn btn-ghost text-white text-xl font-bold pb-1 ml-2">
          GameToys
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end flex items-center">
        <div
          className="pr-4 relative"
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
        >
          {user && (
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
          )}
          {showName && user && (
            <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
              {user.displayName}
            </div>
          )}
        </div>
        <div>
          {user ? (
            <div>
              <button className="btn btn-outline btn-warning" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-warning">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
