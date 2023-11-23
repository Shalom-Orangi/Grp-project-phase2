import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../cartContext";
import { useContext } from "react";
const Navbar = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="logo" />
          <Link className="navLink" to={"/"}>
            Home
          </Link>
          <Link className="navLink" to={"/vendors"}>
            Vendors
          </Link>
        </div>
        <div className="navbar__right">
          <Link className="navLink" id="cart" to={"/cart"}>
            <FaShoppingCart />
          </Link>
          <p className="cart__count">{items.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
