import { Sku } from '../reducers/cart'
import { AppDispatch } from '../store'

export const ADD_CART_ITEM = '@@cart/cartItemAdded'
export const REMOVE_CART_ITEM = '@@cart/cartItemRemoved'
export const CLEAR_CART = '@@cart/cartCleared'
export const PROMO_CODE_APPLIED = '@@cart/promoCodeApplied'

export const onAddItemToCart = (sku: Sku) => {
    console.log(sku)
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: ADD_CART_ITEM,
            payload: sku,
        })
    }
}

export const onRemoveItemFromCart = (sku: Sku, quantity: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: {
                sku: sku,
                quantity: quantity,
            },
        })
    }
}

export const onClearCart = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: CLEAR_CART,
        })
    }
}

export const onApplyPromoCode = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: PROMO_CODE_APPLIED,
        })
    }
}
