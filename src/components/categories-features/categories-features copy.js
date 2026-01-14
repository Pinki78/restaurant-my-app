import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { fetchMenuList } from "../../redux-store/menuListItmes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CategoriesFeaturesList = (props) => {
  const { limit, Max_Length, PaginationHide } = props;
  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });

  const dispatch = useDispatch();
  
  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  //  const MenuDataDispaly = limit ? itemsMenuList.slice(0, limit) : itemsMenuList;
  // 1️⃣ Prepare unique categories with images
  // const uniqueCategories = Array.from(
  //   new Map(
  //     itemsMenuList.flatMap((foodItem) =>
  //       foodItem.FoodCategory.map((cat) => [
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
        {categoriesToDisplay.map((item) => {
          // find first food item for this category
          // const foodItem = itemsMenuList.find((item) =>
          //   item.FoodCategory.some((c) => c.categoryName === cat.categoryName)
          // );

          return (
            <SwiperSlide key={cat.id}>
              <div className="bx-product-menu-wrap wow fadeInUp animated">
                <div className="bx-thumbnail-top">
                  <div className="bx-images">
                    <Link
                      to={`/category/${cat.categoryName
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Image
                        className="d-block w-100 "
                        src={foodItem?.foodImage}
                        alt={cat.categoryName || "carousel-image"}
                        width="67%"
                        height="auto"
                      />
                      <Image
                        src={foodItem?.foodImage}
                        alt={cat.categoryName || "carousel-image"}
                        className="d-block w-100 bx-img2"
                        width="67%"
                        height="auto"
                      />
                    </Link>
                  </div>
                </div>

                <div className="bx-pro-text bx-desc-listcategoreis">
                  <h3>
                    <Link
                      to={`/category/${cat.categoryName
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {cat.categoryName}
                    </Link>
                  </h3>
                   <Link
                      to={`/category/${cat.categoryName
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <span>
                        View More
                      </span>
                    </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </>
  );
};

export default CategoriesFeaturesList;
