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
import TeamIndex from "./team";
import FaqIndex from "./faq";
import ServiceIndex from "./service";
import CartIndex from "./cart";
import CheckoutIndex from "./checkout";


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
                <PageTitle>
                  <HomeIndex />
                </PageTitle>
              }
            />

            <Route
              path="/about-us"
              element={
                <PageTitle>
                  <AboutIndex />
                </PageTitle>
              }
            />

            <Route
              path="/menus"
              element={
                <PageTitle>
                  <MenusIndex />
                </PageTitle>
              }
            />

            <Route
              path="/gallery"
              element={
                <PageTitle>
                  <GalleryIndex />
                </PageTitle>
              }
            />
            <Route
              path="/testimonials"
              element={
                <PageTitle>
                  <TestimonialsIndex />
                </PageTitle>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTitle>
                  <BlogsIndex />
                </PageTitle>
              }
            />

            <Route
              path="/menu/single-product/:id"
              element={<SingleProductInIndex />}
            />
            <Route path="/category/:categoryId" element={<CategoryIdIndex />} />
            <Route
              path="/testimonials/:testissId"
              element={<TestissIdIndex />}
            />
            <Route path="/blog/:blogId" element={<BlogsIndexId />} />

            <Route path="/404" element={<Index404 />} />

            <Route
              path="/team"
              element={
                <PageTitle title="Team">
                  <TeamIndex />
                </PageTitle>
              }
            />

            <Route
              path="/faq"
              element={
                <PageTitle >
                  <FaqIndex />
                </PageTitle>
              }
            />

            <Route
              path="/service"
              element={
                <PageTitle >
                  <ServiceIndex />
                </PageTitle>
              }
            />
             <Route
              path="/cart"
              element={
                <PageTitle >
                  <CartIndex />
                </PageTitle>
              }
            />

            <Route
              path="/checkout"
              element={
                <PageTitle >
                  <CheckoutIndex />
                </PageTitle>
              }
            />





          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
