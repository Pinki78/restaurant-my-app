import { Container} from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";
import ServiceList from "./service-component/list-service"

const ServiceIndex = ({ PageName }) => {
  return (
    <>
  <PageTitleArea PageName={PageName} />
      <section className="bx-service-root">
        <Container>
          <ServiceList />
        </Container>
      </section>
    
    </>
  )
}

export default ServiceIndex