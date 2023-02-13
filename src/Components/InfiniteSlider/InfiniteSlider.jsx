import React, { useState, useEffect } from "react";
import "./InfiniteSlider.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export const InfiniteSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="slider-component">
      <div className="slider">
        <div className="slide-track">
          {data.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
