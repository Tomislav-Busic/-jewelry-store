import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { dataActions } from "../store/slice/data/data-slice";

export const firebaseData = (dispatch) => {
  const unsub = onSnapshot(
    collection(db, "products"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      dispatch(dataActions.setData(list));
    },
    (error) => {
      console.log(error);
    }
  );

  return () => {
    unsub();
  };
};
