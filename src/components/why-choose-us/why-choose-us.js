import { Row, Col, ListGroup, Image, Container } from "react-bootstrap";
import { MdFastfood } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { ButtonLink } from "../button-box/button-link";
import { Link } from "react-router-dom";
import LcoListLayout from "../icon-list-layout/icon-list-layout";
import { useLocation } from "react-router-dom";
import SectionHeadrTitel from "../seciton-headring/section-headring";


const WhyChooseUs = props => {
  return (
    <>

      <Container>

        <div className="bx-why-choose">
    
          <Row>

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="">
              <div className=" bx-image-wrapper wow fadeInRight  animated">
                <Image
                  src={"/images/story.png"}
                  alt="team"
                  className="w-100"

                />
                <div className="bx-bolle"> </div>
              </div>
            </Col>

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
                  Icon={<MdFastfood  />}
                  IconText="Why Choose Us"
                />

                <SectionHeadrTitel
                SectionHeadr="Why Our Restaurant Stands Above the Rest."
                SectionInfo=" Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
                  phasellus massa faucibus lectus in sapien ornare et leo egestas
                  blandit amet nunc pharetra vitae id mattis ac sed."
                />
                

                <div className="bx-listcheck-missvision ">
                    <div className="bx-list-info-check ">
                        <ListGroup as="ul" className="bx-group-list-items ">
                          <ListGroup.Item as="li" className="bx-icon-list-item ">
                            <span className="bx-icon-list-icon">
                              <IoCheckmarkDoneOutline />
                            </span>
                            <span className="bx-icon-list-text">
                              Skilled & Passionate Chefs
                            </span>
                          </ListGroup.Item>

                          <ListGroup.Item as="li" className="bx-icon-list-item">
                            <span className="bx-icon-list-icon">
                              <IoCheckmarkDoneOutline />
                            </span>
                            <span className="bx-icon-list-text">
                              Unique & Delicious Flavors
                            </span>
                          </ListGroup.Item>

                          <ListGroup.Item as="li" className="bx-icon-list-item">
                            <span className="bx-icon-list-icon">
                              <IoCheckmarkDoneOutline />
                            </span>
                            <span className="bx-icon-list-text">
                              Exceptional Customer Service

                            </span>
                          </ListGroup.Item>

                          <ListGroup.Item as="li" className="bx-icon-list-item">
                            <span className="bx-icon-list-icon">
                              <IoCheckmarkDoneOutline />
                            </span>
                            <span className="bx-icon-list-text">
                            Innovative & Seasonal Menus
                            </span>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="bx-icon-list-item">
                            <span className="bx-icon-list-icon">
                              <IoCheckmarkDoneOutline />
                            </span>
                            <span className="bx-icon-list-text">
                            Quick & Efficient Service
                            </span>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>

                      <div className="bx-call-us mt-3 d-xxl-flex d-block align-items-center">
                        
                        <ButtonLink
                          PathUrl={"/contact" }
                          ButtonName={"Contact"}
                          ClassBtn={"bx-btn-2"}
                        />


                      </div>
                </div>
              </div>
            </Col>

          
          </Row>
        
        </div>

      </Container>  

    </>
  )
}


export default WhyChooseUs