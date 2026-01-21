import { Button } from "react-bootstrap";

 const ButtonType = (props) => {
  const { ButtonType, ButtonName, ClassBtn2 } = props;

  return (
    <>
      <Button type={ButtonType}  className={`bx-btn ${ClassBtn2}`}>
        <span>{ButtonName}</span>
      </Button>
    </>
  );
};

export default ButtonType;

