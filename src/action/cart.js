

export const addTocart = (product) => {
    return {
        type: 'addCart',
        payload: product,
    }
}

export const increaseCart = () => {
    return {
        type: 'increaseCart',
    }
}

export const decreaseCart = () => {
    return {
        type: 'decreaseCart',
    }
}

export const deleteCart = (cartItem) => {
    return {
        type: 'deleteCart',
        payload: cartItem,
    }
}