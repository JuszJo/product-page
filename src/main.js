import { useRef } from 'react'

import './css/main.css'

import cart from './images/icon-cart.svg'

import minus from './images/icon-minus.svg'

import plus from './images/icon-plus.svg'

import product1 from './images/image-product-1.jpg'
import product1thumb from './images/image-product-1-thumbnail.jpg'

import product2 from './images/image-product-2.jpg'
import product2thumb from './images/image-product-2-thumbnail.jpg'

import product3 from './images/image-product-3.jpg'
import product3thumb from './images/image-product-3-thumbnail.jpg'

import product4 from './images/image-product-4.jpg'
import product4thumb from './images/image-product-4-thumbnail.jpg'

import Head from './head'

const Main = (props) => {
    let value = useRef(null)
    let mainImage = useRef(null)

    function add() {
        let num = parseInt(value.current.innerHTML)
        num += 1
        value.current.innerHTML = num.toString()   
    }

    function subtract() {
        let num = parseInt(value.current.innerHTML)
        if(num > 0) {
            num -= 1
            value.current.innerHTML = num.toString()
        }
    }
    
    function addCart() {
        if(parseInt(value.current.innerHTML) > 0) {
            props.setGlobalStates((parseInt(value.current.innerHTML)), (125 * (parseInt(value.current.innerHTML))))
        }
    }

    function pic(e) {
        var key = e.target.alt

        switch (key) {
            case 'Product Thumbnail1':
                mainImage.current.src = product1

                break;

            case 'Product Thumbnail2':
                mainImage.current.src = product2

                break;

            case 'Product Thumbnail3':
                mainImage.current.src = product3

                break;

            case 'Product Thumbnail4':
                mainImage.current.src = product4

                break;

            default:

                break;
        }
    }

    return(
        <main>
            <div className='main-style'>
                <section className="image-section">
                    <div className="image-section-style">
                        <img src={product1} ref={mainImage} href="Shoe" className="product-image" />
                        <div className="product-thumbnail-section">
                            <div className="product-thumbnail light">
                                <img src={product1thumb} onClick={pic} alt="Product Thumbnail1" className='product-thumbnail-image' />
                            </div>
                            <div className="product-thumbnail light">
                                <img src={product2thumb} onClick={pic} alt="Product Thumbnail2" className='product-thumbnail-image' />
                            </div>
                            <div className="product-thumbnail light">
                                <img src={product3thumb} onClick={pic} alt="Product Thumbnail3" className='product-thumbnail-image' />
                            </div>
                            <div className="product-thumbnail light">
                                <img src={product4thumb} onClick={pic} alt="Product Thumbnail4" className='product-thumbnail-image' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="description-section">
                    <div className="description-section-style">
                        <h5 className='h5'>SNEAKER COMPANY</h5>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <article>
                            These low-profile sneakers are your perfect casual wear companion. Featuring a 
                            durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </article>
                        <div className='price'>
                            <h2>$125.00</h2>
                            <h4 className='percent'>50%</h4>
                            <h4 className='linethrough'>$250.00</h4>
                        </div>
                        <div className='footer'>
                            <div className='increment-div'>
                                <img src={minus} onClick={subtract} className='minus' />
                                <div>
                                    <h4 ref={value} className='increment-value'>0</h4>
                                </div>
                                <img src={plus} onClick={add} className='increment' />    
                            </div>
                            <div className='add light' onClick={addCart} >
                                <img src={cart} />
                                <h4>Add to Cart</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main