import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// Action 객체
// 장바구니 추가할 떄
export const addToCart = (options, quantity, id) => {
  return { type: "addToCart", payload: (options, quantity, id) };
};

// 장바구니에서 삭제할 떄
export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

// REducer 만들기
// 카트 상태 관리
const carReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

// 메뉴 상태관리
const menuReducer = (state = data.menu, action) => {
  return state;
};

// reducer 합쳐주기
const rootReducer = combineReducers({ carReducer, menuReducer });

// store 만들기
export const store = legacy_createStore(rootReducer);
