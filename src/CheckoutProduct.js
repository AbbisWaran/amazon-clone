import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <form>
          <div className="quantity">
            <h4>Quantity: {quantity}</h4>
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutProduct;
