import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
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
  )
}