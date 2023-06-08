import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Home/Home.jsx";
import LogIn from "./User/LogIn.jsx";
import SignUp from "./User/SignUp.jsx";
import Providers from "./AuthProviders/Providers.jsx";
import "sweetalert2/dist/sweetalert2.css";
import ErrorPage from "./SharedPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Providers>
  </React.StrictMode>
);
