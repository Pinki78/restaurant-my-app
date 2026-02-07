import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import LoginForm from "./login-component/login-form";

const LoginIndex = ({PageName}) => {
  return (
    <>
     <PageTitleArea PageName={PageName} />

      <section className="bx-log-in-section">
        <Container>
            <LoginForm />
        </Container>
      </section>
    </>
  )
}

export default LoginIndex