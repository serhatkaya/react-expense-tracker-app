import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
	const onSaveExpenseData = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={onSaveExpenseData} />
		</div>
	);
};

export default NewExpense;
