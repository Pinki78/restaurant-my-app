import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import ResetPasswordForm from "./reset-password";

const ResetPasswordIndex = ({PageName}) => {
  return (
      <>
     <PageTitleArea PageName={PageName} />

      <section className="bx-log-in-section">
        <Container>
            <ResetPasswordForm />
        </Container>
      </section>
    </>
  )
}

export default ResetPasswordIndex