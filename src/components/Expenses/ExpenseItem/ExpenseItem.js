import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../core/Card/Card';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const onChangeTitleButtonClick = () => {
		console.log('clicked');
		setTitle('Car Body Kit');
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={onChangeTitleButtonClick}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
