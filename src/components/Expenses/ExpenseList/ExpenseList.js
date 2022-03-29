import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../../core/Card/Card';
import React, { useState } from 'react';
function ExpenseList(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const onExpenseFilterChanged = (filter) => {
		// props.filterExpenses(filter);
		setFilteredYear(filter);
	};

	return (
		<Card className="expenses">
			<ExpenseFilter
				onExpenseFilterChanged={onExpenseFilterChanged}
				selected={filteredYear}
			></ExpenseFilter>

			{props.items
				.filter((exp) => exp.date.getFullYear() === Number(filteredYear))
				.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
		</Card>
	);
}

export default ExpenseList;
