
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../../redux-store/store-redux-componets/blogListStort";
import BlogCategoryList from "./blog-category-list";

const BlogCategoryIndex = () => {
  const { blogCategoryId } = useParams();
  const blogSlugCategory = blogCategoryId.toLowerCase() ;

  const dispatch = useDispatch();
  const { blogDataList, loading } = useSelector(
    (state) => state.BlogsReducermenu
  );

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const slugify = (categoryname = "") =>
    categoryname
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  if (loading) return <div>Loading...</div>;

  const blogsInCategory = blogDataList.filter((blog) =>
    blog.BlogCategory.some(
      (cat) => slugify(cat.categoryname) === blogSlugCategory
    )
  );

  if (blogsInCategory.length === 0)
    return <div>No blogs found in this category</div>;

  return (
    <>
      <PageTitleArea PageName={blogSlugCategory.replace(/-/g, " ")} />
      <Container>
        <Row as="ul">
        {blogsInCategory.map((blog) => (
            
                <BlogCategoryList MAX_LENGTH={50} blogItem={blog} />
            
        //   <div key={blog.id} className="mb-4">
        //     <h3>{blog.title}</h3>
        //     <p>{blog.caption}</p>
        //     {blog.blogImage && (
        //       <img
        //         src={blog.blogImage}
        //         alt={blog.title}
        //         style={{
        //           width: "100%",
        //           borderRadius: "10px",
        //           objectFit: "cover",
        //         }}
        //       />
        //     )}
        //   </div>
        ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogCategoryIndex;
