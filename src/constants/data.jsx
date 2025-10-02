import { MdOutlineDashboard, MdOutlineTour } from "react-icons/md";
import { FaRegUser, FaUsers, FaCarSide, FaRoute } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: <MdOutlineDashboard className="text-lg" />,
  },
  {
    id: 2,
    title: "Clients",
    link: "/clients",
    icon: <FaUsers className="text-lg" />,
  },
  {
    id: 3,
    title: "Vehicles",
    link: "/vehicles",
    icon: <FaCarSide className="text-lg" />,
  },
  {
    id: 4,
    title: "Trips",
    link: "/trips",
    icon: <MdOutlineTour className="text-lg" />,
  },
  {
    id: 5,
    title: "Directions",
    link: "/directions",
    icon: <FaRoute className="text-lg" />,
  },
  {
    id: 6,
    title: "Users",
    link: "/users",
    icon: <FaRegUser className="text-md" />,
  },
  {
    id: 7,
    title: "Settings",
    link: "/settings",
    icon: <FaGear className="text-md" />,
  },
];
