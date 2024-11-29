// 서버에서 데이터를 받아올 때
import axios from "axios";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export default function ServerTodo() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  const fetchData = useCallback(() => {
    axios.get("http://localhost:4000").then((res) => setTodo(res.data));
  }, []);

  const addTodo = useCallback(() => {
    axios
      .post("http://localhost:4000", inputRef.current.value)
      .then(() => fetchData());
  }, []);

  const updateTodo = useCallback((id, newContent) => {
    axios
      .put("http://localhost:4000", { id, newContent })
      .then(() => fetchData());
  }, []);

  const deleteTodo = useCallback((id) => {
    axios
      .delete("http://localhost:4000", { data: { id } })
      .then(() => fetchData());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>To Do List</h1>
      <div id="todo-input">
        <input type="text" placeholder="할 일을 입력하세요" ref={inputRef} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <ul id="todo-list">
        {todo.map((el) => (
          <List
            key={el.id}
            {...el}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}

// memo 사용하기
// props 값 확인. 값의 특수성에 따라 로직이 수정되어야 될 수 있다.
const List = memo(({ id, content, updateTodo, deleteTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <li>
      {content}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          updateTodo(id, inputValue);
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        X
      </button>
    </li>
  );
});
