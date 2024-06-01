import "./Item.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => onUpdate(id);
  const onClickDelete = () => onDelete(id);
  return (
    <div className="Item">
      <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};
export default TodoItem;
