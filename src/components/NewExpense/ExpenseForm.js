import React, { useState } from "react";
import "./NewExpense.css";
import { Alert } from "reactstrap";

const ExpenseForm = (props) => {
  const [getTitle, setTitle] = useState("");
  const [getAmount, setAmount] = useState("");
  const [getDate, setDate] = useState("");
  const [alert, setAlert] = useState(false);

  // alternative :
  /*const [inputValues, setInputValues] = useState({
    title: "",
    amount: "",
    date: "",
  });
  */

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    /* incorrect way
    setInputValues({
      ...inputValues,
      title: event.target.value,
    });
    */

    /* corrent way:
    setInputValues((prevState)=>{
      return {...prevState,title:event.target.value}
    })
    */
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      getTitle.length !== 0 &&
      getAmount.length !== 0 &&
      getDate.length !== 0
    ) {
      const data = {
        id: (Math.floor(Math.random() * 100) + 1).toString(),
        title: getTitle,
        amount: "$ " + getAmount,
        date: new Date(getDate),
      };
      props.onGettingExpenseData(data);
      // to clear input text area
      setDate("");
      setTitle("");
      setAmount("");
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  const cancelHandler = () => {
    props.getStatus("canceled");
  };

  const alertBoxShow = (
    <Alert className="alert" color="danger">
      Please make sure fulfill all blank area!
    </Alert>
  );

  return (
    <form className="formContainer" onSubmit={submitHandler}>
      <div className="controls">
        <div className="control">
          <label className="labels">Title</label>
          <input type="text" onChange={titleChangeHandler} value={getTitle} />
        </div>
        <div className="control">
          <label className="labels">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={getAmount}
          />
        </div>
        <div className="control">
          <label className="labels">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-02-02"
            onChange={dateChangeHandler}
            value={getDate}
          />
        </div>
        <div className="actions">
          <button>Add Expense</button>
          <button onClick={cancelHandler}>Cancel</button>
          {alert && alertBoxShow}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
