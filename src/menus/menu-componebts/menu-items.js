import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { BsCartCheckFill } from "react-icons/bs";
// import { FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import QuickModal from "./quick-view-modal/quick-modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, } from "../../redux-store/store-redux-componets/cartSlice";
import { useNavigate } from "react-router-dom";

const MenuItems = (props) => {
  const {
    Max_Length,
    index,
    listMenu,
    isMobileOrTablet,
    isOfferPage,
    productMenuCLass,
  } = props;
  const navigate = useNavigate();
  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const productId = slugify(listMenu.title);

  const dispatch = useDispatch();
  const cartItemAdd = useSelector((state) => state.CartReducerStore.cartItems);

  const cartItem = cartItemAdd.find((item) => item.id === productId);
  const quantity = cartItem?.quantity || 0;
  const isInCart = quantity > 0;

  // const handleAddToCart = () => {
  //   dispatch(
  //     addToCart({
  //       ...listMenu,
  //       id: productId,
  //     })
  //   );
  // };

  const handleAddToCart = () => {
    if (isInCart) {
      navigate(getProductUrl());
    } else {
      dispatch(
        addToCart({
          ...listMenu,
          id: productId,
        }),
      );
    }
  };

  // const handleAddToCart = () => {
  //   dispatch(addToCart(listMenu));
  // };

  // const [show, setShow] = useState(false);

  const actionsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isOfferPage && actionsRef.current && textRef.current) {
      textRef.current.append(actionsRef.current); // or prepend
    }
  }, [isOfferPage]);

  const getProductUrl = (id) =>
    `/menu/single-product/${`${slugify(listMenu.title)}`}`;

  return (
    <>
      <div
        className={`bx-product-menu-wrap  wow fadeInUp  animated ${productMenuCLass || ""}`}
        id={`${slugify(listMenu.title)}-${index}`}
      >
        <div className="bx-thumbnail-top">
          <div className="bx-images">
            <Link to={getProductUrl(listMenu.id)}>
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
          <div className="bx-product-actions " ref={actionsRef}>
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
                <Button className="bx-add-cart-btn" onClick={handleAddToCart}>
                  <span className="bx-icon-list-icon">
                    {isInCart ? <BsCartCheckFill /> : <IoCartOutline />}
                    <span>
                      {isMobileOrTablet
                        ? null
                        : isInCart
                          ? "View More"
                          : "Add to cart"}
                    </span>
                  </span>

                  {isInCart && (
                    <span className="bx-quantity ms-2">{quantity}</span>
                  )}
                </Button>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className=" bg-transparent d-inline p-0 border-0"
              >
                <QuickModal slugify={slugify } listMenu={listMenu} cartItem={cartItem} quantity ={quantity} isInCart={ isInCart} />
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="bx-pro-text" ref={textRef}>
          <h3>
            <Link to={getProductUrl(listMenu.id)}>{listMenu.title}</Link>
          </h3>
          <p>
            {(listMenu.info || "").length > Max_Length
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
