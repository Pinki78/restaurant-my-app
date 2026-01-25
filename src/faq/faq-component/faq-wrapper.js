import { Accordion } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import FaqList from "./faqlist";

import { fetchFaqList } from "../../redux-store/store-redux-componets/faqListStort";
import PaginationList from "../../components/pagination-list/pagination";

const FaqWrapper = props => {

 const { col = {} , limit, PaginationHide, MAX_LENGTH } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const isPathePage = location.pathname === "/faq";


 const {  faqListCreates, loading } = useSelector(
    (state) => state.FaqReducerStore
  );

  useEffect(() => {
    dispatch(fetchFaqList());
  }, [dispatch]);

  const filterFaqData = useSelector(
    (state) => state.SearchList.filterSearch
  );
  
  //  const filteredData =  filterFaqData
  //   ? blogDataList.filter((item) =>
  //       item.title.toLowerCase().includes( filterFaqData.toLowerCase())
  //     )
  //   : blogDataList;

  const filteredData = filterFaqData
  ? faqListCreates.filter(item =>
      item.title?.toLowerCase().includes(filterFaqData.toLowerCase())
    )
  : faqListCreates;


 useEffect(() => {
    if ( filterFaqData && filteredData.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [ filterFaqData, filteredData, navigate]);

  const [currentPage, setCurrentPage] = useState(1);


  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });
  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 6 : isXl ? 8 : 4;

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = itemsPerPage - IndexOfLastItem;

  const baseData = limit
    ? filteredData.slice(0, limit)
    : filteredData;

  const DisplayItems = baseData.slice(IndexOfFirstItem, IndexOfLastItem);

  return (
    <>
  
    <div className="bx-faq-wrapper mt-2 mt-xxl-5">
          <Accordion 
          as='ul' 
          className="bx-faq-accordion d-block"
          defaultActiveKey="0">
            {DisplayItems.map((list,  index) => (
              <Accordion.Item 
              as='li'
                className=" list-unstyled"
               eventKey={String(index)}
                id={list.id}
              >
                <FaqList
                  listtems={list}
                  limit={limit}
                  // isMobileOrTablet={isMobileOrTablet}
                />
              </Accordion.Item>
            ))}
          </Accordion>
      </div>

      {isPathePage && faqListCreates.length > itemsPerPage && (
        <PaginationList
          MenuDataDispaly={faqListCreates}
          totalItems={faqListCreates.length}
          itemsPerPage={itemsPerPage}
          indexOfLastItem={IndexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          PaginationHide={PaginationHide}
        />
      )}
    </>
  )
}



export default FaqWrapper