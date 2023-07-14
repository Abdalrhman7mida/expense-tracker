import './ExpenseItem.css'
import Card from '../UI/Card'
import {ExpenseDate} from './ExpenseDate'
import { useState } from 'react';

interface Props {
    title: string;
    amount: number;
    date: Date
}

export const ExpenseItem = (props: Props) => {
    const {amount, date} = props;
    const [title, setTitle] = useState(props.title);
    
    const handleClick = () => {
        setTitle("new titlle");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date= {date}/>
            
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <button onClick={handleClick}>change title</button>
            </div>
        </Card>
    )
}