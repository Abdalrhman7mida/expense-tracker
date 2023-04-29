import './ExpenseItem.css'

interface Props {
    title: string;
    amount: number;
    date: Date
}

export default function ExpenseItem({title, amount, date: expenseDate}: Props) {
    const year = expenseDate.getFullYear();
    const month = expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});
    // const formattedDate: string = `${month} ${year} ${day}`
    
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </div>
    )
}