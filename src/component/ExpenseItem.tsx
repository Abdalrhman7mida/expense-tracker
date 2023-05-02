import './ExpenseItem.css'
import Card from './Card'
import {ExpenseDate} from './ExpenseDate'

interface Props {
    title: string;
    amount: number;
    date: Date
}

export default function ExpenseItem({title, amount, date}: Props) {
    
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date= {date}/>
            
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </Card>
    )
}