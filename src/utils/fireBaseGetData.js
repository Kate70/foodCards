import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    where,
  } from "firebase/firestore";
  import { firestore } from '../firebase/init-firebase';

  // Saving new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  // getall food items
  export const getAllFoodItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };
  export const fetchCart = () => {
    const cartInfo =
      localStorage.getItem("cardItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cardItems"))
        : localStorage.clear();
  
    return cartInfo ? cartInfo : [];
  };