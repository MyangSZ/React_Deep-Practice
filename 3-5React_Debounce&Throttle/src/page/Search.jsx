import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { useEffect, useRef, useState } from "react";

// function Search() {
//   const [searchParams] = useSearchParams();
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

//   const filteredData = data.filter((el) => el.name.match(reg));

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

//debounce - 마지막 입력만 묶어서 처리.
// 텀을 두고 감시를 하기 때문에 타이머 함수 필요

// function Search() {
//   const [searchParams] = useSearchParams();
// 변수 filteredData를 변경될 떄 화면에 표시되도록 상태로 만들기
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

// Debounce
// 1초 뒤에 필터링 데이터 업데이트
//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       const newfilteredData = data.filter((el) => el.name.match(reg));
//       setFilteredData(newfilteredData);
//     }, 1000);
//     // 바뀔 때마다 타이머 다시설정이 필요하므로 리턴으로 타이머 없애기
//     return () => clearTimeout(debounceTimer);
//   }, [param]);

//   // const filteredData = data.filter((el) => el.name.match(reg));

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Throttle
// 유동성 있는 타이머

function Search() {
  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const param = searchParams.get("animal");
  const reg = getRegExp(param);
  // 리렌더링이 발생해도 시간이 날아가지 않도록 useRef로 만들기
  const time = useRef(new Date());

  // param가 들어올 떄 마다 useEffect 실행될 떄 시간 기록
  useEffect(() => {
    const newTime = new Date();
    // 타이머 설정
    const throttleTimer = setTimeout(() => {
      // 타이머가 끝났을 때 새로운 이벤트 발생없을 시 상태 업데이트(검색어업데이트)
      const newFilteredData = data.filter((el) => el.name.match(reg));
      setFilteredData(newFilteredData);
      // 시간 기준 바꿔주는 코드
      time.current = new Date();
    }, 1000 - (newTime - time.current));
    return () => clearTimeout(throttleTimer);
  }, [param]);

  // const filteredData = data.filter((el) => el.name.match(reg));

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Search;
