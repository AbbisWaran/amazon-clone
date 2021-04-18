import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const [add, setAdd] = useState(1);

  const increment = (e) => {
    e.preventDefault();

    setAdd((pre) => (pre < 5 ? pre + 1 : pre));
  };
  const decrement = (e) => {
    e.preventDefault();

    setAdd((pre) => (pre === 1 ? pre : pre - 1));
  };

  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: add,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <form className="product__form">
        <div className="quantity">
          <button className="quantity__button" onClick={decrement}>
            -
          </button>
          <input type="text" value={add} />
          <button className="quantity__button" onClick={increment}>
            +
          </button>
        </div>
        <button onClick={addToBasket}>Add toBasket</button>
      </form>
    </div>
  );
}

export default Product;
