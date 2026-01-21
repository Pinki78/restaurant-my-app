import { Container } from "react-bootstrap";

import PageTitleArea from "../components/page-title-area/page-title-area";
import BlogWrapper from "./blog-component/blog-wrapper";


const BlogsIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-blog-main-section">
        <Container>
          <BlogWrapper MAX_LENGTH={100} />
        </Container>
      </section>
    </>
  );
};

export default BlogsIndex;
