import { Container, Row, Col } from "react-bootstrap";
import {
  MdOutlineMenuBook,
  MdRestaurantMenu,
  MdOutlineFeedback,
} from "react-icons/md";
import { GrGallery } from "react-icons/gr";

import CarouselFadeExample from "./home-component/home-carousel/carousel-example";
import HeroInfo from "./home-component/home-carousel/hero-info";
import AboutInfo from "../about/about-component/about-info";
import MenuListSilder from "./home-component/menu-list-silder";
import LcoListLayout from "../components/icon-list-layout/icon-list-layout";
import SectionHeadring from "../components/seciton-headring/section-headring";
import CategoriesFeaturesList from "../components/categories-features/categories-features";

import SpecialOffer from "../components/special-offer/special-offer";
import OnlineReserve from "./home-component/online-reserve";
import GalleryWrapper from "../gallery/gallery-comp/gallery-wrapper";
import ReviewSilder from "./home-component/review-silder";
import { ButtonLink } from "../components/button-box/button-link";
import TestimoniaSilder from "./home-component/home-carousel/testimonia-silder";

// import GoogleLogin from "../firebase/GoogleLogin";
// import FacebookLoginButton from "../firebase/facebookLogin";
import { FaMicroblog } from "react-icons/fa6";
import BlogWrapper from "../blog/blog-component/blog-wrapper";
const HomeIndex = () => {
  return (
    <>
      <section
        className="bx-list-carousel-banner bx-hero-page-section"
        id="hero-page-section"
      >
        <Container>
          <Row>
            <Col
              xs={5}
              sm={5}
              md={7}
              lg={7}
              xxl={7}
              className="align-content-center"
            >
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
          <LcoListLayout
            Icon={<MdRestaurantMenu />}
            IconText="Our Categories"
          />

          <SectionHeadring
            SectionHeadring="Categories Features"
            HeadringClass="bx-wave2"
          />

          <CategoriesFeaturesList />
        </Container>
      </section>

      {/* --Manu2-- */}
      {/* --special-offer-- */}

      <section
        className="bx-special-offer-section overflow-hidden mb-5"
        id="special-offer-section"
      >
        <Container>
          <SpecialOffer limit="1" Max_Length={100} />
        </Container>
      </section>

      {/* --special-offer-- */}
      {/* --reserve-- */}

      <section
        className="bx-reserve-section overflow-hidden mb-5"
        id="reserve-section"
      >
        <Container fluid className="pe-xxl-0  pe-1 ">
          <OnlineReserve />
        </Container>
      </section>

      {/* --reserve-- */}

      {/* --gallery-- */}

      <section
        className="bx-gallery-section overflow-hidden mb-5"
        id="gallery-section"
      >
        <Container>
          <LcoListLayout Icon={<GrGallery />} IconText="Our Gallery" />

          <SectionHeadring
            SectionHeadring="A Glimpse Into Our Kitchen Craft."
            HeadringClass="bx-wave2"
          />
          <GalleryWrapper
            limit="6"
            col={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4, xxl: 4 }}
          />
        </Container>
      </section>

      {/* --gallery-- */}

      {/* --testimonials-- */}

      <section
        className="bx-testimonials-section overflow-hidden mb-5"
        id="testimonials-section"
      >
        <Container>
          <div className="bx-headring-button">
            <div className="bx-headring-our">
              <LcoListLayout
                Icon={<MdOutlineFeedback />}
                IconText="Our Reviews"
              />

              <SectionHeadring
                SectionHeadring="Happy Testimonials"
                HeadringClass="bx-wave3"
              />
            </div>
            <ButtonLink
              PathUrl={"/testimonial"}
              ButtonName={"View All"}
              ClassBtn={"bx-btn-2"}
            />
          </div>
        </Container>
        {/* <ReviewSilder 
            limit="6" Max_Length={100} 
          /> */}
        <TestimoniaSilder
          MAX_LENGTH={100}
          col={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }}
        />
      </section>

      {/* --testimonials-- */}

      {/* --blog-- */}

      <section
        className="bx-blog-section overflow-hidden mb-5"
        id="blog-section"
      >
        <Container>
          <div className="bx-headring-button">
            <div className="bx-headring-our">
              <LcoListLayout Icon={<FaMicroblog />} IconText="Our Blogs" />

              <SectionHeadring
                SectionHeadring="Delicious Stories From Our Culinary World."
                HeadringClass="bx-wave2"
              />
            </div>
            <ButtonLink
              PathUrl={"/blog"}
              ButtonName={"View All"}
              ClassBtn={"bx-btn-2"}
            />
          </div>
          <BlogWrapper limit="3" MAX_LENGTH={100} />
        </Container>
        
      </section>

      {/* --blog-- */}

      {/* <TimePickerPopup /> */}
    </>
  );
};

export default HomeIndex;
