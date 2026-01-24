import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { BreadcrumbsTitles } = props;
  const location = useLocation();
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean);

  const MAX_LENGTH = 20;

  return (
    <nav aria-label="breadcrumb" className="bx-breadcrumbs py-3">
      <ol className="breadcrumb justify-content-left mb-0">
        <li className="breadcrumb-item">
          <Link to="/" onClick={scrollToTop}>Home</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const path =
            "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          const title =
            BreadcrumbsTitles?.[path] ||
            segment.replace(/-/g, " ");

          return (
            <li
              key={path}
              className={`breadcrumb-item ${
                isLast ? "active fw-bold" : ""
              }`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                title.length > MAX_LENGTH
                  ? `${title.substring(0, MAX_LENGTH)}...`
                  : title
              ) : (
                <Link to={path} onClick={scrollToTop}>{title}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
