import { Link } from "react-router-dom";

export const ButtonLink = (props) => {
  const { PathUrl, ButtonName, ClassBtn, onClick } = props;

  return (
    <>
      <Link to={PathUrl} className={`bx-btn ${ClassBtn}`} onClick={onClick}>
        <span>{ButtonName}</span>
      </Link>
    </>
  );
};


