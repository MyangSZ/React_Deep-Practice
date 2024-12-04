import { useEffect, useState } from "react";

export default function FavoriteButton({ animalId }) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/favorite")
      .then((res) => res.json())
      .then((res) => {
        setFavorites(res);
        res.includes(animalId) ? setIsFavorite(true) : null;
      });
  }, [isFavorite]);

  const handeler = () => {
    const method = isFavorite ? "DELETE" : "POST";
    fetch(`http://localhost:3000/api/favorite/${animalId}`, { method }).then(
      (res) => setIsFavorite((prev) => !prev)
    );
  };

  return <span onClick={handeler}>{isFavorite ? "🩷" : "🤍"}</span>;
}
