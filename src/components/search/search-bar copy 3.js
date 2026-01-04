import { FiSearch } from "react-icons/fi";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas, Button, Form } from "react-bootstrap";
import { useNavigate , useLocation} from "react-router-dom";
import {
  setFilterSearch,
  clearFilterSearch,
} from "../../redux-store/store-redux-componets/searchSlice";

const Search = ({ handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // Redux state
  // const searchQuery = useSelector((state) => state.menuSearch.filterSearch);
  // const hotels = useSelector((state) => state.hotelReducer.hotels); // replace with your hotel reducer
  // const blogs = useSelector((state) => state.blogReducer.blogs); // replace with your blog reducer
  // const testimonials = useSelector((state) => state.testimonialReducer.testimonials); // replace with your testimonial reducer

  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => setShowSearch(true);
  const handleCloseSearch = () => {
    setShowSearch(false);
    dispatch(clearFilterSearch());
  };

  const handleSearchChange = (e) => {
    dispatch(setFilterSearch(e.target.value));
  };

  // Redux state
  const searchQuery  = useSelector((state) => state.menuSearch.filterSearch);
  const menuItems = useSelector((state) => state.ListReducermenu.itemsMenuList);


  // Filtered results
  const filteredFoodData = searchQuery
    ? menuItems.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // const filteredBlogs = searchQuery
  //   ? blogs.filter((item) =>
  //       item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   : [];

  // const filteredTestimonials = searchQuery
  //   ? testimonials.filter((item) =>
  //       item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //   : [];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Exit if no results
    // if (
    //   filteredFoodData.length === 0 
    //   // &&
    //   // filteredBlogs.length === 0 &&
    //   // filteredTestimonials.length === 0
    // ) {
    //   handleCloseSearch();
    //   dispatch(clearFilterSearch());
    //   return;
    // }

    if (filteredFoodData.length === 0) {
   
  handleCloseSearch();
  // dispatch(clearFilterSearch());
     alert("2")
  return;
}


    // Navigate to the first result
    // if (filteredFoodData.length > 0) {
    //        alert("3")
    //   navigateToDetailPage("food", filteredFoodData[0].id);
    // } 
  navigateToDetailPage("food", filteredFoodData[0].id);

    handleCloseSearch();
    // dispatch(clearFilterSearch());
  };

  const handleQueryChange = (e) => {
    dispatch(setFilterSearch(e.target.value));
  };

  const navigateToDetailPage = (type, id) => {
    let url = "";
    switch (type) {
      case "food":
        // url = id ? `/menus/${id}` : `/menus`;
        url =  `/menus`;
        break;
      // case "blog":
      //   url = id ? `/blog/${id}` : `/blog`;
      //   break;
      // case "testimonial":
      //   url = id ? `/testimonial/${id}` : `/testimonial`;
      //   break;
      default:
        return;
    }
     navigate(url);
  };

  return (

<div className="bx-search-bar">
      <Button variant="primary" onClick={handleShowSearch}>
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
              placeholder="Search..."
              className="me-2"
               value={searchQuery}
              onChange={handleQueryChange}
              autoFocus
            />
            <Button type="submit" variant="outline-success">
              <FiSearch />
            </Button>
          </Form>

          {/* Optional: show live search results */}
          {searchQuery && filteredFoodData.length > 0 && (
            <ul className="search-results">
              {filteredFoodData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    navigate(`/menus/${item.id}`);
                    handleCloseSearch();
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>



  );
};

export default Search;
