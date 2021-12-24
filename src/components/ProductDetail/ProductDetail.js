import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { ProductContext } from "../../context/ContextProductProvider";

//styles
import styles from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const id = props.match.params.id;
  const products = useContext(ProductContext);
  const product = products[id - 1];
  console.log(products);
  console.log(product);
  const { image, title, price, description, category } = product;
  return (
    <div className={styles.productDetail__wrapper}>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__img}>
          <img src={image} alt="product" />
        </div>
        <div className={styles.productDetail__items}>
          <h3 className={styles.productDetail__items__title}>{title}</h3>
          <p className={styles.productDetail__items__disc}>{description}</p>
          <p style={{ color: "#333" }}>
            <span className={styles.productDetail__items__cat}>category:</span>
            {category}
          </p>
          <div className={styles.productDetail__items__btns}>
            <span>{price}$</span>
            <Link to="/products">back to store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
