import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../redux-store/store-redux-componets/otpSlice";
import { useLocation, useNavigate } from "react-router-dom";

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || ""; // email passed from previous page

  const { loading, message, error } = useSelector((state) => state.otpReducer);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!otp) return;

    const result = await dispatch(verifyOtp({ email, otp }));

    if (verifyOtp.fulfilled.match(result)) {
      alert("OTP verified! You can now reset your password.");
      navigate("/reset-password", { state: { email } }); // go to reset password page
    }
  };

  return (
    <form className="bx-otp-form bx-form-input-list" onSubmit={submitHandler}>
      <h2>Enter OTP</h2>
      <p>We sent a 6-digit OTP to: <strong>{email}</strong></p>

      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </button>

      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
};

export default OtpForm;
