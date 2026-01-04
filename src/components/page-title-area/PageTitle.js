import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { pageTitleMap } from "./page-title-component/pageTitleMap";
import { setPageTitle } from "../../redux-store//store-redux-componets/pageTitleSlice";
import React from "react";

const PageTitle = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const titleUrlName = useSelector((state) => state.pageTitle.title);

  // Update Redux title on route change
  useEffect(() => {
    const pageName = pageTitleMap[pathname] || "Page";
    dispatch(setPageTitle(pageName));
  }, [pathname, dispatch]);

  // Update browser document title
  useEffect(() => {
    document.title = `${titleUrlName} | Food App`; // ✅ fix here
  }, [titleUrlName]);

  // Update body class dynamically
  useEffect(() => {
    if (!titleUrlName) return;

    const bodyClass = `bx-${titleUrlName.toLowerCase().replace(/\s+/g, "-")}-layout-root`;
    document.body.classList.add(bodyClass);

    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [titleUrlName]);

  // Inject PageName into children dynamically
  return React.isValidElement(children)
    ? React.cloneElement(children, { PageName: titleUrlName })
    : children;
};

export default PageTitle;
