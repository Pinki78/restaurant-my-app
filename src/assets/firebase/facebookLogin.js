import React, { useState } from "react";
import {
  fetchSignInMethodsForEmail,
  signInWithPopup,
  linkWithCredential,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import { auth, facebookProvider } from "./firebase";
import { Button, Alert } from "react-bootstrap";
import { ImFacebook2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const FacebookLoginButton = (props) => {
  const { facebookClass } = props;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleFacebookLogin = async () => {
    try {
      // Normal Facebook login
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      console.log("Facebook User:", user);

      if (user) {
        navigate("/");
      }

      setError("");
    } catch (err) {
      console.log("FULL ERROR:", err);

      if (err.code === "auth/account-exists-with-different-credential") {
        try {
          // Get Facebook credential from error
          const pendingCred =
            FacebookAuthProvider.credentialFromError(err);

          const email = err.customData?.email;

          if (!email) {
            setError("Email not returned from Facebook.");
            return;
          }

          // Check existing methods
          const methods = await fetchSignInMethodsForEmail(auth, email);

          if (methods.includes("google.com")) {
            // Sign in with Google first
            const googleProvider = new GoogleAuthProvider();
            const googleResult = await signInWithPopup(
              auth,
              googleProvider
            );

            // Link Facebook credential to Google account
            await linkWithCredential(
              googleResult.user,
              pendingCred
            );

            console.log("Accounts linked successfully");
            navigate("/");
          } else {
            setError(
              "Please sign in with your original login method."
            );
          }
        } catch (linkErr) {
          console.error("Linking error:", linkErr);
          setError("Account linking failed.");
        }
      } else if (err.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user");
      } else {
        console.error("Facebook Login Error:", err);
        setError(err.message);
      }
    }
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button
        onClick={handleFacebookLogin}
        variant="primary"
        className={`bx-social-media-btn ${facebookClass}`}
      >
        <ImFacebook2 /> Sign in with Facebook
      </Button>
    </>
  );
};

export default FacebookLoginButton;
