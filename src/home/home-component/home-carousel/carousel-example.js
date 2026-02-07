import { Carousel, Image } from "react-bootstrap";

import { CAROUSEL_LIST }   from "../../../api-data/home-data/carousel-lists-data";

const CarouselFadeExample = () => {
  return (
    <>
      <div className="bx-carousel-root">
        <Carousel fade interval={4000}>
          {CAROUSEL_LIST.map((carousel) => (
            <Carousel.Item key={carousel.id}>
              <div className="view">
                <Image
                className="d-block w-100 "
                src={carousel.imageName}
                alt={carousel.title || "carousel-image"}
                width="67%"
                height="auto"
              />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* <div className="" ></div> */}

      
    </>
  );
};

export default CarouselFadeExample;
