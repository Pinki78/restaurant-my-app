import { Image, ListGroup,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const TeamItems = (props) => {
  const { Max_Length, listtems, animationClass , index } = props;
  const getUrl = (id) => `/team/${id}`;
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className= {`bx-team-item animate__animated  ${animationClass || ""}`}  id={listtems.id}
       style={{ animationDelay: `${index * 0.2}s`, animationDuration: "1s" }}
      >

        <div class="bx-bolle"> </div>

        <div className="bx-cord-body">

            <div className="bx-team-image position-relative">
                <Link to={getUrl(listtems.id)} data-cursor-text="View" onClick={scrollToTop}>
                <figure className="bx-image-anime">
                    <Image
                    src={listtems.teamImage}
                    alt={listtems.title || "carousel-image"}
                    />
                </figure>
                </Link>

                <div className="bx-team-social-icon">
                <ListGroup as="ul" className=" align-items-center">
                    <ListGroup.Item as="li">
                    <Link to={listtems.facebook || "#"} className="bx-social-icon  bx-btn-prim ">
                        <FaFacebookF />
                    </Link>
                    <Link to={listtems.twitter || "#"} className="bx-social-icon bx-btn-prim ">
                        <FaTwitter />
                    </Link>
                    <Link to={listtems.instagram || "#"} className="bx-social-icon bx-btn-prim ">
                        <FaInstagram />
                    </Link>
                    </ListGroup.Item>
                </ListGroup>
                </div>
            </div>

            <div className="bx-team-content">
                <h3>
                <Link to={getUrl(listtems.id)} onClick={scrollToTop}>{listtems.title}</Link>
                </h3>
                <h6>
                {listtems.caption}
                </h6>

                <p>
            {(listtems.info || "").length > Max_Length
              ? `${listtems.info.substring(0, Max_Length)}...`
              : listtems.info}
          </p>
            </div>

        </div>

      </div>
    </>
  );
};

export default TeamItems;
