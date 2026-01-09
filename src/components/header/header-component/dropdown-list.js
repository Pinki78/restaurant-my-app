import { NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const DropdownList = (props) => {
  const { subitem , isSubActive} = props;
  return (
    <>
      <NavDropdown.Item
        as="li"
        key={subitem.id}
        className={`
            ${isSubActive ? "bx-active" : "bx-itemlike"}
        
        `}
      >
        <Link to={subitem.pathUrlSub}>
          <span>{subitem.pathNameSub}</span>
        </Link>
      </NavDropdown.Item>
    </>
  );
};

export default DropdownList;
