import { Image, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux-store/store-redux-componets/cartSlice";
import { ButtonLink } from "../../components/button-box/button-link";

const SingleItem = ({ singleProduct, slugify }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartReducerStore.cartItems);

  const productId = singleProduct.id || slugify(singleProduct.title);

  // Check if product is in cart
  const cartItem = cartItems.find((item) => item.id === productId);
  const cartQty = cartItem?.quantity || 0;

  // Local quantity for display (start with 1 if not in cart)
  const [localQty, setLocalQty] = useState(cartQty > 0 ? cartQty : 1);

  // Keep localQty in sync with Redux cart
  useEffect(() => {
    setLocalQty(cartQty > 0 ? cartQty : 1);
  }, [cartQty]);

  const onIncrease = () => {
    if (cartQty > 0) {
      dispatch(increaseQuantity(productId));
    } else {
      dispatch(
        addToCart({ ...singleProduct, id: productId, quantity: localQty }),
      );
    }
    setLocalQty((prev) => prev + 1);
  };

  const onDecrease = () => {
    if (localQty <= 1) return; // minimum 1 on single product page
    setLocalQty((prev) => prev - 1);
    if (cartQty > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };

  return (
    <div className="bx-product-view">
      <Row>
        <Col md={5}>
          <div className="bx-thumbnail-top">
            <div className="bx-images">
              <Image
                className="d-block w-100"
                src={singleProduct.foodImage}
                alt={singleProduct.title || "image"}
                width="100%"
                height="auto"
              />
              {singleProduct.offer && (
                <div className="bx-offer">{singleProduct.offer}</div>
              )}
            </div>
          </div>
        </Col>

        <Col md={7}>
          <div className="bx-pro-text">
            <div className="bx-rating">
              <FaStar />
              <span>{singleProduct.rating}</span>
            </div>
            <h3>{singleProduct.title}</h3>
            <p>{singleProduct.info}</p>
            <div className="bx-currency-rating">
              <div className="bx-currency">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(singleProduct.price)}
              </div>
            </div>

            <div className="bx-qty-button-group">
              <div className="qty-controls d-flex align-items-center mt-3">
                <Button onClick={onDecrease} className="bx-minus me-2">
                  <FaMinus />
                </Button>
                <span className="qty me-2">{localQty}</span>
                <Button onClick={onIncrease} className="bx-plus">
                  <FaPlus />
                </Button>
              </div>

              <div className="mt-3">
                <ButtonLink
                  ButtonName="Add To Cart"
                  PathUrl="/cart"
                  ClassBtn="bx-button-2"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleItem;
