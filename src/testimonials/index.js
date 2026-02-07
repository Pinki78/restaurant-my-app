import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";
import TestimonialWroapper from "./testimonial-component/testimonial-wroapper";



const TestimonialsIndex = ({PageName}) => {



  return (
    <>
     <PageTitleArea PageName={PageName} />
     <section>
      <Container>
        <TestimonialWroapper
        MAX_LENGTH={100}
        />
      </Container>
     </section>
    </>
  )
}

export default TestimonialsIndex