import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../UI/Card.css";
const ExpensesList = (props) => {
  if (props.filteredData.length === 0 && props.filteredOption.length !== 0) {
    return (
      <Card className="expense-item">
        <p className="expenseListFallBack">There is no item to show</p>
      </Card>
    );
  }

  console.log("Fİltered data");
  console.log(props.filteredOption.length);
  console.log("*******************");

  return (
    <ul classname="expenseList">
      {props.filteredOption === "All" || props.filteredData.length === 0
        ? props.dummyData.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))
        : props.filteredData.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))}
    </ul>
  );
};

export default ExpensesList;
