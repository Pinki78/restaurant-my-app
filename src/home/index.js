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
import SectionHeadrTitel from "../components/seciton-headring/section-headring";
import CategoriesFeaturesList from "../components/categories-features/categories-features";

import SpecialOffer from "../components/special-offer/special-offer";
import OnlineReserve from "./home-component/online-reserve";
import GalleryWrapper from "../gallery/gallery-component/gallery-wrapper";

import TestimoniaSilder from "./home-component/home-carousel/testimonia-silder";

import { FaMicroblog } from "react-icons/fa6";
import BlogWrapper from "../blog/blog-component/blog-wrapper";
import HeadringButtonContainer from "../components/headring-button/headring-button";
import { useScrollAnimation } from "../assets/hooks/scroll-animation/scroll-animation";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ServiceList from "../service/service-component/list-service";
import { ButtonLink } from "../components/button-box/button-link";

const HomeIndex = (props) => {
  const [ref, animationClass] = useScrollAnimation(
    props.animationClass || "animate__fadeInUp",
  );

  const isXs = useMediaQuery({ maxWidth: 480 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });

  const MediaQuery = isXs ? 2 : isSm ? 2 : isMd ? 3 : isLg ? 4 : isXl ? 3 : 3;

  const ServiceactionsRef = useRef(null);
  const ServiceacttextRef = useRef(null);

  // Example: Do something when screen size changes
  // useEffect(() => {
  //   if (isXs) {
  //     ServiceactionsRef.current?.scrollIntoView({ behavior: "smooth" });
  //   } else if (isSm || isMd) {
  //     ServiceacttextRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [isXs, isSm, isMd]);

  useEffect(() => {
    if (isXs && ServiceactionsRef.current && ServiceacttextRef.current) {
      ServiceacttextRef.current.append(ServiceactionsRef.current); // or prepend
    }
  }, [isXs]);

  return (
    <>
      <section
        className="bx-list-carousel-banner bx-hero-page-section"
        id="hero-page-section"
      >
        <Container>
          <Row>
            <Col
              xs={12}
              sm={5}
              md={7}
              lg={7}
              xxl={7}
              className="align-content-center  bx-order-1"
            >
              {/* <div ref={ServiceactionsRef}>
                <HeroInfo  ServiceactionsRef={ServiceactionsRef} />
              </div> */}
              <HeroInfo
                ServiceactionsRef={ServiceactionsRef}
                limit={3}
                isXs={isXs}
              />
            </Col>

            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xxl={5}
              className="ps-0  pe-0 p-xxl-0 bx-order-2"
            >
              {/* <div ref={ServiceacttextRef}>
                <CarouselFadeExample ServiceacttextRef={ServiceacttextRef} />
              </div> */}
              <CarouselFadeExample />
            </Col>
          </Row>
        </Container>
      </section>
      {/* --About-- */}
      <section
        className="bx-about-section overflow-hidden bx-section-margine"
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

      {/* --service-- */}
      {isXs ? (
        <section
          className="bx-servicea-section overflow-hidden bx-section-margine"
          id="servicea-page-section"
        >
          <Container>
            {/* <div className="" ref={ServiceacttextRef} limit={4}></div> */}
            <ServiceList limit={4} Max_Length={50} />
            <ButtonLink
              PathUrl={"/service"}
              ButtonName={"view More"}
              ClassBtn={"bx-btn-1 "}
            />
          </Container>
        </section>
      ) : null}

      {/* --service End-- */}
      {/* --Manu-- */}

      <section
        className="bx-menu-silder-section overflow-hidden bx-section-margine "
        id="menu-silder-section"
      >
        <Container>
          <LcoListLayout Icon={<MdOutlineMenuBook />} IconText="Our Menu" />

          <MenuListSilder
            ref={ref}
            animationClass="animate__fadeInDown"
            Max_Length={48}
          />
        </Container>
      </section>

      {/* --Manu2-- */}

      {/* --Manu-- */}

      <section
        className="bx-categories-features-section overflow-hidden bx-section-margine animate__animated animate__fadeInUp"
        style={{ animationDelay: "0.3s", animationDuration: "2s" }}
        id="category-menu-section"
      >
        <Container>
          <LcoListLayout
            Icon={<MdRestaurantMenu />}
            IconText="Our Categories"
          />

          <SectionHeadrTitel
            SectionHeadr="Categories Features"
            HeadringClass="bx-wave2"
          />

          <CategoriesFeaturesList />
        </Container>
      </section>

      {/* --Manu2-- */}
      {/* --special-offer-- */}

      <section
        className="bx-special-offer-section overflow-hidden bx-section-margine"
        id="special-offer-section"
      >
        <Container>
          <SpecialOffer start={0} limit={1} Max_Length={100} />
        </Container>
      </section>

      {/* --special-offer-- */}
      {/* --reserve-- */}

      <section
        className="bx-reserve-section overflow-hidden bx-section-margine"
        id="reserve-section"
      >
        <Container fluid className="pe-xxl-0  pe-1 ps-0 ps-xxl-1">
          <OnlineReserve />
        </Container>
      </section>

      {/* --reserve-- */}

      {/* --gallery-- */}

      <section
        className="bx-gallery-section overflow-hidden bx-section-margine "
        id="gallery-section"
      >
        <Container>
          <LcoListLayout Icon={<GrGallery />} IconText="Our Gallery" />

          <SectionHeadrTitel
            SectionHeadr="A Glimpse Into Our Kitchen Craft."
            HeadringClass="bx-wave2"
          />
          <GalleryWrapper
            limit="6"
            col={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4, xxl: 4 }}
          />
        </Container>
      </section>

      {/* --gallery-- */}

      {/* --testimonials-- */}

      <section
        className="bx-testimonials-section overflow-hidden bx-section-margine"
        id="testimonials-section"
      >
        <Container>
          <HeadringButtonContainer
            IconText="Our Reviews"
            Icon={<MdOutlineFeedback />}
            SectionHeadr="Happy Testimonials"
            HeadringClass="bx-wave3"
            PathUrl={"/testimonial"}
            ButtonName={"View All"}
            ClassBtn={"bx-btn-2"}
          />
        </Container>

        {/* <ReviewSilder 
            limit="6" Max_Length={100} 
          /> */}
        <TestimoniaSilder
          MAX_LENGTH={100}
          col={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }}
          ref={ref}
          animationClass="animate__fadeInDown"
        />
      </section>

      {/* --testimonials-- */}

      {/* --blog-- */}

      <section
        className="bx-blog-section overflow-hidden bx-section-margine"
        id="blog-section"
      >
        <Container>
          <HeadringButtonContainer
            Icon={<FaMicroblog />}
            IconText="Our Blogs"
            PathUrl={"/blog"}
            ButtonName={"View All"}
            ClassBtn={"bx-btn-2"}
            SectionHeadr="Delicious Stories From Our Culinary World."
            HeadringClass="bx-wave2"
          />

          <BlogWrapper limit={MediaQuery} MAX_LENGTH={100} />
        </Container>
      </section>

      {/* --blog-- */}

      {/* <TimePickerPopup /> */}
    </>
  );
};

export default HomeIndex;
