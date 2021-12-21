import react,{useState} from "react";
import NewExpenses from "./NewExpenses";
import './NewExpensesForm.css'
const NewExpensesForm = (props) =>{
const [title,setTitle]=useState('')
const [amount,setAmount]=useState('')
const [date,setDate] = useState('')

  const titleChangeValue =(event)=>{
      setTitle(event.target.value)
  } 
  const amountChangeValue =(event)=>{
    setAmount(event.target.value)
} 
const dateChangeValue =(event)=>{
    setDate(event.target.value)
} 
const submitBtn = (event) =>{
    event.preventDefault()
    let data = {
        title:title,
        amount:amount,
        date:new Date(date),
        id : Math.random().toString()
    }
    setTitle('')
    setAmount('')
    setDate('')
    props.onFormData(data)
}
    return(
        <>
            <form onSubmit={submitBtn}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeValue} value={title}/>
                    </div>
                    <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeValue} value={amount}/>
                    </div>
                    <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeValue} value={date}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default NewExpensesForm