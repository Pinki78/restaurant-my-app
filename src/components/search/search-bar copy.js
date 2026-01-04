import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { fetchMenuList , setSearch } from "../../redux-store/menuListItmes";

// import {setFilterSearch, clearFilterSearch

// import { setFilterSearch, clearFilterSearch } from "../../redux-store/store-redux-componets/SearchComponent";

import { Offcanvas, Button, Form } from "react-bootstrap";



const SearchBar = () => {

  // const dispatch = useDispatch();
  // const searchQuery = useSelector((state) => state.menuSearch.query);


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
