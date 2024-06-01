import "./App.css";
import Header from "./components/Head";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todoList, setTodoList] = useState([]);
  const idRef = useRef(1);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodoList([newTodo, ...todoList]);
  };
  const onUpdate = (id) => setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  const onDelete = (id) => setTodoList(todoList.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todoList={todoList} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
