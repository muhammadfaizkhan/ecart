import { StarFilled } from '@ant-design/icons'
import React, { useContext } from 'react'
import Product from '../Product/Product'
import { useStateValue } from '../Product/stateProvider'
import Products from '../Products/Products'
import Subtotal from '../Subtotal/Subtotal'
import Title from '../Title/Title'
import './Cart.css'
import CartProduct from './CartProduct'



const Cart = () => {
    const [{cart}, dispatch] = useStateValue();
    console.log(cart)
    return (
        <div className="app_cart">
            <div className="cart_left">
                <h1 className="cart_heading">Your Ecart Items</h1>
                <div className="product_details_middle">
                    {cart.map(item => (
                        <CartProduct
                            productName={item.productName}
                            img={item.img}
                            ratings={item.ratings}
                            price={item.price}
                        
                        />
                    ))}
                    
                </div>
            </div>
            
            <div className="cart_right">
                <h1 className="cart_heading2">Checkout Corner</h1>
                <div className="total">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Cart
