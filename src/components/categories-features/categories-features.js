import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { fetchMenuList } from "../../redux-store/menuListItmes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CategorysList from "../../categorys/categorys-list";

const CategoriesFeaturesList = (props) => {
  const { limit, Max_Length, PaginationHide } = props;
  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const dispatch = useDispatch();

  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu,
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  //  const MenuDataDispaly = limit ? itemsMenuList.slice(0, limit) : itemsMenuList;
  // 1️⃣ Prepare unique categories with images
  // const uniqueCategories = Array.from(
  //   new Map(
  //     itemsMenuList.flatMap((fooditem) =>
  //       fooditem.FoodCategory.map((cat) => [
  //         cat.categoryName, // unique key
  //         {
  //           ...cat,
  //           image: foodItem.foodImage, // attach image from first food item
  //         },
  //       ])
  //     )
  //   ).values()
  // );

  // 2️⃣ Optional: limit the number of categories
  const categoriesToDisplay = limit
    ? itemsMenuList.slice(0, limit)
    : itemsMenuList;

  const shownCategories = new Set();

  return (
    <>
      <div className="bx-categories-root-list">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Autoplay]}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {categoriesToDisplay.map((fooditem, index) =>
            fooditem.FoodCategory.map((cat) => {
              if (shownCategories.has(cat.categoryName)) return null;
              shownCategories.add(cat.categoryName);

              return (
                <SwiperSlide key={cat.categoryName}>
                  {/* <Link to={`/category/${cat.categorySlug}`}>
                  <div className="bx-category-card">
                    <Image
                      src={item.foodImage}
                      alt={cat.categoryName}
                      fluid
                    />
                    <h6>{cat.categoryName}</h6>
                  </div>
                </Link> */}

                  <CategorysList cat={cat} fooditem={fooditem} />
                </SwiperSlide>
              );
            }),
          )}
        </Swiper>
      </div>
    </>
  );
};

export default CategoriesFeaturesList;
