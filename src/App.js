import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";

const INITIAL_DATA = [
  {
    id: "51",
    title: "MacBook Pro",
    amount: "$ 1,530,00",
    date: new Date("2022-10-11"),
  },
  {
    id: "21",
    title: "42'' Monitor",
    amount: "$ 950,00",
    date: new Date("2019-05-11"),
  },
  {
    id: "61",
    title: "PC MSI Gaming",
    amount: "$ 3,290,99",
    date: new Date("2021-02-21"),
  },
  {
    id: "11",
    title: "IPhone 14 Pro Max",
    amount: "$ 1,255,99",
    date: new Date("2021-01-23"),
  },
];

function App() {
  const [getData, setData] = useState(INITIAL_DATA);

  const addNewDataHandler = (newData) => {
    setData((prev) => {
      return [newData, ...prev];
    });
  };

  return (
    <div className="body">
      <NewExpense onAddData={addNewDataHandler} />
      <Expenses dummyData={getData} />
    </div>
  );
}
export default App;

// state'leri sbling state'e aktar ve bunun ile ilgili çalımayı yap...
