import { UnknownAction } from '@reduxjs/toolkit'
import {
    ADD_CART_ITEM,
    CLEAR_CART,
    PROMO_CODE_APPLIED,
    REMOVE_CART_ITEM,
} from '../actions/cart'

// What a SKU is
export interface Sku {
    id: string
    name: string
    image: string
    size: number
    price: number
    colorway: string
    skuStringID?: string
    gender: string
    brandName: string
    laces: boolean
    condition: boolean
    bestSeller: boolean
    manufacturer?: string
}

// What state it has
interface shoppingCartState {
    items: Map<Sku, number>
    tax: number
    runningTotalWithoutTax: number
}

// The initial state for a SKU
const initialState: shoppingCartState = {
    items: new Map<Sku, number>(),
    tax: 0,
    runningTotalWithoutTax: 0,
}

// The SKU reducer

/// eslint-disable-next-line
export default (
    state = initialState,
    action: UnknownAction,
): shoppingCartState => {
    switch (action.type) {
        case ADD_CART_ITEM:
            let mapQuantity = 1
            if (state.items.has(action.payload as Sku)) {
                mapQuantity += state.items.get(action.payload as Sku) ?? 0
            }
            return {
                ...state,
                items: new Map([
                    ...Array.from(state.items),
                    [
                        action.payload as Sku,
                        mapQuantity,
                    ],
                ]),
                runningTotalWithoutTax:
                    state.runningTotalWithoutTax +
                    (action.payload as Sku).price,
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                items: new Map([
                    ...Array.from(state.items),
                    [
                        action.payload as Sku,
                        state.items.get(action.payload as Sku) ?? 0 - 1,
                    ],
                ]),
                runningTotalWithoutTax:
                    state.runningTotalWithoutTax === 0
                        ? 0
                        : state.runningTotalWithoutTax -
                          (action.payload as Sku).price,
            }
        case CLEAR_CART:
            return {
                ...state,
                items: new Map<Sku, number>(),
                runningTotalWithoutTax: 0,
            }
        case PROMO_CODE_APPLIED:
            return {
                ...state,
                runningTotalWithoutTax:
                    state.runningTotalWithoutTax -
                    fetchPromoCodeDiscount(action.payload as string),
            }
        default:
            return state
    }
}

export function fetchPromoCodeDiscount(arg: string): number {
    const promoCodes = new Map<string, number>([
        ['10OFF', 10],
        ['15OFF', 15],
        ['20OFF', 20],
        ['25OFF', 25],
        ['30OFF', 30],
        ['35OFF', 35],
        ['40OFF', 40],
        ['45OFF', 45],
        ['50OFF', 50],
        ['55OFF', 55],
        ['60OFF', 60],
        ['70OFF', 70],
        ['80OFF', 80],
        ['90OFF', 90],
        ['100OFF', 100],
    ])

    if (arg in promoCodes) {
        return promoCodes.get(arg) as number
    }

    return 0.0
}
