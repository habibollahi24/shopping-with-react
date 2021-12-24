import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import styles from "./Carts.module.css";
import { CartContext } from "../../context/CartContextProvider";
const Carts = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.carts}>
      <div className={styles.cartItem}>
        {state.cartItem.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.box}>
        {state.cartItem.length > 0 && (
          <div className={styles.counterBox}>
            <p className={styles.totalItem}>
              <span>total Items:</span>
              {state.totalItem}
            </p>
            <p className={styles.totalPrice}>
              <span>total peyment:</span>
              {state.totalPrice}$
            </p>
            <div className={styles.btns}>
              <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
              <button className={styles.check} onClick={() => dispatch({ type: "CHEKOUT" })}>
                ChekOut
              </button>
            </div>
          </div>
        )}
        {state.checkOut && (
          <div className={styles.empty}>
            <p>Checkout Successfully:)</p>
            <Link to="/products">Back To Shop</Link>
          </div>
        )}
        {!state.checkOut && state.cartItem.length === 0 && (
          <div className={styles.empty}>
            <p>Cart Is Empty:(</p>
            <Link to="/products">Back To Shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
