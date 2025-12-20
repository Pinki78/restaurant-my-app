
import { Offcanvas,Container, Row,  Col, Image, Button } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";
import MenuList from "./menu-list";
const MediumHeader = (props) => {

const isMobileOrTablet =  window.innerWidth < 576 && window.innerWidth < 992;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className="bx-medium-header py-2">
        <Container>
          <Row>
            <Col xs={4} sm={4} md={4} lg={3} xl={3} xxl={3}>
              <Link to="/" className="nav-logos">
                <Image
                  src={"/images/logo.png"}
                  alt="Logo "
                  width="67%"
                  height="auto"
                />
              </Link>
            </Col>

            <Col xs={8} sm={8} md={8} lg={9} xl={9} xxl={9}>

                {isMobileOrTablet ? 
                
                <>
                <Button variant="primary" onClick={handleShow} className="me-2">
                    sdfgg
                </Button>
                <Offcanvas  placement="end" show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                     <MenuList />
                    </Offcanvas.Body>
                </Offcanvas>
                
                </>
                
                
                
                : <MenuList />}

                {/* <MenuList /> */}
            
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MediumHeader;
