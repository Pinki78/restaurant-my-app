import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const FooterUsefulLinks = (props) => {
  return (
    <>
      <div className="bx-footer-useful-link">
        <div className="bx-footer-titel">
          <h3>Useful Links</h3>
        </div>

        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <Link to={`/about-us`}> <MdKeyboardDoubleArrowRight /> <span>About Us</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/contact`}> <MdKeyboardDoubleArrowRight /> <span>contact</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/blog`}> <MdKeyboardDoubleArrowRight /> <span>Blog</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/testimonials`}> <MdKeyboardDoubleArrowRight /> <span>Testimonial</span></Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default FooterUsefulLinks;
