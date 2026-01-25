import { Row, Col, Image } from "react-bootstrap";
import { BsBookmarksFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import { Fancybox } from "@fancyapps/ui";

import BookingTableForm from "../../components/from/booking-table-form/booking-table-from";
import LcoListLayout from "../../components/icon-list-layout/icon-list-layout";
import SectionHeadrTitel from "../../components/seciton-headring/section-headring";
import { Link } from "react-router-dom";

const OnlineReserve = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
          <div className="bx-booking-table-form">
            <LcoListLayout
              Icon={<BsBookmarksFill />}
              IconText="Online reservation"
            />

            <SectionHeadrTitel
              SectionHeadr="Book A Table"
              HeadringClass="bx-wave2"
              SectionInfo={
                <>
                  Booking request{" "}
                  <Link href="tel:+88-123-123456">+88-123-123456</Link> or fill
                  out the order form
                </>
              }
            />
            <BookingTableForm />
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xxl={6} className="pe-0 p-xxl-0">
          <div className="bx-video-content">
            <div className="bx-graphic-layer">
              <Image
                src={process.env.PUBLIC_URL + "/images/seafood.jpg"}
                alt="about"
              />
            </div>
            <div className="bx-content-box">
              <div className="video-image">
                <Image
                  src={process.env.PUBLIC_URL + "/images/split-sec-img.jpg"}
                  alt="image"
                />
                <div className="bx-play-btn">
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      Fancybox.show([
                        {
                          src: "https://www.youtube.com/embed/PUdyuKaGQd4?si=BzjoH1VK42XyRMPM",
                          type: "iframe",
                        },
                      ]);
                    }}
                    className="bx-lightbox-image"
                  >
                    <FaPlay />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OnlineReserve;
