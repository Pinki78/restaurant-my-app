import { Container } from "react-bootstrap";
import AboutInfo from "./about-component/about-info";
import PageTitleArea from "../components/page-title-area/page-title-area";

import HeadringButtonContainer from "../components/headring-button/headring-button";
import { RiTeamFill } from "react-icons/ri";
import WhyChooseUs from "../components/why-choose-us/why-choose-us";
import TeamWrapper from "../team/team-componebts/team-wrapper";

import OnlineReserve from "../home/home-component/online-reserve";
import CounterBox from "../components/counter/counter";

import AboutFaq from "./about-component/about-faq";


const AboutIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section className="bx-about-us-root overflow-hidden bx-section-margine">
        <Container>
          <AboutInfo />
        </Container>
      </section>

      {/* --why-team-us-- */}

      <section className="bx-about-team-root overflow-hidden bx-section-margine">
        <Container>
          <HeadringButtonContainer
            Icon={<RiTeamFill />}
            IconText="Team of Restaurant"
            PathUrl="/team"
            ButtonName="View All"
            ClassBtn="bx-btn-2"
            SectionHeadr="Meet Our Professionals"
            HeadringClass="bx-wave4"
          />

          <TeamWrapper Max_Length={48} limit={4} />
        </Container>
      </section>
      {/* --why-choose-us-- */}
      <section    className="bx-why-choose-us-section overflow-hidden bx-section-margine">
        <WhyChooseUs />
      </section>

      {/* --reserve-- */}

      <section
        className="bx-reserve-section overflow-hidden bx-section-margine"
        
      >
        <Container fluid className="pe-xxl-0  pe-1 ">
          <OnlineReserve />
        </Container>
      </section>

      {/* --CounterBox-- */}

      <section  className="overflow-hidden bx-section-margine">
        <CounterBox />
      </section>

 {/* --fqa-- */}



       <section  className="overflow-hidden bx-section-margine">
        <Container >
         <AboutFaq/>
        </Container>
      </section>
      

      

    </>
  );
};

export default AboutIndex;
