import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import Cart from "./Cart";
import Tracking from "./Tracking";
import Contact from "./Contact";

import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  const [order, setOrder] = useState(null);

  function addToCart(dish) {
    const newCart = [...cart, dish];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function placeOrder(newOrder) {
    setOrder(newOrder);
    updateCart([]);
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/menu" element={<Menu />} />

        <Route
          path="/menu/:id"
          element={<DishDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={updateCart}
              placeOrder={placeOrder}
            />
          }
        />

        <Route
          path="/track/:orderId"
          element={<Tracking order={order} />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>Saffron Table - Restaurant Ordering System</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;