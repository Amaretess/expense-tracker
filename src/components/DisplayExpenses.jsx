import React from 'react'
import '../styles/expenseItem.css'
import { expenses } from '../data/expenses';
import ExpenseItem from './ExpenseItem';

const DisplayExpenses = () => {

    return (
        <>
            {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
        </>
    )
}

export default DisplayExpenses
