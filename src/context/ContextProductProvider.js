import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";
export const ProductContext = React.createContext();

const ContextProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ContextProductProvider;
