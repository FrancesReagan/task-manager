
//TaskItem Component//
function TaskItem({task, onStatusChange, onDelete}){

    return(
        <div className={`task-item task-item-${task.status}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong>{task.priority}</p>
            <p><strong>Due Date:</strong>{task.dueDate}</p>
            <p><strong>Status:</strong>{task.status}</p>
            
            
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