import { useState } from "react";
import { useTransporters } from "../../context/TransportersContext";

function CreateTransporter({ onClose }) {
  const { createTransporter, loading } = useTransporters();

  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    mobileNumber: "",
    email: "",
    transportType: "individual",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    idNumber: "",
    mobileNumber: "",
    email: "",
    transportType: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name) {
      setFormErrors((prev) => ({
        ...prev,
        name: "Please enter transporter name",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, name: "" }));
    }

    if (!formData.idNumber) {
      setFormErrors((prev) => ({
        ...prev,
        idNumber: "Please enter transporter's ID number",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, idNumber: "" }));
    }

    if (!formData.mobileNumber) {
      setFormErrors((prev) => ({
        ...prev,
        mobileNumber: "Please enter transporter's mobile number",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, mobileNumber: "" }));
    }

    if (!formData.email) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please enter transporter's email",
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

    if (!formData.transportType) {
      setFormErrors((prev) => ({
        ...prev,
        transportType: "Please select transport type",
      }));
      return;
    } else {
      setFormErrors((prev) => ({ ...prev, transportType: "" }));
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

    await createTransporter(formData);
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-xl font-bold">Create Transporter</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Transporter Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && (
            <p className="text-red-500 text-xs">* {formErrors.name}</p>
          )}
        </div>
        {/* ID Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="idNumber" className="text-sm font-medium">
            ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            placeholder="1234567890"
            className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
            value={formData.idNumber}
            onChange={handleChange}
          />
          {formErrors.idNumber && (
            <p className="text-red-500 text-xs">* {formErrors.idNumber}</p>
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
            <p className="text-red-500 text-xs">* {formErrors.mobileNumber}</p>
          )}
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
            className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2  placeholder:text-sm"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs">* {formErrors.email}</p>
          )}
        </div>
        {/* Transporter Type - Individual or Company */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium mb-1">Transporter Type</p>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`cursor-pointer flex items-center gap-2 text-sm font-medium ps-2 border border-gray-300 rounded-md
                ${
                  formData.transportType === "individual"
                    ? "bg-neutral-100"
                    : ""
                }`}
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
                  formData.transportType === "company" ? "bg-neutral-100" : ""
                }`}
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

export default CreateTransporter;
