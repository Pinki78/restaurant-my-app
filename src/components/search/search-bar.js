import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  return (
    <>
      <div className="bx-search-bar">
        <Button variant="primary" onClick={handleShowSearch} className="me-2">
          <FiSearch  />
        </Button>
        <Offcanvas className="bx-offcanvas-search" placement="top" show={showSearch} onHide={handleCloseSearch}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                 <FiSearch  />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SearchBar;
