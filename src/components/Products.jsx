// src/components/Product.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Products = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Products;
