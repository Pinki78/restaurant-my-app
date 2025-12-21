import { Link } from "react-router-dom";

export const ButtonLink = (props) => {
  const { PathUrl, ButtonName, ClassBtn } = props;

  return (
    <>
      <Link to={PathUrl} className={`bx-btn ${ClassBtn}`}>
        <span>{ButtonName}</span>
      </Link>
    </>
  );
};


