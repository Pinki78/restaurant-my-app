import { Container } from "react-bootstrap";
import PageTitleArea from "../components/page-title-area/page-title-area";

import TeamWrapper from "./team-componebts/team-wrapper";

const TeamIndex = ({ PageName }) => {
  return (
    <>
      <PageTitleArea PageName={PageName} />
      <section>
        <Container>
          <TeamWrapper Max_Length={48} />
        </Container>
      </section>
    </>
  );
};

export default TeamIndex;
