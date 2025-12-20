import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, ListGroup, Col } from "react-bootstrap";

const TopHeader = () => {
  return (
    <>
      <div className="box-top-header">
        <Container>
          <Row>
            <Col xs={6} sm={6} md={6}>
              <ListGroup  as="ul"  className="email-numbers-box  box-navbar-nav">
                <ListGroup.Item  as="li" className="tab-item">
                  <Link href="tel:+6123456" target="_blank">
                    <MdCall /> <span> +6123456</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item  as="li" className="tab-item">
                  <Link href="apcb2023ma1aysia@gmail.com " target="_blank">
                    <MdOutlineMail />
                    <span>apcb2023@gmail.com</span>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col xs={6} sm={6} md={6}>
              <ul className="ulclearfix fnavbar-nav ">
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="# " target="_blank">
                    <i className="fab fa-twitter "></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-youtube "></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopHeader;
