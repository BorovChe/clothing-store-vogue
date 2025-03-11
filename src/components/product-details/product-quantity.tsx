"use client";

import { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <h3>QUANTITY</h3>
      <button
        onClick={() => setQuantity((prevState) => prevState + 1)}
        type="button"
      >
        +
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => setQuantity((prevState) => prevState - 1)}
        type="button"
      >
        -
      </button>
    </>
  );
};

export default ProductQuantity;
