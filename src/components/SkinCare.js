import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../App.css";

const SkinCare = () => {
  const [skinCare, setSkinCare] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())

      .then((data) => {
        setSkinCare(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center">Skin Care</h1>
      <div className="pop">
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            gap: "5rem",
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false,
            autoplay: true,
            speed: 15000,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
          }}
        >
          {skinCare.map(
            (product) =>
              product.category === "Skincare" && (
                <SplideSlide key={product.id}>
                  <ProductList key={product.id} product={product} />
                </SplideSlide>
              )
          )}
        </Splide>
      </div>
    </div>
  );
};

export default SkinCare;
