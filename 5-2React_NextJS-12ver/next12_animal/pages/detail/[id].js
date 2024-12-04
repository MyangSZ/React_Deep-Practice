import FavoriteButton from "../../components/FavoriteButton";

export default function Detail({ animalData }) {
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

// 받아오는 함수 사용방법 정의하기(옵션 정해주기)
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "0" } }, // 0으로 하면 정적인 페이지로 만들어 사용
    ],
    fallback: true, //  fallback = 블리언값 받는다.
  };
}

// 애니멀 데이터 받아오기
// 잘변하지 않는 데이터 받아오기
export async function getStaticProps(context) {
  // id값 받아오기
  const animalId = context.params.id;
  const res = await fetch(`http://localhost:3000/api/animal/${animalId}`);
  // 데이터 꺼내오기
  const data = await res.json();

  // 리턴 시 객체리턴. props 키를 넣고 객체 추가(정해진 사용방법))
  return {
    props: {
      animalData: data,
    },
  };
}
