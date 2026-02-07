import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { fetchTestimonial } from "../../redux-store/store-redux-componets/testimonialListStort";
import TestissDetails from "./testiss-details";
import { Container } from "react-bootstrap";

const TestissIdIndex = () => {
  const { testissId } = useParams();
    const testissSlug = testissId.toLowerCase();
  const dispatch = useDispatch();

  
  const slugify = (title = "") =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const { testimonialDataList, loading } = useSelector(
    (state) => state.TestimonialReducermenu
  );

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const testisDetails = testimonialDataList.find(
    (item) => slugify(item.title) === testissSlug,
  );

  useEffect(() => {
    if (testisDetails.title) {
      document.title = testisDetails.title;
    }
  }, [testisDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!testisDetails) {
    return <>404</>;
  }

 const lowerCasetestis = testisDetails.id.toLowerCase();


  return (
    <>
      <PageTitleArea PageName={testisDetails.title} />
      <section className="bx-section-testiss-details">
      <Container >
        <TestissDetails  items={testisDetails} />
      </Container >
      </section>
    </>
  );
};

export default TestissIdIndex;
