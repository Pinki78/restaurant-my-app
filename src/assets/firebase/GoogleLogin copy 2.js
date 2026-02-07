import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const GoogleLogin = (props) => {

  const {googleLoginClass} = props

  const navigate = useNavigate();

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (user) {
      navigate("/");
    }
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("Popup closed by user");
    } else {
      console.error(error);
    }
  }
};


  return (
    <Button onClick={handleGoogleLogin} className={`bx-social-media-btn ${googleLoginClass}`}>
      Sign in with Google
    </Button>
  );
};

export default GoogleLogin;
