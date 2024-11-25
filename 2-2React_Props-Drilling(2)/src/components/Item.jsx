// 아이템 클릭 핸들러로 실행
// 클릭핸들러가 프롭스로 내려져 onClick을 통해서 실행

function Item({ item, clickHandler }) {
  return (
    <li className="item" onClick={clickHandler}>
      <img width={50} src={item.img} />
      <section>
        <div>{item.name}</div>
        <div>{item.price}원</div>
      </section>
    </li>
  );
}

export default Item;
