import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Error from "../pages/error/Error";
import Dashboard from "./../pages/dashboard/Dashboard";
import Clients from "./../pages/clients/Clients";
import Vehicles from "./../pages/vehicles/Vehicles";
import Trips from "./../pages/trips/Trips";
import Users from "./../pages/users/Users";
import Directions from "./../pages/directions/Directions";
import Settings from "../pages/settings/Settings";
import Login from "./../auth/login/Login";
import Register from "./../auth/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "vehicles",
        element: <Vehicles />,
      },
      {
        path: "trips",
        element: <Trips />,
      },
      {
        path: "directions",
        element: <Directions />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
