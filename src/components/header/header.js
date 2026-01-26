

import TopHeader from "./header-component/top-header"
import MediumHeader from "./header-component/medium-header"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
const location = useLocation();
//     const [scrolledHeader, setScrolledHeader] = useState(false);
// useEffect(() => {
//   const handleScroll = () => {
//     setScrolledHeader(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   setScrolledHeader(window.scrollY > 50);

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   const [scrolled, setScrolled] = useState(false);
//  const isHome = location.pathname === "/";
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) { // adjust threshold
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
const isActive = true;
const isScrolled = false;

const headerClasses = [
  "default-class",
  isActive && "active-class",
  isScrolled && "scrolled-class",
].filter(Boolean);

  return (
    <>

      <header className={`bx-header ${headerClasses.join(" ")}`} >
          <TopHeader />
          <MediumHeader  />
          
      </header>
    
    </>
  )
}

export default Header