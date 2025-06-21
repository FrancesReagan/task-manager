
//TaskItem Component//
function TaskItem({task, onStatusChange, onDelete}){

    return(
        <div>
            <h2>
                Task Item
            </h2>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.priority}</p>
            <p>{task.dueDate}</p>
            
      <select onChange={event => onStatusChange(task.id, event.target.value)}>     
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
    </select>

    <button onClick={() => onDelete (task.id)}> X </button> 
    </div>
          
    )
}
export default TaskItem;