import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => setContent(e.target.value);
  const onKeyPress = (e) => e.key === "Enter" && onSubmit();
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input ref={contentRef} placeholder="New Todo..." value={content} onChange={onChangeContent} onKeyDown={onKeyPress} />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
