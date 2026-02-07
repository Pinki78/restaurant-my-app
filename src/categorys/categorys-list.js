import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategorysList = (props) => {
  const { cat, fooditem } = props;
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <>
      <div className="bx-product-menu-wrap wow fadeInUp animated">
        <div className="bx-thumbnail-top">
          <div className="bx-images">
            <Link
              to={`/category/${cat.categoryName
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
                onClick={scrollToTop}
            >
              <Image
                className="d-block w-100 "
                src={fooditem?.foodImage}
                alt={cat.categoryName || "carousel-image"}
                width="67%"
                height="auto"
              />
              <Image
                src={fooditem?.foodImage}
                alt={cat.categoryName || "carousel-image"}
                className="d-block w-100 bx-img2"
                width="67%"
                height="auto"
              />
            </Link>
          </div>
        </div>

        <div className="bx-pro-text bx-desc-listcategoreis">
          <h3>
            <Link
              to={`/category/${cat.categoryName
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
                onClick={scrollToTop}
            >
              {cat.categoryName}
            </Link>
          </h3>
          <Link
            to={`/category/${cat.categoryName
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
              onClick={scrollToTop}
          >
            <span>View More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategorysList;
