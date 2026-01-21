import { Link } from "react-router-dom";
import { ListGroup, } from "react-bootstrap";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const FooterFollow = props => {
  return (
    <>
      <div className="bx-footer-follow-info">
        <div className="bx-footer-titel">
          <h3>Contact Info</h3>
        </div>

        <ListGroup  as="ul"  className="ulclearfix bx-navbar-nav bx-socialr-nav ">
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    <FaFacebookF />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="# " target="_blank">
                    <FaTwitter />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    {" "}
                    <FaInstagramSquare />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Link href="#" target="_blank">
                    <FaYoutube />
                  </Link>
                </ListGroup.Item>
              </ListGroup  >
     </div>
    </>
  )
}



export default FooterFollow