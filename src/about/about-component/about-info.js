import { Row, Col, ListGroup } from "react-bootstrap";
import { GiHamburger } from "react-icons/gi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { ButtonLink } from "../../components/button-box/button-link";
import { Link } from "react-router-dom";
const AboutInfo = () => {
  return (
    <>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          xxl={7}
          className="align-self-center"
        >
          <div className="bx-about-info-wrapper wow fadeInLeft  animated">
            <div className="bx-restaurant">
              <ListGroup as="ul" className="bx-icon-list-items">
                <ListGroup.Item as="li" className="bx-icon-list-item">
                  <span className="bx-icon-list-icon">
                    <GiHamburger />
                  </span>
                  <span className="bx-icon-list-text">About Restaurant</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <h2>
              We are a mexican restaurant makes delicious.
              <div className="wave"> </div>
            </h2>
            <p className="bx-info-line">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
              phasellus massa faucibus lectus in sapien ornare et leo egestas
              blandit amet nunc pharetra vitae id mattis ac sed.
            </p>

            <div className="bx-listcheck-missvision ">
              <Row className="m-0 p-0">
                <Col
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  xl={7}
                  xxl={7}
                  className="p-0"
                >
                  <div className="bx-list-info-check ">
                    <ListGroup as="ul" className="bx-icon-list-items">
                      <ListGroup.Item as="li" className="bx-icon-list-item">
                        <span className="bx-icon-list-icon">
                          <IoCheckmarkDoneOutline />
                        </span>
                        <span className="bx-icon-list-text">
                          Pure, Additive-Free & Wholesome Cookingt
                        </span>
                      </ListGroup.Item>

                      <ListGroup.Item as="li" className="bx-icon-list-item">
                        <span className="bx-icon-list-icon">
                          <IoCheckmarkDoneOutline />
                        </span>
                        <span className="bx-icon-list-text">
                          Artful Presentation with Exceptional Taste
                        </span>
                      </ListGroup.Item>

                      <ListGroup.Item as="li" className="bx-icon-list-item">
                        <span className="bx-icon-list-icon">
                          <IoCheckmarkDoneOutline />
                        </span>
                        <span className="bx-icon-list-text">
                          Locally Harvested & Sustainably Sourced Produce
                        </span>
                      </ListGroup.Item>

                      <ListGroup.Item as="li" className="bx-icon-list-item">
                        <span className="bx-icon-list-icon">
                          <IoCheckmarkDoneOutline />
                        </span>
                        <span className="bx-icon-list-text">
                          Cozy Ambience Designed for Memorable Dining
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>

                  <div className="bx-call-us mt-3 d-xxl-flex d-block align-items-center">
                    <ButtonLink
                      PathUrl={"/about"}
                      ButtonName={"About Us"}
                      ClassBtn={"bx-btn-2"}
                    />
                    <div className="bx-call mt-4 ms-xxl-3 ms-0">
                      <Link to="tel:+91123456790" aria-label="Call us">
                        <span className="">
                          <BiSolidPhoneCall />
                        </span>
                        <h5>
                          Phone
                          <span>+91 123456790</span>
                        </h5>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={5}
                  lg={5}
                  xl={5}
                  xxl={5}
                  className="p-0"
                >
                  <div className="bx-our-mission-vision">
                    <ListGroup as="ul" className="bx-icon-list-items ">
                      <ListGroup.Item
                        as="li"
                        className="bx-icon-list-item bx-our-mission"
                      >
                        <span className="bx-icon-list-icon">
                          <TbTargetArrow />
                          <span className="bx-icon-list-text">Our Mission</span>
                        </span>

                        <p>
                          We serve fresh, healthy and delicious meals daily.
                        </p>
                      </ListGroup.Item>

                      <ListGroup.Item
                        as="li"
                        className="bx-icon-list-item bx-our-vision"
                      >
                        <span className="bx-icon-list-icon">
                          <FaEye />
                          <span className="bx-icon-list-text">Our Vision</span>
                        </span>

                        <p>Our goal is to be nation’s top fusion restaurant.</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className="">
          <div className="bx-about-image-wrapper wow fadeInRight  animated">
            <img
              src={process.env.PUBLIC_URL + "/images/about/about.png"}
              alt="about"
            />
            <div className="bx-bolle"> </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutInfo;
