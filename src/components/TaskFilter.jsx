
function TaskFilter ({onFilter}) {
  const [selectOption, setSelectOption] = useState("all");
  return (
<div>
    

    <select  onChange={event => onFilter(event.target.value)}>
      <option value="all">All Properties</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
</div>

  )
}
export default TaskFilter;