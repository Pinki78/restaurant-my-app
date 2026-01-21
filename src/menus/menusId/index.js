import { useParams } from "react-router-dom";

const MenuIdIndex = () => {
  const { MenuId } = useParams();

  console.log(MenuId); // james-wilson

  return <div>Testimonial ID: {MenuId}</div>;
};

export default MenuIdIndex;
