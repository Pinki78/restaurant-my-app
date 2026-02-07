import { Container, Row , Col} from "react-bootstrap";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMenuList } from "../../redux-store/menuListItmes";
import MenuItems from "../../menus/menu-component/menu-items";
import { useMediaQuery } from "react-responsive";
import { useScrollAnimation } from "../../assets/hooks/scroll-animation/scroll-animation";
import PaginationList from "../../components/pagination-list/pagination";

const CategoryIdIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Media queries
  const isXs = useMediaQuery({ maxWidth: 480 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });

  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 8 : 8;

  const { categoryId } = useParams();
  const menuSlugCategory = categoryId.toLowerCase();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu
  );

  const filterSearchData = useSelector(
    (state) => state.SearchList.filterSearch
  );

  // Fetch menu list
  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  // Redirect if search has no results
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

  // Filter menu by category
  const menuInCategory = filteredData.filter((item) =>
    item.FoodCategory.some((cat) => cat.id === menuSlugCategory)
  );

  const categoryNameFromSlug = menuInCategory.length
    ? menuInCategory[0].FoodCategory.find((cat) => cat.id === menuSlugCategory)
        .categoryName
    : menuSlugCategory;

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const menuToDisplay = menuInCategory.slice(indexOfFirstItem, indexOfLastItem);

  const [ref, animationClass] = useScrollAnimation("animate__fadeInUp");

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <PageTitleArea PageName={categoryNameFromSlug.replace(/-/g, " ")} />

      <Container>
        <Row as="ul">
          {menuToDisplay.map((item, index) => (
             <Col
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              xxl={3}
              key={item.id}
              as="li"
              className=" list-unstyled"
              ref={ref}
            >
            <MenuItems
              key={item.title + index}
              index={index}
              listMenu={item}
              Max_Length={50} // you can adjust as needed
              animationClass={animationClass}
              ref={ref}
            />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Pagination */}
      {menuInCategory.length > itemsPerPage && (
        <PaginationList
          totalItems={menuInCategory.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default CategoryIdIndex;
