import PageTitleArea from "../components/page-title-area/page-title-area";
import { Container } from "react-bootstrap";
import CategoryWrapper from "./category-wrapper";

const CategoryIndex = ({PageName}) => {


  return (
    <>
    <PageTitleArea PageName={PageName} />

      <section className="bx-category-main-section">
        <Container>
          <CategoryWrapper />
        </Container>
      </section>
    </>
  )
}

export default CategoryIndex