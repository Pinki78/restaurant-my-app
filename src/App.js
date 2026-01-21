import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "react-datepicker/dist/react-datepicker.css";

import "./style/style.css";
import "./style/global.scss";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import { Routes, Route } from "react-router-dom";
import PageTitle from "./components/page-title-area/PageTitle";

import Header from "./components/header/header";

import HomeIndex from "./home";
import AboutIndex from "./about";
import MenusIndex from "./menus";
import Index404 from "./404";
import GalleryIndex from "./gallery";
import TestimonialsIndex from "./testimonials";
import TestissIdIndex from "./testimonials/testissId";
import CategoryIdIndex from "./menus/categoryId";
import SingleProductInIndex from "./menus/single-product";
import BlogsIndex from "./blog";
import BlogsIndexId from "./blog/blogId";
import Footer from "./components/footer/footer";

// import OffersIndex from "./offers";
// import ContactIndex from "./contact";
// import LoginIndex from "./login";
// import RegisterIndex from "./register";

function App() {
  //   const title = useSelector((state) => state.pageTitle.title);
  // //   const bodyTitle = useSelector((state) => state.pageTitle.bodyClassName);

  //   useEffect(() => {
  //     document.title = `${title} | Food App`;
  //   }, [title]);

  //     useEffect(() => {
  //     document.body.classList.add(`bx-${title}-layout-root`);
  //     return () => {
  //       document.body.classList.remove(`bx-${title}-layout-root`);
  //     };
  //   }, []);

  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <PageTitle title="Home | Food App">
                  <HomeIndex />
                </PageTitle>
              }
            />

            <Route
              path="about-us"
              element={
                <PageTitle title="About Us | Food App">
                  <AboutIndex />
                </PageTitle>
              }
            />

            <Route
              path="menus"
              element={
                <PageTitle title="Menu | Food App">
                  <MenusIndex />
                </PageTitle>
              }
            />
            <Route
              path="gallery"
              element={
                <PageTitle title="No Find  | Food App">
                  <GalleryIndex />
                </PageTitle>
              }
            />
            <Route
              path="testimonials"
              element={
                <PageTitle title="No Find  | Food App">
                  <TestimonialsIndex />
                </PageTitle>
              }
            />

            <Route
              path="blog"
              element={
                <PageTitle title="No Find  | Food App">
                  <BlogsIndex />
                </PageTitle>
              }
            />

            <Route
              path="404"
              element={
                <PageTitle title="No Find  | Food App">
                  <Index404 />
                </PageTitle>
              }
            />



            <Route
              path="/menu/single-product/:id"
              element={<SingleProductInIndex />}
            />
            <Route path="/category/:categoryId" element={<CategoryIdIndex />} />
            <Route path="/testimonials/:testissId" element={<TestissIdIndex />} />
            <Route path="/blog/:blogId" element={<BlogsIndexId  />} />

            {/*  
          <Route path="offers" element={ <OffersIndex/> } />
          <Route path="contact" element={ <ContactIndex/> } />
          <Route path="login" element={ <LoginIndex  /> } />
          <Route path="register" element={ <RegisterIndex/> } /> */}
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
