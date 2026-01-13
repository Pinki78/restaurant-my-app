import { useEffect } from "react";
import { Button, ListGroup} from "react-bootstrap";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { useNavigate, useLocation } from "react-router-dom";

const PaginationList = ({
  setCurrentPage,
  currentPage,
  MenuDataDispaly,
//   totalItems,
  itemsPerPage,
  PaginationHide,
}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = MenuDataDispaly.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 🔹 Add this useEffect here
  useEffect(() => {
    console.log("currentPage:", currentPage, "totalPages:", totalPages);
  }, [currentPage, totalPages]);
const handlePageChange = (page) => {
  console.log("handlePageChange called with:", page, "totalPages:", totalPages);

  if (page < 1 || page > totalPages) {
    console.log("❌ invalid page");
    return;
  }

  setCurrentPage(page);
};
  return (
    <div className={`bx-pagination-root ${PaginationHide || ""} d-flex justify-content-center align-items-center`}>
      
      {/* Previous */}
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bx-previous bx-iconbutton"
      >
        <SlArrowLeftCircle />
      </Button>

      {/* Page Numbers */}
<ListGroup className="bx-pagination-group d-flex " as="ul">
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
    <ListGroup.Item
    as="li"
      key={pageNumber}
      active={pageNumber === currentPage}
      className="bx-page-number"
      onClick={() => {
        console.log("PAGE CLICKED:", pageNumber);
        handlePageChange(pageNumber);
      }}
    >
      <span>
        {pageNumber}
      </span>
    </ListGroup.Item>
  ))}
</ListGroup>




      {/* Next */}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bx-next bx-iconbutton"
      >
        <SlArrowRightCircle />
      </Button>
    </div>
  );
};

export default PaginationList;
