import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const PageNameRoot = ( props) => {
     const { PathUrl, PageName, ClassBage } = props;
  return (
    <>
        <Container>
            <div className="bx-page-overlay">
                 <Row>
                    <Col  xxl={12}>
                      <h2>{PageName}</h2>
                      <Breadcrumbs  BreadcrumbsTitles={PageName} />
                    </Col>
                </Row>
            </div>
        </Container>
    
    </>
  )
}

export default PageNameRoot