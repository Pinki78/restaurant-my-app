import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button } from "react-bootstrap";
// Login Logic
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully logged in
      const user = userCredential.user;
      document.getElementById('message').innerText = "Welcome, " + user.email;
    })
    .catch((error) => {
      // Handle Errors here.
      document.getElementById('message').innerText = error.message;
    });
});