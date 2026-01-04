import { HEADER_MANUS } from "../../../api-data/heade-data/heade-data";

export const pageTitleMap = HEADER_MANUS.reduce((acc, item) => {
  acc[item.pathUrl] = item.pathName;

   // handle submenus if they exist
  if (item.SubMenuDate && Array.isArray(item.SubMenuDate)) {
    item.SubMenuDate.forEach((sub) => {
      acc[sub.pathUrlSub] = sub.pathNameSub;
    });
  }


  return acc;
}, {});