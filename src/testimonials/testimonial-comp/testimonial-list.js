import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ViewMoreLink from "../../components/button-box/view-more";

const TestimonialList = (props) => {
  const { items, productMenuCLass, MAX_LENGTH, col } = props;

  return (
    <>
      <Col
        xs={col.xs ?? 6}
        sm={col.sm ?? 6}
        md={col.md ?? 4}
        lg={col.lg ?? 4}
        xl={col.xl ?? 4}
        xxl={col.xxl ?? 4}
        key={items.id}
        as="li"
        className=" list-unstyled"
      >
        <div className="bx-testi-items " id={items.id}>
          <div className="bx-testi-init">
            {/* <span  className="bx-quote-icon">
            <FaQuoteRight />
          </span> */}

            <div className="bx-rating">
              <span className="bx-rating-icon">
                {items.rating} <FaStar />
              </span>
            </div>

            <p className="bx-paragraph">
              {items.info.length > MAX_LENGTH
                ? `${items.info.substring(0, MAX_LENGTH)}.`
                : items.info}
            </p>

            <div className="bx-selected-detail">
              <div className="bx-selected-img">

                <Link to={`/testimonials/${items.id}`} className="bx-images">
                  <Image
                    component="img"
                    src={items.hotelImage}
                    alt={items.title}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Link>

                <div className="bx-testi-title">
                  <h3 variant="h3" className="bx-item-title1">
                  <Link to={`/testimonials/${items.id}`}>{items.title}</Link>
                </h3>

                <h5 className="">{items.job}</h5>

                <h6 className="">{items.caption}</h6>
                <ViewMoreLink  
                ViewName='View More'
                PathUrl={`/testimonials/${items.id}`}
                />
                
                </div>
                
              </div>
              

              
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default TestimonialList;
