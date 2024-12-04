import { data, favorites } from "../../../../assets/data/data";

export default function handler(req, res) {
  // 찜한 목록 데이터만 불러오도록
  const favoriteAnimals = data.filter((animal) =>
    favorites.includes(animal.id)
  );
  res.status(200).json(favoriteAnimals);
}
