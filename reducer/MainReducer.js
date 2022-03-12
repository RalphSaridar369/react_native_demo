import { clearAll, storeData } from "../helpers/asyncStorage";
import { initialState } from "../MainContext";
// reducer function

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      storeData("user", action.payload.UserData);
      return { ...state, UserData: action.payload.UserData, LoggedIn: true }
    case 'SIGN_OUT':
      clearAll();
      return { ...state, UserData: null, LoggedIn: false }
    case 'ADD_TO_CART':
      let cart = state.cart;
      cart.push(action.payload.data)
      return { ...state, cart:cart }
    case 'REMOVE_FROM_CART':
      let cart_products = state.cart;
      cart_products.filter((item)=>item.product.id != action.payload.id)
      console.log("car_products",cart_products)
      return { ...state, cart:state.cart.filter((item)=>item.product.id != action.payload.id) }
  }
};

export default mainReducer