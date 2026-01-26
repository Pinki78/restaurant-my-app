import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import WOW from "react-wow";

const PageNameRoot = (props) => {
  const { PathUrl, PageName, ClassBage } = props;
  return (
    <>
      <Container>
        <div className="bx-page-overlay">
          <Row>
            <Col xxl={12}>
              <h2
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: "0.1s", animationDuration: "1s" }}
              >
                {PageName}
              </h2>

              <Breadcrumbs BreadcrumbsTitles={PageName} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default PageNameRoot;
