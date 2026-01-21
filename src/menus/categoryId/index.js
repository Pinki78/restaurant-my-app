import { useParams } from "react-router-dom";

const CategoryIdIndex = () => {
  const { categoryId } = useParams();

  if (!categoryId) return <div>Loading...</div>; // optional fallback

  const lowerCaseCategory = categoryId.toLowerCase();

  return <div>Category: {lowerCaseCategory}</div>;
};

export default CategoryIdIndex;
