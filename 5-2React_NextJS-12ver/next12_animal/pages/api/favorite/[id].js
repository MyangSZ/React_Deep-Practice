import { favorites } from "../../../assets/data/data";

export default function handler(req, res) {
  const animalId = Number(req.query.id);

  // req.method 종류 :  get, post, deldte, patch, put
  if (req.method === "POST") {
    // 찜목록 추가
    favorites.push(animalId);
    res.send(animalId);
  } else if (req.method === "DELETE") {
    // 찜목록 삭제
    const idx = favorites.indexOf(animalId);
    favorites.splice(idx, 1);
    res.send(animalId);
  } else {
    // 해당이 없을 경우 오류 메세지
    res.status(404).send("wrong http method");
  }

  //   const animal = favorites.find((animal) => animal.id === animalId);

  //   // 동물 정보가 실제로 있을 때에만 보내주기
  //   if (animal) {
  //     res.status(200).json(animal);
  //   } else {
  //     // 뎅터가 없을 시 no data 출력
  //     res.status(404).send("no data");
}
