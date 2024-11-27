import React from "react";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";

// action 객체
const increment1 = {
  type: "increment1",
};

const decrement1 = {
  type: "decrement1",
};

const increment2 = {
  type: "increment2",
};

const decrement2 = {
  type: "decrement2",
};

// reducer
const counter1Reducer = (state = 3, action) => {
  switch (action.type) {
    case "increment1":
      return state + 1;
    case "decrement1":
      return state - 1;
    default: // 기본값을 유지하는 값.(꼭 만들어줘야한다)
      return state;
  }
};

const counter2Reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment2":
      return state + 1;
    case "decrement2":
      return state - 1;
    default: // 기본값을 유지하는 값.(꼭 만들어줘야한다)
      return state;
  }
};

// 여러개의 함수를 합쳐줄수 있는 함수
const rootReducer = combineReducers({ counter1Reducer, counter2Reducer });

// 저장소 만들기
// redux-thunk 미들웨어로 연결하기
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

function App() {
  const counter1 = useSelector((state) => state.counter1Reducer);
  const counter2 = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch(); // 액션을 만들어서 디스패치로 전달받기

  return (
    <>
      <div>Counter1 : {counter1} </div>
      <button // thunk로 함수 전달하기
        onClick={() =>
          dispatch((dispatch) => {
            // 전달인자 dispatch를 받아와야 한다.
            setTimeout(() => {
              dispatch(increment1);
            }, 1000); // 카운터1의 값을 1초 뒤에 증가 시킨다.
          })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch((dispatch) => {
            setTimeout(() => {
              dispatch(decrement1);
            }, 1000);
          })
        }
      >
        -
      </button>

      <div>Counter2 : {counter2} </div>
      <button onClick={() => dispatch(increment2)}>+</button>
      <button onClick={() => dispatch(decrement2)}>-</button>
    </>
  );
}

export default App;
