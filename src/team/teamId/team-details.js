import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { useScrollAnimation } from "../../assets/hooks/scroll-animation/scroll-animation";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const TeamDetails = (props) => {
  const { items } = props;

  const [ref, animationClass] = useScrollAnimation(
    props.animationClass || "animate__fadeInUp",
  );

  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  return (
    <>
      <div
        className={`bx-team-details animate__animated  ${animationClass || ""}`}
        id={items.id}
        style={{
          animationDelay: `${items.id * 0.2}s`,
          animationDuration: "1s",
        }}
      >
        <div class="bx-bolle"> </div>

        <div className="bx-cord-body">
          <Row>
            <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <div className="bx-team-image position-relative">
                <figure className="bx-image-anime">
                  <Image
                    src={items.teamImage}
                    alt={items.title || "carousel-image"}
                  />
                </figure>
              </div>
            </Col>
            <Col xs={6} sm={6} md={8} lg={8} xl={8} xxl={8}>
              <div className="bx-team-content">
                <div className="bx-team-social-icon">
                  <ListGroup as="ul" className=" mb-3">
                    <ListGroup.Item as="li">
                      <Link
                        to={items.facebook || "#"}
                        className="bx-social-icon  bx-btn-prim me-2 p-2"
                      >
                        <FaFacebookF className=" z-2 position-relative" />
                      </Link>
                      <Link
                        to={items.twitter || "#"}
                        className="bx-social-icon bx-btn-prim me-2 p-2"
                      >
                        <FaTwitter className=" z-2 position-relative" />
                      </Link>
                      <Link
                        to={items.instagram || "#"}
                        className="bx-social-icon bx-btn-prim  p-2"
                      >
                        <FaInstagram className=" z-2 position-relative" />
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <h3>{items.title}</h3>
                <h6>{items.caption}</h6>

                <p>{items.info}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
