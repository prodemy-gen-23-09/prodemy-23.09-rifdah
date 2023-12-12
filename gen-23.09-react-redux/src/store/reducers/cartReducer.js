import { ADDTO_CART, REMOVE_FROM_CART } from "../types";

const initialState = {
  dataCart: [],
};

const findCartItemIndex = (cartItems, newItem) => {
  return cartItems.findIndex(item => item.id === newItem.id);
};
 
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTO_CART:
      const newItem = action.payload;
      const existingItemIndex = findCartItemIndex(state.dataCart, newItem);
      // tidak ditemukan dalam array
      if (existingItemIndex !== -1) { 
        // Item sudah ada di keranjang, tambahkan jumlahnya
        const updatedCart = state.dataCart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              qty: item.qty + newItem.qty,
            };
          }
          return item;
        });

        return {
          ...state,
          dataCart: updatedCart,
        };
      } else {
        // Item belum ada di keranjang, tambahkan item baru
        return {
          ...state,
          dataCart: [...state.dataCart, newItem],
        };
      }

      // return {
      //   ...state,
      //   dataCart: [...state.dataCart, action.payload],
      // };
    case REMOVE_FROM_CART:
      return {
        ...state,
        dataCart: state.dataCart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;