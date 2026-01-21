import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { fetchTestimonial } from "../../redux-store/store-redux-componets/testimonialListStort";

const TestissIdIndex = () => {
  const { testissId } = useParams();
  const dispatch = useDispatch();

  const { testimonialDataList, loading } = useSelector(
    (state) => state.TestimonialReducermenu
  );

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const testisDetails = testimonialDataList.find(
    (item) => String(item.id) === String(testissId)
  );

  useEffect(() => {
    if (testisDetails?.title) {
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
      <PageTitleArea PageName={lowerCasetestis.title} />
      <div>TestissIdIndex : {testissId}</div>
    </>
  );
};

export default TestissIdIndex;
