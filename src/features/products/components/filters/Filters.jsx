import React from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "store/slice/data/data-slice";

import styles from "./filters.module.scss";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSearchByName = (name) => {
    dispatch(dataActions.filterByName(name));
  };

  return (
    <div className={styles.filters}>
      <input
        placeholder="Upiši ime proizvoda"
        onChange={(e) => handleSearchByName(e.target.value)}
      />
    </div>
  );
};
