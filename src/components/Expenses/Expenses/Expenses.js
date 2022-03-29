import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
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

	return (
		<Card className="expenses">
			<ExpenseFilter
				onExpenseFilterChanged={onExpenseFilterChanged}
				selected={filteredYear}
			></ExpenseFilter>
			<ExpenseList items={filterExpenses} />
		</Card>
	);
}

export default Expenses;
