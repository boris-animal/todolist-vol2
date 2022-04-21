import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem/TodoItem.js";
import EditTodoItem from "./EditTodoItem/EditTodoItem.js";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodoListValue, setEditTodoListValue] = useState("");
  const [idOfEditTodoListValue, setIdOfEditTodoListValue] = useState(null);
  const [editDateTimeValue, setEditDateTimeValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const todoItemValue = {
      value: inputValue,
      date: inputDateValue,
      checked: false,
      id: uuidv4(),
    };
    setTodoList([todoItemValue, ...todoList]);

    setInputValue("");
    setInputDateValue("");
  };

  const setChecked = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (id === item.id) {
        return { ...item, checked: !item.checked };
      } else {
        return { ...item };
      }
    });
    setTodoList(updatedTodoList);
  };

  const onRemoveClick = (id) => {
    const removedItemTodoList = todoList.filter((item) => id !== item.id);
    setTodoList(removedItemTodoList);
  };

  const onEditClick = (id) => {
    setIdOfEditTodoListValue(id);
    const editedItem = todoList.find((item) => id === item.id);
    setEditTodoListValue(editedItem.value);
    setEditDateTimeValue(editedItem.date);
  };

  const onSaveClick = (saveId) => {
    const newValueOfEdit = todoList.map((item) => {
      if (saveId === item.id) {
        return { ...item, value: editTodoListValue, date: editDateTimeValue };
      }
      return { ...item };
    });
    setTodoList(newValueOfEdit);
    setEditTodoListValue("");
    onCancelClick();
  };

  const onCancelClick = () => {
    setIdOfEditTodoListValue(null);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <DateTimePicker
          required
          value={inputDateValue}
          onChange={setInputDateValue}
        />
        <button>Add</button>
      </form>
      <div>
        {todoList.map((todoListItem) => {
          return (
            <div key={todoListItem.id}>
              {idOfEditTodoListValue === todoListItem.id ? (
                <EditTodoItem
                  value={editTodoListValue}
                  onSave={onSaveClick}
                  onCancel={onCancelClick}
                  onSetEdit={setEditTodoListValue}
                  dateValue={editDateTimeValue}
                  onDateChange={setEditDateTimeValue}
                  item={todoListItem}
                />
              ) : (
                <TodoItem
                  item={todoListItem}
                  onRemove={onRemoveClick}
                  onEdit={onEditClick}
                  onCheked={setChecked}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todolist;
