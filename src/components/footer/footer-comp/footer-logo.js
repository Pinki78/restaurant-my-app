import {Image, } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterLogo = (props) => {
  return (
    <>
      <div className="bx-logo-footer">
        <Link to="/">
          <Image src="/images/logo-2.png" alt="logo" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </>
  );
};

export default FooterLogo;
