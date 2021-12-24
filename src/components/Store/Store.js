import React, { useContext } from "react";
import Product from "../Product/Product";
//context
import { ProductContext } from "../../context/ContextProductProvider";
//styles
import styles from "./Store.module.css"
const Store = () => {
  const products = useContext(ProductContext);
  return (
    <div className={styles.store}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
