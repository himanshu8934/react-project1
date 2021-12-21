import react from "react";
import NewExpensesForm from "./NewExpensesForm";
import './NewExpenses.css'
const NewExpenses = (props) =>{
    const FormData =(data) =>{
       props.onNewExpenseData(data)
    }
    return(
        <>
            <div className="new-expense">
                <NewExpensesForm onFormData={FormData}/>
            </div>
        </>
    )
}

export default NewExpenses