import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./page/Main"));
const Detail = lazy(() => import("./page/Detail"));
const Search = lazy(() => import("./page/Search"));

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            // onCLick이벤트가 onChage에서도 발생하도록 만들기
            // 내용에 따라 주소창도 바뀌게 하는 이벤트로 바꿔준다.
            // 온체인지 이벤트에서는 이벤트 타겟 벨류룰 받아서 업데이트 해준다.
            // 인풋 벨류 상태를 변경하려고 하고 있기 때문에
            // 인풋 벨류는 변경 이전의 상태이므로 최신값을 받아서 url을 업데이트 하기 위해서 target.value로 사용
            navigate(`/search?animal=${event.target.value}`);
          }}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          검색
        </button>
      </header>
      <Suspense fallback={<h1>로딩중.....</h1>}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Suspense>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
