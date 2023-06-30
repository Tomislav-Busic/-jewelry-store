import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const firebaseData = async () => {
  const list = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    list.push({ id: doc.id, ...doc.data() });
  });

  return list;
};

const dataService = {
  firebaseData,
};

console.log(firebaseData());

export default dataService;
