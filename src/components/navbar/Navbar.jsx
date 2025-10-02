import { IoMenuOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./../sidebar/Sidebar";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-6 h-16 bg-white border-b border-neutral-300">
        <button
          className="md:hidden p-2 hover:text-primary hoverEffect"
          onClick={() => setIsMobileSidebarOpen((i) => !i)}
        >
          <IoMenuOutline className="text-2xl" />
        </button>
        <div className="flex items-center gap-1 md:ms-auto">
          <button className="p-2 hover:text-primary hoverEffect">
            <FiBell className="text-xl" />
          </button>
          <button className="p-2 hover:text-primary hoverEffect">
            <FaRegUser className="text-xl" />
          </button>
        </div>
      </div>
      {/* mobile sidebar */}
      <div
        className={`md:hidden fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 shadow-xl
          ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } hoverEffect`}
      >
        <div ref={sidebarRef} className="w-fit">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Navbar;
