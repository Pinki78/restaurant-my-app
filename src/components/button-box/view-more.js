import { Link } from "react-router-dom";

 const ViewMoreLink = (props) => {
  const { PathUrl, ViewName, ClassBtnView} = props;

  return (
    <>
      <Link to={PathUrl} type="button" className={`bx-view-more ${ClassBtnView}`} >
        <span>{ViewName}</span>
      </Link>
    </>
  );
};

export default ViewMoreLink;

