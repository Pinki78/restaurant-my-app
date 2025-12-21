import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HEADER_MANUS } from "../../../api-data/heade-data/heade-data";
// import { NavLink } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";
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
                      className={`p-0 ${isMobileOrTablet ? "w" : "show"}`}
                    >
                      {item.SubMenuDate.map((subitem) => {
                        const isSubActive =
                          location.pathname === subitem.pathUrlSub;

                        return (
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
                        );
                      })}
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
