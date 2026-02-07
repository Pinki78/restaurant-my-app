import { Link } from "react-router-dom";

const ViewMoreLink = (props) => {
  const { PathUrl, ViewName, ClassBtnView } = props;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Link
        to={PathUrl}
        type="button"
        className={`bx-view-more ${ClassBtnView}`}
        onClick={scrollToTop}
      >
        <span>{ViewName}</span>
      </Link>
    </>
  );
};

export default ViewMoreLink;
