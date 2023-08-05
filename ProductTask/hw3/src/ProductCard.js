import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  function isExpired() {
    if (product.quantity > 0) {
      return false;
    } else {
      return true;
    }
  }

  const cardStyle = isExpired()
    ? {
        background: "red",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        width: "250px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }
    : null;
  const priceStyle = isExpired() ? { fontSize: "16px", color: "white" } : null;

  const quantityStyle = isExpired()
    ? { fontSize: "16px", color: "white" }
    : null;

  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      <div style={cardStyle} className="product-card">
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p style={priceStyle} className="product-price">
            ${product.price}
          </p>
          <p style={quantityStyle} className="product-price">
            {
             isExpired() ? 'Out of stock' : `Left in stock: ${product.quantity}`
            }
              
          </p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
