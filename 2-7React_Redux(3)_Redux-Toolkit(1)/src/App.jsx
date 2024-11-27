import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});

// Thunk 기능 사용해보기
const slowInrementThunk = createAsyncThunk(
  // 두개의 인자 작성. 액션타입, 작동함수코드
  "counter/slowIncrement",
  (value, { dispatch }) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.decrement());
    }, 1000);
  }
);

// 스토어 만들기 (메인jsx에 연결위해 export)
export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

function App() {
  // 만든 상태 연결한 것을 가져오기
  // useSelector로 함수형태로 상태 가져오기
  const counter = useSelector((state) => state.counter);

  // dispatch 이용해 상태 변경하기 (useDispatch 호출(임폿))
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter : {counter}</div>
      <button
        onClick={() => {
          // 액션 객체 만들어 넣기
          dispatch(counterSlice.actions.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(slowInrementThunk());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
