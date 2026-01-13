import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Row, Col } from "react-bootstrap";
import MenuItems from "./menu-items";
import { fetchMenuList } from "../../redux-store/menuListItmes";
// import { FOOD_MENU_DATA } from "../../api-data/ManulistData/manu-list-data";

const Menuwrapper = (props) => {

  const { limit, Max_Length } = props;
  const dispatch = useDispatch();
  const {itemsMenuList, loading} = useSelector((state) => state.menu);

  const filterSearchData = useSelector(
    (state) => state.menuSearch.filterSearch
  );

    useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

 // ✅ Search logic (memoized & clean)
  const filteredData = useMemo(() => {
    if (!filterSearchData) return itemsMenuList;

    return itemsMenuList.filter((item) =>
      item.title.toLowerCase().includes(filterSearchData.toLowerCase())
    );
  }, [itemsMenuList, filterSearchData]);


  if (loading) return <p>Loading...</p>;



// const MenuDataDispaly = limit ? FOOD_MENU_DATA.slice(0, limit) : FOOD_MENU_DATA
const MenuDataDispaly = limit ? filteredData.slice(0, limit) : filteredData;


  return (
    <>
      <div className="">
        <Row as="ul">
          {MenuDataDispaly.map((listMenu) => (
            <MenuItems key={listMenu.id} listMenu={listMenu} limit={limit} Max_Length={Max_Length } />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Menuwrapper;
