import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../UI/Card.css";
import { Button } from "reactstrap";

export default function ExpenseItem(props) {
  const [getTitle, setTitle] = useState(props.title);
  console.log("Rendered");
  function clickHandler() {
    setTitle("Title has been changed!");
    console.log("Title changed");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <Button onClick={clickHandler}>Change Title</Button>
      </div>
    </Card>
  );
}
