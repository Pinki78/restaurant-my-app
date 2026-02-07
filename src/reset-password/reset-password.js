import { useState, useEffect } from "react";
import { auth } from "../assets/firebase/firebase";
import { confirmPasswordReset } from "firebase/auth";

const ResetPasswordForm = () => {
 const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // get oobCode from URL
  const query = new URLSearchParams(window.location.search);
  const oobCode = query.get("oobCode"); // important!

  const submitHandler = async (e) => {
    e.preventDefault();
    scrollToTop();
    if (!oobCode) {
      setError("Invalid or expired link.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, password);
      setMessage("Password changed successfully!");
      setError("");
    } catch (err) {
      setError(err.message);
      setMessage("");
    }
  };


  return (
    <form className="bx-reset-password-form bx-form-input-list" onSubmit={submitHandler}>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Change Password</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default ResetPasswordForm;
