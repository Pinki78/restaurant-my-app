import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { pageTitleMap } from "./page-title-component/pageTitleMap";
import { setPageTitle } from "../../redux-store/store-redux-componets/pageTitleSlice";

const PageTitle = ({ children,  title }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // Compute page name immediately from pathname
  // const pageName = pageTitleMap[pathname] || "Home"; 
  // const pageName = pathname === "/" ? "Home" : pageTitleMap[pathname] ;

  const pageName =
  title ||
  (pathname === "/" ? "Home" : pageTitleMap[pathname]) ||
  "Page";

  // const pageName = pathname === "/" ? "Home" : (pageTitleMap[pathname] || "Page");

  // Update Redux state
  useEffect(() => {
    dispatch(setPageTitle(pageName));
  }, [pageName, dispatch]);

  // Update browser document title immediately
  useEffect(() => {
    document.title = `${pageName} | Food App`;
  }, [pageName]);

  // Update body class dynamically
  useEffect(() => {
    const bodyClass = `bx-${pageName.toLowerCase().replace(/\s+/g, "-")}-layout-root`;
    document.body.classList.add(bodyClass);

    // Cleanup previous class on unmount or pageName change
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [pageName]);

  // Inject PageName prop into children if it's a valid React element
  return React.isValidElement(children)
    ? React.cloneElement(children, { PageName: pageName })
    : children;
};

export default PageTitle;
