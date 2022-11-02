import classes from "./MealItem.module.css";
import { useState } from "react";

export function MealItem(props) {
  const price = props.price.toFixed(2);

  const [Total, setTotal] = useState(price);
  const [Count, setCount] = useState(1);

  function handInkrement() {
    setCount(Count + 1);
    setTotal((prev) => +prev + props.price);
  }
  function decrement() {
    if (Count > 0) {
      setCount(Count - 1);
      setTotal((prev) => +prev - props.price);
    }
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <div>{Count}</div>
        <button onClick={handInkrement} className={classes.counter}>
          +
        </button>
        <button onClick={decrement} className={classes.counter}>
          -
        </button>
        <div>total: {Number(Total).toFixed(2)} </div>
      </div>
    </li>
  );
}
