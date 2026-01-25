import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchTestimonial } from "../../../redux-store/store-redux-componets/testimonialListStort";
import TestimonialList from "../../../testimonials/testimonial-comp/testimonial-list";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Container, Row } from "react-bootstrap";

const TestimoniaSilder = (props) => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 576, maxWidth: 991 });
  const { col = {}, limit, PaginationHide, MAX_LENGTH } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { testimonialDataList, loading } = useSelector(
    (state) => state.TestimonialReducermenu,
  );

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const DataDispaly = testimonialDataList;

  return (
    <>

      <div className="bx-swiper-testimonia">
        <Container>
          <Row as="ul" className="bx-ul">
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              loop
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-navigation-color": "#ff0000ff",
                "--swiper-pagination-color": "#ff0000ff",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {DataDispaly.map((items) => (
                <SwiperSlide key={items.id}>
                  <TestimonialList
                   items={items}
                    limit={limit}
                    MAX_LENGTH={MAX_LENGTH}
                    isMobileOrTablet={isMobileOrTablet}
                    col={col}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TestimoniaSilder;
