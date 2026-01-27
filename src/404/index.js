import PageTitleArea from "../components/page-title-area/page-title-area"
import { Link } from "react-router-dom";
import {  Container, Row, Col, Image} from "react-bootstrap";
import { ButtonLink } from "../components/button-box/button-link";


const Index404 = ({ PageName }) => {
  return (
    <>
    <PageTitleArea PageName={PageName} />
    <section className="bx-404-main mb-5">
      <Container>
          <Row>

            <Col xxl={12}>
                <div className="bx-404 mb-5">
                  <Image
                  src="/images/404-error-img.png"
                  alt="404"
                  fluid
                />
                  <h2>Oops! page not found</h2>
                  <h6>The page you are looking for does not exist.</h6>
                  <ButtonLink
                  PathUrl='/'
                  ClassBtn='bx-btn-2'
                  ButtonName='Back To Homepage'
                  />
                </div>
            </Col>
           
          </Row>
        </Container>



<Container>
         
        </Container>
    </section>
    </>
  )
}

export default Index404