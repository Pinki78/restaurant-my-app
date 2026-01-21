import { useParams } from "react-router-dom";

const SingleProductInIndex = () => {
  const { id } = useParams();
 const lowerCaseProduct = id.toLowerCase();
  console.log(id); // product-id

  return <div>Product ID: { lowerCaseProduct}</div>;
};

export default SingleProductInIndex;
