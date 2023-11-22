import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Fragrance = () => {
  const [fragrance, setFragrance] = useState([]);

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
        setFragrance(data);
      });
  }, []);
  return (
    <div className="pop">
      <h1 className="text-center">Fragrance</h1>
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
        {fragrance.map(
          (product) =>
            product.category === "Fragrance" && (
              <SplideSlide key={product.id}>
                <ProductList key={product.id} product={product} />
              </SplideSlide>
            )
        )}
      </Splide>
    </div>
  );
};

export default Fragrance;
