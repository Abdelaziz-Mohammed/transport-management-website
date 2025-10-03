import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ar" || i18n.language === "ur") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }

    document.body.classList.remove("lang-en", "lang-ar", "lang-ur");
    document.body.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  return (
    <div className="flex">
      <div className="max-md:hidden">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div className="overflow-y-auto h-[calc(100vh-64px)] px-2 py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
