import { useEffect } from "react";
import { useSelector } from "react-redux";

const PageTitle = () => {
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

  return null;
};

export default PageTitle;
