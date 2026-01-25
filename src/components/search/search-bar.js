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

  // Redux state
  const searchQuery = useSelector((state) => state.SearchList.filterSearch);

  const menuItems = useSelector((state) => state.ListReducermenu.itemsMenuList);

    const testissItem = useSelector(
    (state) => state.TestimonialReducermenu.testimonialDataList
  );

  const handleCloseSearch = () => {
    setShowSearch(false);
    // dispatch(clearFilterSearch());
  };
  const handleShowSearch = () => {
    setShowSearch(true);
    dispatch(clearFilterSearch());
  };

  // const filteredFoodData = menuItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleCloseSearch();
  //   console.log("1");

  //   // Exit if no results
  //   if (filteredFoodData.length === 0) {
  //     handleCloseSearch();
  //     return;
  //   }
  //   // Navigate to the first result
  //   if (filteredFoodData.length > 0) {
  //     // navigateToDetailPage("food", filteredFoodData[0].id);
  //     navigateToDetailPage("food");
  //     console.log("155");
  //   }
  //   dispatch(clearFilterSearch());
  // };
  // const filteredFoodData = menuItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const query = searchQuery?.toLowerCase() || "";

const filteredFoodData = menuItems.filter(item =>
  (item.title || "").toLowerCase().includes(query)
);

  const filteredTestissData = testissItem.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      handleCloseSearch();
      return;
    }

    // No results found
    if (filteredFoodData.length === 0 && filteredTestissData.length === 0) {
      console.log("No data found");
      navigateToDetailPage("404");
      handleCloseSearch();
      return;
    }

    // Navigate based on available results
    if (filteredFoodData.length > 0) {
      navigateToDetailPage("food");
      console.log("Navigated to food");
    } else if (filteredTestissData.length > 0) {
      navigateToDetailPage("testimonial");
      console.log("Navigated to testimonial");
    }

    handleCloseSearch();
  };

  const navigateToDetailPage = (type) => {
    let url = "";

    switch (type) {
      case "food":
        url = "/menus";
        break;
      case "testimonial":
        url = "/testimonials";
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

// Handle input changes
const handleQueryChange = (e) => {
  const value = e.target.value;
  dispatch(setFilterSearch(value));

  const query = value.trim().toLowerCase();
  if (!query) return; // do nothing if empty

  // Whole-word search for food
  const regex = new RegExp(`\\b${query}\\b`, "i");
  const foodMatch = menuItems.some((item) => regex.test(item.title));
  const testimonialMatch = testissItem.some((item) => regex.test(item.title));

  if (foodMatch) {
    navigateToDetailPage("food");
  } else if (testimonialMatch) {
    navigateToDetailPage("testimonial");
  }
  // else do nothing, wait for submit to go 404 if needed
};


  return (
    <>
      <div className="bx-search-bar">
        <Button variant="primary" onClick={handleShowSearch} className="">
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
