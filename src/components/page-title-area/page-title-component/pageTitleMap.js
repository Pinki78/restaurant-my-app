import { HEADER_MANUS } from "../../../api-data/heade-data/heade-data";

export const pageTitleMap = HEADER_MANUS.reduce((acc, item) => {
  acc[item.pathUrl] = item.pathName;
  return acc;
}, {});