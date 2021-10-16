
const ExpenseFilter=(props)=>
{
const dropdoenChangeHandeler=(event)=>{
    props.onChangeFilter(event.target.value);
};
return(
    <div className="expense-filter">
        <div className="expenxe-filter__control">
            <lable>Filter by year</lable>
            <select value={props.selected} onChange={dropdoenChangeHandeler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
)
}

export default ExpenseFilter;