import { initialState } from "../MainContext";
// reducer function

const mainReducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_IN':
          return {...initialState, UserData:action.payload.UserData, LoggedIn:true}    
    case 'SIGN_OUT':
        return {...initialState, UserData:null, LoggedIn:false}    
    /* if (!state.products[`item-${action.payload.id}`]) {
        return { size: (state.size += 1), products: { ...state.products, [`item-${action.payload.id}`]: { ...action.payload, quantity: 1 } } };
      } else {
        let productsCopy = { ...state.products };
        productsCopy[`item-${action.payload.id}`].quantity += 1;
        return { size: (state.size += 1), products: productsCopy };
      } */
  }
};

export default mainReducer