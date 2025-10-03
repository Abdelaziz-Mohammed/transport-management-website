import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");

  const { forgotPassword, loading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!email) {
      setEmailError("Please enter your email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email, Please enter a valid email");
      return;
    } else {
      setEmailError("");
    }

    try {
      await forgotPassword(email);
      setSuccess("If this email exists, a reset link has been sent.");
      setTimeout(() => setSuccess(""), 5000);
      setEmail("");
    } catch {
      setSuccess("");
    }
  };

  return (
    <div className="bg-secondary min-h-screen w-full flex items-center justify-center">
      <div className="bg-white px-6 py-10 rounded-lg shadow-xl w-full max-w-lg my-8 mx-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Forgot your password ?
        </h2>
        <p className="text-[15px] text-center text-gray-600">
          Please enter your email address below and we'll send you a link to
          reset your password.
        </p>
        <form onClick={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2 placeholder:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-xs">* {emailError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md mt-4"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">* {error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
