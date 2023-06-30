import { Products } from "features/products/Products";

import styles from "./productsPage.module.scss";

export const ProductsPage = () => {
  return (
    <div className={styles.products_page}>
      <Products />
    </div>
  );
};
