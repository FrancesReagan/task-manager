//these are my tools to use//
import { useState } from "react";
import TaskItem from "./TaskItem.jsx";
import TaskFilter from "./TaskFilter.jsx";


  // TaskList Component function//
  // notes to self---tasklist is the name of receipe----useState(tasks) is putting task list into a memory box//
  // tasks is  what I can read from that box-----setTasks--is tool i use to change what is in the box----//

  function TaskList(){
    const [tasks, setTasks] = useState([
    // sample tasks data//
    { 
      id: 1, 
      title: "Complete Mod9SBA", 
      description: "Complete mod9SBA", 
      status: "in progress", 
      priority: "high", 
      dueDate: "06-26-2025" 

    },
     { 
      id: 2, 
      title: "Practice coding", 
      description: "do modern REACT curriculum on Udemy and CodeAcademy",
      status: "pending", 
      priority: "medium", 
      dueDate: "06-22-2025" 
    },
     { 
      id: 3, 
      title: "Meditation best for cleaning up the mind" , 
      description: "silent vipassana mediation for an hour",
      status: "completed", 
      priority: "low", 
      dueDate: "06-21-2025" 
    },
  ]);

  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
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
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  
  //handle filtering//
  const handleFilter = (filterType, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: filterValue,
    }));
  };

  //filter tasks based on the current filters//
  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status === "all" || task.status === filters.status;
    const priorityMatch = filters.priority === "all" || task.priority === filters.priority;
    return statusMatch && priorityMatch;
  });

  return (

    <div className="task-list">
      <h1> Task Management System </h1>
      <TaskFilter onFilter={handleFilter} />
    <div>
    <h2>Tasks({filteredTasks.length})</h2>
    {filteredTasks.length === 0 ? (
       <p className="no-tasks">No tasks match your current filters.</p>
    ):(
      filteredTasks.map((task) => (
        <TaskItem
         key={task.id}
        task={task}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        />
         ))
        )}
        </div>
        </div>
      );
    }

export default TaskList;
