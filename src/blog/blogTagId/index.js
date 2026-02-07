import { Container , Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BlogTagList from "./blog-tag-list";
import { fetchBlog } from "../../redux-store/store-redux-componets/blogListStort";


const BlogTagIndex = () => {


const { blogTagId } = useParams();
  const blogSlugTag = blogTagId.toLowerCase() ;

  const dispatch = useDispatch();
  const { blogDataList, loading } = useSelector(
    (state) => state.BlogsReducermenu
  );

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const slugify = (Tagname = "") =>
    Tagname
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  if (loading) return <div>Loading...</div>;

  const blogsInTag = blogDataList.filter((blog) =>
    blog.Blogtags.some(
      (tags) => slugify(tags.nametag) === blogSlugTag
    )
  );

  if (blogsInTag.length === 0)
    return <div>No blogs found in this Tag</div>;






  return (
    <>
     <PageTitleArea PageName={blogSlugTag.replace(/-/g, " ")} />
     <Container>
        <Row as="ul">
        {blogsInTag.map((blog) => (
            
                <BlogTagList MAX_LENGTH={50} blogItem={blog} />
            
        
        ))}
        </Row>
      </Container>
    </>
  )
}

export default BlogTagIndex