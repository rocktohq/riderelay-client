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
        element: <Service />,
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
        element: <MyServices />,
      },
      {
        path: "/addService",
        element: <AddService />,
      },
      {
        path: "/updateService/:id",
        element: <UpdateService />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/services/${params.id}`),
      },
      {
        path: "/shcedules",
        element: <Schedules />,
      },
    ],
  },
]);
