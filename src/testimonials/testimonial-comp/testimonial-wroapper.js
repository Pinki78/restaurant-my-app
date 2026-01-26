import { Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TestimonialList from "./testimonial-list";
import PaginationList from "../../components/pagination-list/pagination";
import { fetchTestimonial } from "../../redux-store/store-redux-componets/testimonialListStort";

const TestimonialWroapper = (props) => {
  const { col = {} , limit, PaginationHide, MAX_LENGTH } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isPathePage = location.pathname === "/testimonials";
 const { testimonialDataList, loading } = useSelector(
    (state) => state.TestimonialReducermenu
  );

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const filterTestimonialSearchData = useSelector(
    (state) => state.SearchList.filterSearch
  );
  
 const filteredData = filterTestimonialSearchData
    ? testimonialDataList.filter((item) =>
        item.title.toLowerCase().includes(filterTestimonialSearchData.toLowerCase())
      )
    : testimonialDataList;

  useEffect(() => {
    if (filterTestimonialSearchData && filteredData.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [filterTestimonialSearchData, filteredData, navigate]);

  const [currentPage, setCurrentPage] = useState(1);

  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });
  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 6 : isXl ? 6 : 6;

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;

  const baseData = limit
    ? filteredData.slice(0, limit)
    : filteredData;

  const DisplayItems = baseData.slice(IndexOfFirstItem, IndexOfLastItem);

  return (
    <>
      <div className="bx-gallery-wrapper mt-2 mt-xxl-5">
        <Row as="ul">
          {DisplayItems.map((items, index) => (
            <TestimonialList index={index} items={items} key={items.id} col={col} limit={limit} MAX_LENGTH={MAX_LENGTH} />
          ))}
        </Row>
      </div>

      {isPathePage && testimonialDataList.length > itemsPerPage && (
        <PaginationList
          MenuDataDispaly={testimonialDataList}
          totalItems={testimonialDataList.length}
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

export default TestimonialWroapper;
