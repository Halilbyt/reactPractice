import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getDataHandler = (inputData) => {
    props.onAddData(inputData);
  };

  const [expenseItem, setExpenseItem] = useState(null);
  const statusHandler = (param) => {
    if (param === "canceled") {
      setExpenseItem(null);
    }
  };

  const onClickHandler = () => {
    setExpenseItem(
      <ExpenseForm
        onGettingExpenseData={getDataHandler}
        getStatus={statusHandler}
      />
    );
  };

  return (
    <div className="new-expense">
      {expenseItem === null ? (
        <button onClick={onClickHandler}>Add New Expense</button>
      ) : (
        expenseItem
      )}
    </div>
  );
};

export default NewExpense;
