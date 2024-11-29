import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

// lazy 사용하기
// 인자로 함수 전달. import 함수가 페이지가 있는 경로 전달받는 형태
const Main = lazy(() => import("./page/Main"));
// 디테일 페이지
const Detail = lazy(() => import("./page/Detail"));
// 서치 페이지
const Search = lazy(() => import("./page/Search"));

// import Main from "./page/Main";
// import Detail from "./page/Detail";
// import Search from "./page/Search";

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          검색
        </button>
      </header>
      {/* Suspense사용하기 */}
      <Suspense fallback={<h1>로딩중...</h1>}>
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
