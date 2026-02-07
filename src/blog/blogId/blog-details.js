import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// Default social icons mapping
const DEFAULT_SOCIAL_ICONS = {
  Facebook: <RiFacebookFill />,
  Instagram: <RiInstagramLine />,
  Linkedin: <TiSocialLinkedin />,
  Twitter: <FaTwitter />,
};

const BlogDetails = ({ blogItem, slugify }) => {
  if (!blogItem) return <p>Blog data not available</p>;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const getUrl = (id) => `/blog/${`${slugify(blogItem.title)}`}`;

  const {
    blogImage,
    title,
    info,
    rating,
    caption,
    BlogCategory = [],
    Blogtags = [],
    BlogSocial = [],
    montheData,
  } = blogItem;

  // Format the date safely
  const formattedDate = montheData
    ? new Date(montheData).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : "Date not available";

  return (
    <Row className="gx-4 gy-4">
      <Col xs={12} md={12}>
        <div className="bx-blog-details-items" id={blogItem.id}>
          <h4 className="bx-publish-date">{formattedDate}</h4>

          <div className="bx-selected-detail">
            {/* Blog image */}
            {blogImage && (
              <img
                src={blogImage}
                alt={title}
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%" }}
              />
            )}

            <div className="bx-items-center mt-3">
              <h3 className="bx-item-title1">{title}</h3>

              {/* Caption and rating */}
              <div className="bx-post-caption-rating-date mb-2">
                {caption && <span className="bx-caption">{caption}</span>}
                {caption && rating && <span className="bx-line mx-2">|</span>}
                {rating && (
                  <span className="bx-rating-icon">
                    Rating: {rating}{" "}
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < rating ? "#FFD700" : "#ccc"} />
                    ))}
                  </span>
                )}
              </div>

              {/* Blog content */}
              {info && <p>{info}</p>}

              {/* Social Links */}
              {BlogSocial.length > 0 && (
                <div className="bx-share mb-3">
                  <h6>Follow us:</h6>
                  <ul className="list-inline bx-ul-list">
                    {BlogSocial.map((social) => {
                      // Use IconBase if exists, otherwise map socialname
                      const icon = social.IconBase ||
                        DEFAULT_SOCIAL_ICONS[social.socialname] || (
                          <RiFacebookFill />
                        ); // fallback

                      return (
                        <li key={social.id} className="list-inline-item">
                          <Link
                            to={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {icon}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {Blogtags.length > 0 && (
                <div className="bx-tags">
                  <h6>Tags:</h6>
                  <ul className="list-inline">
                    {Blogtags.map((tag) => (
                      <li key={tag.id} className="list-inline-item me-2">
                        <Link
                          to={`/blog/tag/${slugify(tag.nametag)}`}
                          onClick={scrollToTop}
                        >
                          {tag.nametag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Categories */}
              {BlogCategory.length > 0 && (
                <div className="bx-categories mt-2">
                  <h6>Categories:</h6>
                  <ul className="list-inline">
                    {BlogCategory.map((cat) => (
                      <li key={cat.id} className="list-inline-item me-2">
                        <Link
                          to={`/blog/category/${slugify(cat.categoryname)}`}
                          onClick={scrollToTop}
                        >
                          {cat.categoryname}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogDetails;
