import axios from "axios";
import { useEffect, useState } from "react";
import { FOOD_MENU_DATA } from "../api-data/ManulistData/manu-list-data";


const api = axios.create({
  baseURL: "FOOD_MENU_DATA",
  headers: {
    "Content-Type": "application/json",
  },
});

 const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("/data/manu-list-data.json");
      setMenu(res.data);
    } catch (error) {
      // no console.log (as per your preference)
    } finally {
      setLoading(false);
    }
  };


export default api;
