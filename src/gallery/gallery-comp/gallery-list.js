import { Row, Col, Image , Button} from "react-bootstrap";
import { Fancybox } from "@fancyapps/ui";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GalleryList = (props) => {
  const { items, productMenuCLass ,  col ,} = props;

useEffect(() => {
  Fancybox.bind("[data-fancybox='gallery']", {
    mainClass: "bx-fancybox",   // ✅ ADD CLASS HERE
    Thumbs: false,
    Toolbar: false,
    Carousel: {
      Navigation: true,
    },
  });
 

  return () => {
    Fancybox.destroy();
  };
}, []);

  return (
    <>
      <Col 
      
      xs={col.xs ?? 6}
            sm={col.sm ?? 6}
            md={col.md ?? 4}
            lg={col.lg ?? 4}
            xl={col.xl ?? 4}
            xxl={col.xxl ?? 4}

      key={items.id}>
        <div
          className={`bx-gallery-elementor wow fadeInUp  animated ${productMenuCLass || ""}`}
          id={items.id}
        >
          <div className="bx-images">
            <Button
            as='a'
              href={items.foodImage}
              data-fancybox="gallery"
              data-caption={items.title}
//               onClick={(e) => {
//   e.preventDefault();

//   Fancybox.show(
//     [
//       { src: items.foodImage, type: "image" },
//     ],
//     {
//       Thumbs: false,
//       Toolbar: true,
//       Carousel: {
//         Navigation: true, // ✅ THIS enables arrows
//       },
//     }
//   );
// }}
            >
              <Image
                className="d-block w-100 "
                src={items.foodImage}
                alt={items.title || "carousel-image"}
                width="67%"
                height="auto"
              />
              <Image
                className="d-block w-100 bx-img2 bx-none-imag"
                src={items.foodImage}
                alt={items.title || "carousel-image"}
                width="67%"
                height="auto"
              />
            </Button>
          </div>

          <div className="bx-pro-text">
            <h3>
              <Link href={`#`}>{items.title}</Link>
            </h3>
          </div>
        </div>
      </Col>
    </>
  );
};

export default GalleryList;
