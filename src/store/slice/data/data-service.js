import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseDB/firebase";

export const firebaseData = async () => {
  let list = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    list.push({ id: doc.id, ...doc.data() });
  });
  return list;
};

console.log(firebaseData());
