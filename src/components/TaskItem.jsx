
//TaskItem Component//
function TaskItem({task, onStatusChange, onDelete}){

    return(
        <div className={`task-item task-item-${task.status}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong>{task.priority}</p>
            <p><strong>Due Date:</strong>{task.dueDate}</p>
            <p><strong>Status:</strong>{task.status}</p>
        <div className="task-actions">
            <select
                value={task.status}
                onChange={(event) => onStatusChange(task.id, event.target.value)}
                className="status-select">
                
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <button onClick={() => onDelete (task.id)}
              className="delete-button">
                Delete
             </button> 

        </div>
    </div> 
    );
}
export default TaskItem;