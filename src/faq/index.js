import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";
import FaqWrapper from "./faq-component/faq-wrapper";

const FaqIndex = ({ PageName }) => {
  return (
    <>
    <PageTitleArea PageName={PageName} />
    <section>
        <Container>
            <FaqWrapper />
        </Container>
    </section>
    </>
  )
}

export default FaqIndex