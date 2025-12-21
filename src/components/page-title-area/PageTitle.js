import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { pageTitleMap } from "./page-title-component/pageTitleMap";
import { setPageTitle } from "../../redux-store//store-redux-componets/pageTitleSlice";
import React from "react";

const PageTitle = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.pageTitle.title);

  // 🔥 Update title on route change
  useEffect(() => {
    const pageName = pageTitleMap[pathname] || "Page";
    dispatch(setPageTitle(pageName));
  }, [pathname, dispatch]);

  // 🔥 Update document title
  useEffect(() => {
    document.title = `${title} | Food App`;
  }, [title]);

  // 🔥 Update body class dynamically
  useEffect(() => {
    if (!title) return;

    const bodyClass = `bx-${title.toLowerCase().replace(/\s+/g, "-")}-layout-root`;
    document.body.classList.add(bodyClass);

    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [title]); // ⚡ dependency is title

  // 🔥 Inject PageName into children dynamically
  return React.isValidElement(children)
    ? React.cloneElement(children, { PageName: title })
    : children;
};

export default PageTitle;
