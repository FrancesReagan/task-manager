
function TaskFilter ({onFilter}) {
  // const [selectOption, setSelectOption] = useState("all");
  return (
<div className="task-filter">
  <h3>Filter tasks</h3>
  <div className="filter-controls">
 <div>
    <label htmlFor="status-filter"> Status:</label>
<select 
  id="status-filter"
  onChange={(event) => onFilter("status", event.target.value)}>
  <option value="all">All Statuses</option>
  <option value="pending">Pending</option>
  <option value="in-progress">In Progress</option>
  <option value="completed">Completed</option>
</select>

  </div>
    
<div> 
  <label htmlFor="priority-filter">Priority:</label>
    <select  
      id="priority-filter"
      onChange={(event) => onFilter("priority",event.target.value)}>
      <option value="all">All Priorities</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
</div>
</div>
 </div>
  );
}
export default TaskFilter;