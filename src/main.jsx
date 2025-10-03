import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./utils/i18n.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext.jsx";
import { TransportersProvider } from "./context/TransportersContext.jsx";

// global axios defaults
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TransportersProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TransportersProvider>
  </AuthProvider>
);
