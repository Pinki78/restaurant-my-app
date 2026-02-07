import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import RegistrationForm from "./registration-form";

const RegistrationIndex = ({PageName}) => {
  return (
    <>
     <PageTitleArea PageName={PageName} />

      <section className="bx-log-in-section">
        <Container>
            <RegistrationForm />
        </Container>
      </section>
    
    </>
  )
}

export default RegistrationIndex