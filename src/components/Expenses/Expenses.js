import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterDataHandler = (filteredData) => {
    setFilteredYear(filteredData);
  };

  const filteredNewData = props.dummyData.filter((item) => {
    if (filteredYear === "All") {
      return props.dummyData;
    } else {
      return item.date.toString().split(" ")[3] === filteredYear;
    }
  });

  return (
    <div className="expenses">
      <ExpenseFilter filterData={filterDataHandler} />
      <ExpensesChart expenses={filteredNewData} />
      <ExpensesList
        filteredData={filteredNewData}
        filteredOption={filteredYear}
        dummyData={props.dummyData}
      />
    </div>
  );
}

export default Expenses;
