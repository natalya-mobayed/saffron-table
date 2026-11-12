import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const dishes = [
    { id: 1, name: "Chicken Burger", price: 8, image: "burger" },
    { id: 2, name: "Margherita Pizza", price: 10, image: "pizza" },
    { id: 3, name: "Pasta Alfredo", price: 12, image: "pasta" },
    { id: 4, name: "Caesar Salad", price: 7, image: "salad" }
  ];

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <p>Choose your favorite dish.</p>

      <div className="menu-list">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img
              src={`/images/${dish.image}.jpeg`}
              alt={dish.name}
              className="dish-image"
            />

            <h2>{dish.name}</h2>
            <p>Price: ${dish.price}</p>

            <Link to={`/menu/${dish.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;