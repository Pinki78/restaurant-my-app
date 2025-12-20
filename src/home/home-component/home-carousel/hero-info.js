import { Link } from "react-router-dom";
import ServiceList from "../../../service/service-component/list-service";
const HeroInfo = () => {
  return (
    <>
      <div className="bx-hero-info-content">
        <h2
          className="hero-title wow fadeInLeft animated"
          data-wow-delay="00ms"
          data-wow-duration="1500ms"
          style={{ visibility: " visible" }}
        >
          THE FINEST QUALITY NATRULE FOOD.
        </h2>

        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Link to="/" className="bx-btn bx-btn-1">
          <span>See our Menus</span>
        </Link>
      </div>

      <div className="bx-info-service">
        <ServiceList limit={3}  Max_Length= {50} />
      </div>
    </>
  );
};

export default HeroInfo;
