import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchMenuList } from "../../redux-store/menuListItmes";
import MenuItems from "../../menus/menu-componebts/menu-items";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const OfferList = (props) => {


  const {  productMenuCLass ,PathUrl, ButtonName, ClassBtn, limit, Max_Length, col = {} , BxColClassName} = props;
  const location = useLocation();
  const dispatch = useDispatch();

  const isPage = (location.pathname = "");

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  // Filter items with an offer
  const offerItems = itemsMenuList.filter((item) => item.offer);

  // Limit items if needed
  const OfferDisplay = limit ? offerItems.slice(0, limit) : offerItems;

  return (
    <>
    <div className="bx-product-list-row">
       <Row as="ul">
        {OfferDisplay.map((foodItem) => {
          return (
            <Col 
            xs={col.xs ?? 12}
            sm={col.sm ?? 12}
            md={col.md ?? 4}
            lg={col.lg ?? 4}
            xl={col.xl ?? 3}
            xxl={col.xxl ?? 3}
            
            as="li" key={foodItem.id} className={`bg-transparent ${BxColClassName}  list-unstyled`}>
              <MenuItems
                key={foodItem.id}
                listMenu={foodItem}
                limit={limit}
                Max_Length={Max_Length}
               isOfferPage
               productMenuCLass='bx-product-list-wapper'
              />
            </Col>
          );
        })}
        </Row>
        </div>
    </>
  )
}

export default OfferList