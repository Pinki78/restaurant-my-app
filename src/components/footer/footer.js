import FooterLogo from "./footer-comp/footer-logo";
import { Container, Row, Col } from "react-bootstrap";
import FooterPopularFood from "./footer-comp/footer-popular-food";
import FooterContactInfo from "./footer-comp/footer-contact-info";
import FooterUsefulLinks from "./footer-comp/footer-useful-links";
import Copyright from "./footer-comp/copyright";
import FooterFollow from "./footer-comp/footer-follow";

const Footer = (props) => {
  return (
    <>
      <footer className="bx-footer-main">
        <div className="bx-footer-root">
          <Container>
            <Row className=" justify-content-center">
              <Col xs={12} sm={12} md={3} lg={4} xxl={4}>
                <FooterLogo />
                <FooterFollow  />
              </Col>

               <Col xs={12} sm={12} md={3} lg={2} xxl={2}>
                <FooterPopularFood />
              </Col>

              <Col xs={12} sm={12} md={3} lg={2} xxl={2}>
                <FooterUsefulLinks />
              </Col>

                <Col xs={12} sm={12} md={3} lg={2} xxl={2}>
                <FooterContactInfo />
              </Col>



              
            </Row>
          </Container>
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
