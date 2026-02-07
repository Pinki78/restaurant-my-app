import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "../redux-store/store-redux-componets/otpSlice";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { loading, message, error } = useSelector((state) => state.otpReducer);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const result = await dispatch(sendOtp(email)).unwrap();

      console.log(result); // OTP saved in Firestore, check console for the code
      //   alert("OTP generated! Check console for testing.");

      // Navigate to OTP page to enter code
      navigate("/otp", { state: { email } });
      scrollToTop();
      setEmail("");
    } catch (err) {
      console.error("Failed to generate OTP:", err);
    }
  };

  return (
    <form
      className="bx-forgot-password-form bx-form-input-list"
      onSubmit={submitHandler}
    >
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Generating OTP..." : "Send OTP"}
      </button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default ForgotPasswordForm;
