import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, placeOrder }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, dish) => sum + dish.price, 0
  );

  function removeItem(index) {
    const newCart = cart.filter((dish, i) => i !== index);
    setCart(newCart);
  }

  function handleOrder(e) {
    e.preventDefault();

    if (cart.length === 0) return;

    const newOrder = {
      id: Date.now().toString(),
      name: name,
      phone: phone,
      address: address,
      total: total
    };

    placeOrder(newOrder);
    navigate("/track/" + newOrder.id);
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((dish, index) => (
            <div className="cart-item" key={index}>
              <h3>{dish.name}</h3>
              <p>Price: ${dish.price}</p>

              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <h2>Checkout</h2>

          <form onSubmit={handleOrder}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Cart;