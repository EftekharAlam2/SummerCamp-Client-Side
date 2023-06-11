import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Context } from "../AuthProviders/Providers";
import { Helmet } from "react-helmet-async";
import { AiFillEye } from "react-icons/ai";
import { Flip } from "react-awesome-reveal";

const Login = () => {
  const { signIn, googleSignIn } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(loggedUser);
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          title: "Wrong Email and Password",
          text: "Please try again",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const saveUser = { instructor: user.displayName, email: user.email };
        fetch("http://localhost:5000/classes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {});
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      <Helmet>
        <title>SportCamp | LogIn</title>
      </Helmet>
      <Flip>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
          <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
                <AiFillEye
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline btn-accent w-full py-2 px-4 rounded-lg text-white font-bold"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              className="btn btn-secondary w-full py-2 px-4 rounded-lg text-white font-bold"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
          <p className="mt-6 text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              SignUp here
            </Link>
          </p>
        </div>
      </Flip>
    </div>
  );
};

export default Login;
