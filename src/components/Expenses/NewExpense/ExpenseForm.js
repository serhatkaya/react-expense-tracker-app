import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
	//Multiple state
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Single state
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const onTitleChanged = (event) => {
		setEnteredTitle(event.target.value);
		// Single state way 1-
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });

		// // 2- ***Better way to do it
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// });
	};
	const onDateChanged = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
	};
	const onAmountChanged = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredAmount('');
		setEnteredDate('');
		setEnteredTitle('');
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={enteredTitle}
						onChange={onTitleChanged}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={onAmountChanged}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						type="date"
						min="2019-01-01"
						value={enteredDate}
						onChange={onDateChanged}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
