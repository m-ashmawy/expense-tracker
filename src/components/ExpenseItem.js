import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.data.date.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;