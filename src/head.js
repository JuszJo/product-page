import { useRef, useState } from 'react'

import './css/head.css'

import logo from './images/logo.svg'

import cart from './images/icon-cart.svg'

import user from './images/image-avatar.png'

import product1thumb from './images/image-product-1-thumbnail.jpg'

const Head = (props) => {
    var box = useRef(null)
    var box2 = useRef(null)

    function displayCart() {
        box2.current.classList.toggle('display')

        if(props.val > 0) {
            box2.current.classList.remove('display')
            box.current.classList.toggle('display')
        }
    }

    return(
        <>
        <header>
            <nav>
                <div className='line'>
                    <div className='nav-div-left'>
                        <img src={logo} alt="Company Logo" className='logo' />
                        <ul>
                            <li className='links'><a href='#' className='links-a'>Collections</a></li>
                            <li className='links'><a href='#' className='links-a'>Men</a></li>
                            <li className='links'><a href='#' className='links-a'>Women</a></li>
                            <li className='links'><a href='#' className='links-a'>About</a></li>
                            <li className='links'><a href='#' className='links-a'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='nav-div-right'>
                        <img src={cart}  onClick={displayCart} href="Cart" className='cart' />
                        <img src={user} href="User Profile Picture" className='user' />
                    </div>

                </div>
            </nav>
        </header>
        <section>
            <div className='display-cart-wrap'>
                <div className='none' ref={box2}>
                        <h4 className='men'>Cart</h4>
                        <div className='cart-items-section'>
                            <div className='cart-item-description'>
                                <h4 className='hidden'>Your Cart Is Empty</h4>
                            </div>
                        </div>
                </div>
                <div className='none' ref={box}>
                    <h4 className='oboi'>Cart</h4>
                    <div className='cart-items-section'>
                        <div className='cart-item-image-wrap'>
                            <img src={product1thumb} />
                        </div>
                        <div className='cart-item-description'>
                            <p>Fall Limited Edition Sneakers</p>
                            <p>$125.00 x {props.val} = <strong>${props.val2}</strong></p>
                        </div>
                    </div>
                    <div className='checkout-div'>
                        <h5 className='checkout light'>Checkout</h5>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Head