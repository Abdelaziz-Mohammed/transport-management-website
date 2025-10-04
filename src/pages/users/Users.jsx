import { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import CreateUser from "./CreateUser";

function Users() {
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const popUpRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setIsCreateUserOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 max-sm:self-start">
          <h2 className="pageTitle">Users</h2>
          <p className="text-gray-600 text-sm">
            Manage user accounts, roles, and permissions for your application.
          </p>
        </div>
        <button
          onClick={() => setIsCreateUserOpen(true)}
          className="flex items-center gap-1 bg-primary/95 text-white px-4 py-1.5 rounded-md
                text-[15px] tracking-wide hover:bg-primary hoverEffect max-sm:self-end"
        >
          <FaUserPlus className="text-lg" />
          Create User
        </button>
      </div>
      <div className="border border-primary/20 rounded-lg p-2 min-h-screen">
        <p className="text-gray-600">Users content goes here</p>
      </div>
      {isCreateUserOpen && (
        <div className="fixed inset-0 bg-black/35 flex items-center justify-center">
          <div ref={popUpRef} className="my-10 mx-4 rounded-lg w-full max-w-lg">
            <CreateUser onClose={() => setIsCreateUserOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
