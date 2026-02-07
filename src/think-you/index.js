import { Container, Row, Col, Image } from "react-bootstrap";
import { ButtonLink } from "../components/button-box/button-link";

import PageTitleArea from "../components/page-title-area/page-title-area";

const ThankYouindex = ({ PageName }) => {

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-think-you text-center">
        <Container>
          <div>
            <Image src="/images/Thank-You.png" alt="Thank You" />
            <h1>Thank You!</h1>
            <p>Your submission has been received successfully.</p>
          </div>
          <ButtonLink
            PathUrl="/"
            ClassBtn="bx-btn-2"
            ButtonName="Back To Homepage"
            onClick={scrollToTop()}
          />
        </Container>
      </section>
    </>
  );
};

export default ThankYouindex;
