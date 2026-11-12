import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function Tracking({ order }) {
  const { orderId } = useParams();
  const [status, setStatus] = useState(0);

  const steps = [
    "Received",
    "Preparing",
    "On the Way",
    "Delivered"
  ];

  if (!order || order.id !== orderId) {
    return (
      <div className="tracking">
        <h1>Order Not Found</h1>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  function nextStatus() {
    if (status < 3) {
      setStatus(status + 1);
    }
  }

  return (
    <div className="tracking">
      <h1>Order Tracking</h1>

      <p>Order Number: {order.id}</p>
      <p>Customer: {order.name}</p>
      <p>Total: ${order.total}</p>

      <h2>Status: {steps[status]}</h2>

      {status < 3 ? (
        <button onClick={nextStatus}>
          Next Status
        </button>
      ) : (
        <p>Your order has been delivered!</p>
      )}

      <p>This is a tracking demonstration.</p>
    </div>
  );
}

export default Tracking;