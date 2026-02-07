import { Offcanvas, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuList from "./menu-list";
import { useLocation } from "react-router-dom";
import HeaderRight from "./header-right-side/header-right";
const MediumHeader = (props) => {

  const {} = props;

const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // add class after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const isMobileOrTablet = useMediaQuery({ maxWidth: 480,  maxWidth: 576, maxWidth: 991, });
  // const isMobileOrTablet = useMediaQuery({ maxWidth: 480, maxWidth: 576, maxWidth: 991 });

const isMobile = useMediaQuery({ maxWidth: 480 });
const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 991 });
const isMobileOrTablet = isMobile || isTablet;


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={`bx-medium-header py-2 ${scrolled ? "bx-scrolled" : ""}`}>
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
                        <MenuList handleClose={handleClose} isMobileOrTablet={isMobileOrTablet}  currentPath={location.pathname}  />
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
                ) : (
                  <MenuList  isMobileOrTablet={isMobileOrTablet} currentPath={location.pathname}  />
                )}

                <HeaderRight isMobileOrTablet={isMobileOrTablet} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MediumHeader;