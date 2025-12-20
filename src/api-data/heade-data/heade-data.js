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
        pathUrl:"/about",
    
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
    //  {
    //     id: getIdMenu ("MainMenu", "main"),
    //     pathName:"Home",
    //     pathUrl:"/",
    
    // },


]