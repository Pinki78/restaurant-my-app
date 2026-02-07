import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
