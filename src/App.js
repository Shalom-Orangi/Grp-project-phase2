import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import VendorLogin from "./components/Vendors/VendorLogin";
import { CartProvider } from "./cartContext";
import Cart from "./components/Cart";
import Listings from "./components/Listings";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/vendors" element={<VendorLogin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/listings" element={<Listings />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
