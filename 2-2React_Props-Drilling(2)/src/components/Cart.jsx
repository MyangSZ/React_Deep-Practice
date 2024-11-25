import data from "../assets/data";

function Cart({ menu, cart, setCart }) {
  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        {" "}
        메뉴 정보가 없어요!
      </div>
    );
  const allMenus = [...menu.커피, ...menu.논커피];
  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart?.length ? (
          cart.map((el) => (
            <CartItem
              key={el.id}
              item={allMenus.find((menu) => menu.id === el.id)}
              options={el.options}
              quantity={el.quantity}
              setCart={setCart}
              cart={cart}
            />
          ))
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
    </>
  );
}

function CartItem({ item, options, quantity, setCart, cart }) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {Object.keys(options).map((el) => (
          <div>
            {el} : {data.options[el][options[el]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button
        className="cart-item-delete"
        onClick={() => {
          // 삭제버튼 클릭시 아이템ID 일치여부 확인 후 일치하는 메뉴 제외 후 나머지만 남겨준다.
          // 일부만 남기는 필터메서드 사용
          // 요소 ID가 삭제하기 버튼 누를때 일치하는지 확인 후 일치하지 않는 요소들만 화면에 남긴다.
          setCart(cart.filter((el) => el.id !== item.id));
        }}
      >
        삭제
      </button>
    </li>
  );
}
export default Cart;
