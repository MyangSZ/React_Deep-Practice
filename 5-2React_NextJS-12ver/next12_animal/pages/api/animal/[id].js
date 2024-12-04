import { data } from "../../../assets/data/data";

export default function handler(req, res) {
  // 문자열 형태의 데이터를 숫자형태로 변경
  // 원하는 동물의 정보 가져오기
  const animalId = Number(req.query.id);
  const animal = data.find((animal) => animal.id === animalId);

  // 동물 정보가 실제로 있을 때에만 보내주기
  if (animal) {
    res.status(200).json(animal);
  } else {
    // 뎅터가 없을 시 no data 출력
    res.status(404).send("no data");
  }
}
