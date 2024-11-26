import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const counterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(10);
  return (
    <counterContext.Provider value={[counter, setCounter]}>
      {children}
    </counterContext.Provider>
  );
}

// 특정위치에서 가져다 쓰고 싶으면
// 가져다 쓰고 싶은 위치가 해당 컴포넌트(CounterProvider)의
// 자식 컴포넌트가 되어야 한다.
// CounterProvider(children)으로 프롭스를 내려 받도록 만들고 프롭스를
// 컴포넌트 사이에 넣어준다(자식컴포넌트가 된다)
// -> main.jsx에서 앱을 컴포넌트로 감싸준다

// 전역상태 가져오기
// useContext를 사용해서 전역 상태를 가져올 수 있다.
// 저장소를 인자로 전달해주어 리턴값(value={[counter, setCounter])이 된다.
// 어디서든 꺼내 쓸수 있도록 함수로 한번 감싸서 export 해준다.
export function useCounter() {
  return useContext(counterContext);
}
