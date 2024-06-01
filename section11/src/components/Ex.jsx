import { useReducer } from "react";

// 상태를 실제로 변화시키는 역할
function reducer(state, action) {
  // state -> 현재 상태
  // action -> 상태를 변화시키는 정보
  // return -> 변화된 상태

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Ex = () => {
  // dispatch -> 상태변화 사실을 알림
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => dispatch({ type: "INCREASE", data: 1 });
  const onClickMinus = () => dispatch({ type: "DECREASE", data: 1 });
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default Ex;
