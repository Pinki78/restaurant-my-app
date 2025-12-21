
import {  Container, Row, Col, } from "react-bootstrap";
import CarouselFadeExample from "./home-component/home-carousel/carousel-example"
import HeroInfo from "./home-component/home-carousel/hero-info";
import AboutInfo from "../about/about-component/about-info";
const HomeIndex = () => {
  return (
    <>
      <section className="bx-list-carousel-banner bx-hero-page-section" id="hero-page-section">

        <Container>
          <Row>

            <Col xs={5} sm={5} md={7} lg={7}  xxl={7}>
             <HeroInfo />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}  xxl={5} className="pe-0 p-xxl-0">
              <CarouselFadeExample />
            </Col>
          </Row>
        </Container>

       
      </section>
 {/* --About-- */}
      <section className="bx-about-section overflow-hidden" id="about-page-section">
        <Container>
            <AboutInfo  />
        </Container>
      </section>
 {/* --About End-- */}

  {/* --Manu-- */}

        <section className="bx-category-men-section overflow-hidden" id="category-menu-section">

          <Container>
            
          </Container>

        </section>

      {/* --Manu2-- */}


    </>
  )
}

export default HomeIndex