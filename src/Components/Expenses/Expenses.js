
import ExpensesItems from "./ExpenseItem"
import ExpensesFilter from "./ExpenseFilter"
function Expenses(props){
    const {items} = props
    const filterData = (data) =>{
        props.onFilter(data)
    }
    return(
        <div style={{width:'50rem',backgroundColor:'black',padding:'30px',margin:'auto',borderRadius:'10px'}}>
            <ExpensesFilter onFilter = {filterData}/>
            <ExpensesItems data = {items[0]}/>
            <ExpensesItems data = {items[1]}/>
            <ExpensesItems data = {items[2]}/>
            <ExpensesItems data = {items[3]}/>
        </div>
    )
}
export default Expenses