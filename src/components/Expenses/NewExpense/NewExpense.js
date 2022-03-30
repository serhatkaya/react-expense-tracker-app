import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const onSaveExpenseData = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const onAddNewExpenseClicked = () => {
		setIsEditing(true);
	};

	const onCancelNewExpenseClicked = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={onAddNewExpenseClicked}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={onSaveExpenseData}
					onCancelNewExpense={onCancelNewExpenseClicked}
				/>
			)}{' '}
		</div>
	);
};

export default NewExpense;
