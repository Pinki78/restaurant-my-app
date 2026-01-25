
import { collection, addDoc , doc, setDoc} from "firebase/firestore";
import { db } from "../assets/firebase/firebase";
import { FOOD_MENU_DATA } from "../../api-data/manulist-data/manu-list-data";

export const uploadMenuToFirestore = async () => {
  try {
    const menuRef = collection(db, "foodManeList");

    for (const item of FOOD_MENU_DATA) {
      await addDoc(menuRef, item);
    }

    console.log("✅ Menu uploaded successfully");
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
};
uploadMenuToFirestore();
