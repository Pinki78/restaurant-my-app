import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area"
import Menuwrapper from "./menu-componebts/menu-wrapper"



const MenusIndex = ({PageName}) => {



  return (
    <>
     <PageTitleArea PageName={PageName} />
     <section>
      <Container>
        <Menuwrapper
        Max_Length={48}
        
        />
      </Container>
     </section>
    </>
  )
}

export default MenusIndex