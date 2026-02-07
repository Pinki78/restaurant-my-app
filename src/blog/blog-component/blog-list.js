import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ViewMoreLink from "../../components/button-box/view-more";

import { useScrollAnimation } from "../../assets/hooks/scroll-animation/scroll-animation";

/* 👉 ADD HERE */
// const formatDate = (date) =>
//   new Date(date).toLocaleDateString("en-US", {
//     month: "short",
//     day: "2-digit",
//     year: "numeric",
//   });

const BlogList = (props) => {
  // Hook returns ref and animation class
  const [ref, animationClass] = useScrollAnimation(
    props.animationClass || "animate__fadeInUp",
  );

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const { blogItem, productMenuCLass, MAX_LENGTH, col, index } = props;
  const MAX_LENGTH_TITLE = 20;

  const getUrl = (id) => `/blog/${`${slugify(blogItem.title)}`}`;

  return (
    <>
      <Col
        xs={col.xs ?? 6}
        sm={col.sm ?? 6}
        md={col.md ?? 4}
        lg={col.lg ?? 4}
        xl={col.xl ?? 4}
        xxl={col.xxl ?? 4}
        key={blogItem.id}
        as="li"
        ref={ref}
        className=" list-unstyled"
      >
        <div
          className={`bx-post-blogImage ${animationClass}`}
          style={{ animationDelay: `${index * 0.2}s`, animationDuration: "1s" }}
          id={blogItem.id}
        >
          <div className="bx-post-card">
            <div className="bx-post-img">
              <Link to={getUrl(blogItem.id)} onClick={scrollToTop}>
                <Image
                  src={blogItem.blogImage}
                  alt={blogItem.title}
                  style={{ objectFit: "cover" }}
                />
              </Link>

              <span className="bx-meta-date">
                <span className="bx-meta-date-text">
                  {formatDate(blogItem.montheData)}
                </span>
              </span>
            </div>

            <div className="bx-post-body">
              <div className="post-meta-list">
                <div className="bx-post-caption-rating-date">
                  <span className="bx-caption">{blogItem.caption}</span>
                  <span className="bx-line">|</span>
                  <span className="bx-rating-icon">
                    Rating: {blogItem.rating} <FaStar />
                  </span>
                </div>

                <h2 className="bx-entry-title">
                  <Link to={getUrl(blogItem.id)} onClick={scrollToTop}>
                    {blogItem.title.length > MAX_LENGTH_TITLE
                      ? `${blogItem.title.substring(0, MAX_LENGTH_TITLE)}...`
                      : blogItem.title}
                    {/* {blogItem.title} */}
                  </Link>
                </h2>

                <p>
                  {blogItem.info.length > MAX_LENGTH
                    ? `${blogItem.info.substring(0, MAX_LENGTH)}.`
                    : blogItem.info}
                </p>

                <div className="btn-wraper">
                  <ViewMoreLink
                    PathUrl={`/blog/${blogItem.id}`}
                    ViewName=" Learn more"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default BlogList;
