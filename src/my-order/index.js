import PageTitleArea from "../components/page-title-area/page-title-area";
import MyOrderList from "./my-order-list";
import { Container } from "react-bootstrap";

const MyOrderIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-my-order-page">
        <Container>
          <MyOrderList />
        </Container>
      </section>
    </>
  );
};

export default MyOrderIndex;
