import { Offcanvas, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "./menu-list";
import SearchBar from "../../search/search-bar";
const MediumHeader = (props) => {
  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bx-medium-header py-2">
        <Container>
          <Row>
            <Col xs={5} sm={5} md={4} lg={3} xl={3} xxl={3}>
              <Link to="/" className="nav-logos">
                <Image
                  src={"/images/logo.png"}
                  alt="Logo "
                  width="67%"
                  height="auto"
                />
              </Link>
            </Col>

            <Col xs={7} sm={7} md={8} lg={9} xl={9} xxl={9}>
              <div className="bx-menu-search-bar d-flex justify-content-end align-items-center">
                {isMobileOrTablet ? (
                  <>
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      className="me-2"
                    >
                      <FaBarsStaggered />
                    </Button>
                    <Offcanvas
                      placement="end"
                      show={show}
                      onHide={handleClose}
                      {...props}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <MenuList />
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
                ) : (
                  <MenuList />
                )}
                <SearchBar />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MediumHeader;
