
<img width="552" alt="image" src="https://github.com/user-attachments/assets/fe87515b-53a3-4c45-84f3-a32caa178f33" />

***To see Task Management System App in action click link***
[Task Management System App in Action](https://github.com/FrancesReagan/task-manager/blob/main/public/Task%20Management%20%20System%20App%20How%20it%20works%20a.mp4)

(note Reflection answers at bottom)



# Task Manager




## Title

##Reflection Answers:
*How did you ensure unique keys for your list items?
 -I created unique keys by using each task's ID property in my map function. I choose task.id as it is a stable(unchanging) and unique identifier for each task.
  This ensures that React can track changes when tasks are added, removed, or reordered. The ID-based strategy works well as each task maintains its identity throughout
  its lifecycle in the app.

*What considerations did you make when implementing the filtering functionality?
 -The filtering system is designed to handle multiple criteria all at once. I choose to store the filter state as an object so that related filters are organized.
  Choices my cohort and I made were to combine filtering logic (filters will work together using AND logic--meaning tasks must match both status and priority filters
  to be displayed.
  
   



