import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("tr-TR", { day: "2-digit" });
  const month = props.date.toLocaleString("tr-TR", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="date-container">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
