import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PageTitleArea from "../../components/page-title-area/page-title-area";


const BlogsIndexId = () => {

    const { blogId } = useParams();

  if (!blogId) return <div>Loading...</div>; // optional fallback

  const lowerCaseBLog = blogId.toLowerCase();
  return (
   <>
        <PageTitleArea PageName={lowerCaseBLog} />
        {lowerCaseBLog}
   </>
  )
}



export default BlogsIndexId