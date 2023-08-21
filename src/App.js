import React from "react";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  // ...
];

function App() {
  return (
    <div className='App'>
      <h1>Redux Shopping Cart</h1>
      <div className='products'>
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <ShoppingCart />
    </div>
  );
}

export default App;
