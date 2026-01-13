import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMenuList } from "../../redux-store/menuListItmes";
import MenuItems from "../../menus/menu-componebts/menu-items";
import SectionHeadring from "../../components/seciton-headring/section-headring";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MenuListSilder = (props) => {
  const { limit, Max_Length, PaginationHide } = props;
  const isMobileOrTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
  const dispatch = useDispatch();
  const { itemsMenuList, loading } = useSelector(
    (state) => state.ListReducermenu
  );

  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const MenuDataDispaly = itemsMenuList;

  return (
    <>
      <div className="bx-slider-header-nav">
        <SectionHeadring SectionHeadring="Top Products" HeadringClass="bx-wave2"  />
        <div className="slider-nav">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, Autoplay ]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#ff0000ff",
          "--swiper-pagination-color": "#ff0000ff",
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
        {MenuDataDispaly.map((listMenu) => (
          <SwiperSlide key={listMenu.id}>
            <MenuItems
              key={listMenu.id}
              listMenu={listMenu}
              limit={limit}
              Max_Length={Max_Length}
              isMobileOrTablet={isMobileOrTablet}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MenuListSilder;
