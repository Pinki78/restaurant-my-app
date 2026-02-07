import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import OtpForm from "./otp-form";

const OtpIndex = ({PageName}) => {
  return (
    <>
     <PageTitleArea PageName={PageName} />

      <section className="bx-forgot-password-section">
        <Container>
            <OtpForm />
        </Container>
      </section>
    
    </>
  )
}

export default OtpIndex