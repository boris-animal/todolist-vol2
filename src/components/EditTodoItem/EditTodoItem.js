import DateTimePicker from "react-datetime-picker";

const EditTodoItem = (props) => {
  return (
    <>
      <input
        value={props.value}
        onChange={(event) => props.onSetEdit(event.target.value)}
      />
      <DateTimePicker value={props.dateValue} onChange={props.onDateChange} />
      <div>
        <button onClick={() => props.onSave(props.item.id)}>Save</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </>
  );
};
export default EditTodoItem;
