import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {Col, Row } from "react-bootstrap";
import MenuItems from "./menu-items";
import { fetchMenuList } from "../../redux-store/menuListItmes";
// import { setFilterSearch } from "../../redux-store/store-redux-componets/searchSlice";
import PaginationList from "../../components/pagination-list/pagination";

// import { FOOD_MENU_DATA } from "../../api-data/ManulistData/manu-list-data";

const Menuwrapper = (props) => {
  const { limit, Max_Length, PaginationHide } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });

  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 8 : isXl ? 8 : 8;

  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const location = useLocation();
  const navigate = useNavigate();

  const isPathePage = location.pathname === "/menus";

  const dispatch = useDispatch();
  // Redux state
  // const searchQuery = useSelector((state) => state.menuSearch.filterSearch);

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu
  );

  const filterSearchData = useSelector(
    (state) => state.SearchList.filterSearch
  );
  
  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const filteredData = filterSearchData
    ? itemsMenuList.filter((item) =>
        item.title.toLowerCase().includes(filterSearchData.toLowerCase())
      )
    : itemsMenuList;

  useEffect(() => {
    if (filterSearchData && filteredData.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [filterSearchData, filteredData, navigate]);

  // if (loading) return <p>Loading...</p>;

  // if (loading) return <p>Loading...</p>;

  // const MenuDataDispaly = limit ? FOOD_MENU_DATA.slice(0, limit) : FOOD_MENU_DATA
  /* 🔑 RESET PAGE WHEN DATA OR LAYOUT CHANGES */

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [filterSearchData, itemsPerPage, limit]);

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;
  // after search filter
  const baseData = limit ? filteredData.slice(0, limit) : filteredData;

  // const MenuDataDispaly = limit ? filteredData.slice(0, limit) : filteredData;
  const MenuDataDispaly = baseData.slice(IndexOfFirstItem, IndexOfLastItem);

  return (
    <>
      <div className="bx-wrapp-menu-root">
        <Row as="ul">
          {MenuDataDispaly.map((listMenu) => (
            
            <Col
        xs={6}
        sm={6}
        md={4}
        lg={4}
        xl={4}
        xxl={3}
        key={listMenu.id}
        as="li"
        className=" list-unstyled"
      >
            <MenuItems
              key={listMenu.id}
              listMenu={listMenu}
              limit={limit}
              Max_Length={Max_Length}
              isMobileOrTablet={isMobileOrTablet}
            />
</Col>
          ))}
        </Row>
      </div>

      {isPathePage && filteredData.length > itemsPerPage && (
        <PaginationList
          MenuDataDispaly={filteredData}
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          indexOfLastItem={IndexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          PaginationHide={PaginationHide}
        />
      )}
    </>
  );
};

export default Menuwrapper;
