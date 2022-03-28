import "./ExpenseListComponent.css";
import ExpenseItemComponent from "../ExpenseItem/ExpenseItemComponent";
import CardComponent from "../../core/Card/CardComponent";
function ExpenseListComponent(props) {
  return (
    <CardComponent className="expenses">
      <ExpenseItemComponent
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItemComponent>
    </CardComponent>
  );
}

export default ExpenseListComponent;
