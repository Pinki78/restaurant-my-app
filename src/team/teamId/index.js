import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { fetchTeamList } from "../../redux-store/store-redux-componets/teamSlice";
import TeamDetails from "./team-details";
import { Container } from "react-bootstrap";

const TeamIndexId = () => {


const { teamId } = useParams();
    const teamSlug = teamId.toLowerCase();
  const dispatch = useDispatch();

  
  const slugify = (title = "") =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

 const { teamList, loading, error } = useSelector(
    (state) => state.TeamReducerStore,
  );

  useEffect(() => {
    dispatch(fetchTeamList());
  }, [dispatch]);

  const teamDetails = teamList.find(
    (item) => slugify(item.title) === teamSlug,
  );

  useEffect(() => {
    if (teamDetails.title) {
      document.title = teamDetails.title;
    }
  }, [teamDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }


    
  return (
    <>
      <PageTitleArea PageName={teamDetails.title} />
      <section className="bx-section-teams-details">
      <Container >
        <TeamDetails  items={teamDetails} />
      </Container >
      </section>
    </>
  )
}

export default TeamIndexId