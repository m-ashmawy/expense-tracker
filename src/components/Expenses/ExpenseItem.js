import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ data }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">${data.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
