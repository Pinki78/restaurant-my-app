import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useScrollAnimation } from "../../assets/hooks/scroll-animation/scroll-animation";
// Default social icons mapping

const TestissDetails = (props) => {
  const { items, testiCLass } = props;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const getUrl = (id) => `/blog/${`${slugify(blogItem.title)}`}`;

  const [ref, animationClass] = useScrollAnimation(
    props.animationClass || "animate__fadeInUp",
  );

  return (
    <Row className="gx-4 gy-4">
      <Col xs={12} md={12}>
        <div
          className={`bx-testi-items-details  animate__animated  ${animationClass || ""} ${testiCLass || ""}`}
          id={items.id}
          style={{
            animationDelay: `${items.id * 0.2}s`,
            animationDuration: "1s",
          }}
        >
          <figure className="bx-image-anime">
            <Image
              src={items.hotelImage}
              alt={items.title || "carousel-image"}
            />
          </figure>

          <div className="bx-rating">
            <span className="bx-rating-icon">
              {items.rating} <FaStar />
            </span>
          </div>

          <p className="bx-paragraph">
            {items.info}
          </p>

          <div className="bx-testi-title">
            <h3 variant="h3" className="bx-item-title1">
              {items.title}
            </h3>

            <h5 className="">{items.job}</h5>

            <h6 className="">{items.caption}</h6>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TestissDetails;
