import { data } from "../assets/data/data";
import Card from "../components/Card";

export default function Home({ animals }) {
  console.log(animals);
  return (
    <>
      <ul>
        {data.map((el) => (
          <Card key={el.id} animal={el} />
        ))}
      </ul>
    </>
  );
}

// 잘변하지 않는 데이터 받아오기
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/animal");
  // 데이터 꺼내오기
  const data = await res.json();

  // 리턴 시 객체리턴. props 키를 넣고 객체 추가(정해진 사용방법))
  return {
    props: {
      animals: data,
    },
  };
}

// getStaticProps : 잘 변하지 않는 데이터 받아올 떄
// getStaticPaths : 잘 변하지 않는 데이터를 받아오지만, 동적라우팅 필요할때
// getServerSideProps : 잘 변하는 데이터를 받아올 때
