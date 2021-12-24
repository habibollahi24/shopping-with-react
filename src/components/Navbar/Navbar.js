import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Icons:
import cartItem from "../../assets/shopp.svg";
import styles from "./Navbar.module.css";
//Context:
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.navbarBG}>
      <div className={styles.navbar}>
        <div className={styles.navbar__link}>
          <h3>
            <Link to="/products">Products</Link>
          </h3>
        </div>
        <div className={styles.cart}>
          <Link to="/cart">
            <img src={cartItem} alt="cart" />
          </Link>
          <span className={styles.counter}>{state.totalItem}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// {state.cartItem.length === 0 ? 0 : state.totalItem}
