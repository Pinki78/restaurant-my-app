import LcoListLayout from "../../components/icon-list-layout/icon-list-layout";
import SectionHeadrTitel from "../../components/seciton-headring/section-headring";
import { MdOutlineContactMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Row , Col} from "react-bootstrap";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const ContactInfo = (props) => {
  return (
    <>
      <LcoListLayout
        IocnLayoutClass="bx-contact"
        Icon={<MdOutlineContactMail />}
        IconText="Contact Us"
      />

      <SectionHeadrTitel
        SectionHeadr="Reserve Your Spot Today with a Simple Call."
        SectionInfo=" Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
              phasellus massa faucibus lectus in sapien ornare et leo egestas
              blandit amet nunc pharetra vitae id mattis ac sed."
      />
      <div className="bx-contact-info">
        <Row as="ul" className="bx-icon-list-items">
          <Col lg={6} xl={6} xxl={6}  as="li" className="bx-icon-list-item">
            <div className="bx-call bx-icon-box-wrapper ">
              <Link to="tel:+91123456790" aria-label="Call us">
                <span className="bx-icon">
                  <BiPhoneCall />
                </span>
                <h5>
                  Phone
                  <span>+91 123456790</span>
                </h5>
              </Link>
            </div>
          </Col>

          <Col lg={6} xl={6} xxl={6} as="li" className="bx-icon-list-item">
            <div className="bx-email bx-icon-box-wrapper ">
              <Link to="mailto:pinkipaul@gmail.com" aria-label="Email">
                <span className="bx-icon">
                  <AiOutlineMail />
                </span>
                <h5>
                  Email
                  <span>pinkipaul@gmail.com</span>
                </h5>
              </Link>
            </div>
          </Col>

          <Col lg={6} xl={6} xxl={6} as="li" className="bx-icon-list-item">
            <div className="bx-location bx-icon-box-wrapper ">
              <Link to="#" aria-label="location">
                <span className="bx-icon">
                  <SlLocationPin />
                </span>
                <h5>
                  Location
                  <span>India</span>
                </h5>
              </Link>
            </div>
          </Col>

          <Col lg={6} xl={6} xxl={6} as="li" className="bx-icon-list-item">
            <div className="bx-website bx-icon-box-wrapper">
              <Link to="#" aria-label="Website">
                <span className="bx-icon">
                  <TbWorld />
                </span>
                <h5>
                  Website
                  <span>www.info.com</span>
                </h5>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactInfo;
