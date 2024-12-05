import Card from "@/components/Card";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/animal", {
    cache: "no-store",
  });
  // 데이터 꺼내오기
  const animals = await res.json();
  console.log(animals);
  return (
    <>
      <ul>
        {animals.map((el) => (
          <Card key={el.id} animal={el} />
        ))}
      </ul>
    </>
  );
}
