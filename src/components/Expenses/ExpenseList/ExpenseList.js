import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = (props) => {
	const expensesContent =
		props.items.length < 1 ? (
			<h2 className="expenses-list__fallback">Found no expenses</h2>
		) : (
			props.items.map((expense) => {
				return (
					<ul className="expenses-list" key={expense.id}>
						<ExpenseItem
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					</ul>
				);
			})
		);

	return expensesContent;
};

export default ExpenseList;
