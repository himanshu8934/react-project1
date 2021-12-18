
import ExpensesItems from "./ExpenseItem"
function Expenses(props){
    const {items} = props
    console.log(props.name)

    return(
        <div>
            
            <ExpensesItems data = {items[0]}/>
            <ExpensesItems data = {items[1]}/>
            <ExpensesItems data = {items[2]}/>
            <ExpensesItems data = {items[3]}/>
        </div>
    )
}
export default Expenses