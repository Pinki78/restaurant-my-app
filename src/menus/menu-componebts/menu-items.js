import {   Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const MenuItems = (props) => {
  const { Max_Length, listMenu , isMobileOrTablet} = props;

  return (
    <>
      
        <div
          className="bx-product-menu-wrap  wow fadeInUp  animated"
          id={listMenu.id}
        >
          <div className="bx-thumbnail-top">
            <div className="bx-images">
              <Link href={`/menus/${listMenu.id}`}>
                <Image
                  className="d-block w-100 "
                  src={listMenu.foodImage}
                  alt={listMenu.title || "carousel-image"}
                  width="67%"
                  height="auto"
                />
                <Image
                  className="d-block w-100 bx-img2"
                  src={listMenu.foodImage}
                  alt={listMenu.title || "carousel-image"}
                  width="67%"
                  height="auto"
                />
              </Link>

              {listMenu.offer ? (
                <div className="bx-offer">{listMenu.offer}</div>
              ) : null}
            </div>
            <div className="bx-product-actions ">
              <ListGroup
                as="ul"
                className=" bg-transparent d-flex flex-row justify-content-center align-items-center"
              >
                <ListGroup.Item
                  as="li"
                  className=" bg-transparent d-inline p-0 border-0"
                >
                  <span className="bx-icon-list-icon"></span>
                  <Button
                    as="button"
                    className="bx-btn-prim"
                    //  onClick={handleClickCart}
                  >
                    <span className="bx-icon-list-icon">
                      <FaRegHeart />
                    </span>
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="bx-add-to-cart bg-transparent d-inline p-0 border-0"
                >
                  <Button className="bx-add-cart-btn">
                    <span className="bx-icon-list-icon">
                      <IoCartOutline /> 
                      
                      <span>{isMobileOrTablet ? null :  "Add to cart" }</span>
                    </span>
                    <span className="bx-quantity">
                      {/* {contextData.cartItems.find(({ id }) => id === menu.id)?.quantity ?? 0} */}
                    </span>
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className=" bg-transparent d-inline p-0 border-0"
                >
                  <Button
                    as="button"
                    className="bx-btn-prim"
                    //  onClick={handleClickCart}
                  >
                    <span className="bx-icon-list-icon">
                      <FaRegEye />
                    </span>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>

          <div className="bx-pro-text">
            <h3>
              <Link href={`/menus/${listMenu.id}`}>{listMenu.title}</Link>
            </h3>
            <p>
              {listMenu.info.length > Max_Length
                ? `${listMenu.info.substring(0, Max_Length)}...`
                : listMenu.info}
            </p>
            <div className="bx-currency-rating">
              <div className="bx-currency">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(listMenu.price)}
              </div>
              <div className="bx-rating">
                <FaStar />
                <span>{listMenu.rating}</span>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default MenuItems;
