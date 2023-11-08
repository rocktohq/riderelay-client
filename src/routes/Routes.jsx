import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import Schedules from "../pages/Schedules/Schedules";
import MyServices from "../pages/MyServices/MyServices";
import AddService from "../pages/AddService/AddService";
import UpdateService from "../pages/UpdateService/UpdateService";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: (
          <PrivateRoute>
            <Service />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SITE}/api/v1/services/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/shcedules",
        element: (
          <PrivateRoute>
            <Schedules />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
