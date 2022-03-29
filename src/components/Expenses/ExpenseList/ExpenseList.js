import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = (props) => {
	const expensesContent =
		props.items.length < 1 ? (
			<p>No expenses found.</p>
		) : (
			props.items.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})
		);

	return expensesContent;
};

export default ExpenseList;
