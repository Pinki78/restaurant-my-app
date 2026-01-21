const IdHeaderMenus =  {
  MainMenu:0,
  SubMenu:0,
};


const getIdMenu = (type=" MainMenu", suffix = '') => {
 IdHeaderMenus[type]++

  return `${IdHeaderMenus[type]}${suffix}`
}


export const  HEADER_MANUS =[
 {
        id: getIdMenu ("MainMenu", "main"),
        pathName:"Home",
        pathUrl:"/",
    
    },
    {
        id: getIdMenu ("MainMenu", "main"),
        pathName:"About Us",
        pathUrl:"/about-us",
    
    },
     {
        id: getIdMenu ("MainMenu", "main"),
        pathName:"Menus",
        pathUrl:"/menus",
    
    },
     {
        id: getIdMenu ("MainMenu", "main"),
        pathName:"Contact",
        pathUrl:"/contact",
    
    },
     {
        id: getIdMenu ("MainMenu", "main"),
        pathName:"Pages",
        pathUrl:"#",


       SubMenuDate: [
        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Gallery",
          pathUrlSub:"/gallery",
        },
        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Single Post",
          pathUrlSub:"/single-post",
        },
        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Blog",
          pathUrlSub:"/blog",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Testimonial",
          pathUrlSub:"/testimonials",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Service",
          pathUrlSub:"/service",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Faq",
          pathUrlSub:"/faq",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"404 Page",
          pathUrlSub:"/404",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Checkout",
          pathUrlSub:"/checkout",
        },


        ]
    
     },
    //  {
    //     id: getIdMenu ("MainMenu", "main"),
    //     pathName:"Home",
    //     pathUrl:"/",
    
    // },
    //  {
    //     id: getIdMenu ("MainMenu", "main"),
    //     pathName:"Home",
    //     pathUrl:"/",
    
    // },


]