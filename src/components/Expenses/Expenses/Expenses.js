import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import Card from '../../core/Card/Card';
import React, { useState } from 'react';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onExpenseFilterChanged = (filter) => {
		setFilteredYear(filter);
	};

	const filteredExpenses = props.items.filter(
		(exp) => exp.date.getFullYear() === Number(filteredYear),
	);

	return (
		<Card className="expenses">
			<ExpenseFilter
				onExpenseFilterChanged={onExpenseFilterChanged}
				selected={filteredYear}
			></ExpenseFilter>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpenseList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
