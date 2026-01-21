import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Copyright = (props) => {
  return (
    <>
      <div className="bx-copyright-root">
        <Container>
          <Row className=" justify-content-center align-items-center">
            <Col xs={12} sm={12} lg={6} xxl={6}>
              <h4>Copyright © 2025. All Rights Reserved.</h4>
            </Col>
            <Col xs={12} sm={12} lg={6} xxl={6}>
              <ListGroup as="ul" className="bx-inline-items">
                <ListGroup.Item as="li" className="">
                  <Link href="#">
                    <span className="bx-icon-list-text"> Privacy Policy</span>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="">
                  <Link href="#">
                    <span className="bx-icon-list-text">
                      Terms &amp; Conditions
                    </span>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Copyright;
