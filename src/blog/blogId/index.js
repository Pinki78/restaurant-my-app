import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BlogDetails from "./blog-details";
import { fetchBlog } from "../../redux-store/store-redux-componets/blogListStort";

const BlogsIndexId = () => {
  const { blogId } = useParams();
  const blogSlug = blogId.toLowerCase();

  const dispatch = useDispatch();
  const { blogDataList, loading } = useSelector(
    (state) => state.BlogsReducermenu,
  );

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const slugify = (title = "") =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  if (loading) return <div>Loading...</div>;
  
  const singleBlog = blogDataList.find(
    (item) => slugify(item.title) === blogSlug,
  );

  if (!singleBlog) return <div>Blog not found</div>;

  return (
    <>
      <PageTitleArea PageName={singleBlog.title} />
      <section className="bx-single-blog-root">
        <Container>
          <BlogDetails blogItem={singleBlog} blogSlug={blogSlug} slugify={slugify} />
        </Container>
      </section>
    </>
  );
};

export default BlogsIndexId;
