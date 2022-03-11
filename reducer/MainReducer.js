import { clearAll, storeData } from "../helpers/asyncStorage";
import { initialState } from "../MainContext";
// reducer function

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      storeData("user", action.payload.UserData);
      return { ...initialState, UserData: action.payload.UserData, LoggedIn: true }
    case 'SIGN_OUT':
      clearAll();
      return { ...initialState, UserData: null, LoggedIn: false }
    case 'ADD_TO_CART':
      return { ...initialState, cart:state.cart.push(action.payload.data) }
  }
};

export default mainReducer