import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { limit, Max_Length, listMenu } = props;

  return (
    <>
      <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={3} key={listMenu.id} as="li">
        <div className="bx-product-menu-wrap  wow fadeInUp  animated">
          <div className="bx-img">
            <Link>
              <Image
                className="d-block w-100 "
                src={listMenu.foodImage}
                alt={listMenu.title || "carousel-image"}
                width="67%"
                height="auto"
              />
            </Link>
          </div>

          <div className="bx-desc">

            <h3>
              <Link>
                {listMenu.title}
              </Link>
            </h3>

            <p>
              <em>
                {listMenu.info.lenght > Max_Length
                  ? `${listMenu.info.substring(0, Max_Length)}...`
                  : listMenu.info}
              </em>
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MenuItems;
