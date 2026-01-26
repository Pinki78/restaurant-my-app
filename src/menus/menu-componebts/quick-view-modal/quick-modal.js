import { useState } from "react";
import { Row, Col, Button, Modal, Image, ListGroup } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux-store/store-redux-componets/cartSlice";
import { ButtonLink } from "../../../components/button-box/button-link";

const QuickModal = (props) => {
  const { slugify, isInCart, quantity, cartItem, listMenu } = props;

  const dispatch = useDispatch();
  const productId = slugify(listMenu.title);

  const onIncrease = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          ...listMenu,
          id: productId,
        }),
      );
    } else {
      dispatch(increaseQuantity(productId));
    }
  };

  const onDecrease = () => {
    if (!isInCart) return;
    dispatch(decreaseQuantity(productId));
  };

  const getProductUrl = (id) =>
    `/menu/single-product/${`${slugify(listMenu.title)}`}`;
  const [show, setShow] = useState(false);

  return (
    <>
      <Button as="button" className="bx-btn-prim" onClick={() => setShow(true)}>
        <span className="bx-icon-list-icon">
          <FaRegEye />
        </span>
      </Button>

      {show && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          centered
          scrollable={false}
          onExited={() => {
            document.body.classList.remove("modal-open");
            document.body.style.paddingRight = "";
          }}
          className="bx-quick-modal"
        >
          <Button
            variant="secondary"
            className="bx-close-icon"
            onClick={() => setShow(false)}
          >
            <IoClose />
          </Button>
          <Modal.Body>
            <div className="bx-product-view">
              <Row>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
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
                  </div>
                </Col>

                <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
                  <div className="bx-pro-text">
                    <div className="bx-rating">
                      <FaStar />
                      <span>{listMenu.rating}</span>
                    </div>
                    <h3>
                      <Link to={getProductUrl(listMenu.id)}>
                        {listMenu.title}
                      </Link>
                    </h3>
                    <p>{listMenu.info}</p>
                    <div className="bx-currency-rating">
                      <div className="bx-currency">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(listMenu.price)}
                      </div>
                    </div>

                    <div className="">
                      <div className="qty-controls">
                        <Button onClick={onDecrease} className="bx-minus">
                          <FaMinus />
                        </Button>
                        <span className="qty">{isInCart ? quantity : 0}</span>
                        <Button onClick={onIncrease} className="bx-plus">
                          <FaPlus />
                        </Button>
                      </div>

                      <ButtonLink
                        ButtonName="View Cart"
                        PathUrl="/cart"
                        ClassBtn="bx-button-2"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default QuickModal;
