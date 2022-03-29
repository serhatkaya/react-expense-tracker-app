import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../../core/Card/Card';
import React, { useState } from 'react';
function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onExpenseFilterChanged = (filter) => {
		// props.filterExpenses(filter);
		setFilteredYear(filter);
	};

	const filterExpenses = props.items.filter(
		(exp) => exp.date.getFullYear() === Number(filteredYear),
	);

	const expensesContent =
		filterExpenses.length < 1 ? (
			<p>No expenses found.</p>
		) : (
			filterExpenses.map((expense) => {
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

	return (
		<Card className="expenses">
			<ExpenseFilter
				onExpenseFilterChanged={onExpenseFilterChanged}
				selected={filteredYear}
			></ExpenseFilter>
			{expensesContent}
		</Card>
	);
}

export default Expenses;
