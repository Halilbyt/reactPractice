import React, { useEffect, useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [getFilter, setFilter] = useState();

  const selectionHandler = (event) => {
    setFilter(event.target.value);
  };

  if (getFilter !== undefined) {
    props.filterData(getFilter);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectionHandler}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
