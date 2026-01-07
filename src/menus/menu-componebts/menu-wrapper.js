import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import MenuItems from "./menu-items";
import { fetchMenuList } from "../../redux-store/menuListItmes";
import { setFilterSearch } from "../../redux-store/store-redux-componets/searchSlice";

// import { FOOD_MENU_DATA } from "../../api-data/ManulistData/manu-list-data";

const Menuwrapper = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { limit, Max_Length } = props;

  const dispatch = useDispatch();


  // Redux state
  // const searchQuery = useSelector((state) => state.menuSearch.filterSearch);

  const {itemsMenuList, loading} = useSelector((state) => state.ListReducermenu);

  const filterSearchData = useSelector(
    (state) => state.menuSearch.filterSearch
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
const MenuDataDispaly = limit ? filteredData.slice(0, limit) : filteredData;


  return (
    <>
      <div className="">
        <Row as="ul">
          {MenuDataDispaly.map((listMenu) => (
            <MenuItems listMenu={listMenu} limit={limit} Max_Length={Max_Length } />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Menuwrapper;
