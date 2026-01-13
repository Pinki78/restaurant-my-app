import { ListGroup } from "react-bootstrap";

const LcoListLayout = (props) => {
  const {IocnLayoutClass , Icon , IconText} = props;
  return (
    <>
      <div className={`bx-icon-list-layout ${IocnLayoutClass || ""}`}>
        <ListGroup as="ul" className="bx-icon-list-items bg-transparent ">
          <ListGroup.Item as="li" className="bx-icon-list-item bg-transparent border border-0">
            <span className="bx-icon-list-icon">
              {Icon}
            </span>
            <span className="bx-icon-list-text">{IconText}</span>
          </ListGroup.Item>
        </ListGroup>
      </div>

    
    </>
  );
};

export default LcoListLayout;
