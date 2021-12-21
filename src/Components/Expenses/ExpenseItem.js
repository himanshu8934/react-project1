import './ExpenseItem.css'
import ExpensesDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpensesItems(props){
    const {data} = props
    return(
        
        <Card className="expenses-item">
        <div className='expenses-item_left'>
            <ExpensesDate date = {data.date}/>
            <p>{data.title}</p>
        </div>
        <div className='expenses-amount'>
        <p >${data.amount}</p>
        </div>
       
        </Card>
    )
}
export default ExpensesItems