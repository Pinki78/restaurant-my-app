import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux-store/store-redux-componets/forgotPasswordSlice";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // Get loading, message, error from Redux state
  const { loading, message, error } = useSelector(
    (state) => state.forgotPasswordReducer// make sure your store uses key `forgotPassword`
  );

const submitHandler = (e) => {
  e.preventDefault();
  if (!email) return;

  dispatch(forgotPassword(email));

  // Clear the email field after submission
  setEmail("");
};


  return (
    <form className="bx-forgot-password-form " onSubmit={submitHandler}>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default ForgotPasswordForm;
