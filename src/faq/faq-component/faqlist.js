import { Accordion } from "react-bootstrap";


/* 👉 ADD HERE */
// const formatDate = (date) =>
//   new Date(date).toLocaleDateString("en-US", {
//     month: "short",
//     day: "2-digit",
//     year: "numeric",
//   });



const FaqList = (props) => {
  const { listtems } = props;

  return (
    <>
     <Accordion.Header >{listtems.title}</Accordion.Header>
        <Accordion.Body>
          {listtems.info}
        </Accordion.Body>
    </>
  );
};

export default FaqList;
