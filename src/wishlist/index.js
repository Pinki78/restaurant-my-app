import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";
import WishlistItms from "./wishlist-component/wishlist-itms";


const WishlistIndex = ({ PageName }) => {
  return (
    <>
     <PageTitleArea PageName={PageName} />

     <section className="bx-wishlist-section-root">
      <Container>
        <WishlistItms />
      </Container>
     </section>
    
    </>
  )
}

export default WishlistIndex