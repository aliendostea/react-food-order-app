import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const priceFormated = `$${price.toFixed(2)} `;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3> {name} </h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormated}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
