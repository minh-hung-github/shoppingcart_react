

const initCart = {
    cartList: [],
    totalPrice: 0,
    quantityCurrent: 0,
    quantityTotal: 0,
}

const cartReducer = (state = initCart, action) => {
    switch (action.type) {
        case 'addCart': {
            const newCartList = [...state.cartList];
            if (state.quantityCurrent === 0) {
                return {
                    ...state,
                }
            }
            // console.log(newCartList);
            const product = action.payload;

            const productIndex = newCartList.findIndex(x => x.product.id === product.id);
            if (productIndex < 0) {
                const cartItem = { product, quantity: state.quantityCurrent };
                newCartList.push(cartItem);
            }
            else {
                newCartList[productIndex] = {
                    ...newCartList[productIndex],
                    // quantity: newCart[productIndex].quantity + 1,
                    quantity: newCartList[productIndex].quantity + state.quantityCurrent,
                }
            }

            const totalPrice = state.totalPrice + (product.salePrice * state.quantityCurrent);
            const quantityTotal = state.quantityTotal + state.quantityCurrent;
            return {
                ...state,
                cartList: newCartList,
                totalPrice: totalPrice,
                quantityCurrent: 0,
                quantityTotal: quantityTotal,
            }
        }
        case 'increaseCart': {
            const increase = state.quantityCurrent + 1;

            return {
                ...state,
                quantityCurrent: increase,
            }
        }
        case 'decreaseCart': {
            if (state.quantityCurrent === 0) return { ...state, quantityCurrent: 0, };
            const decrease = state.quantityCurrent - 1;

            return {
                ...state,
                quantityCurrent: decrease,
            }
        }
        case 'deleteCart': {
            const cartId = action.payload.product.id;

            const newCartList = [...state.cartList].filter(cart => cart.product.id !== cartId);
            const totalPrice = state.totalPrice - (action.payload.product.salePrice * action.payload.quantity);
            const quantityTotal = state.quantityTotal - action.payload.quantity;
            return {
                ...state,
                cartList: newCartList,
                totalPrice: totalPrice,
                quantityTotal: quantityTotal,
            };
        }

        default:
            return state;
    }
};

export default cartReducer;