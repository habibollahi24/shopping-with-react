import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


//Components
import Store from "./components/Store/Store";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartContextProvider from "./context/CartContextProvider";
import Carts from "./components/Carts/Carts";

//Context
import ContextProductProvider from "./context/ContextProductProvider";

//styles
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className={styles.app}>
      <ContextProductProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={ProductDetail}></Route>
            <Route path="/products" component={Store}></Route>
            <Route path="/cart" component={Carts}></Route>
            <Redirect to="/products"></Redirect>
          </Switch>
        </CartContextProvider>
      </ContextProductProvider>
    </div>
  );
};

export default App;
