import * as Types from './../constants/ActionType';

export const actAddToBasket=(product,quantity)=>{
    return{
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage=(message)=>{
    return{
        type: Types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInBasket=(product)=>{
    return{
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInBasket=(product,quantity)=>{
    return{
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
