import "./List.css";
import TodoItem from "./Item";
import { useState } from "react";
const List = ({ todoList, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => setSearch(e.target.value);
  const getFilteredTodo = () => {
    if (search === "") return todoList;
    return todoList.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };
  const filteredTodoList = getFilteredTodo();
  return (
    <div className="List">
      <h4>Todo List</h4>
      <input value={search} onChange={onChangeSearch} placeholder="Search" />
      <div className="todos_wrapper">
        {filteredTodoList.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
