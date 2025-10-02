import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
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
