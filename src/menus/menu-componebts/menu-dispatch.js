import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

import { fetchMenuList } from "../../redux-store/menuListItmes"
import Menuwrapper from "./menu-wrapper";

const DispatchMenu = () => {

const dispatch = useDispatch();
  const {itemsMenuList, loading} = useSelector((state) => state.menu);

  const filterSearchData = useSelector(
    (state) => state.menuSearch.filterSearch
  );

    useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

 // ✅ Search logic (memoized & clean)
  // const filteredData = useMemo(() => {
  //   if (!filterSearchData) return itemsMenuList;

  //   return itemsMenuList.filter((item) =>
  //     item.title.toLowerCase().includes(filterSearchData.toLowerCase())
  //   );
  // }, [itemsMenuList, filterSearchData]);

  const filteredData = filterSearchData
  ? itemsMenuList.filter((item) =>
      item.title.toLowerCase().includes(filterSearchData.toLowerCase())
    )
  : itemsMenuList;

    if (loading) return <p>Loading...</p>;

  return (
    <>
    <Menuwrapper filteredData={filteredData} />
    
    </>
  )
}

export default DispatchMenu