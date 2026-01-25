import { Row, Col, ListGroup, Image, Container } from "react-bootstrap";
import { MdFastfood } from "react-icons/md";
import { ButtonLink } from "../../components/button-box/button-link";
import LcoListLayout from "../../components/icon-list-layout/icon-list-layout";
import SectionHeadrTitel from "../../components/seciton-headring/section-headring";
import FaqWrapper from '../../faq/faq-component/faq-wrapper'
import { FaQuoteLeft } from "react-icons/fa";
const AboutFaq = props => {
  return (
    <>



      <Container>

        <div className="bx-why-choose">
    
          <Row>

              

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="align-self-center"
            >
              <div className="bx-info-wrapper wow fadeInLeft  animated">
                <LcoListLayout
                  Icon={<FaQuoteLeft  />}
                  IconText="FAQs"
                />

                <SectionHeadrTitel
                SectionHeadr="Your Dining Questions Answered Here Efficiently."
                SectionInfo=" Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
                  phasellus massa faucibus lectus in sapien ornare et leo egestas
                  blandit amet nunc pharetra vitae id mattis ac sed."
                />
                

                <div className="bx-listcheck-missvision d-block">
                     <FaqWrapper  limit={4}/>

                      <div className="bx-call-us mt-3 d-xxl-flex d-block align-items-center">
                        
                        <ButtonLink
                          PathUrl={"/faq" }
                          ButtonName={"View All"}
                          ClassBtn={"bx-btn-2"}
                        />


                      </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="">
              <div className=" bx-image-wrapper wow fadeInRight  animated">
                <Image
                  src={"/images/booking_img.webp"}
                  alt="team"
                  className="w-100"

                />
                <div className="bx-bolle"> </div>
              </div>
            </Col>

          
          </Row>
        
        </div>

      </Container>  
    
    
    </>
  )
}



export default AboutFaq