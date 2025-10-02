import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoImg } from "./../../assets/index.js";
import LanguageToggler from "./../languageToggler/LanguageToggler";
import { navItems } from "../../constants/data";

function Sidebar() {
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
      </div>
    </div>
  );
}

export default Sidebar;
