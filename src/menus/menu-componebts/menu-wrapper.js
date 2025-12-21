import { Row, Col } from "react-bootstrap";

import MenuItems from "./menu-items";
import { FOOD_MENU_DATA } from "../../api-data/ManulistData/manu-list-data";

const Menuwrapper = (props) => {
  const { limit, Max_Length } = props;


const MenuDataDispaly = limit ? FOOD_MENU_DATA.slice(0, limit) : FOOD_MENU_DATA
  return (
    <>
      <div className="">
        <Row as="ul">
          {MenuDataDispaly.map((listMenu) => (
            <MenuItems listMenu={listMenu} limit={limit} Max_Length={Max_Length } />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Menuwrapper;
