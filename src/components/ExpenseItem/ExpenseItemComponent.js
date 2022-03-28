import "./ExpenseItemComponent.css";
import ExpenseDateComponent from "../ExpenseDate/ExpenseDateComponent";
import CardComponent from "../Card/CardComponent";

function ExpenseItemComponent(props) {
  return (
    <CardComponent className="expense-item">
      <ExpenseDateComponent date={props.date}></ExpenseDateComponent>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </CardComponent>
  );
}

export default ExpenseItemComponent;
