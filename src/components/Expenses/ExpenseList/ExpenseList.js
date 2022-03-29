import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../core/Card/Card';
function ExpenseList(props) {
	return (
		<Card className="expenses">
			<ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			></ExpenseItem>
		</Card>
	);
}

export default ExpenseList;
