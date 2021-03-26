import { StarFilled } from '@ant-design/icons'
import React from 'react'
import { useStateValue } from '../Product/stateProvider';
import './Cart.css'


const CartProduct = ({price, productName, ratings, img, id}) => {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_CART",
            id: id,
        })
    }
    return (
            <div className="cart_product">
                <div className="cart_product_img">
                    <img src={img}/>
                </div>
                <div className="cart_product_heading">
                    <h1 className="product_heading">{productName}</h1>                            
                    <h5 className="price_heading">${price}</h5>
                </div>
                <div className="product_ratings">
                    {Array(ratings)
                    .fill()
                    .map(( _ , i) => 
                    ( <StarFilled /> 
                    ))}
                </div>
                <div className="cart_product_buttons">
                    <button className="btn-remove" onClick={removeFromCart}>Remove Item</button>
                </div>
            </div>
    )
}

export default CartProduct
