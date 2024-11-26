import { createContext, useContext } from "react";
import { useState } from "react";

// 상태 저장소 만들기
const counterContext = createContext();

export const CounterPorvider = ({ children }) => {
  //useState를 사용해서 counter 상태 만들어 주기
  const [counter, setCounter] = useState(0);

  // 만들어둔 상태 저장소에서 CounterPorvider컴포넌트를 꺼내서 리턴
  return (
    <counterContext.Provider
      value={{ counter, setCounter }} // 객체형태로 내보내준다.
    >
      {children}
    </counterContext.Provider>
  );
};

export function useCounter() {
  return useContext(counterContext);
}
// value 속성으로 전역에서 관리하고 싶은 상태를 내보내 줄수 있다.
// 여기에는 배열, 객체, 다른 자료형이든 원하는 형태로 내보내줄 수 있다.
// useState로 만든 상태, 배열 형태로 내보낼때 : 기존의 useState를 사용하듯이 전역 상태를 가져다 사용하기 편하다
// 객체형태로 내보낼 때 : 객체에 키를 사용해서 구조분해 할당으로 내가 원하는 값만 가져다쓸 수 있기 때문에
// 상태와 관련된 여러가지 값들을 내보내야 할때 사용하면 편리하다.
