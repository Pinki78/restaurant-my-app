import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Offcanvas, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setFilterSearch,
  clearFilterSearch,
} from "../../redux-store/store-redux-componets/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => {
    setShowSearch(true);
    dispatch(clearFilterSearch());
  };

  // Redux state
  const searchQuery = useSelector((state) => state.menuSearch.filterSearch);

  const menuItems = useSelector((state) => state.ListReducermenu.itemsMenuList);
  
  const filteredFoodData = searchQuery
    ? menuItems.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1");
    if (filteredFoodData.length > 0) {
      navigateToDetailPage("food");
      console.log("1");
      
    } else {
      navigateToDetailPage("404");
      console.log("2");
    }

    handleCloseSearch();
  };

  const handleQueryChange = (e) => {
    // const value = e.target.value;
    dispatch(setFilterSearch(e.target.value));
     if (filteredFoodData.length > 0) {
      navigateToDetailPage("food");
      console.log("1");
      
    } else {
      navigateToDetailPage("404");
      console.log("2");
    }

    // handleCloseSearch();
  };

  const navigateToDetailPage = (type) => {
  let url = "";

  switch (type) {
    case "food":
      url = "/menus";
      break;
    case "404":
      url = "/404";
      break;
    default:
      return;
  }

  if (location.pathname !== url) {
    navigate(url);
  }
};


  return (
    <>
      <div className="bx-search-bar">
        <Button variant="primary" onClick={handleShowSearch} className="me-2">
          <FiSearch />
        </Button>
        <Offcanvas
          className="bx-offcanvas-search"
          placement="top"
          show={showSearch}
          onHide={handleCloseSearch}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleQueryChange}
              />
              <Button type="submit" variant="outline-success">
                <FiSearch />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SearchBar;
