import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMounted = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // deps 는 빈배열 최초에만 실행

  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("update");
  }); // 업데이트가 될 때마다 실행, deps가 없음

  // 3. 언마운트 : 소멸

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
