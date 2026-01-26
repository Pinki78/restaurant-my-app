// bookFormFirebaseFunctions.js
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./firebase"; // your firebase config

const db = getFirestore(app);

// Add a new document
export const submitBookingStore = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "bookTableForms"), formData);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Get all documents
export const getBookings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "bookTableForms"));
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    return bookings;
  } catch (e) {
    console.error("Error fetching bookings: ", e);
    throw e;
  }
};
