import "./App.css";
import Header from "./components/Head";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo));
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);
  const onCreate = useCallback((content) => {
    dispatch({ type: "CREATE", data: { id: idRef.current++, isDone: false, content: content, date: new Date().getTime() } });
  }, []);
  const onUpdate = useCallback((id) => dispatch({ type: "UPDATE", id }), []);
  const onDelete = useCallback((id) => dispatch({ type: "DELETE", id }), []);
  const memoizedDispatch = useMemo(() => ({ onCreate, onUpdate, onDelete }), []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todoList}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
