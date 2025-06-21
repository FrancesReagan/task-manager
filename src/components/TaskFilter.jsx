select
function TaskFilter ({onFilter}) {
  const [selectOption, setSelectOption] = useState("all");
  return (
<div className="task-filter">
  <h3>Filter tasks</h3>
  <div className="filter-controls">
    <label htmlFor="status-filter"> Status:</label>
<select 
  id="status-filter"
  onChange={(event) => onFilter("status", event.target.value)}
  >
  <option value="all">All Statuses</option>
  <option value="pending">Pending</option>
  <option value=in-progree">In Progress</select>
  <option value="completed">Completed</option>
<  </select>

  </div>
    

    {/* <select  onChange={event => onFilter(event.target.value)}>
      <option value="all">All Properties</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select> */}
</div>

  )
}
export default TaskFilter;