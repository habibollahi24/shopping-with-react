import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context:
import { CartContext } from "../../context/CartContextProvider";

//functions
import { shorten, isInCart, isOneItemInCart } from "../../helper/functions";

//styles
import styles from "./Product.module.css";

//image:
import trash from "../../assets/icons8-trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Link to={`/products/${productData.id}`}><img src={productData.image} alt="product" /></Link>
      </div>
      <div className={styles.product__body}>
        <h3>{shorten(productData.title)}</h3>
        <span>{productData.price}$</span>
      </div>
      <div className={styles.product__footer}>
        <Link to={`/products/${productData.id}`}>Detailes </Link>
        <div className={styles.footer__btns}>
          {isOneItemInCart(state, productData.id) === 1 && (
            <button
              className={styles.remBtn}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trash} alt="trash-icon" />
            </button>
          )}

          {isOneItemInCart(state, productData.id) > 1 && (
            <button
              className={styles.decBtn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {isOneItemInCart(state, productData.id) > 0 && (
            <span className={styles.counter}>{isOneItemInCart(state, productData.id)}</span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.addBtn}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: productData })
              }
            >
              Add To Cart
            </button>
          ) : (
            <button
              className={styles.incBtn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
