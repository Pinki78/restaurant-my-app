import { FiSearch } from "react-icons/fi";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";


import { Offcanvas, Button, Form } from "react-bootstrap";
import { setFilterSearch, clearFilterSearch  } from "../../redux-store/store-redux-componets/searchSlice";



const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

   const dispatch = useDispatch();
  const filterSearch = useSelector((state) => state.menuSearch.filterSearch);

   const handleSearchChange = (e) => {
    dispatch(setFilterSearch(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearFilterSearch());
  };

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
                value={filterSearch}
                onChange={handleSearchChange}
                aria-label="Search"
              />
               {filterSearch && (
                <Button variant="outline-danger" onClick={handleClear}>
                  ✕
                </Button>
              )}
              <Button variant="outline-success" className="ms-2">
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
