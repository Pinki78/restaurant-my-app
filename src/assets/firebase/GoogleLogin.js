import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { Button } from "react-bootstrap";
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User:", user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleGoogleLogin}>
      Sign in with Google
    </Button>
  );
};

export default GoogleLogin;
