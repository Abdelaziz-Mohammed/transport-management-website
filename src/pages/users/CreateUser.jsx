import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUsers } from "../../context/UsersContext";

function CreateUser({ onClose }) {
  const { createUser, loading } = useUsers();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    transportType: "individual", // fix later
    nationalId: "",
    password: "", // fix later
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    transportType: "", // fix later
    nationalId: "",
    password: "", // fix later
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
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
        password: "Please enter a password",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, password: "" }));
    }

    await createUser(formData);
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Create User</h3>
        <button onClick={onClose} className="p-2">
          <AiOutlineClose className="text-gray-500 hover:text-gray-700 text-xl" />
        </button>
      </div>
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
            {formErrors.lastName && <p className="text-red-500 text-xs">* {formErrors.lastName}</p>}
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
          {formErrors.email && <p className="text-red-500 text-xs">* {formErrors.email}</p>}
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
            <p className="text-red-500 text-xs">* {formErrors.mobileNumber}</p>
          )}
        </div>
        {/* Transporter Type - Individual or Company */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium mb-1">Transporter Type</p>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`cursor-pointer flex items-center gap-2 text-sm font-medium ps-2 border border-gray-300 rounded-md
                ${formData.transportType === "individual" ? "bg-neutral-100" : ""}`}
            >
              <input
                type="radio"
                name="transportType"
                id="individual"
                value="individual"
                checked={formData.transportType === "individual"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="individual" className="cursor-pointer flex-1 py-2">
                Individual
              </label>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-2 text-sm font-medium ps-2 border border-gray-300 rounded-md
                ${formData.transportType === "company" ? "bg-neutral-100" : ""}`}
            >
              <input
                type="radio"
                name="transportType"
                id="company"
                value="company"
                checked={formData.transportType === "company"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="company" className="cursor-pointer flex-1 py-2">
                Company
              </label>
            </div>
          </div>
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
          {formErrors.password && <p className="text-red-500 text-xs">* {formErrors.password}</p>}
        </div>
        {/* Save btn */}
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md w-full"
          disabled={loading}
        >
          {loading ? "Saving..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
