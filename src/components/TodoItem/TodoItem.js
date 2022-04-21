const TodoItem = (props) => {
  return (
    <>
      <p>{props.item.value}</p>
      <p>
        {props.item.date.toLocaleDateString()}
        {props.item.date.toLocaleTimeString()}
      </p>
      <input
        value={props.item.checked}
        type="checkbox"
        onChange={() => props.onCheked(props.item.id)}
      />
      <button onClick={() => props.onEdit(props.item.id)}>Edit</button>
      <button onClick={() => props.onRemove(props.item.id)}>Remove</button>
    </>
  );
};
export default TodoItem;
