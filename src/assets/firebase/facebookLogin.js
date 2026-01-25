import React, { useState } from "react";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, facebookProvider } from "./firebase";
import { Button, Alert } from "react-bootstrap";

const FacebookLoginButton = () => {
  const [error, setError] = useState("");

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log("Facebook User:", user);
      setError(""); // clear any previous error
    } catch (err) {
      console.error("Facebook Login Error:", err.message);
      setError("Failed to login with Facebook. Please try again.");
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button onClick={handleFacebookLogin} variant="primary">
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default FacebookLoginButton;
