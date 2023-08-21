// src/components/ShoppingCart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
          <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
