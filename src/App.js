import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import "animate.css";

import "./style/style.css";
import "./style/global.scss";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

import { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import { Routes, Route } from "react-router-dom";
import PageTitle from "./components/page-title-area/PageTitle";

import Header from "./components/header/header";
import PageLoadingIndex from "./components/page-load.js/page-loading";

import HomeIndex from "./home";
import AboutIndex from "./about";
import MenusIndex from "./menus";
import Index404 from "./404";
import GalleryIndex from "./gallery";
import TestimonialsIndex from "./testimonials";
import TestissIdIndex from "./testimonials/testissId";
import CategoryIdIndex from "./categorys/categoryId";
import SingleProductInIndex from "./menus/single-product";
import BlogsIndex from "./blog";
import BlogsIndexId from "./blog/blogId";
import Footer from "./components/footer/footer";
import TeamIndex from "./team";
import FaqIndex from "./faq";
import ServiceIndex from "./service";
import CartIndex from "./cart";
import CheckoutIndex from "./checkout";
import ContactIndex from "./contact";
import WishlistIndex from "./wishlist";
import ThankYouindex from "./think-you";
import MyOrderIndex from "./my-order";
import LoginIndex from "./login";
import ForgotPasswordIndex from "./forgot-password";
import ResetPasswordIndex from "./reset-password";
import OtpIndex from "./otp";
import RegistrationIndex from "./create-registration";
import BlogCategoryIndex from "./blog/blogCategoryId";
import BlogTagIndex from "./blog/blogTagId";
import TeamIndexId from "./team/teamId";
import CategoryIndex from "./categorys";

// import OffersIndex from "./offers";
// import ContactIndex from "./contact";
//
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
  // const [pageLoading, setPageLoading] = useState(false);
  return (
    <>
      <Provider store={store}>
        <PageLoadingIndex />
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

            <Route path="/menus/:id" element={<SingleProductInIndex />} />
            <Route
              path="/categorys"
              element={
                <PageTitle>
                  <CategoryIndex />
                </PageTitle>
              }
            />

            <Route path="/category/:categoryId" element={<CategoryIdIndex />} />
            <Route
              path="/testimonials/:testissId"
              element={<TestissIdIndex />}
            />
            <Route path="/blog/:blogId" element={<BlogsIndexId />} />
            <Route
              path="/blog/category/:blogCategoryId"
              element={<BlogCategoryIndex />}
            />
            <Route path="/blog/tag/:blogTagId" element={<BlogTagIndex />} />

            <Route
              path="/404"
              element={
                <PageTitle title="Page not found">
                  <Index404 />
                </PageTitle>
              }
            />

            <Route
              path="/team"
              element={
                <PageTitle title="Team">
                  <TeamIndex />
                </PageTitle>
              }
            />
            <Route path="/team/:teamId" element={<TeamIndexId />} />

            <Route
              path="/faq"
              element={
                <PageTitle>
                  <FaqIndex />
                </PageTitle>
              }
            />

            <Route
              path="/service"
              element={
                <PageTitle>
                  <ServiceIndex />
                </PageTitle>
              }
            />
            <Route
              path="/cart"
              element={
                <PageTitle title="Cart">
                  <CartIndex />
                </PageTitle>
              }
            />

            <Route
              path="/checkout"
              element={
                <PageTitle>
                  <CheckoutIndex />
                </PageTitle>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTitle>
                  <ContactIndex />
                </PageTitle>
              }
            />

            <Route
              path="/wishlist"
              element={
                <PageTitle title="Wishlist">
                  <WishlistIndex />
                </PageTitle>
              }
            />

            <Route
              path="/my-order"
              element={
                <PageTitle title="My Order">
                  <MyOrderIndex />
                </PageTitle>
              }
            />

            <Route
              path="/log-in"
              element={
                <PageTitle title="Log In">
                  <LoginIndex />
                </PageTitle>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <PageTitle title="Forgot password">
                  <ForgotPasswordIndex />
                </PageTitle>
              }
            />
            <Route
              path="/otp"
              element={
                <PageTitle title="Otp">
                  <OtpIndex />
                </PageTitle>
              }
            />

            <Route
              path="/reset-password"
              element={
                <PageTitle title="Reset Password">
                  <ResetPasswordIndex />
                </PageTitle>
              }
            />

            <Route
              path="/create-registration"
              element={
                <PageTitle title="Registration">
                  <RegistrationIndex />
                </PageTitle>
              }
            />

            <Route
              path="/think-you"
              element={
                <PageTitle title="Thank You">
                  <ThankYouindex />
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
