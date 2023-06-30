import { UpdateProducts } from "features/updateProducts/UpdateProducts";

import styles from "./updateProductPage.module.scss";

export const UpdateProductsPage = () => {
  return (
    <div className={styles.admin_update}>
      <UpdateProducts />
    </div>
  );
};
