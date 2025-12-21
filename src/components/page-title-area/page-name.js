import { Container, Row, Col } from "react-bootstrap";

const PageNameRoot = ( props) => {
     const { PathUrl, PageName, ClassBage } = props;
  return (
    <>
        <Container>
            <div className="bx-page-overlay">
                 <Row>
                    <Col  xxl={12}>
                    {PageName}
                    </Col>
                </Row>
            </div>
        </Container>
    
    </>
  )
}

export default PageNameRoot