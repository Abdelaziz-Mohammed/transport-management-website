import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Login() {
  const { login, loading, error: loginError } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.email) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please enter your email",
      }));
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Invalid email, Please enter a valid email",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!formData.password) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Please enter your password",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, password: "" }));
    }

    login(formData.email, formData.password);

    setFormData({ email: "", password: "" });
    setFormErrors({ email: "", password: "" });
  };

  return (
    <div className="bg-secondary min-h-screen w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg my-8 mx-4">
        <p className="text-2xl font-bold mb-2 text-center border-b border-b-neutral-200 pb-2">
          Welcome back to <span className="text-primary">Jeddah Pathways</span>
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2  placeholder:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs">* {formErrors.email}</p>
            )}
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="************"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2  placeholder:text-sm"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs">* {formErrors.password}</p>
            )}
          </div>
          {/* Submit btn */}
          <button
            type="submit"
            className="w-full text-white bg-primary/95 hover:bg-primary py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {loginError && (
          <p className="text-red-500 mt-4 text-[13px]">* {loginError}</p>
        )}
        <div className="mb-3 flex items-center justify-start overflow-hidden">
          <Link
            to="/forgot-password"
            className="text-primary/95 font-medium cursor-pointer flex items-center gap-2 -translate-x-6
              hover:text-primary text-[13px] hover:translate-x-0 pt-4 pb-2 hoverEffect"
          >
            <FaLongArrowAltRight className="text-lg" /> Forgot Your Password ?
          </Link>
        </div>
        <p className="text-gray-600 text-sm mt-4 text-center border-t border-t-gray-200 pt-4">
          Don't have an account ?
          <Link
            to={"/register"}
            className="text-black font-medium text-[15px] border-b-0 border-b-primary ms-2 
            hover:border-b hover:text-primary hoverEffect"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
