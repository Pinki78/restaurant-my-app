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
          pathNameSub:"Blog",
          pathUrlSub:"/blog",
        },

        {
          id:getIdMenu("SubMenu" , "sub"),
          pathNameSub:"Testimonial",
          pathUrlSub:"/testimonial",
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
          pathUrlSub:"/404-page",
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