import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineMenuBook , MdRestaurantMenu } from "react-icons/md";

import CarouselFadeExample from "./home-component/home-carousel/carousel-example";
import HeroInfo from "./home-component/home-carousel/hero-info";
import AboutInfo from "../about/about-component/about-info";
import MenuListSilder from "./home-component/menu-list-silder";
import LcoListLayout from "../components/icon-list-layout/icon-list-layout";
import SectionHeadring from "../components/seciton-headring/section-headring";
import CategoriesFeaturesList from "../components/categories-features/categories-features";
import GoogleLogin from "../firebase/GoogleLogin";
import FacebookLoginButton from "../firebase/facebookLogin";

const HomeIndex = () => {
  return (
    <>
      <section
        className="bx-list-carousel-banner bx-hero-page-section"
        id="hero-page-section"
      >
        <Container>
          <Row>
            <Col xs={5} sm={5} md={7} lg={7} xxl={7}>
              <HeroInfo />
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} xxl={5} className="pe-0 p-xxl-0">
              <CarouselFadeExample />
            </Col>
          </Row>
        </Container>
      </section>
      {/* --About-- */}
      <section
        className="bx-about-section overflow-hidden"
        id="about-page-section"
      >
        <Container>
          <AboutInfo
            PathUrl={"/about-us"}
            ButtonName={"About Us"}
            ClassBtn={"bx-btn-2"}
          />
        </Container>
      </section>
      {/* --About End-- */}

      {/* --Manu-- */}

      <section
        className="bx-menu-silder-section overflow-hidden mb-5"
        id="menu-silder-section"
      >
        <Container>
          <LcoListLayout Icon={<MdOutlineMenuBook />} IconText="Our Menu" />


          <MenuListSilder Max_Length={48} />
        </Container>
      </section>

      {/* --Manu2-- */}

{/* --Manu-- */}

      <section
        className="bx-categories-features-section overflow-hidden mb-5"
        id="category-menu-section"
      >
        <Container>
          <LcoListLayout Icon={<MdRestaurantMenu  />} IconText="Our Categories"  />

<SectionHeadring SectionHeadring="Categories Features" HeadringClass="bx-wave2"  />
          
          <CategoriesFeaturesList />
        </Container>
      </section>

      {/* --Manu2-- */}
{/* <GoogleLogin />
<FacebookLoginButton /> */}

    </>
  );
};

export default HomeIndex;
