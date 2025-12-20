let IdCarousel =  0;

const getIdCarousel = (title, suffix = "", ) => {
//   const setCarouselId = title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
  IdCarousel++;
  return `${IdCarousel}${suffix}`;
};

export const CAROUSEL_LIST= [

    {
        id:getIdCarousel("id"),
         imageName:"images/home/banner/banner-1.png"
    },

    {
        id:getIdCarousel("id"),
         imageName:"images/home/banner/banner-2.png"
    },


    {
        id:getIdCarousel("id"),
         imageName:"images/home/banner/banner-3.png"
    },

    // {
    //     id:getIdCarousel("id"),
    //      imageName:"images/home/banner/banner-1.png"
    // },


]