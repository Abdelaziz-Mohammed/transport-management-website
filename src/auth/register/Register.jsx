import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const { register, loading, error: registerError } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    nationalId: "",
    transporterType: "individual",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    nationalId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Please enter your first name",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, firstName: "" }));
    }

    if (!formData.lastName) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Please enter your last name",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, lastName: "" }));
    }

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

    if (!formData.mobileNumber) {
      setFormErrors((prev) => ({
        ...prev,
        mobileNumber: "Please enter your mobile number",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, mobileNumber: "" }));
    }

    if (!formData.nationalId) {
      setFormErrors((prev) => ({
        ...prev,
        nationalId: "Please enter your national ID",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, nationalId: "" }));
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

    if (!formData.confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Please confirm your password",
      }));
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword:
          "Passwords do not match, Please enter the same password",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }

    register(formData);

    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      nationalId: "",
      transporterType: "individual",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      nationalId: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-secondary min-h-screen w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg my-8 mx-4">
        <p className="text-2xl font-bold mb-2 text-center border-b border-b-neutral-200 pb-2">
          Welcome to <span className="text-primary">Jeddah Pathways</span>
        </p>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
                value={formData.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-xs">* {formErrors.firstName}</p>
              )}
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
                value={formData.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-xs">* {formErrors.lastName}</p>
              )}
            </div>
          </div>
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
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs">* {formErrors.email}</p>
            )}
          </div>
          {/* Mobile Number */}
          <div className="flex flex-col gap-1">
            <label htmlFor="mobileNumber" className="text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="+966 12 34 567"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {formErrors.mobileNumber && (
              <p className="text-red-500 text-xs">
                * {formErrors.mobileNumber}
              </p>
            )}
          </div>
          {/* National ID */}
          <div className="flex flex-col gap-1">
            <label htmlFor="nationalId" className="text-sm font-medium">
              National ID
            </label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              placeholder="1234567890"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={formData.nationalId}
              onChange={handleChange}
            />
            {formErrors.nationalId && (
              <p className="text-red-500 text-xs">* {formErrors.nationalId}</p>
            )}
          </div>
          {/* Transporter Type - Individual or Company */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium mb-1">Transporter Type</p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`cursor-pointer flex items-center gap-2 text-sm font-medium ps-2 border border-gray-300 rounded-md
                ${
                  formData.transporterType === "individual"
                    ? "bg-neutral-100"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="transporterType"
                  id="individual"
                  value="individual"
                  checked={formData.transporterType === "individual"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="individual"
                  className="cursor-pointer flex-1 py-2"
                >
                  Individual
                </label>
              </div>
              <div
                className={`cursor-pointer flex items-center gap-2 text-sm font-medium ps-2 border border-gray-300 rounded-md
                ${
                  formData.transporterType === "company" ? "bg-neutral-100" : ""
                }`}
              >
                <input
                  type="radio"
                  name="transporterType"
                  id="company"
                  value="company"
                  checked={formData.transporterType === "company"}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <label htmlFor="company" className="cursor-pointer flex-1 py-2">
                  Company
                </label>
              </div>
            </div>
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
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs">* {formErrors.password}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="************"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-xs">
                * {formErrors.confirmPassword}
              </p>
            )}
          </div>
          {/* Submit btn */}
          <button
            type="submit"
            className="w-full text-white bg-primary/95 hover:bg-primary py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {registerError && (
          <p className="text-red-500 mt-4 text-[13px] border-b border-gray-200 pb-4">
            * {registerError}
          </p>
        )}
        <p className="text-gray-600 text-sm mt-4 text-center">
          Already have an account ?
          <Link
            to={"/login"}
            className="text-black font-medium text-[15px] border-b-0 border-b-primary ms-2 
            hover:border-b hover:text-primary hoverEffect"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
