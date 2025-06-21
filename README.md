
<img width="552" alt="image" src="https://github.com/user-attachments/assets/fe87515b-53a3-4c45-84f3-a32caa178f33" />

***To see Task Management System App in action click link***
[Task Management System App in Action](https://github.com/FrancesReagan/task-manager/blob/main/public/Task%20Management%20%20System%20App%20How%20it%20works%20a.mp4)

(note Reflection answers at bottom)



# Task Management System App #

A clean, functional, scaleable task manager that is built with React and Vite. This app enables you to organize your tasks, track progress, and so stay productive.

##Features
  -Task Management
  -Status Tracking
  -Priority Levels
  -Smart Filtering
  -Real-time Updates

  ##How to install and uss this task management system app

  -Installationg-
  clone the repository




## Title

##Reflection Answers:

*How did you ensure unique keys for your list items?

 -I created unique keys by using each task's ID property in my map function. I choose task.id as it is a stable(unchanging) and unique identifier for each task.
  This ensures that React can track changes when tasks are added, removed, or reordered. The ID-based strategy works well as each task maintains its identity throughout
  its lifecycle in the app.

*What considerations did you make when implementing the filtering functionality?

 -The filtering system is designed to handle multiple criteria all at once. I chose to store the filter state as an object so that filters that are related stay organized. Better organization makes for better code usually:).
 
  Choices my cohort and I made were to combine filtering logic (filters will work together using 'AND' logic--meaning tasks must match both status and priority filters
  to be displayed. We used "all" option handling as when a filter is set to "all" it will disable the filter criteria. As filters apply immediately when changed this provides instant feedback to those who use the app. As we used a single filter object it makes it very easy to add new kinds of filter types and so makes the code easily expandable....
  
  -const statusMatch = filters.status === "all" || task.status ===filters.status;
  -const priorityMatch = filters.priority === "all" || task.priority === filters.priority;
  -return statusMatch && priorityMatch;

  This approach provides users with precise control over which tasks they see.

  *How did you handle state updates for task status changes?

  I implemented immutable state updates that work with React's rendering system quite well:

  const handleStatusChange = (taskid, newStatus) => {
  setTasks (tasks.map((task) =>
  task.id === taskid ? {...task, status: newStatus) : task
  ));
  };

*what was implemented:
  - I used the spread operator(...task) to create new task objects instead of modifying existing ones; targeted updates (only the task being changed gets a new object--the other tasks stay unchanged.
  - Used the map function to create a new array all the while preserving the order and updating only the item desired to update. All of this ensures that React will recognize the change and trigger the desired re-renders.  All of the above maintains data integrity while giving easy user interactions with the app.
 - To enhance the user's experience I implemented many conditional rendering patterns, namely:
   -Empty state handling
   -Dynamic styles based on task status
   -User Feedback
   -Dynamic CSS classes
   -Task count diplay
   -Elegant updates
   -Template literals
   -Ternary operators
   -Responi rendering

The conditional rendering system provides those who use the app a pleasant experience (helpful feedback, visual cues, clean and responsive interface. Each of the rendering
choices serve a specific goal of the user---the user will see visual status indicators and informatinve empty states.
  
  
   



