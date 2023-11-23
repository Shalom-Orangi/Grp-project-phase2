import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
import CartContext from "../cartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <Link to={`/detail/${product.id}`}>
        <h4>{product.title}</h4>
      </Link>
      <p>{product.description.slice(0, 30)}...</p>
      <div className="below">
        <div className="price">
          <p>price</p>
          <p>${product.price}</p>
        </div>
        <FaShoppingCart
          className="cart"
          onClick={() =>
            addToCart(product.title, product.price, product.image, product.id)
          }
        />
      </div>
    </div>
  );
};

export default ProductList;
