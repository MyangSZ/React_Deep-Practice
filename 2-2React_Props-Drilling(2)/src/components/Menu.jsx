import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";

// 메뉴를 받아오는 코드
function Menu({ menu, cart, setCart }) {
  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        {" "}
        메뉴 정보가 없어요!
      </div>
    );

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {/* 받아온 메뉴 상태를 map메서드를 사용해 아이템을 뿌려서 렌더링 */}
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    // setModalMenu - 초기값은 null. 아이템을 렌더링 할때 사용하고 있는 아이템 값.
                    // 하나하나의 정보를 모달메뉴 상태로 넣어준다.
                    // OrderModal이 받아서 클릭 시 클릭 상품을 모달안에 표시하기 위해 사용된다.
                    setModalMenu(item);
                    // setModalOn - OrderModal을 띄울지 말지 상태 관리 변경. 메뉴 모달을 띄울지 말지 상태관리
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal
          cart={cart}
          setCart={setCart}
          modalMenu={modalMenu}
          setModalOn={setModalOn}
        />
      ) : null}
    </>
  );
}

export default Menu;
