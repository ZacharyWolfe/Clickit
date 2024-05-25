import React, { useState } from 'react'
import { 
    useAppDispatch, 
    useAppSelector 
} from '../../store'
import { onAddItemToCart, onApplyPromoCode, onClearCart } from '../../actions/cart'
import { Sku } from '../../reducers/cart'

const UnauthenticatedMain = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.items)
    const handleMemberClick = () => {
        onApplyPromoCode('15OFF')
    }

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

    

    return (
        <div className='outerdiv'>
            {/* eslint-disable-next-line */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <div className='topnavbar'>
                <div className='couponContainer'>
                    <div className='coupon'>
                        become a 
                    </div>
                    <a className='couponMember' href='/signup' onClick={handleMemberClick}>
                        member  
                    </a>
                    <div className='coupon'>
                        today and get
                    </div>
                    <div className='couponPercentage'>
                        15% off
                    </div>
                    <div className='coupon'>
                        your first order
                    </div>
                </div>
                <div className='topNavbarSnackContainer'>
                    <a className='topNavbarSnack' href='/signin'>
                        sign in
                    </a>
                    <div className='topNavbarSnack'>
                        |
                    </div>
                    <a className='topNavbarSnack' href='/signup'>
                        sign up
                    </a>
                    <div className='topNavbarSnack'>
                        |
                    </div>
                    <a className='topNavbarSnack' href='stores'>
                        find a store
                    </a>
                </div>
            </div>
            <div className="navbar">
                <a className='logo' href='/'>
                    <img
                        src={require('../../assets/clickit/clickit512x512.png')}
                        alt="clickit logo"
                    ></img>
                </a>
                <div className='navbarSnackContainer'>
                    <div className='navbarSnack'>
                        Men's
                    </div>
                    <div className='navbarSnack'>
                        Women's
                    </div>
                    <div className='navbarSnack'>
                        Unisex
                    </div>
                </div>
                <ul className="links">
                    <li className="linksContainer">
                        <a className="navPath" href="#">
                            Clothing
                        </a>
                        <a className={'material-symbols-outlined'} href='#'>
                            {'apparel'}
                        </a>
                    </li>
                    <li className="linksContainer">
                        <a className="navPath" href="#">
                            Shoes
                        </a>
                        <a className={'material-symbols-outlined'} href='#'>
                            {'steps'}
                        </a>
                    </li>
                    <li className="linksContainer">
                        <a className='navPath'>
                            Bag
                        </a>
                        <a className={'material-symbols-outlined'} href="#">
                            {'shopping_bag'}
                        </a>
                    </li>
                    <li className="linksContainer">
                    </li>
                </ul>
            </div>
            <div className='bottomnavbar'>
            </div>
            <div className="buttonStack">
                <button
                    className="addCartItem"
                    onClick={() => {dispatch(onAddItemToCart(sku)); console.log(cart)}}
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
                                '../../assets/shoes/' + item.brandName + '/' + item.image,
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

export default UnauthenticatedMain