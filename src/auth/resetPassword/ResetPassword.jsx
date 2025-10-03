import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const { resetPassword, loading, error } = useAuth();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      setNewPasswordError("Please enter your new password");
      return;
    } else {
      setNewPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your new password");
      return;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setConfirmPasswordError("");
    }

    try {
      await resetPassword(token, newPassword, confirmPassword);
      setSuccess("Your password has been reset successfully!");
      setTimeout(() => setSuccess(""), 5000);
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setSuccess("");
    }
  };

  return (
    <div className="bg-secondary min-h-screen w-full flex items-center justify-center">
      <div className="bg-white px-6 py-10 rounded-lg shadow-xl w-full max-w-lg my-8 mx-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">Reset Password</h2>
        <p className="text-[15px] text-center text-gray-600">
          Enter your new password below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* new password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {newPasswordError && (
              <p className="text-red-500 text-xs">* {newPasswordError}</p>
            )}
          </div>
          {/* confirm password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              className="w-full outline-0 border border-gray-300 focus:border-gray-500 rounded-md p-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-xs">* {confirmPasswordError}</p>
            )}
          </div>
          {/* submit btn */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white p-2 rounded-md mt-4 disabled:opacity-50"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">* {error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
