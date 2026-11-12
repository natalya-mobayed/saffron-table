import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Saffron Table</h1>

      <h2>Fresh Food, Great Taste!</h2>

      <p>
        Enjoy delicious meals from our restaurant.
        Browse our menu and order your favorite food online.
      </p>

      <Link to="/menu">
        <button>Explore Menu</button>
      </Link>
    </div>
  );
}

export default Home;