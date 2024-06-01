import "./Item.css";
import { memo } from "react";

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

// // 고차 컴퍼넌트 memo를 사용하여 최적화
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // id, isDone, content, date가 변경되었을 때만 리렌더링
//   // T or F를 반환하는 함수를 두 번째 인자로 전달
//   // T -> 리렌더링 X, F -> 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
export default memo(TodoItem);
