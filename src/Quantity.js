import React, { useState } from "react";

function Quantity() {
  const [add, setAdd] = useState(0);

  const increment = (e) => {
    e.preventDefault();

    setAdd((pre) => (pre < 5 ? pre + 1 : pre));
  };
  const decrement = (e) => {
    e.preventDefault();

    setAdd((pre) => (pre === 0 ? pre : pre - 1));
  };

  return (
    <div className="quantity">
      <button onClick={decrement}>-</button>
      <input type="button" value={add} />
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Quantity;
