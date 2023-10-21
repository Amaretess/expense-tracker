import React from 'react'
import '../styles/expenseDate.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = ({ expense }) => {


    let title = expense.title;

    const handleClick = () => {
        title = 'Updated!'
    }

    return (
        <div>
            <Card className='expense-item'>
                <ExpenseDate expense={expense} />
                <div className="expense-item_description">
                    <h2>{title}</h2>
                    <div className="expense-item_price">${expense.amount}</div>
                </div>
                <button onClick={handleClick}>Change Title</button>
            </Card>
        </div>
    )
}

export default ExpenseItem;
