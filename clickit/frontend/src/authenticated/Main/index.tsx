import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { onAddItemToCart, onClearCart } from '../../actions/cart'
import { Sku } from '../../reducers/cart'

const AuthenticatedMain = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.items)
    const user = useAppSelector((state) => state.user.user)

    console.log(user)

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
        <div className='outerdiv'>
            {/* eslint-disable-next-line */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <div className='topnavbar'>
                <div className='signIn' onClick={() => {}}>
                    sign in
                </div>
                <div>
                    |
                </div>
                <div className='signUp' onClick={() => {}}>
                    sign up
                </div>
                <div>
                    |
                </div>
                <div className='help' onClick={() => {}}>
                    find a store
                </div>
            </div>
            <div className="navbar">
                <a className='logo' href='/'>
                    <img
                        src={require('../../assets/clickit/clickitWhite.png')}
                        alt="clickit logo"
                    ></img>
                </a>
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
                        <img className={'userPhoto'} src={user?.photoURL ? user.photoURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} alt='userPhoto'>
                        </img>
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

export default AuthenticatedMain
