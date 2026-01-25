import { Container, Row, Col } from "react-bootstrap";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiGreasyfork } from "react-icons/si";
import { MdFoodBank } from "react-icons/md";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import CounterNumber from "./counter-numder";

const CounterBox = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // 🔥 run only once
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bx-pq-counter" ref={sectionRef}>
        <Container>
          <Row>
            <Col xs={6}
                sm={6}
                md={3}
                
                >
               <div className="bx-counter-body">
                    <div className="bx-counter-card">
                        <div className="bx-counter-icon">
                            <GiForkKnifeSpoon />
                        </div>

                        <div className="bx-counter-info">
                            <div className="bx-counter-num-prefix">
                                <h5 className="bx-timer">
                                    <CounterNumber end={175} start={startCount} />
                                </h5>
                                <span className="bx-counter-prefix">+</span>
                            </div>

                            <p className="bx-counter-description">Members</p>
                        </div>

                    </div>
               </div>
            </Col>

            <Col xs={6}
                sm={6}
                md={3}
                
                >
               <div className="bx-counter-body">
                    <div className="bx-counter-card">
                        <div className="bx-counter-icon">
                            <SiGreasyfork  />
                        </div>

                        <div className="bx-counter-info">
                            <div className="bx-counter-num-prefix">
                                <h5 className="bx-timer">
                                    <CounterNumber end={250} start={startCount} />
                                </h5>
                                <span className="bx-counter-prefix">+</span>
                            </div>

                            <p className="bx-counter-description">Specialist</p>
                        </div>

                    </div>
               </div>
            </Col>

            <Col xs={6}
                sm={6}
                md={3}
                
                >
               <div className="bx-counter-body">
                    <div className="bx-counter-card">
                        <div className="bx-counter-icon">
                            <MdFoodBank />
                        </div>

                        <div className="bx-counter-info">
                            <div className="bx-counter-num-prefix">
                                <h5 className="bx-timer">
                                    <CounterNumber end={23} start={startCount} />
                                </h5>
                                <span className="bx-counter-prefix">+</span>
                            </div>

                            <p className="bx-counter-description">Years Of Experience</p>
                        </div>

                    </div>
               </div>
            </Col>

            <Col xs={6}
                sm={6}
                md={3}
                
                >
               <div className="bx-counter-body">
                    <div className="bx-counter-card">
                        <div className="bx-counter-icon">
                            <TbBowlSpoonFilled />
                        </div>

                        <div className="bx-counter-info">
                            <div className="bx-counter-num-prefix">
                                <h5 className="bx-timer">
                                    <CounterNumber end={158} start={startCount} />
                                </h5>
                                <span className="bx-counter-prefix">+</span>
                            </div>

                            <p className="bx-counter-description">Donations</p>
                        </div>

                    </div>
               </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CounterBox;
