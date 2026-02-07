import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import CartTableList from "./cart-component/cart-table-list";

const CartIndex = (props) => {
  const { PageName } = props;
  return (
    <>
      <PageTitleArea PageName={PageName} />

      <section className="bx-cart-main-section">
        <Container>
          <CartTableList />
        </Container>
      </section>
    </>
  );
};

export default CartIndex;
