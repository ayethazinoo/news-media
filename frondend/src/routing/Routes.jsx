import React, { useContext } from "react";
import "../index.css";
import { Navigate, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import CreateNews from "../pages/CreateNews.jsx";
import DetailNews from "../pages/DetailNews.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import { UserContext } from "../contex/UserContex.jsx";

const Routes = () => {
  let { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: user ? <Home /> : <Navigate to={"/login"} />,
        },
        {
          path: "/createNews",
          element: user ? <CreateNews /> : <Navigate to={"/login"} />,
        },
        {
          path: "/updateNews/:id",
          element: <CreateNews />,
        },
        {
          path: "/detailNews/:id",
          element: user ? <DetailNews /> : <Navigate to={"/login"} />,
        },
        {
          path: "/login",
          element: !user ? <Login /> :<Navigate to={'/'}/>,
        },
        {
          path: "/register",
          element: !user ? <Register /> :<Navigate to={'/'}/>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
