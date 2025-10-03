import { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import CreateTransporter from "./CreateTransporter";

function Transporters() {
  const [isCreateTransporterOpen, setIsCreateTransporterOpen] = useState(false);
  const popUpRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setIsCreateTransporterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="pageTitle">Transporters</h2>
          <p className="text-gray-600 text-sm">
            Manage your transporters and their details here.
          </p>
        </div>
        <button
          onClick={() => setIsCreateTransporterOpen(true)}
          className="flex items-center gap-1 bg-primary/95 text-white px-4 py-1.5 rounded-md
          text-[15px] tracking-wide hover:bg-primary hoverEffect"
        >
          <FaUserPlus className="text-lg" />
          Create Transporter
        </button>
      </div>
      <div className="border border-primary/20 rounded-lg p-2 min-h-screen">
        <p className="text-gray-600">Transporters content goes here</p>
      </div>
      {isCreateTransporterOpen && (
        <div className="fixed inset-0 bg-black/35 flex items-center justify-center">
          <div ref={popUpRef} className="my-10 mx-4 rounded-lg w-full max-w-lg">
            <CreateTransporter
              onClose={() => setIsCreateTransporterOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Transporters;
