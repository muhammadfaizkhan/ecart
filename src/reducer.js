export const initialState = {
    cart: []
}

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0)
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart: [...state.cart, action.item]
            }

            case "REMOVE_CART":
                const index = state.cart.findIndex(
                    (cartItem) => cartItem.id === action.id
                )
                let newCart = [...state.cart];
                if( index >= 0 ){
                    newCart.splice(index, 1)
                }else{
                    //
                }
                return{
                    ...state,
                    cart: newCart
                }
            default:
                return state;
    }
}

export default reducer