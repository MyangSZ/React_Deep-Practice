import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// redux-toolkit로 변경하기

// menu
export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {}, // 상태변경이 없으므로 공백
});

// cart. 액션 타입과 액션 크리에이터 만들어지도록 리듀서 전달
export const cartSlice = createSlice({
  name: "cart",
  initialState: [], // 초기값 빈배열
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

// 스토어 만들기
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// Redux로 만들기

// Action 객체
// 장바구니 추가할 떄
// export const addToCart = (options, quantity, id) => {
//   return { type: "addToCart", payload: { options, quantity, id } };
// };

// // 장바구니에서 삭제할 떄
// export const removeFromCart = (id) => {
//   return {
//     type: "removeFromCart",
//     payload: { id },
//   };
// };

// // REducer 만들기
// // 카트 상태 관리
// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case "addToCart":
//       return [...state, action.payload];
//     case "removeFromCart":
//       return state.filter((el) => el.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// // 메뉴 상태관리
// const menuReducer = (state = data.menu, action) => {
//   return state;
// };

// // reducer 합쳐주기
// const rootReducer = combineReducers({ cartReducer, menuReducer });

// store 만들기
// export const store = legacy_createStore(rootReducer);
