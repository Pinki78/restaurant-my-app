import { useEffect } from "react";
import { useSelector } from "react-redux";

const PageTitle = ({ children }) => {
  const title = useSelector((state) => state.pageTitle.title);
//   const bodyTitle = useSelector((state) => state.pageTitle.bodyClassName);

  useEffect(() => {
    document.title = `${title} | Food App`;
  }, [title]);

    useEffect(() => {
    document.body.classList.add(`bx-${title}-layout-root`);
    return () => {
      document.body.classList.remove(`bx-${title}-layout-root`);
    };
  }, []);

 return children; 
};

export default PageTitle;
