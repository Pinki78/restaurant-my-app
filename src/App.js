import "./style/style.css";
import "./style/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import { Routes, Route } from "react-router-dom";

import HomeIndex from "./home";
import AboutIndex from "./about";
// import MenusIndex from "./menus";
// import OffersIndex from "./offers";
// import ContactIndex from "./contact";
// import LoginIndex from "./login";
// import RegisterIndex from "./register";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
           <Route path="/" element={ <HomeIndex /> } />
         <Route path="about" element={ <AboutIndex/> } />
          {/*  <Route path="menus" element={ <MenusIndex/> } />
          <Route path="offers" element={ <OffersIndex/> } />
          <Route path="contact" element={ <ContactIndex/> } />
          <Route path="login" element={ <LoginIndex  /> } />
          <Route path="register" element={ <RegisterIndex/> } /> */}
      
        </Routes>
      </div>
    </>
  );
}

export default App;
