import React, { useState } from "react";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, facebookProvider } from "./firebase";
import { Button, Alert } from "react-bootstrap";
import { ImFacebook2 } from "react-icons/im";



const FacebookLoginButton = (props) => {

  const {facebookClass} = props

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
    <>
      {error && <Alert variant="danger">{error}</Alert>}

      <Button onClick={handleFacebookLogin} variant="primary" className={`bx-social-media-btn ${facebookClass}`}>
      <ImFacebook2 />  Sign in with Facebook
      </Button>
    </>
  );
};

export default FacebookLoginButton;
