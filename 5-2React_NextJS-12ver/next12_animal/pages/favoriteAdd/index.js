import Card from "../../components/Card";

export default function Home({ animals }) {
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

// 잘 변하는 데이터 받아오기 (favorite id 목록)
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/favorite/animals");
  // 데이터 꺼내오기
  const data = await res.json();

  // 리턴 시 객체리턴. props 키를 넣고 객체 추가(정해진 사용방법))
  return {
    props: {
      animals: data,
    },
  };
}
