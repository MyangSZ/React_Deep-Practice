import FavoriteButton from "@/components/FavoriteButton";

export default async function Detail(params) {
  // id값 받아오기
  const animalId = params.id;
  const res = await fetch(`http://localhost:3000/api/animal/${animalId}`);
  // 데이터 꺼내오기
  const animalData = await res.json();
  return (
    <section className="detail">
      {/* ?넣어 데이터가 있으면 값을 가지고 나오도록 한다 */}
      <img src={animalData?.img.src} />
      <h2>
        {animalData?.name}
        <FavoriteButton animalId={animalData?.id} />
      </h2>
      <div>{animalData?.description}</div>
    </section>
  );
}
