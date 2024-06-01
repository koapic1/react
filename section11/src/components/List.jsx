import "./List.css";
import TodoItem from "./Item";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
const List = () => {
  const todoList = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => setSearch(e.target.value);
  const getFilteredTodo = () => {
    if (search === "") return todoList;
    return todoList.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };
  const filteredTodoList = getFilteredTodo();

  const { total, completed, uncompleted } = useMemo(() => {
    const total = todoList.length;
    const completed = todoList.filter((todo) => todo.isDone).length;
    const uncompleted = total - completed;
    return { total, completed, uncompleted };
  }, [todoList]);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>total: {total}</div>
      <div>completed: {completed}</div>
      <div>uncompleted: {uncompleted}</div>
      <input value={search} onChange={onChangeSearch} placeholder="Search" />
      <div className="todos_wrapper">
        {filteredTodoList.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
