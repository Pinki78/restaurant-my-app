import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, ListGroup, Col,} from "react-bootstrap";

const TopHeader = () => {
  return (
    <>
      <div className="bx-top-header">
        <Container>
          <Row>
            <Col xs={6} sm={6} md={8}>
              <ListGroup  as="ul"  className="email-numbers-box  bx-navbar-nav">
                <ListGroup.Item  as="li" className="tab-item">
                  <Link href="tel:+6123456" target="_blank">
                    <MdCall /> <span> +911234567890</span>
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

            <Col xs={6} sm={6} md={4}>
              <ListGroup  as="ul"  className="ulclearfix bx-navbar-nav bx-socialr-nav ">
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    <FaFacebookF />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="# " target="_blank">
                    <FaTwitter />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    {" "}
                    <FaInstagramSquare />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    <FaYoutube />
                  </Link>
                </ListGroup.Item>
              </ListGroup  >
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopHeader;
