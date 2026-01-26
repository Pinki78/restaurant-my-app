import { ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
const FooterContactInfo = () => {
  return (
    <>
      <div className="bx-footer-contact-info bx-contact-li-info">
        <div className="bx-footer-titel">
          <h3>Contact Info</h3>
        </div>

        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <div className="bx-icon-box-wrapper">
              <span className="bx-icon">
                <BiPhoneCall />
              </span>

              <div className="bx-icon-box-content">
                <h3 className="bx-icon-box-title">
                  <span>Phone </span>
                </h3>

                <p className="bx-icon-box-description">+880 12345 6789 </p>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item as="li">
            <div className="bx-icon-box-wrapper">
              <span className="bx-icon">
                <AiOutlineMail />
              </span>

              <div className="bx-icon-box-content">
                <h3 className="bx-icon-box-title">
                  <span>Email</span>
                </h3>

                <p className="bx-icon-box-description">pinkipaul@gmail.com</p>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item as="li">
            <div className="bx-icon-box-wrapper">
              <span className="bx-icon">
                <SlLocationPin />
              </span>

              <div className="bx-icon-box-content">
                <h3 className="bx-icon-box-title">
                  <span>Location</span>
                </h3>

                <p className="bx-icon-box-description">India </p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default FooterContactInfo;
