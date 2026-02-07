import PageTitleArea from "../components/page-title-area/page-title-area";
import CheckoutForm from "./chechout-component/checkout-form";
import { Container } from "react-bootstrap";

const CheckoutIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section  className="bx-checkout-page">
        <Container>
          <CheckoutForm />
        </Container>
      </section>
    </>
  );
};

export default CheckoutIndex;
