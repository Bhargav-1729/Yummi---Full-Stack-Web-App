import React, { useState, useEffect } from "react";
import { getActiveOrders, cancelOrder } from "../../../services/api";
import "../../../styles/UserActiveOrders.css";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActiveOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ moved inside
        const response = await getActiveOrders(token);
        setOrders(response.data);
      } catch (err) {
        setError("Failed to fetch active orders.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveOrders();
  }, []); // ✅ no missing deps now

  const handleCancelOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("token"); // keep consistent
      const response = await cancelOrder(orderId, token);
      if (response.status === 200) {
        setOrders((prev) =>
          prev.filter((order) => order._id !== orderId)
        );
        alert("Order has been cancelled.");
      }
    } catch (err) {
      console.error("Failed to cancel order:", err);
      alert("Failed to cancel the order. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="active-orders-container loading-message">
        Loading active orders...
      </div>
    );

  if (error)
    return (
      <div className="active-orders-container error-message">
        {error}
      </div>
    );

  return (
    <div className="active-orders-container">
      <h1 className="active-orders-container__title">Active Orders</h1>

      {orders.length === 0 ? (
        <p className="active-orders-container__no-orders">
          No active orders found.
        </p>
      ) : (
        <div className="active-orders-container__cards">
          {orders.map((order) => (
            <div
              className="active-orders-container__card"
              key={order._id}
            >
              <div className="active-orders-container__header">
                <h3 className="active-orders-container__order-id">
                  Order ID: {order._id}
                </h3>
                <button
                  className="active-orders-container__cancel-button"
                  onClick={() => handleCancelOrder(order._id)}
                >
                  Cancel Order
                </button>
              </div>

              <div className="active-orders-container__info">
                <div className="active-orders-container__items">
                  <h4 className="active-orders-container__items-title">
                    Items:
                  </h4>
                  {order.items.map((item) => (
                    <div
                      className="active-orders-container__item"
                      key={item.menuItem._id}
                    >
                      <span className="active-orders-container__item-name">
                        {item.menuItem.name} (x{item.quantity})
                      </span>
                    </div>
                  ))}
                </div>

                <div className="active-orders-container__details">
                  <p>
                    <strong>Restaurant:</strong>{" "}
                    {order.restaurant.restaurantName}
                  </p>
                  <p>
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p>
                    <strong>Total:</strong> $
                    {order.totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveOrders;
