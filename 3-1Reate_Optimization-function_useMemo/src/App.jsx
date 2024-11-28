import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  //  useMemo로 사용할 함수의 인자로 사용할 상태 만들기
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  // 숫자를 전달받아서 +1을 리턴하는 함수
  const plus1 = useCallback(
    (number) => {
      console.log("plus1 실행됨");
      return number + 1;
    },
    [rerender]
  );

  // useMemo 사용. (첫번쨰인자: 함수, 두번쨰인자: 배열)
  // useMemo : 함수가 호출한 값을 저장!

  // 화면에 변화가 없으나 리렌더링 발생으로 호출 되는 함수 제실행 방지
  // 화면에 변화가 없기때문에 함수를 실행할 필요가 없다.
  const numberPlus1 = useMemo(() => {
    return plus1(number);
  }, [rerender]);
  // 배열 [rerender] 을 넣을 경우 넘버값을 올라가지만 화면에 표시 되지 않음
  // 리렌더의 버튼을 누를경우 쌓인 값과 함께 +1이 되어 반영 됨.

  // 함수가 새롭게 바뀌는지 확인하기
  useEffect(() => {
    // plus1이 바뀌면 콘솔에 표시
    console.log("plus1 생성 됨");
  }, [plus1]);

  return (
    <>
      <NumberDisplay number={number} />
      {/* <div>number:{number}</div> */}
      <div>numberPlus1:{numberPlus1}</div>
      <button onClick={() => setNumber(number + 1)}>number +1</button>
      <button onClick={() => setRerender(!rerender + 1)}>Rerender</button>
    </>
  );
}

// memo 사용하기. 리렌더링 방지
// 전달받는 props가 동일할때만 가능 하다.
const NumberDisplay = memo(({ number }) => {
  console.log("display 렌더링");
  return <div>number: {number}</div>;
});

export default App;
