import { createBrowserRouter, Navigate } from "react-router-dom";
// root
import App from "../App";
import Error from "../pages/error/Error";
// pages
import Dashboard from "./../pages/dashboard/Dashboard";
import Clients from "./../pages/clients/Clients";
import Vehicles from "./../pages/vehicles/Vehicles";
import Trips from "./../pages/trips/Trips";
import Users from "./../pages/users/Users";
import Directions from "./../pages/directions/Directions";
import Settings from "../pages/settings/Settings";
// auth
import Login from "./../auth/login/Login";
import Register from "./../auth/register/Register";
import ForgotPassword from "./../auth/forgotPassword/ForgotPassword";
import ResetPassword from "./../auth/resetPassword/ResetPassword";
import Transporters from "./../pages/transporters/Transporters";
import ConfirmEmail from "./../auth/confirmEmail/ConfirmEmail";

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
        path: "transporters",
        element: <Transporters />,
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
    ],
  },
  // auth routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: `${import.meta.env.VITE_API_URL}/api/Auth/confirm-email`,
    element: <ConfirmEmail />,
  },
]);

export default router;
