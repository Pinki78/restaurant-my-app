import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";

import ForgotPasswordForm from "./forgot-password-form";

// forgotPasswordReducer
const ForgotPasswordIndex = ({PageName}) => {

  return (
    <>
    <PageTitleArea PageName={PageName} />

      <section className="bx-forgot-password-section">
        <Container>
            <ForgotPasswordForm />
        </Container>
      </section>
    </>
  )
}



export default ForgotPasswordIndex