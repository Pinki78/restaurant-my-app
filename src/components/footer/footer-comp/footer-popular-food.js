
import { Link } from "react-router-dom";
import { ListGroup,  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
import { fetchMenuList } from "../../../redux-store/menuListItmes";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FooterPopularFood = (props) => {
  const dispatch = useDispatch();

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu,
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);
  const shownCategories = new Set();

  return (
    <>
      <div className="bx-popular-food">

        <div className="bx-footer-titel">
            <h3>
                Popular Food
            </h3>
        </div>
 <ListGroup as="ul">
        {itemsMenuList.map((fooditem, index) =>
          fooditem.FoodCategory.map((cat) => {
            if (shownCategories.has(cat.categoryName)) return null;
            shownCategories.add(cat.categoryName);

            return (
              <ListGroup.Item
                        as="li" key={cat.id}>
                        

                <Link
                  to={`/category/${cat.categoryName
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                    <MdKeyboardDoubleArrowRight />
                  <span>{cat.categoryName}</span>
                </Link>
              </ListGroup.Item>
            );
          }),
        )}
        </ListGroup>
      </div>
    </>
  );
};

export default FooterPopularFood;
