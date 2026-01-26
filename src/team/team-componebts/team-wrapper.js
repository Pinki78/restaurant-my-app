import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import { fetchTeamList } from "../../redux-store/store-redux-componets/teamSlice";
import PaginationList from "../../components/pagination-list/pagination";
import TeamItems from "./team-items";

import { useScrollAnimation} from "../../assets/hooks/scroll-animation/scroll-animation";

const TeamWrapper = (props) => {

const [ref, animationClass] = useScrollAnimation(props.animationClass || "animate__fadeInUp");


  const { limit, Max_Length, PaginationHide } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });

  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 8 : isXl ? 8 : 8;

  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const location = useLocation();
  const navigate = useNavigate();

  const isPathePage = location.pathname === "/team";

  const dispatch = useDispatch();

  const { teamList, loading, success, error } = useSelector(
    (state) => state.TeamReducerStore,
  );
  console.log(teamList);

  useEffect(() => {
    dispatch(fetchTeamList());
  }, [dispatch]);

  const filterSearchData = useSelector(
    (state) => state.SearchList.filterSearch,
  );

  const filteredData = filterSearchData
    ? teamList.filter((item) =>
        item.title.toLowerCase().includes(filterSearchData.toLowerCase()),
      )
    : teamList;

  useEffect(() => {
    if (filterSearchData && filteredData.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [filterSearchData, filteredData, navigate]);

  const IndexOfLastItem = currentPage * itemsPerPage;

  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;

  // after search filter
  const baseData = limit ? filteredData.slice(0, limit) : filteredData;

  const TeamDataDispaly = baseData.slice(IndexOfFirstItem, IndexOfLastItem);

  if (error) return <p>{error}</p>;



  return (
    <>
      <>
        <div className="bx-wrapp-team-root">
          <Row as="ul" ref={ref}>
            {TeamDataDispaly.map((list , index) => (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                xxl={3}
                key={list.id}
                as="li"
                className=" list-unstyled"
              >
                <TeamItems
                  listtems={list}
                  limit={limit}
                  Max_Length={Max_Length}
                  isMobileOrTablet={isMobileOrTablet}
                  index={index}
                  animationClass={animationClass}
                />
              </Col>
            ))}
          </Row>
        </div>

        {isPathePage && teamList.length > itemsPerPage && (
          <PaginationList
            MenuDataDispaly={teamList}
            totalItems={teamList.length}
            itemsPerPage={itemsPerPage}
            indexOfLastItem={IndexOfLastItem}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            PaginationHide={PaginationHide}
          />
        )}
      </>
    </>
  );
};

export default TeamWrapper;
