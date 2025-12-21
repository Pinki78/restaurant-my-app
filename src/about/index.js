import { Container } from "react-bootstrap";



import AboutInfo from "./about-component/about-info";
import PageTitleArea from "../components/page-title-area/page-title-area";

const AboutIndex = ({ PageName }) => {
  return (
    <>
    <PageTitleArea PageName={PageName} />
      <section className="bx-about-us-root overflow-hidden">
        <Container>
          <AboutInfo  />
        </Container>
      </section>
    </>
  );
};

export default AboutIndex;
