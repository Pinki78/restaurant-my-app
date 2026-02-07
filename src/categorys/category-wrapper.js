import CategorysList from "./categorys-list";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { fetchMenuList } from "../redux-store/menuListItmes";
const CategoryWrapper = (props) => {
  const { limit, Max_Length, PaginationHide } = props;
  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const dispatch = useDispatch();

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu,
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const categoriesToDisplay = limit
    ? itemsMenuList.slice(0, limit)
    : itemsMenuList;

  const shownCategories = new Set();

  return (
    <>
      <Row as="ul">
        {categoriesToDisplay.map((fooditem, index) =>
          fooditem.FoodCategory.map((cat) => {
            if (shownCategories.has(cat.categoryName)) return null;
            shownCategories.add(cat.categoryName);

            return (
              <>
                <Col
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  xxl={3}
                  key={cat.id}
                  as="li"
                  className=" list-unstyled"
                 
                >
                  <CategorysList cat={cat} fooditem={fooditem} />
                </Col>
              </>
            );
          }),
        )}
      </Row>
    </>
  );
};

export default CategoryWrapper;
