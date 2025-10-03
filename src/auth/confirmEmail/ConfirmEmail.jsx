import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ConfirmEmail() {
  const { confirmEmail, loading, error } = useAuth();
  const [status, setStatus] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      confirmEmail(token).then((success) => {
        if (success) setStatus("Your email has been confirmed successfully!");
        else setStatus("Email confirmation failed.");
      });
    }
  }, [location.search, confirmEmail]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <p className="text-gray-600">Confirming your email...</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Email Confirmation</h2>
          <p
            className={
              status.includes("confirmed successfully")
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {error || status}
          </p>
        </div>
      )}
    </div>
  );
}

export default ConfirmEmail;
