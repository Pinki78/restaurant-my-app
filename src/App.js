

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./style/global.scss";
import "./style/style.css";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import { store } from "./redux-store/store";

import Header from "./components/header/header";

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
    <Header />
      <div className="App">
        <Provider store={store}>
        <Routes>
           <Route
            path="/"
            element={
              <PageTitle title="Home | Food App" >
                <HomeIndex />
              </PageTitle>
            }
          />

          <Route
            path="about"
            element={
              <PageTitle title="About Us | Food App" >
                <AboutIndex />
              </PageTitle>
            }
          />
          {/*  <Route path="menus" element={ <MenusIndex/> } />
          <Route path="offers" element={ <OffersIndex/> } />
          <Route path="contact" element={ <ContactIndex/> } />
          <Route path="login" element={ <LoginIndex  /> } />
          <Route path="register" element={ <RegisterIndex/> } /> */}
      
        </Routes>
        </Provider>
      </div>
    </>
  );
}

export default App;
