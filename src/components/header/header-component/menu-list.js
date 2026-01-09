import { Navbar, Nav, NavDropdown,Dropdown  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HEADER_MANUS } from "../../../api-data/heade-data/heade-data";
// import { NavLink } from "react-router-dom";

import { useLocation,} from "react-router-dom";
import DropdownList from "./dropdown-list";
const MenuList = ({ isMobileOrTablet }) => {
  const location = useLocation();


  return (
    <>
      <Navbar expand="lg" className="">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav as="ul" className="me-auto bx-nav-ul-item">
          {HEADER_MANUS.map((item) => {
            const isActive = location.pathname === item.pathUrl;
            return (
              <>
                <Nav
                  as="li"
                  key={item.id}
                  className={isActive ? "bx-active" : "bx-itemlike"}
                >

                  
                  {item.SubMenuDate?.length > 0 ? (
                    <NavDropdown
                      as="ul"
                      title={<span>{item.pathName}</span>}
                      id={`dropdown-${item.id}`}
                      show={isMobileOrTablet ? undefined : true}
                       

                      className={`bx-nav-dropdown p-0 ${isMobileOrTablet ? "bx-show-dropdown" : "bx-dropdown-nav show"}`}
                    >
                      <div>
                  
    {item.SubMenuDate.map((subitem) => (
     
        <DropdownList key={subitem.id} subitem={subitem} />
     
    ))}
</div>
                    </NavDropdown>
                  ) : (
                    <Link to={item.pathUrl}>
                      <span>{item.pathName}</span>
                    </Link>
                  )}
                </Nav>
              </>
            );
          })}
        </Nav>
      </Navbar>
    </>
  );
};

export default MenuList;
