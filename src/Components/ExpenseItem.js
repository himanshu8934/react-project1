import './ExpenseItem.css'
import ExpensesDate from './ExpenseDate'

function ExpensesItems(props){
    const {data} = props
    return(
        <div className="expenses-item">
        <div className='expenses-item_left'>
            <ExpensesDate date = {data.date}/>
            <p>{data.title}</p>
        </div>
        <div className='expenses-amount'>
        <p >${data.amount}</p>
        </div>
       
        </div>
    )
}
export default ExpensesItems