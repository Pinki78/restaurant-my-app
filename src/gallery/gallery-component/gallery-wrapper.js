import { Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { fetchMenuList } from "../../redux-store/menuListItmes";
import GalleryList from "./gallery-list";
import PaginationList from "../../components/pagination-list/pagination";

const GalleryWrapper = (props) => {
  const { col = {}, limit, PaginationHide } = props;

  const location = useLocation();
  // const navigate = useNavigate();

  const isPathePage = location.pathname === "/gallery";

  const [currentPage, setCurrentPage] = useState(1);
  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });

  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 6 : isXl ? 6: 6;

  // const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const dispatch = useDispatch();

  const { itemsMenuList, } = useSelector(
    (state) => state.ListReducermenu,
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;

  const baseData = limit ? itemsMenuList.slice(0, limit) : itemsMenuList;

  const DisplayItems = baseData.slice(IndexOfFirstItem, IndexOfLastItem);

  return (
    <>
      <div className="bx-gallery-wrapper mt-2 mt-xxl-5">
        <Row>
          {DisplayItems.map((items , index) => (
            <GalleryList items={items} index={index} key={items.title} col={col} />
          ))}
        </Row>
      </div>

      {isPathePage && itemsMenuList.length > itemsPerPage && (
        <PaginationList
          MenuDataDispaly={itemsMenuList}
          totalItems={itemsMenuList.length}
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

export default GalleryWrapper;
