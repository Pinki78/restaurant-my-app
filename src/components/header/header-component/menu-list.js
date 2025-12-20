import {  Navbar,Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HEADER_MANUS } from "../../../api-data/heade-data/heade-data";


const MenuList = () => {
  return (
    <>
    <Navbar expand="lg" className="">
   
        
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav as="ul" className="me-auto">
            <Nav.Link as="li" href="#home">Home</Nav.Link>
            <Nav.Link as="li"  href="#link">Link</Nav.Link>
            <NavDropdown as="ul"  title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as="li"  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as="li"  href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as="li"  href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="li"  href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
    
    </Navbar>
    
    
    
    </>
  )
}

export default MenuList