import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import {
  fetchWishlist,
  removeFromWishlist,
} from "../../redux-store/store-redux-componets/wishlistSlice";
import { Image, ListGroup, Button, Row, Col } from "react-bootstrap";

import { useScrollAnimation } from "../../assets/hooks/scroll-animation/scroll-animation";

const WishlistItms = (props) => {

  const [ref, animationClass] = useScrollAnimation(
    props.animationClass || "animate__fadeInUp",
  );

  const userId = "demo-user-id";
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlistReducer.items);
  // const loading = useSelector(state => state.wishlist.loading);

  useEffect(() => {
    dispatch(fetchWishlist(userId));
  }, [dispatch, userId]);

  // if (loading) return <p>Loading wishlist...</p>;

  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // const productId = slugify(item.title);

  // const getProductUrl = (id) =>
  // `/menu/single-product/${`${slugify(item.title)}`}`;

  return (
    <>
      <h3>Your Wishlist</h3>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <Row as="ul" ref={ref}>
          {wishlistItems.map((item, index) => {
            const getProductUrl = (id) =>
              `/menu/single-product/${slugify(item.title)}`;

            return (
              <Col  xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              xxl={3} as="li" key={item.id}>
                <div
                  className={`bx-product-menu-wrap animate__animated  ${animationClass || ""} `}
                  id={`${slugify(item.title)}-${index}`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "1s",
                  }}
                >
                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch(removeFromWishlist({ userId, productId: item.id }))
                    }
                    className="bx-remove"
                  >
                    <IoMdCloseCircle />
                  </Button>
                  <div className="bx-thumbnail-top">
                    <div className="bx-images">
                      <Link to={getProductUrl(item.id)}>
                        <Image
                          className="d-block w-100"
                          src={item.foodImage}
                          alt={item.title || "carousel-image"}
                          width="67%"
                          height="auto"
                        />
                        <Image
                          className="d-block w-100 bx-img2"
                          src={item.foodImage}
                          alt={item.title || "carousel-image"}
                          width="67%"
                          height="auto"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="bx-pro-text">
                    <h3>
                      <Link to={getProductUrl(item.id)}>{item.title}</Link>
                    </h3>
                    <div className="bx-currency-rating">
                      <div className="bx-currency">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item.price)}
                      </div>
                      <div className="bx-rating">
                        <FaStar />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default WishlistItms;
