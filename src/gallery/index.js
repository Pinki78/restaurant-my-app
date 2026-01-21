import GalleryWrapper from "./gallery-comp/gallery-wrapper";
import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";

const GalleryIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-gallery-main-section">
        <Container>
          <GalleryWrapper />
        </Container>
      </section>
    </>
  );
};

export default GalleryIndex;
