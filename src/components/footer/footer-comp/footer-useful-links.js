import { ListGroup } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";


import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const FooterUsefulLinks = (props) => {
 const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (e, path) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <>
      <div className="bx-footer-useful-link">
        <div className="bx-footer-titel">
          <h3>Useful Links</h3>
        </div>

        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <Link to={`/about-us`} onClick={(e) => handleFooterClick(e, "/about-us")}> <MdKeyboardDoubleArrowRight /> <span>About Us</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/contact`}  onClick={(e) => handleFooterClick(e, "/contact")}> <MdKeyboardDoubleArrowRight /> <span>contact</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/blog`} onClick={(e) => handleFooterClick(e, "/blog")}> <MdKeyboardDoubleArrowRight /> <span>Blog</span></Link>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link to={`/testimonials`}  onClick={(e) => handleFooterClick(e, "/testimonials")}> <MdKeyboardDoubleArrowRight /> <span>Testimonial</span></Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default FooterUsefulLinks;
