import { Col, Container, Row } from "react-bootstrap";

import PageTitleArea from "../components/page-title-area/page-title-area";
import ContactInfo from "./contact-compent/contact-info";
import ContactForm from "./contact-compent/contact-form";

const ContactIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-contact-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
              <ContactInfo />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactIndex;
