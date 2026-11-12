import React from "react";
import { useParams, Link } from "react-router-dom";

function DishDetails({ addToCart }) {
  const { id } = useParams();

  const dishes = [
    {
      id: 1,
      name: "Chicken Burger",
      price: 8,
      description: "Grilled chicken with lettuce and sauce."
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 10,
      description: "Pizza with tomato sauce and cheese."
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: 12,
      description: "Pasta with creamy Alfredo sauce."
    },
    {
      id: 4,
      name: "Caesar Salad",
      price: 7,
      description: "Fresh lettuce with croutons and dressing."
    }
  ];

  const dish = dishes.find(item => item.id === Number(id));

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  return (
    <div className="dish-details">
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <h2>Price: ${dish.price}</h2>

      <button onClick={() => addToCart(dish)}>
        Add to Cart
      </button>

      <p>
        <Link to="/menu">Back to Menu</Link>
      </p>
    </div>
  );
}

export default DishDetails;