import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { shorten } from "../../helper/functions";
import trash from "../../assets/icons8-trash.svg"
import styles from "./Cart.module.css"
const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.cart}>
      <div className={styles.image}>
        <img src={image} alt="product" />
      </div>
      <div className={styles.disc}>
        <p>{shorten(title)}</p>
        <span>{price}</span>
      </div>
      <div className={styles.quantity}>{quantity}</div>
      <div>
        {quantity === 1 ? <button className={styles.remBtn} onClick={()=>dispatch({type:"REMOVE_ITEM" , payload:props.data})}><img src={trash} alt="trash"/></button> : <button className={styles.decBtn} onClick={()=>dispatch({type:"DECREASE" , payload:props.data})}> - </button>}
        <button className={styles.incBtn} onClick={()=> dispatch ({type:"INCREASE" , payload:props.data})}>+</button>
      </div>
    </div>
  );
};

export default Cart;
