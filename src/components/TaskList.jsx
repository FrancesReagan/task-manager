//these are my tools to use//
import { useState } from "react";
import TaskItem from "./TaskFilter";
import TaskFilter from "./TaskItem";


  // TaskList Component function//
  // notes to self---tasklist is the name of receipe----useState(tasks) is putting task list into a memory box//
  // tasks is  what I can read from that box-----setTasks--is tool i use to change what is in the box----//

  function TaskList(){
    const [tasks, setTasks] = useState([
    // sample tasks data//
    { 
      id: 1, 
      title: "task1", 
      description: "Complete mod9SBA", 
      status: "pending", 
      priority: "high", 
      dueDate: "06-26-2025" 

    },
     { 
      id: 2, 
      title: "task2", 
      description: "do modern REACT curriculum on Udemy and CodeAcademy",
      status: "pending", 
      priority: "medium", 
      dueDate: "06-22-2025" 
    },
     { 
      id: 3, 
      title: "task3", 
      description: "silent vipassana mediation for an hour",
      status: "complete", 
      priority: "low", 
      dueDate: "06-20-2025" 
    },
  ]);

  const [filters, setFilters] = useState({
    status: "ALL",
    priority: "ALL",
  });


    //status change function//
    // notes to self---handleStatusChange is name of another receipe --this one changes status of a task

    //(taskId, newStatus)---taskId is task I want to change----newStatus---is what the new will status be//
    //and of course => means when you call the handleStatusChange function do this stuff {----}//
    // "Create a function called handleStatusChange that takes two pieces of information (which task and what new status), 
    // and when someone calls it, it will do the work inside the curly braces."//

      // setTasks---is tool to use to put new stuff in the box---
      // tasks.map(task => ...) means going through my list one by one ---then task.id === taskId? is asking are you 
      //the task I want to change? if yes --then {...task, status: newStatus}---...task means copy all from this task
      //, status: newStatus --means but change the status to the new one----if no--:task---keep it the same
    //  Handle status changes//
      const handleStatusChange = (taskId, newStatus) => {
      setTasks(tasks.map((task) => 
        task.id === taskId ? {...task, status: newStatus} : task 
      ));
    };

// Handle deleting a task (passed down to -> onDelete)
  const handleDelete = (taskId) => {
    const updatedTasks = tasksState.filter((task) => task.id !== taskId);
    setTaskState(updatedTasks);
  };
  

  return (
    
    <div>
      {/* <Task Filter onFilter={handleFilter}/> */}
      <ul>

      <li>{tasks.map((task) => (
        // for each task in our list--we create a TaskItem component----pasing info to taskitem with task={task}...
        // onStatusChange={handleStatusChange}---giving each taskitem a special tool --the handlestatuschange function
        //so that I can known when something needs to be changed------//
        <TaskItem
        key={task.id}
        task={task}
        onChange={() =>
          console.log(`Changing status for task with ID:${task}`)
          }
        onDelete(task.id)
        />
      </li>
      ))}
      </ul>
    
    

    </div>
  )
  }
}
export default TaskList;
