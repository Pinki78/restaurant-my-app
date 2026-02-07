import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";

const MyAccountIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-my-account-page">
        <Container>
          
        </Container>
      </section>
    </>
  );
};

export default MyAccountIndex