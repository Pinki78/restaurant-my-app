import { Container} from "react-bootstrap";

import ServiceList from "./service-component/list-service"

const ServiceIndex = () => {
  return (
    <>

      <section className="bx-service-root">
        <Container>
          <ServiceList />
        </Container>
      </section>
    
    </>
  )
}

export default ServiceIndex