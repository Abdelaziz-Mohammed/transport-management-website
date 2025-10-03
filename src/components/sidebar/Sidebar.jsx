import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoImg } from "./../../assets/index.js";
import LanguageToggler from "./../languageToggler/LanguageToggler";
import {
  MdOutlineDashboard,
  MdOutlineTour,
  MdOutlineLogout,
} from "react-icons/md";
import {
  FaRegUser,
  FaUsers,
  FaCarSide,
  FaRoute,
  FaTruck,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext.jsx";

function Sidebar() {
  const { logout } = useAuth();
  const { t } = useTranslation();

  const navItems = [
    {
      id: 1,
      title: t("navigation.dashboard"),
      link: "/dashboard",
      icon: <MdOutlineDashboard className="text-lg" />,
    },
    {
      id: 2,
      title: t("navigation.clients"),
      link: "/clients",
      icon: <FaUsers className="text-lg" />,
    },
    {
      id: 3,
      title: t("navigation.vehicles"),
      link: "/vehicles",
      icon: <FaCarSide className="text-lg" />,
    },
    {
      id: 4,
      title: t("navigation.trips"),
      link: "/trips",
      icon: <MdOutlineTour className="text-lg" />,
    },
    {
      id: 5,
      title: t("navigation.transporters"),
      link: "/transporters",
      icon: <FaTruck className="text-lg" />,
    },
    {
      id: 6,
      title: t("navigation.directions"),
      link: "/directions",
      icon: <FaRoute className="text-lg" />,
    },
    {
      id: 7,
      title: t("navigation.users"),
      link: "/users",
      icon: <FaRegUser className="text-md" />,
    },
    {
      id: 8,
      title: t("navigation.settings"),
      link: "/settings",
      icon: <FaGear className="text-md" />,
    },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-60 h-screen bg-secondary px-3 py-6">
      <div className="space-y-10">
        {/* logo */}
        <div className="flex items-center justify-center">
          <Link to={"/dashboard"}>
            <img src={logoImg} alt="Geddah Pathways" className="w-36" />
          </Link>
        </div>
        {/* language toggler */}
        <LanguageToggler />
        {/* nav items */}
        <ul className="flex flex-col gap-2 text-neutral-700 font-medium text-base">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-primary hover:text-white ${
                pathname === item.link ? "bg-primary text-white" : ""
              } cursor-pointer transition-all duration-200 ease-in-out`}
              onClick={() => navigate(item.link)}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={async () => {
              await logout();
              navigate("/login");
            }}
            className="w-full text-black text-base px-3 py-1.5 font-medium rounded-md mt-4 flex items-center gap-2 
            border border-neutral-300 transition-all duration-200 ease-in-out"
          >
            <MdOutlineLogout className="text-lg" />
            {t("general.logout")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
