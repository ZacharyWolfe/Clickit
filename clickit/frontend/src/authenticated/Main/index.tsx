import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { onAddItemToCart, onClearCart } from '../../actions/cart'
import { Sku } from '../../reducers/cart'
import './index.css'

const AuthenticatedMain = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.items)

    const sku: Sku = {
        id: '69420',
        name: 'Air Jordan 1 Retro High OG Bred Toe',
        image: 'WomensSandalWithDoubleGFrontView.png',
        size: 6,
        price: 69420,
        colorway: 'Black/White-Varsity Red',
        skuStringID: '69420',
        gender: 'Male',
        brandName: 'Gucci',
        laces: true,
        condition: true,
        bestSeller: true,
        manufacturer: 'Nike',
    }

    const sku2: Sku = {
        id: '42069',
        name: 'Nike Dunk Low Retro',
        image: 'NikeDunkLowRetro.png',
        size: 11,
        price: 42069,
        colorway: 'Black/White-Varsity Red',
        skuStringID: '69420',
        gender: 'Male',
        brandName: 'Nike',
        laces: true,
        condition: true,
        bestSeller: true,
        manufacturer: 'Nike',
    }

    const onCheckoutClick = () => {}

    return (
        <div>
            {/* eslint-disable-next-line */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <div className="navbar">
                <img
                    width={300}
                    height={300}
                    src={require('../../assets/clickit/clickitWhite.png')}
                    alt="product image"
                ></img>
                <ul className="links">
                    <li>
                        <a className="navPath" href="#">
                            Clothing
                        </a>
                    </li>
                    <li>
                        <a className="navPath" href="#">
                            Shoes
                        </a>
                    </li>
                    <li>
                        <div className="bagContainer">
                            <a className={'material-symbols-outlined'} href="#">
                                {'shopping_bag'}
                            </a>
                        </div>
                    </li>
                    <li>
                        <a className="navPath" href="#">
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
            <div className="buttonStack">
                <button
                    className="addCartItem"
                    onClick={() => dispatch(onAddItemToCart(sku))}
                >
                    <div className="addCartItemContainer">
                        <div>Add to Bag</div>
                    </div>
                </button>
            </div>
            {cart.entries &&
                Array.from(cart.entries()).map(([item, quantity]) => (
                    <div>
                        <img
                            className="img"
                            width={275}
                            height={300}
                            src={require(
                                '../../assets/shoes' +
                                    item.brandName +
                                    '/' +
                                    item.image,
                            )}
                            alt="Product Image"
                        ></img>
                    </div>
                ))}
            <div className="buttonStack">
                <button
                    className={cart.size === 0 ? 'emptyCart' : 'cart'}
                    onClick={() => dispatch(onClearCart())}
                >
                    Clear Cart
                </button>
                <button
                    className={cart.size === 0 ? 'emptyCart' : 'cart'}
                    onClick={() => dispatch(() => onCheckoutClick())}
                >
                    Checkout
                </button>
            </div>
            {cart.entries &&
                Array.from(cart.entries()).map(([item, quantity]) => (
                    <button className="sizeChartItem">
                        {item.gender} {item.size}
                    </button>
                ))}
        </div>
    )
}

export default AuthenticatedMain
