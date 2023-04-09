import { useState } from 'react';
import './css/head.css';

import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import user from './images/image-avatar.png';
import product1thumb from './images/image-product-1-thumbnail.jpg';

const Cart = props => {
    const [isEmpty, setIsEmpty] = useState(true)

    if(isEmpty == true && props.itemAmount > 0) setIsEmpty(false);
    else if(isEmpty == false && props.itemAmount == 0) setIsEmpty(true);
    
    return (
        (isEmpty) ?
        <div className='none display' >
            <h4 className='men'>Cart</h4>
            <div className='cart-items-section'>
                <div className='cart-item-description'>
                    <h4 className='hidden'>Your Cart Is Empty</h4>
                </div>
            </div>
        </div>  :
        <div className='none display' >
            <h4 className='oboi'>Cart</h4>
            <div className='cart-items-section'>
                <div className='cart-item-image-wrap'>
                    <img alt='product thumbnail' src={product1thumb} />
                </div>
                <div className='cart-item-description'>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x {props.itemAmount} = <strong>${props.finalPrice}</strong></p>
                </div>
            </div>
            <div className='checkout-div'>
                <h5 className='checkout light'>Checkout</h5>
            </div>
        </div>
    )
}

const Head = ({itemAmount, finalPrice}) => {
    const [display, setDisplay] = useState(false);

    function renderCart() {
        setDisplay(prevState => !prevState)
    }

    return (
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
                            <img src={cart} alt="cart" onClick={renderCart} href="Cart" className='cart' />
                            <img src={user} alt="user profile" className='user' />
                        </div>

                    </div>
                </nav>
            </header>
            <section>
                <div className='display-cart-wrap'>
                    {!display ? null : <Cart display={display} itemAmount={itemAmount} finalPrice={finalPrice} />}
                </div>
            </section>
        </>
    )
}

export default Head;