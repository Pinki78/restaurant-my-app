import { Carousel, Image } from "react-bootstrap";

import { CAROUSEL_LIST } from "../../../api-data/home-data/carousel-lists-data";

const CarouselFadeExample = () => {
  return (
    <>
      <div className="bx-carousel-root">
        <Carousel fade interval={4000}>
          {CAROUSEL_LIST.map((carousel) => (
            <Carousel.Item key={carousel.id}>
              <Image
                className="d-block w-100"
                src={carousel.imageName}
                alt={carousel.title || "carousel-image"}
                width="67%"
                height="auto"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselFadeExample;
