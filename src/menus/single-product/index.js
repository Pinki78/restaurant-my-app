import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import PageTitleArea from "../../components/page-title-area/page-title-area";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuList } from "../../redux-store/menuListItmes";
import { useEffect } from "react";
import SingleItem from "./single-item";
import Menuwrapper from "../menu-componebts/menu-wrapper";

const SingleProductInIndex = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productSlug = id.toLowerCase();

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu,
  );

  const slugify = (title = "") =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const singleProduct = itemsMenuList?.find(
    (item) => slugify(item.title) === productSlug,
  );
  if (loading) return <p>Loading...</p>;
  if (!singleProduct) return <p>Product not found</p>;

  return (
    <>
      <PageTitleArea PageName={singleProduct.title} />
      <section className="bx-single-product-root">
        <Container>
          <SingleItem
            slugify={slugify}
            singleProduct={singleProduct}
            productSlug={productSlug}
          />
        </Container>
      </section>

      <section className="bx-single-product-menu ">
        <Container>
          <Menuwrapper limit={4} Max_Length={48} />
        </Container>
      </section>
    </>
  );
};

export default SingleProductInIndex;
